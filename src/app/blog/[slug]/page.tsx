import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/blogger';
import BlogPostClient from './BlogPostClient';

type Props = { params: Promise<{ slug: string }> };

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  if (!slug || typeof slug !== 'string') notFound();

  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return <BlogPostClient post={post} />;
}
