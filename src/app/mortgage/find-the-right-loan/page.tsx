"use client";
import PageHero from '@/components/PageHero';
import GeminiChatBot from '@/components/GeminiChatBot';

export default function FindTheRightLoanPage() {
  return (
    <div className="min-h-screen w-full relative bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#00b89f] overflow-x-hidden">
      {/* 은은한 SVG 패턴 (점선 다이아몬드 + 컬러 원) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg width="100%" height="100%" style={{position: 'absolute', inset: 0}}>
          {/* 점선 다이아몬드 */}
          <g stroke="#fff" strokeDasharray="4 4" strokeWidth="1.5" opacity="0.13">
            <polygon points="180,80 230,130 180,180 130,130" />
            <polygon points="500,200 570,270 500,340 430,270" />
            <polygon points="900,60 950,110 900,160 850,110" />
          </g>
          {/* 컬러 원 */}
          <circle cx="160" cy="120" r="10" fill="#07c3ff" opacity="0.7" />
          <circle cx="600" cy="260" r="13" fill="#00b89f" opacity="0.7" />
          <circle cx="950" cy="120" r="8" fill="#ffc400" opacity="0.7" />
          <circle cx="300" cy="350" r="10" fill="#ff3b3b" opacity="0.7" />
        </svg>
      </div>
      <PageHero 
        title="Find the Right Loan"
        breadcrumbs={[{ label: 'Mortgage', href: '/mortgage' }, { label: 'Find the Right Loan' }]}
      />
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-3 px-4 -mt-6 mb-2">
        <img src="/habi.png" alt="Ask Habi Logo" className="w-24 h-14 rounded-xl bg-white shadow-md object-contain" />
        <span className="text-lg md:text-xl font-bold text-white drop-shadow">Say Hello to Smarter Home Buying</span>
      </div>
      {/* 오른쪽 하단 워터마크 로고 (더 잘 보이게, 클릭 시 이동) */}
      <a
        href="/mortgage/find-the-right-loan"
        style={{
          position: 'fixed',
          right: '3vw',
          bottom: '3vw',
          zIndex: 10,
          opacity: 0.35,
          filter: 'brightness(2.5) grayscale(0.4) drop-shadow(0 0 16px #fff)',
          pointerEvents: 'auto',
          width: '190px',
          height: 'auto',
          background: 'rgba(255,255,255,0.13)',
          borderRadius: '22px',
          padding: '10px',
          transition: 'opacity 0.2s',
        }}
        title="Go to Ask Habi chatbot"
      >
        <img
          src="/habi.png"
          alt="Ask Habi Logo Watermark"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </a>
      <main className="relative max-w-4xl mx-auto px-4 pt-2 pb-6 font-sans text-[17px] text-gray-100 shadow-2xl rounded-2xl overflow-hidden z-10" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7, background: 'transparent' }}>
        {/* 상단 로고/워딩은 Hero 아래로 이동 */}
        <GeminiChatBot />
        {/* Content goes here */}
      </main>
    </div>
  );
} 