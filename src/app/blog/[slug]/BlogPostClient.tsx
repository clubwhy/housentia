'use client';

import { useRouter } from 'next/navigation';
import { BloggerPost } from '@/lib/blogger';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema } from '@/components/StructuredData';

export default function BlogPostClient({ post }: { post: BloggerPost }) {
  const router = useRouter();
  const postUrl = `https://housentia.com/blog/${post.slug}`;
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Blog', href: '/blog' }, { label: post.title }],
    'https://housentia.com',
    postUrl
  );
  const articleSchema = buildArticleSchema({
    headline: post.title,
    description: post.summary || post.title,
    url: postUrl,
    datePublished: post.published,
    dateModified: post.updated,
    image: post.featuredImage || undefined,
  });

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <StructuredData data={[breadcrumbSchema, articleSchema]} />
      {post.featuredImage && (
        <div className="mb-6">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
      )}

      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span>
            {new Date(post.published).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
          <span className="mx-2">•</span>
          <span>{post.author}</span>
          {post.commentCount > 0 && (
            <>
              <span className="mx-2">•</span>
              <span>{post.commentCount} comments</span>
            </>
          )}
        </div>
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

      <article className="prose prose-lg max-w-none">
        <div
          className="post-body text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      <footer className="mt-8 pt-6 border-t border-gray-200">
        <p className="text-xs text-gray-500 mb-4">
          This content is provided for general educational purposes only and does not constitute financial or mortgage advice.
        </p>
        <div className="flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors"
          >
            Back to Blog
          </button>
          <div className="text-sm text-gray-500">
            Last updated: {new Date(post.updated).toLocaleDateString()}
          </div>
        </div>
      </footer>
    </main>
  );
}
