import { NextResponse } from 'next/server';
import { 
  getBloggerConfig, 
  transformBloggerPost, 
  getCacheHeaders, 
  createErrorResponse 
} from '@/lib/blogger';

// Blogger API v3를 사용한 개선된 블로그 피드 API
export async function GET() {
  try {
    console.log('Fetching blog posts from Blogger API v3...');
    
    // Blogger 설정 가져오기
    const config = getBloggerConfig();
    
    // Blogger API v3 엔드포인트 사용
    const url = `https://www.googleapis.com/blogger/v3/blogs/${config.blogId}/posts?key=${config.apiKey}&maxResults=${config.maxPosts}&status=LIVE`;
    
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
    console.log('Total posts available:', data.items?.length || 0);
    
    // Blogger API v3 응답 구조에 맞게 데이터 변환
    const posts = data.items?.map(transformBloggerPost) || [];
    
    console.log('Total posts processed:', posts.length);
    
    // 응답에 캐시 헤더 추가
    const headers = getCacheHeaders(config.cacheDuration);
    
    return NextResponse.json({ posts }, { headers });
    
  } catch (error) {
    console.error('Error fetching blog posts from Blogger API v3:', error);
    
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
      createErrorResponse('Internal server error while fetching blog posts', 500)
    );
  }
} 