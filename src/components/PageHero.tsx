"use client";
import Link from 'next/link';
import { HiHome, HiChevronRight } from 'react-icons/hi';
import React from 'react';

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  breadcrumbs?: Breadcrumb[]; // [{label, href}...]
  gradientFrom?: string; // tailwind color ex: 'from-primary'
  gradientTo?: string;   // tailwind color ex: 'to-accent'
}

export default function PageHero({
  title,
  breadcrumbs = [],
  gradientFrom = 'from-primary',
  gradientTo = 'to-accent',
}: PageHeroProps) {
  return (
    <section className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} py-10 px-4 border-b border-gray-200`}>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white font-sans mb-2 md:mb-0 drop-shadow">{title}</h1>
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center text-xs text-slate-200 gap-1 md:self-end md:mb-1">
            <Link href="/" className="hover:text-accent flex items-center gap-1">
              <HiHome className="inline-block w-4 h-4" />
              <span className="sr-only">Home</span>
            </Link>
            {breadcrumbs.map((bc, i) => (
              <React.Fragment key={i}>
                <HiChevronRight className="inline-block w-4 h-4 mx-1 text-slate-300" />
                {bc.href ? (
                  <Link href={bc.href} className="hover:text-accent">{bc.label}</Link>
                ) : (
                  <span className="text-white font-semibold">{bc.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}
      </div>
    </section>
  );
} 