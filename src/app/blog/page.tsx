"use client";
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import PageHero from '@/components/PageHero';
import { Suspense } from 'react';

interface BlogPost {
  title: string;
  link: string;
  summary: string;
  content: string;
  published: string;
  author: string;
  labels: string[];
}

const LABELS = [
  "Smart Financing Tips",
  "Home Maintenance Guides",
  "Interior & Style Trends",
  "DIY & Gardening Tips",
  "News & Regulations",
];

// 1. useSearchParams를 사용하는 부분을 별도 컴포넌트로 분리
function ActualBlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const getLabelFromParams = () => {
    if (!searchParams) return LABELS[0];
    const param = searchParams.get('label');
    return param ? decodeURIComponent(param) : LABELS[0];
  };
  const [selectedLabel, setSelectedLabel] = useState<string>(getLabelFromParams());

  useEffect(() => {
    setSelectedLabel(getLabelFromParams());
    // eslint-disable-next-line
  }, [searchParams]);

  useEffect(() => {
    fetch('/api/blog-feed')
      .then(res => res.json())
      .then(data => {
        setPosts(data.posts);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load blog posts');
        setLoading(false);
      });
  }, []);

  const filteredPosts = posts.filter(post =>
    post.labels && post.labels.includes(selectedLabel)
  );

  // 라벨별 hero/설명 텍스트 매핑
  const HERO_MAP: Record<string, { title: string; description: string }> = {
    'Smart Financing Tips': {
      title: 'Housentia Blog',
      description: 'Discover smart home upgrades, DIY tips, and financing insights to help you build a better living space.',
    },
    'Home Maintenance Guides': {
      title: 'Home Maintenance Guides',
      description: 'Expert tips and checklists for keeping your home in top shape, from seasonal chores to essential repairs.',
    },
    'Interior & Style Trends': {
      title: 'Interior & Style Trends',
      description: 'Stay inspired with the latest interior design ideas, color palettes, and style trends for every room.',
    },
    'DIY & Gardening Tips': {
      title: 'DIY & Gardening Tips',
      description: 'Step-by-step guides and creative ideas for your next DIY project or garden upgrade.',
    },
    'News & Regulations': {
      title: 'News & Regulations',
      description: 'Stay up to date on home-related news, policy changes, and important regulations that affect homeowners.',
    },
  };

  const showHero = HERO_MAP[selectedLabel] !== undefined;
  const heroTitle = HERO_MAP[selectedLabel]?.title || 'Housentia Blog';
  const heroDesc = HERO_MAP[selectedLabel]?.description || 'Discover smart home upgrades, DIY tips, and financing insights to help you build a better living space.';

  return (
    <>
      {showHero ? (
        <>
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white w-full">
            <div className="px-6 py-12 text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{heroTitle}</h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                {heroDesc}
              </p>
            </div>
          </div>
          {/* Breadcrumb Bar */}
          <div className="bg-white border-b">
            <div className="max-w-4xl mx-auto px-4 py-4">
              <nav className="flex" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-4">
                  <li>
                    <a href="/" className="text-gray-500 hover:text-gray-700">Home</a>
                  </li>
                  <li>
                    <span className="text-gray-400">&gt;</span>
                  </li>
                  <li>
                    <a href="/blog" className="text-gray-500 hover:text-gray-700">Blog</a>
                  </li>
                  <li>
                    <span className="text-gray-400">&gt;</span>
                  </li>
                  <li>
                    <span className="text-gray-900 font-medium">{selectedLabel}</span>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </>
      ) : null}
      <main className="max-w-4xl mx-auto px-4 py-10">
        {!showHero && (
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Housentia Blog</h1>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Discover smart home upgrades, DIY tips, and financing insights to help you build a better living space.
            </p>
          </div>
        )}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {LABELS.map(label => (
            <button
              key={label}
              className={`px-4 py-2 rounded-full font-semibold border transition ${
                selectedLabel === label
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-primary border-primary hover:bg-primary hover:text-white'
              }`}
              onClick={() => setSelectedLabel(label)}
            >
              {label}
            </button>
          ))}
        </div>
        {loading ? (
          <div className="text-center text-gray-400 py-12">Loading blog posts...</div>
        ) : error ? (
          <div className="text-center text-red-500 py-12">{error}</div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center text-gray-500 py-12">No blog posts for this category.</div>
        ) : (
          <div className="grid gap-8">
            {filteredPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
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
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors"
                >
                  Read Full Article
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </article>
            ))}
          </div>
        )}
      </main>
    </>
  );
}

// 2. BlogPage에서 Suspense로 감싸기
export default function BlogPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ActualBlogPage />
    </Suspense>
  );
} 