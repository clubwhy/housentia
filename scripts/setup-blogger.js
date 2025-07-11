#!/usr/bin/env node

/**
 * Blogger API 설정 도우미 스크립트
 * 
 * 사용법:
 * node scripts/setup-blogger.js
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

async function setupBlogger() {
  console.log('🚀 Blogger API v3 설정 도우미\n');
  
  console.log('1️⃣  Google Cloud Console에서 Blogger API를 활성화하세요:');
  console.log('   https://console.cloud.google.com/apis/library/blogger.googleapis.com\n');
  
  console.log('2️⃣  API 키를 생성하세요:');
  console.log('   https://console.cloud.google.com/apis/credentials\n');
  
  console.log('3️⃣  블로그 ID를 찾으세요:');
  console.log('   방법 1: 블로그 URL에서 확인');
  console.log('   방법 2: API 호출로 확인: https://www.googleapis.com/blogger/v3/blogs/byurl?url=YOUR_BLOG_URL&key=YOUR_API_KEY\n');
  
  const apiKey = await question('📝 Blogger API 키를 입력하세요: ');
  const blogId = await question('📝 블로그 ID를 입력하세요: ');
  
  if (!apiKey || !blogId) {
    console.log('❌ API 키와 블로그 ID는 필수입니다.');
    rl.close();
    return;
  }
  
  const envContent = `# Blogger API Configuration
# Google Cloud Console에서 Blogger API v3를 활성화하고 API 키를 생성하세요
# https://console.cloud.google.com/apis/library/blogger.googleapis.com

# Blogger API 키 (필수)
BLOGGER_API_KEY=${apiKey}

# Blogger 블로그 ID (필수)
# 블로그 URL에서 찾을 수 있습니다: https://housentia.blogspot.com/
# 또는 Blogger API를 통해 확인할 수 있습니다
BLOGGER_BLOG_ID=${blogId}

# 추가 설정 (선택사항)
# 캐시 시간 (초) - 기본값: 300초 (5분)
BLOGGER_CACHE_DURATION=300

# 최대 포스트 수 - 기본값: 30
BLOGGER_MAX_POSTS=30
`;
  
  const envPath = path.join(process.cwd(), '.env.local');
  
  try {
    fs.writeFileSync(envPath, envContent);
    console.log('\n✅ .env.local 파일이 생성되었습니다!');
    console.log('📍 파일 위치:', envPath);
    console.log('\n🔧 다음 단계:');
    console.log('   1. 개발 서버를 재시작하세요: npm run dev');
    console.log('   2. 블로그 피드가 정상적으로 로드되는지 확인하세요');
    console.log('   3. 문제가 있다면 브라우저 개발자 도구의 콘솔을 확인하세요');
  } catch (error) {
    console.error('❌ .env.local 파일 생성 중 오류가 발생했습니다:', error.message);
  }
  
  rl.close();
}

setupBlogger().catch(console.error); 