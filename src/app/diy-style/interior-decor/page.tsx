"use client";
import Link from 'next/link';
import { HiHome, HiChevronRight } from 'react-icons/hi';

export default function InteriorDecorIdeasPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#f5f9fc] border-b border-gray-200 py-8 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 font-sans mb-2 md:mb-0">Interior Decor Ideas</h1>
          <nav className="flex items-center text-xs text-gray-500 gap-1 md:self-end md:mb-1">
            <Link href="/" className="hover:text-primary flex items-center gap-1">
              <HiHome className="inline-block w-4 h-4" />
              <span className="sr-only">Home</span>
            </Link>
            <HiChevronRight className="inline-block w-4 h-4 mx-1 text-gray-400" />
            <Link href="/diy-style" className="hover:text-primary">DIY &amp; Style</Link>
            <HiChevronRight className="inline-block w-4 h-4 mx-1 text-gray-400" />
            <span className="text-gray-700 font-semibold">Interior Decor Ideas</span>
          </nav>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <h2 className="text-2xl font-bold text-center mb-8">Interior Decor Ideas: Top 3 Trends for 2025 + Shop the Look</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          {/* Trend 1 Card */}
          <div className="bg-white rounded-xl shadow border border-gray-100 p-6 flex flex-col min-w-[320px]">
            <h3 className="text-lg font-bold mb-2 text-primary-700">Trend 1: Organic Modern – Nature Meets Minimalism</h3>
            <div className="mb-2 text-gray-700">2025's biggest design move? Stripping down modern design and bringing in soft, natural textures. Think light wood, curved furniture, and neutral tones with plants.</div>
            <div className="font-semibold mb-1">Key elements:</div>
            <ul className="list-disc pl-5 space-y-1 mb-4 text-[16px]">
              <li>Natural oak furniture</li>
              <li>Linen or cotton slipcovers</li>
              <li>Terracotta, sand, and clay tones</li>
              <li>Large leafy indoor plants</li>
            </ul>
            <div className="font-semibold mb-1">Shop This Look:</div>
            <ul className="list-disc pl-5 space-y-1 text-[16px]">
              <li>West Elm – Natural Wood Coffee Table (affiliate link)</li>
              <li>The Sill – Fiddle Leaf Fig Tree (affiliate link)</li>
              <li>Brooklinen – Linen Sheet Set (affiliate link)</li>
            </ul>
          </div>
          {/* Trend 2 Card */}
          <div className="bg-white rounded-xl shadow border border-gray-100 p-6 flex flex-col min-w-[320px]">
            <h3 className="text-lg font-bold mb-2 text-primary-700">Trend 2: Gallery Wall 2.0 – Statement Over Symmetry</h3>
            <div className="mb-2 text-gray-700">The "perfect grid" gallery wall is out. In 2025, people prefer layered, personal, and oversized pieces mixed with texture—like canvas, metal, and shadow boxes.</div>
            <div className="font-semibold mb-1">Key elements:</div>
            <ul className="list-disc pl-5 space-y-1 mb-4 text-[16px]">
              <li>Asymmetrical frames</li>
              <li>Mix of photography, sketches, and bold quotes</li>
              <li>Neutral backgrounds with bold art</li>
              <li>Matte black or gold hardware</li>
            </ul>
            <div className="font-semibold mb-1">Shop This Look:</div>
            <ul className="list-disc pl-5 space-y-1 text-[16px]">
              <li>Society6 – Oversized Art Prints (affiliate link)</li>
              <li>Target – Mixed Material Frame Set (affiliate link)</li>
              <li>Etsy – Personalized Handwritten Quote Art (affiliate link)</li>
            </ul>
          </div>
          {/* Trend 3 Card */}
          <div className="bg-white rounded-xl shadow border border-gray-100 p-6 flex flex-col min-w-[320px] md:col-span-2">
            <h3 className="text-lg font-bold mb-2 text-primary-700">Trend 3: Cozy Luxe – Hotel-Like Comfort at Home</h3>
            <div className="mb-2 text-gray-700">People are investing in comfort + elegance. Picture soft velvets, warm lighting, layered textures, and spa-like bathrooms.</div>
            <div className="font-semibold mb-1">Key elements:</div>
            <ul className="list-disc pl-5 space-y-1 mb-4 text-[16px]">
              <li>Velvet throw pillows and benches</li>
              <li>Scented candles in ceramic jars</li>
              <li>Diffused pendant lighting</li>
              <li>Plush, oversized rugs</li>
            </ul>
            <div className="font-semibold mb-1">Shop This Look:</div>
            <ul className="list-disc pl-5 space-y-1 text-[16px]">
              <li>Anthropologie – Ceramic Scented Candle (affiliate link)</li>
              <li>CB2 – Tufted Velvet Bench (affiliate link)</li>
              <li>Wayfair – Globe Pendant Light (affiliate link)</li>
            </ul>
          </div>
        </div>
        {/* Final Tip */}
        <section className="mt-8 text-center">
          <div className="inline-block bg-[#f5f9fc] border border-gray-200 rounded-lg px-6 py-4 text-base text-gray-700 font-medium shadow-sm">
            "Don't just follow the trend—mix it with your personality. A beautiful home should feel like you."
          </div>
        </section>
      </main>
    </div>
  );
} 