// Blogger API 유틸리티 함수들

export interface BloggerConfig {
  apiKey: string;
  blogId: string;
  cacheDuration?: number;
  maxPosts?: number;
}

export interface BloggerPost {
  id: string;
  title: string;
  link: string;
  slug: string;
  summary: string;
  content: string;
  published: string;
  updated: string;
  author: string;
  labels: string[];
  featuredImage?: string | null;
  commentCount: number;
  blogId: string;
  selfLink: string;
}

/**
 * 환경 변수에서 Blogger 설정을 가져옵니다.
 */
export function getBloggerConfig(): BloggerConfig {
  const apiKey = process.env.BLOGGER_API_KEY;
  const blogId = process.env.BLOGGER_BLOG_ID;
  
  if (!apiKey) {
    throw new Error('BLOGGER_API_KEY environment variable is not set');
  }
  
  if (!blogId) {
    throw new Error('BLOGGER_BLOG_ID environment variable is not set');
  }
  
  return {
    apiKey,
    blogId,
    cacheDuration: parseInt(process.env.BLOGGER_CACHE_DURATION || '300'),
    maxPosts: parseInt(process.env.BLOGGER_MAX_POSTS || '30'),
  };
}

/**
 * HTML 태그를 제거하여 순수 텍스트를 추출합니다.
 */
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim();
}

/**
 * Blogger URL에서 slug를 추출합니다.
 */
export function extractSlugFromUrl(url: string): string {
  const urlMatch = url.match(/\/(\d{4})\/(\d{2})\/([^\/]+)\.html$/);
  return urlMatch ? urlMatch[3] : '';
}

/**
 * 콘텐츠에서 첫 번째 이미지 URL을 찾습니다.
 */
export function extractFeaturedImage(content: string): string | null {
  const imageMatch = content.match(/<img[^>]+src="([^"]+)"/);
  return imageMatch ? imageMatch[1] : null;
}

/**
 * Blogger API v3 응답을 내부 포스트 형식으로 변환합니다.
 */
export function transformBloggerPost(post: any): BloggerPost {
  const slug = extractSlugFromUrl(post.url);
  const featuredImage = extractFeaturedImage(post.content);
  
  return {
    id: post.id,
    title: post.title,
    link: post.url,
    slug,
    summary: stripHtml(post.content.substring(0, 200)) + '...',
    content: post.content,
    published: post.published,
    updated: post.updated,
    author: post.author?.displayName || 'Housentia',
    labels: post.labels || [],
    featuredImage,
    commentCount: post.replies?.totalItems || 0,
    blogId: post.blog?.id,
    selfLink: post.selfLink,
  };
}

/**
 * 캐시 헤더를 생성합니다.
 */
export function getCacheHeaders(duration: number = 300): Record<string, string> {
  return {
    'Cache-Control': `public, s-maxage=${duration}, stale-while-revalidate=${duration * 2}`,
  };
}

/**
 * 에러 응답을 생성합니다.
 */
export function createErrorResponse(message: string, status: number = 500) {
  return {
    error: message,
    status,
  };
} 