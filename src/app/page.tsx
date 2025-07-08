import Image from 'next/image'
import { motion } from "framer-motion";
import BlogFeed from '@/components/BlogFeed';
import pool from './upgrade/contractor-finder/db';
import ProductImage from './shop/products/ProductImage.client';

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  product_url: string;
  category: string;
  vendor_name: string;
};

export default async function Home() {
  // Fetch latest 4 products
  let products: Product[] = [];
  try {
    const conn = await pool.getConnection();
    products = await conn.query(
      `SELECT p.uid AS id, p.name, p.description, p.retail_price AS price, p.image_url, p.product_url, t.label AS category, v.company AS vendor_name
       FROM products p
       JOIN types t ON p.type_uid = t.uid
       JOIN vendors v ON p.vendor_uid = v.uid
       WHERE p.active = 1
       ORDER BY p.uid DESC
       LIMIT 4`
    );
    conn.release();
  } catch (e) {
    // handle error or leave products empty
  }

  // Fetch latest 10 DIY Kits & Tools products
  let diyKits: Product[] = [];
  try {
    const conn = await pool.getConnection();
    diyKits = await conn.query(
      `SELECT p.uid AS id, p.name, p.description, p.retail_price AS price, p.image_url, p.product_url, t.label AS category, v.company AS vendor_name
       FROM products p
       JOIN types t ON p.type_uid = t.uid
       JOIN vendors v ON p.vendor_uid = v.uid
       WHERE p.active = 1 AND t.label = 'DIY Kits & Tools'
       ORDER BY p.uid DESC
       LIMIT 10`
    );
    conn.release();
  } catch (e) {
    // handle error or leave diyKits empty
  }

  return (
    <main className="bg-secondary font-sans">
      {/* Modern Minimal Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#312e81] to-[#7c3aed]">
        <div className="w-full max-w-4xl px-4 mx-auto flex flex-col items-center text-center mb-4">
          <div className="font-extrabold text-white text-5xl md:text-6xl whitespace-nowrap">
            Turn Your House
          </div>
          <div className="font-extrabold text-white text-5xl md:text-6xl whitespace-nowrap">
            into the Home You Love
          </div>
          <div className="font-extrabold text-white text-5xl md:text-6xl mt-2 whitespace-nowrap">
            &
          </div>
          <div className="font-extrabold text-white text-5xl md:text-6xl whitespace-nowrap">
            Learn How to Afford It Too.
          </div>
          <p className="text-lg md:text-xl text-slate-300 mb-8 mt-6 max-w-2xl mx-auto">
            Discover smart home upgrades, DIY tips, and financing tools to help you build a better living space — and save money along the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <a
              href="/diy-style"
              className="flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white text-base font-semibold rounded-md hover:bg-accent-hover transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 9l5-5 5 5M12 4.5V15" /></svg>
              Explore DIY & Upgrades
            </a>
            <a
              href="/tools"
              className="flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary text-primary text-base font-semibold rounded-md hover:bg-primary hover:text-white transition bg-transparent"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Find Out How to Pay for It
            </a>
          </div>
        </div>
      </section>

      {/* Section 1: DIY, Decor, Home Styling */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-6 text-left">Design, Decor, and Do It Yourself Projects</h2>
          <div className="flex overflow-x-auto gap-6 pb-4">
            {diyKits.length > 0 ? diyKits.map((product: Product) => (
              <div key={product.id} className="min-w-[260px] bg-slate-50 rounded-xl shadow hover:scale-105 hover:shadow-lg transition p-6 flex flex-col justify-between">
                <div className="w-16 h-16 mb-3 mx-auto flex items-center justify-center relative">
                  <ProductImage src={product.image_url} alt={product.name} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-600 font-bold">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}</span>
                  <span className="text-xs text-gray-500">by {product.vendor_name}</span>
                </div>
                <a href={product.product_url || '#'} target="_blank" rel="noopener noreferrer" className="text-primary font-medium text-sm hover:text-accent hover:underline mt-auto">View Details</a>
              </div>
            )) : (
              [1,2,3,4,5,6].map((i) => (
                <div key={i} className="min-w-[260px] bg-slate-50 rounded-xl shadow p-6 flex flex-col justify-between animate-pulse">
                  <div className="w-16 h-16 mb-3 mx-auto bg-slate-200 rounded" />
                  <div className="h-5 bg-slate-200 rounded w-2/3 mb-2" />
                  <div className="h-4 bg-slate-200 rounded w-1/2 mb-4" />
                  <div className="h-4 bg-slate-200 rounded w-1/3 mb-2" />
                  <div className="h-6 bg-slate-200 rounded w-1/2" />
                </div>
              ))
            )}
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <a href="#" className="bg-accent text-white font-semibold px-4 py-2 rounded-md hover:bg-accent-hover transition text-sm">Shop Decor Kits</a>
            <a href="#" className="bg-accent text-white font-semibold px-4 py-2 rounded-md hover:bg-accent-hover transition text-sm">Watch on YouTube</a>
            <a href="#" className="bg-accent text-white font-semibold px-4 py-2 rounded-md hover:bg-accent-hover transition text-sm">See More Blog Posts</a>
          </div>
        </div>
      </section>

      {/* Section 2: Solar & Home Upgrades */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-6 text-center">Power Up Your Home the Smart Way</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6">
            {["Solar Panel Guide","HVAC Tips","Windows & Roofing"].map((title, i) => (
              <div key={i} className={`bg-white rounded-xl shadow p-6 flex flex-col justify-between relative ${i === 0 ? 'border-2 border-primary' : ''}`}>
                {i === 0 && <span className="absolute top-2 right-2 bg-emerald-500 text-white text-xs px-2 py-1 rounded">Top Rated</span>}
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">Quick intro or tip about {title.toLowerCase()}.</p>
                <a href="#" className="text-primary font-medium text-sm hover:text-accent hover:underline mt-auto">Learn More</a>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
            <a href="#" className="px-6 py-2 bg-primary text-white text-sm font-medium rounded-lg font-semibold hover:bg-accent-hover transition">Get a Free Estimate</a>
            <span className="text-gray-500 text-sm">Rebates & government incentives available</span>
          </div>
        </div>
      </section>

      {/* Section 3: Trending Products & Tools */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-6 text-center">Best-Selling Home Essentials</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-6">
            {products.length > 0 ? products.map((product: Product) => (
              <div key={product.id} className="bg-indigo-100 rounded-xl p-6 flex flex-col justify-between hover:shadow-lg transition border border-indigo-200">
                <div className="mb-2 h-32 flex items-center justify-center relative">
                  <ProductImage src={product.image_url} alt={product.name} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-600 font-bold">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}</span>
                  <span className="text-xs text-gray-500">by {product.vendor_name}</span>
                </div>
                <a href={product.product_url || '#'} target="_blank" rel="noopener noreferrer" className="text-primary font-medium text-sm hover:text-accent hover:underline mt-auto">Try Now</a>
              </div>
            )) : (
              [1,2,3,4].map((i) => (
                <div key={i} className="bg-indigo-100 rounded-xl p-6 flex flex-col justify-between hover:shadow-lg transition border border-indigo-200 animate-pulse">
                  <div className="mb-2 h-32 bg-indigo-200 rounded" />
                  <div className="h-5 bg-indigo-200 rounded w-2/3 mb-2" />
                  <div className="h-4 bg-indigo-200 rounded w-1/2 mb-4" />
                  <div className="h-4 bg-indigo-200 rounded w-1/3 mb-2" />
                  <div className="h-6 bg-indigo-200 rounded w-1/2" />
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Section 4: Smart Home Financing Tools */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-6 text-center">Need Help Paying for Your Home Projects?</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
            {["Mortgage Calculator","Refinance Analyzer","Remodeling Cost Estimator","Loan Guides"].map((tool, i) => (
              <div key={i} className="bg-secondary rounded-xl p-6 flex flex-col justify-between">
                <h3 className="text-lg font-semibold mb-2">{tool}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">Quick intro or tip about {tool.toLowerCase()}.</p>
                <a href="#" className="text-primary font-medium text-sm hover:text-accent hover:underline mt-auto">Try Now</a>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <a href="/mortgage/prequalify" className="px-8 py-3 bg-primary text-white text-sm font-medium rounded-xl text-lg font-semibold hover:bg-accent-hover transition">Get Prequalified Today</a>
          </div>
        </div>
      </section>

      {/* Section 5: Blog Highlights */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4">Latest Tips from the Housentia Blog</h2>
            <p className="text-gray-600 mb-6">Discover smart home upgrades, DIY tips, and financing insights</p>
            <a 
              href="/blog" 
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors mb-6"
            >
              View All Blog Posts
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <BlogFeed />
        </div>
      </section>

      {/* Pre-Footer CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 md:flex md:items-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Looking to Finance Your Next Home Project?</h2>
            <p className="text-gray-700 mb-6">Find out which loan fits your needs — mortgage, HELOC, or a simple cash-out refi.</p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="/mortgage/prequalify" className="px-8 py-3 bg-primary text-white text-base font-semibold rounded-md hover:bg-accent-hover transition">Get Prequalified</a>
              <a href="/mortgage" className="px-8 py-3 border-2 border-primary text-primary text-base font-semibold rounded-md hover:bg-primary hover:text-white transition bg-transparent">Learn More</a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="/public/house-illustration.svg" alt="Finance" className="max-w-xs" />
          </div>
        </div>
      </section>
    </main>
  )
}