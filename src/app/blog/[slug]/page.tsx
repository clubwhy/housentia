"use client";
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { BloggerPost } from '@/lib/blogger';

export default function BlogPostPage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;
  const router = useRouter();
  const [post, setPost] = useState<BloggerPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug || typeof slug !== 'string') return;

    const fetchPost = async () => {
      try {
        console.log('Fetching blog post with slug:', slug);
        const response = await fetch(`/api/blog-post/${slug}`);
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.error) {
          throw new Error(data.error);
        }
        
        setPost(data.post);
        setError(null);
      } catch (err) {
        console.error('Error fetching blog post:', err);
        setError(err instanceof Error ? err.message : 'Failed to load blog post');
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <main className="max-w-3xl mx-auto px-4 py-10">
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <p className="text-gray-400 mt-2">Loading blog post...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="max-w-3xl mx-auto px-4 py-10">
        <div className="text-center py-12">
          <div className="text-red-500 mb-2">⚠️</div>
          <p className="text-red-500 mb-2">{error}</p>
          <button 
            onClick={() => router.back()} 
            className="text-primary hover:text-accent underline"
          >
            Go back
          </button>
        </div>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="max-w-3xl mx-auto px-4 py-10">
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4">Blog post not found.</p>
          <button 
            onClick={() => router.back()} 
            className="text-primary hover:text-accent underline"
          >
            Go back
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      {/* Featured Image */}
      {post.featuredImage && (
        <div className="mb-6">
          <img 
            src={post.featuredImage} 
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
      )}

      {/* Post Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
        
        <div className="flex items-center text-sm text-gray-500 mb-4">
        <span>{new Date(post.published).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}</span>
        <span className="mx-2">•</span>
        <span>{post.author}</span>
          {post.commentCount > 0 && (
            <>
              <span className="mx-2">•</span>
              <span>💬 {post.commentCount} comments</span>
            </>
          )}
        </div>

        {/* Labels/Tags */}
        {post.labels.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.labels.map((label, index) => (
              <span 
                key={index}
                className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
              >
                {label}
              </span>
            ))}
      </div>
        )}
      </header>

      {/* Post Content */}
      <article className="prose prose-lg max-w-none">
      <div
          className="post-body text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      </article>

      {/* Footer */}
      <footer className="mt-8 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between">
      <button
        onClick={() => router.back()}
            className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors"
      >
            ← Back to Blog
      </button>
          
          <div className="text-sm text-gray-500">
            Last updated: {new Date(post.updated).toLocaleDateString()}
          </div>
        </div>
      </footer>
    </main>
  );
} 