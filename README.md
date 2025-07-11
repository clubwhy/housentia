This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Blogger API Setup

This project uses Blogger API v3 to fetch blog posts. You need to set up the following:

#### Step 1: Enable Blogger API
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Blogger API v3: https://console.cloud.google.com/apis/library/blogger.googleapis.com

#### Step 2: Create API Key
1. Go to [Credentials](https://console.cloud.google.com/apis/credentials)
2. Click "Create Credentials" → "API Key"
3. Copy the generated API key

#### Step 3: Find Your Blog ID
You can find your blog ID in several ways:
- From your blog URL: `https://housentia.blogspot.com/` → Check the source or use Blogger API
- Or use this API call: `https://www.googleapis.com/blogger/v3/blogs/byurl?url=https://housentia.blogspot.com/&key=YOUR_API_KEY`

#### Step 4: Set Environment Variables
Create a `.env.local` file in the root directory:

```env
# Blogger API Configuration
BLOGGER_API_KEY=your_blogger_api_key_here
BLOGGER_BLOG_ID=your_blog_id_here

# Optional settings
BLOGGER_CACHE_DURATION=300
BLOGGER_MAX_POSTS=30
```

### 3. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Blog Integration

The blog feed is powered by Blogger API v3, which provides:
- ✅ Stable authentication with API keys
- ✅ Rich metadata (comments, images, labels)
- ✅ Proper error handling
- ✅ Caching for better performance
- ✅ Rate limiting support

### API Endpoints

- `GET /api/blog-feed` - Fetches latest blog posts from Blogger
- `GET /blog/[slug]` - Individual blog post pages

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Environment Variables for Production

When deploying to Vercel or other platforms, make sure to set the environment variables:

```env
BLOGGER_API_KEY=your_production_api_key
BLOGGER_BLOG_ID=your_blog_id
```
