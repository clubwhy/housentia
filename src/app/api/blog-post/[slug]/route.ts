import { NextRequest, NextResponse } from 'next/server';
import { 
  getBloggerConfig, 
  transformBloggerPost, 
  getCacheHeaders, 
  createErrorResponse,
  extractSlugFromUrl
} from '@/lib/blogger';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    console.log('Fetching blog post with slug:', slug);
    
    // Blogger 설정 가져오기
    const config = getBloggerConfig();
    
    // 먼저 모든 포스트를 가져와서 slug로 찾기
    const url = `https://www.googleapis.com/blogger/v3/blogs/${config.blogId}/posts?key=${config.apiKey}&maxResults=50&status=LIVE`;
    
    console.log('Making request to Blogger API v3...');
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
      },
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Blogger API error:', response.status, errorText);
      return NextResponse.json(
        createErrorResponse(`Blogger API error: ${response.status}`, response.status)
      );
    }
    
    const data = await response.json();
    console.log('Blogger API v3 response received');
    
    // slug로 포스트 찾기
    const post = data.items?.find((post: any) => {
      const postSlug = extractSlugFromUrl(post.url);
      return postSlug === slug;
    });
    
    if (!post) {
      console.log('Post not found for slug:', slug);
      return NextResponse.json(
        createErrorResponse('Blog post not found', 404)
      );
    }
    
    const processedPost = transformBloggerPost(post);
    console.log('Found and processed post:', processedPost.title);
    
    // 응답에 캐시 헤더 추가 (10분 캐시)
    const headers = getCacheHeaders(600);
    
    return NextResponse.json({ post: processedPost }, { headers });
    
  } catch (error) {
    console.error('Error fetching blog post:', error);
    
    // 설정 오류인지 확인
    if (error instanceof Error && error.message.includes('environment variable')) {
      return NextResponse.json(
        createErrorResponse(error.message, 500)
      );
    }
    
    // 네트워크 오류인지 API 오류인지 구분
    if (error instanceof TypeError && error.message.includes('fetch')) {
      return NextResponse.json(
        createErrorResponse('Network error - unable to connect to Blogger API', 503)
      );
    }
    
    return NextResponse.json(
      createErrorResponse('Internal server error while fetching blog post', 500)
    );
  }
} 