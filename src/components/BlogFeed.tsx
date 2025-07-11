"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { BloggerPost } from '@/lib/blogger';

export default function BlogFeed() {
  const [posts, setPosts] = useState<BloggerPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('BlogFeed: Starting to fetch posts from Blogger API v3...');
    
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blog-feed');
        console.log('BlogFeed: Response status:', response.status);
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('BlogFeed: Received data:', data);
        console.log('BlogFeed: Posts count:', data.posts?.length || 0);
        
        if (data.error) {
          throw new Error(data.error);
        }
        
        setPosts(data.posts || []);
        setError(null);
      } catch (err) {
        console.error('BlogFeed: Error fetching blog posts:', err);
        setError(err instanceof Error ? err.message : 'Failed to load blog posts');
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  console.log('BlogFeed: Current posts state:', posts.length);

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        <p className="text-gray-400 mt-2">Loading blog posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <div className="text-red-500 mb-2">⚠️</div>
        <p className="text-red-500 mb-2">{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="text-primary hover:text-accent underline"
        >
          Try again
        </button>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400">No blog posts available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="flex gap-6 overflow-x-auto pb-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="min-w-[300px] bg-white rounded-xl shadow p-6 flex flex-col justify-between hover:scale-105 transition"
        >
          <div className="text-xs text-slate-400 mb-1">
            {new Date(post.published).toLocaleDateString()} • {post.author}
            {post.commentCount > 0 && (
              <span className="ml-2">💬 {post.commentCount}</span>
            )}
          </div>
          
          {post.featuredImage && (
            <img 
              src={post.featuredImage} 
              alt={post.title}
              className="w-full h-32 object-cover rounded-lg mb-3"
            />
          )}
          
          <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
            {post.summary}
          </p>
          
          {post.labels.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-3">
              {post.labels.slice(0, 3).map((label, index) => (
                <span 
                  key={index}
                  className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                >
                  {label}
                </span>
              ))}
            </div>
          )}
          
          <Link
            href={`/blog/${post.slug}`}
            className="text-primary font-medium text-sm hover:text-accent hover:underline mt-auto"
          >
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
} 