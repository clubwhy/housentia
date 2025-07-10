"use client";
import Link from 'next/link';
import { HiHome, HiChevronRight } from 'react-icons/hi';
import PageHero from '@/components/PageHero';

export default function GardenIdeasPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        title="Garden & Outdoor Ideas"
        breadcrumbs={[
          { label: 'DIY & Style', href: '/diy-style' },
          { label: 'Garden & Outdoor Ideas' }
        ]}
      />

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <h2 className="text-2xl font-bold text-center mb-8">Garden & Outdoor Ideas: Transform Your Yard in 2025 + Shop the Look</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          {/* Idea 1 Card */}
          <div className="bg-white rounded-xl shadow border border-gray-100 p-6 flex flex-col min-w-[320px]">
            <h3 className="text-lg font-bold mb-2 text-primary-700">Idea 1: Low-Maintenance Landscaping</h3>
            <div className="mb-2 text-gray-700">In 2025, homeowners want beauty without constant upkeep. Drought-tolerant plants, native grasses, and smart irrigation systems are leading the charge.</div>
            <div className="font-semibold mb-1">Key Elements:</div>
            <ul className="list-disc pl-5 space-y-1 mb-4 text-[16px]">
              <li>Gravel and stone ground cover</li>
              <li>Drip irrigation system</li>
              <li>Native plants like lavender, sage, and ornamental grasses</li>
              <li>Raised planters or metal garden beds</li>
            </ul>
            <div className="font-semibold mb-1">Shop This Look:</div>
            <ul className="list-disc pl-5 space-y-1 text-[16px]">
              <li><a href="https://www.homedepot.com/p/Vigoro-40-in-x-20-in-x-12-in-Galvanized-Steel-Raised-Garden-Bed-2-Pack-VGBED2PK/314555123" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Home Depot – Raised Metal Planter Bed</a></li>
              <li><a href="https://www.amazon.com/smart-drip-irrigation/s?k=smart+drip+irrigation" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Amazon – Smart Drip Irrigation Kit</a></li>
              <li><a href="https://www.lowes.com/pd/pea-gravel/1000173435" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Lowe's – Decorative Pea Gravel Bags</a></li>
            </ul>
          </div>
          {/* Idea 2 Card */}
          <div className="bg-white rounded-xl shadow border border-gray-100 p-6 flex flex-col min-w-[320px]">
            <h3 className="text-lg font-bold mb-2 text-primary-700">Idea 2: Backyard Fire & Lounge Zones</h3>
            <div className="mb-2 text-gray-700">Outdoor spaces are becoming cozy extensions of indoor living. Fire pits, comfy sectionals, and string lighting turn even a small yard into a social hub.</div>
            <div className="font-semibold mb-1">Key Elements:</div>
            <ul className="list-disc pl-5 space-y-1 mb-4 text-[16px]">
              <li>Portable fire pit or propane table</li>
              <li>Weather-resistant sectional or Adirondack chairs</li>
              <li>Solar or Edison-style string lights</li>
              <li>Outdoor rug and throw pillows</li>
            </ul>
            <div className="font-semibold mb-1">Shop This Look:</div>
            <ul className="list-disc pl-5 space-y-1 text-[16px]">
              <li><a href="https://www.solostove.com/fire-pits/bonfire-2-0/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Solo Stove – Bonfire 2.0 Fire Pit</a></li>
              <li><a href="https://www.wayfair.com/outdoor/pdp/solar-powered-string-lights-w004255563.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Wayfair – Solar LED String Lights</a></li>
              <li><a href="https://www.target.com/c/patio-furniture-sets/-/N-5xtm6" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Target – All-Weather Outdoor Seating Set</a></li>
            </ul>
          </div>
          {/* Idea 3 Card */}
          <div className="bg-white rounded-xl shadow border border-gray-100 p-6 flex flex-col min-w-[320px] md:col-span-2">
            <h3 className="text-lg font-bold mb-2 text-primary-700">Idea 3: Small Space, Big Impact (For Patios & Balconies)</h3>
            <div className="mb-2 text-gray-700">Don't have a backyard? No problem. Balcony and patio gardening is booming in 2025, with foldable furniture, vertical gardens, and compact water features leading the trend.</div>
            <div className="font-semibold mb-1">Key Elements:</div>
            <ul className="list-disc pl-5 space-y-1 mb-4 text-[16px]">
              <li>Foldable bistro sets</li>
              <li>Stackable herb planters</li>
              <li>Wall-hung vertical gardens</li>
              <li>Plug-in tabletop water fountains</li>
            </ul>
            <div className="font-semibold mb-1">Shop This Look:</div>
            <ul className="list-disc pl-5 space-y-1 text-[16px]">
              <li><a href="https://www.etsy.com/market/wall_mounted_vertical_garden" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Etsy – Wall-Mounted Vertical Garden Kit</a></li>
              <li><a href="https://www.ikea.com/us/en/cat/outdoor-dining-sets-21825/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">IKEA – Foldable Balcony Table & Chairs</a></li>
              <li><a href="https://www.amazon.com/s?k=tabletop+water+fountain" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Amazon – Tabletop Water Fountain</a></li>
            </ul>
          </div>
        </div>
        {/* Final Thought */}
        <section className="mt-8 text-center">
          <div className="inline-block bg-[#f5f9fc] border border-gray-200 rounded-lg px-6 py-4 text-base text-gray-700 font-medium shadow-sm">
            "Your outdoor space is more than a yard—it's a retreat. Whether you're sipping coffee on a balcony or entertaining by a fire, thoughtful design makes it memorable."
          </div>
        </section>

        {/* YouTube Shorts Section */}
        <section className="mt-16 mb-8">
          <h3 className="text-xl font-bold mb-6 text-gray-900 text-center">Perfect flowers to brighten up my garden</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* Shorts 1 */}
            <div className="aspect-[9/16] w-full rounded-lg overflow-hidden shadow border border-gray-100 bg-black" style={{ aspectRatio: '9/16' }}>
              <iframe src="https://www.youtube.com/embed/c7ce49Oo-Yw" title="YouTube Shorts 1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full"></iframe>
            </div>
            {/* Shorts 2 */}
            <div className="aspect-[9/16] w-full rounded-lg overflow-hidden shadow border border-gray-100 bg-black" style={{ aspectRatio: '9/16' }}>
              <iframe src="https://www.youtube.com/embed/P89fYQZfeY4" title="YouTube Shorts 2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full"></iframe>
            </div>
            {/* Shorts 3 */}
            <div className="aspect-[9/16] w-full rounded-lg overflow-hidden shadow border border-gray-100 bg-black" style={{ aspectRatio: '9/16' }}>
              <iframe src="https://www.youtube.com/embed/vgNwxLxjkh4" title="YouTube Shorts 3" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full"></iframe>
            </div>
            {/* Shorts 4 */}
            <div className="aspect-[9/16] w-full rounded-lg overflow-hidden shadow border border-gray-100 bg-black" style={{ aspectRatio: '9/16' }}>
              <iframe src="https://www.youtube.com/embed/lSZBt-mhDpI" title="YouTube Shorts 4" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full"></iframe>
            </div>
            {/* Shorts 5 */}
            <div className="aspect-[9/16] w-full rounded-lg overflow-hidden shadow border border-gray-100 bg-black" style={{ aspectRatio: '9/16' }}>
              <iframe src="https://www.youtube.com/embed/aZQ0XsO2v8I" title="YouTube Shorts 5" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full"></iframe>
            </div>
            {/* Shorts 6 */}
            <div className="aspect-[9/16] w-full rounded-lg overflow-hidden shadow border border-gray-100 bg-black" style={{ aspectRatio: '9/16' }}>
              <iframe src="https://www.youtube.com/embed/J0ZnvMUEAvY" title="YouTube Shorts 6" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full"></iframe>
            </div>
            {/* Shorts 7 */}
            <div className="aspect-[9/16] w-full rounded-lg overflow-hidden shadow border border-gray-100 bg-black" style={{ aspectRatio: '9/16' }}>
              <iframe src="https://www.youtube.com/embed/I4AAOx_0avQ" title="YouTube Shorts 7" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full"></iframe>
            </div>
            {/* Shorts 8 */}
            <div className="aspect-[9/16] w-full rounded-lg overflow-hidden shadow border border-gray-100 bg-black" style={{ aspectRatio: '9/16' }}>
              <iframe src="https://www.youtube.com/embed/4nBbdfLP3JU" title="YouTube Shorts 8" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full"></iframe>
            </div>
          </div>
        </section>
    </main>
    </div>
  );
} 