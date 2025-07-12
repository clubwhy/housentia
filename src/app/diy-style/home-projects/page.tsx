"use client";
import { HiLightBulb, HiWrenchScrewdriver, HiCheckCircle, HiSparkles } from 'react-icons/hi2';
import { HiClipboard as HiClipboardLegacy } from 'react-icons/hi';
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
      <main className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Hero */}
          <h1 className="text-4xl font-bold mb-4">DIY Home Projects</h1>
          <p className="text-lg text-gray-600 mb-8">Plan. Build. Test. Launch. Everything you need to successfully complete your next home project—from idea to execution.</p>

          {/* What is this section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-2">What Is This Section?</h2>
            <p className="text-gray-700">This section is designed for homeowners, renters, and beginners looking to take on <strong>real, manageable home improvement projects</strong>. Whether you're fixing a door hinge or installing a garden bed, this is your go-to hub to get it done right.</p>
          </div>

          {/* Featured Projects */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Featured Project Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Build a Raised Garden Bed</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>Step-by-step guide</li>
                  <li>Printable material list</li>
                  <li>Recommended tools</li>
                  <li>Time estimate: 2–4 hours</li>
                </ul>
                <a href="#" className="text-blue-600 font-medium">View Guide →</a>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Replace a Sprinkler Head</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>Visual checklist</li>
                  <li>Tools needed</li>
                  <li>Warning signs for replacement</li>
                  <li>Compatibility chart</li>
                </ul>
                <a href="#" className="text-blue-600 font-medium">Open Checklist →</a>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">DIY Tile Backsplash</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>Video tutorial</li>
                  <li>Surface prep guide</li>
                  <li>Grout comparison chart</li>
                  <li>Safety gear checklist</li>
                </ul>
                <a href="#" className="text-blue-600 font-medium">Watch Tutorial →</a>
              </div>
            </div>
          </div>

          {/* Tools & Templates */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Tools & Templates</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li><a href="#" className="text-blue-600">Download Project Planner (PDF)</a></li>
              <li><a href="#" className="text-blue-600">Get Material Calculator</a></li>
              <li><a href="#" className="text-blue-600">Tool Finder Wizard (coming soon)</a></li>
            </ul>
          </div>

          {/* Choose by Project Type */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Choose by Project Type</h2>
            <table className="min-w-full text-left border-collapse border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 px-4 py-2">Category</th>
                  <th className="border border-gray-200 px-4 py-2">Examples</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Indoor Improvements</td>
                  <td className="border border-gray-200 px-4 py-2">Shelves, doors, backsplashes</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Outdoor Projects</td>
                  <td className="border border-gray-200 px-4 py-2">Planter beds, irrigation fixes</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Painting & Finish</td>
                  <td className="border border-gray-200 px-4 py-2">Entryways, trims, cabinets</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Small Repairs</td>
                  <td className="border border-gray-200 px-4 py-2">Hinges, handles, squeaky doors</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Tips */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Smart Tips for DIYers</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Start small and build confidence</li>
              <li>Always measure twice</li>
              <li>Use painter’s tape to avoid messy finishes</li>
              <li>Take before/after photos</li>
              <li>Safety first: mask, gloves, goggles</li>
            </ul>
          </div>

          {/* CTA & AI Prompt */}
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <p className="text-lg font-semibold text-blue-800 mb-2">Need help deciding what to build?</p>
            <p className="text-gray-700 mb-4">Ask Habi, our AI assistant, to recommend the best starting project based on your goals.</p>
            <a href="#" className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">Chat with Habi →</a>
          </div>
        </div>
      </main>
    </div>
  );
} 