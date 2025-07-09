import { NextResponse } from 'next/server';

export async function GET() {
  try {
    console.log('Fetching blog posts from Blogger...');
    // max-results 파라미터 추가
    const response = await fetch('https://housentia.blogspot.com/feeds/posts/default?alt=json&max-results=30');
    const data = await response.json();
    
    console.log('Raw data received:', JSON.stringify(data, null, 2).substring(0, 500) + '...');
    console.log('Feed entries count:', data.feed?.entry?.length || 0);
    
    // 모든 라벨 수집
    const allLabels = new Set<string>();
    
    const posts = data.feed.entry?.slice(0, 30).map((entry: any) => {
      const link = entry.link.find((l: any) => l.rel === 'alternate').href;
      // Extract slug from the Blogger post URL (after last '/')
      const slugMatch = link.match(/\/([^\/]+)\.html$/);
      const slug = slugMatch ? slugMatch[1] : '';
      
      const labels = entry.category?.map((cat: any) => cat.term) || [];
      labels.forEach((label: string) => allLabels.add(label));
      
      const post = {
        title: entry.title.$t,
        link,
        slug,
        summary: entry.summary?.$t || '',
        content: entry.content?.$t || entry.summary?.$t || '',
        published: entry.published.$t,
        author: entry.author?.[0]?.name?.$t || 'Housentia',
        labels: labels,
      };
      
      console.log('Processed post:', post.title, 'Labels:', post.labels);
      return post;
    }) || [];
    
    console.log('Total posts processed:', posts.length);
    console.log('All available labels:', Array.from(allLabels));
    
    return NextResponse.json({ posts });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json({ posts: [] }, { status: 500 });
  }
} 