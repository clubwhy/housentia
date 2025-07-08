import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://housentia.blogspot.com/feeds/posts/default?alt=json');
    const data = await response.json();
    
    const posts = data.feed.entry?.slice(0, 30).map((entry: any) => {
      const link = entry.link.find((l: any) => l.rel === 'alternate').href;
      // Extract slug from the Blogger post URL (after last '/')
      const slugMatch = link.match(/\/([^\/]+)\.html$/);
      const slug = slugMatch ? slugMatch[1] : '';
      return {
        title: entry.title.$t,
        link,
        slug,
        summary: entry.summary?.$t || '',
        content: entry.content?.$t || entry.summary?.$t || '',
        published: entry.published.$t,
        author: entry.author?.[0]?.name?.$t || 'Housentia',
        labels: entry.category?.map((cat: any) => cat.term) || [],
      };
    }) || [];
    
    return NextResponse.json({ posts });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json({ posts: [] }, { status: 500 });
  }
} 