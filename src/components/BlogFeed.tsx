"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface BlogPost {
  title: string;
  link: string;
  slug: string;
  summary: string;
  published: string;
  author: string;
}

export default function BlogFeed() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('BlogFeed: Starting to fetch posts...');
    fetch('/api/blog-feed')
      .then(res => {
        console.log('BlogFeed: Response status:', res.status);
        return res.json();
      })
      .then(data => {
        console.log('BlogFeed: Received data:', data);
        console.log('BlogFeed: Posts count:', data.posts?.length || 0);
        setPosts(data.posts || []);
        setLoading(false);
      })
      .catch(err => {
        console.error('BlogFeed: Error fetching blog posts:', err);
        setError('Failed to load blog posts');
        setLoading(false);
      });
  }, []);

  console.log('BlogFeed: Current posts state:', posts.length);

  if (loading) return <div className="text-center text-gray-400 py-8">Loading blog posts…</div>;
  if (error) return <div className="text-center text-red-500 py-8">{error}</div>;

  return (
    <div className="flex gap-6 overflow-x-auto pb-4">
      {posts.map((post, i) => (
        <div
          key={i}
          className="min-w-[300px] bg-white rounded-xl shadow p-6 flex flex-col justify-between hover:scale-105 transition"
        >
          <div className="text-xs text-slate-400 mb-1">{new Date(post.published).toLocaleDateString()} • {post.author}</div>
          <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3" dangerouslySetInnerHTML={{ __html: post.summary }} />
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