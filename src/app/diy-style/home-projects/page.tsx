"use client";
import Link from 'next/link';
import { HiHome, HiChevronRight } from 'react-icons/hi';
import PageHero from '@/components/PageHero';

export default function DIYHomeProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        title="DIY Home Projects"
        breadcrumbs={[
          { label: 'DIY & Style', href: '/diy-style' },
          { label: 'DIY Home Projects' }
        ]}
      />
      {/* Main Content Area */}
      <main className="max-w-2xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <h2 className="text-2xl font-bold text-center mb-8">DIY Home Projects: From Planning to Launch</h2>

        {/* Project Stages as Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          {/* Planning Card */}
          <div className="bg-white rounded-xl shadow border border-gray-100 p-6 flex flex-col min-w-[320px]">
            <h3 className="text-lg font-bold mb-3 text-primary-700">PLANNING: Set Yourself Up for Success</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4 text-[16px]">
              <li>Clear goal: What are you building or fixing?</li>
              <li>Measurements & sketches</li>
              <li>Budget estimate</li>
              <li>Research (tutorials, guides, expert advice)</li>
              <li>Permit check (if needed)</li>
              <li>Time plan: Break project into steps</li>
            </ul>
            <div className="mt-auto pt-2 text-xs text-gray-600 border-t border-gray-100"><strong>Tip:</strong> Measure twice, cut once. Planning saves time and money.</div>
          </div>

          {/* Execution Card */}
          <div className="bg-white rounded-xl shadow border border-gray-100 p-6 flex flex-col min-w-[320px]">
            <h3 className="text-lg font-bold mb-3 text-primary-700">EXECUTION: Gather Tools & Build with Purpose</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4 text-[16px]">
              <li>Materials checklist</li>
              <li>Tools (power drill, saw, level, etc.)</li>
              <li>Workspace setup</li>
              <li>Safety gear (gloves, goggles, mask)</li>
              <li>Instructions nearby (printed or on device)</li>
              <li>Optional helper if needed</li>
            </ul>
            <div className="mt-auto pt-2 text-xs text-gray-600 border-t border-gray-100"><strong>Tip:</strong> Tidy as you go to stay efficient and safe.</div>
          </div>

          {/* Testing Card */}
          <div className="bg-white rounded-xl shadow border border-gray-100 p-6 flex flex-col min-w-[320px]">
            <h3 className="text-lg font-bold mb-3 text-primary-700">TESTING: Check Before You Finalize</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4 text-[16px]">
              <li>Fit & function test</li>
              <li>Structural check (sturdy, level, secure)</li>
              <li>Paint/stain patch test</li>
              <li>Water/electric functionality check</li>
              <li>Ask for a second opinion</li>
            </ul>
            <div className="mt-auto pt-2 text-xs text-gray-600 border-t border-gray-100"><strong>Tip:</strong> Testing saves you from costly mistakes down the road.</div>
          </div>

          {/* Launch Card */}
          <div className="bg-white rounded-xl shadow border border-gray-100 p-6 flex flex-col min-w-[320px]">
            <h3 className="text-lg font-bold mb-3 text-primary-700">LAUNCH: Final Touches & Enjoy</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4 text-[16px]">
              <li>Final cleanup (tools, dust, tape)</li>
              <li>Seal or protect your work</li>
              <li>Take before/after photos</li>
              <li>Note what worked or needs improvement</li>
              <li>Celebrate your success!</li>
            </ul>
            <div className="mt-auto pt-2 text-xs text-gray-600 border-t border-gray-100"><strong>Tip:</strong> Save your notes and measurements for future upgrades.</div>
          </div>
        </div>

        {/* Summary Table */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Summary: The DIY Project Lifecycle</h3>
          <table className="w-full border-collapse mt-2 text-[16px]">
            <thead>
              <tr>
                <th className="text-left border-b-2 border-gray-200 pb-2">Stage</th>
                <th className="text-left border-b-2 border-gray-200 pb-2">Key Focus</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 align-top">Planning</td>
                <td className="py-2 align-top">Goals, research, measurements, budget</td>
              </tr>
              <tr>
                <td className="py-2 align-top">Execution</td>
                <td className="py-2 align-top">Tools, materials, safety, build process</td>
              </tr>
              <tr>
                <td className="py-2 align-top">Testing</td>
                <td className="py-2 align-top">Fit, stability, appearance, functionality</td>
              </tr>
              <tr>
                <td className="py-2 align-top">Launch</td>
                <td className="py-2 align-top">Cleanup, finishing touches, reflection</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Final Thoughts */}
        <section className="mt-10">
          <p className="mb-0"><strong>Final advice:</strong> DIY isn't just about saving money—it's about building confidence, skills, and pride in your home. Start small, learn fast, and keep building.</p>
        </section>
      </main>
    </div>
  );
} 