"use client";
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface BlogPost {
  title: string;
  link: string;
  slug: string;
  summary: string;
  content: string;
  published: string;
  author: string;
  labels: string[];
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/blog-feed')
      .then(res => res.json())
      .then(data => {
        const found = data.posts.find((p: BlogPost) => p.slug === slug);
        setPost(found || null);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load blog post');
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return <main className="max-w-3xl mx-auto px-4 py-10"><div className="text-center text-gray-400 py-12">Loading…</div></main>;
  }
  if (error) {
    return <main className="max-w-3xl mx-auto px-4 py-10"><div className="text-center text-red-500 py-12">{error}</div></main>;
  }
  if (!post) {
    return <main className="max-w-3xl mx-auto px-4 py-10"><div className="text-center text-gray-500 py-12">Blog post not found.</div></main>;
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <div className="flex items-center text-sm text-gray-500 mb-3">
        <span>{new Date(post.published).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}</span>
        <span className="mx-2">•</span>
        <span>{post.author}</span>
      </div>
      <div
        className="post-body text-gray-700 leading-relaxed mb-6"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <button
        onClick={() => router.back()}
        className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors border border-primary rounded px-4 py-2 mt-4"
      >
        ← Back
      </button>
    </main>
  );
} 