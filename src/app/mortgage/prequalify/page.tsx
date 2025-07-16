"use client";
import PageHero from '@/components/PageHero';
import InquiryWizard from '@/components/InquiryWizard';

export default function PrequalifyPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        title="Get Prequalified"
        breadcrumbs={[
          { label: 'Mortgage', href: '/mortgage' },
          { label: 'Get Prequalified' }
        ]}
      />
      <main className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Get Prequalified for Your Mortgage</h1>
            <p className="text-lg text-gray-600 mb-8">
              Take the first step towards homeownership. Our free consultation will help you understand your mortgage options and get prequalified for the best rates.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">Why Get Prequalified?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2 text-blue-800">Know Your Budget</h3>
                <p className="text-blue-700">
                  Understand exactly how much house you can afford before you start looking.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2 text-green-800">Better Negotiating Power</h3>
                <p className="text-green-700">
                  Show sellers you're serious with a prequalification letter.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2 text-purple-800">Faster Process</h3>
                <p className="text-purple-700">
                  Speed up your home buying process with pre-approval in hand.
                </p>
              </div>
            </div>
          </div>

          {/* What You'll Learn Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">What You'll Learn</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Your maximum home purchase price</li>
                    <li>Available loan programs for your situation</li>
                    <li>and more...</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Estimated monthly mortgage payment</li>
                    <li>Current interest rates and terms</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Required down payment amount</li>
                    <li>Steps to improve your qualification</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Required Information */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">Information You'll Need</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-3">Personal Information</h3>
                                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Full name and contact information</li>
                    <li>Social Security Number (Only when you're ready to proceed)</li>
                    <li>Date of birth</li>
                    <li>Current address and length of time there</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-3">Financial Information</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Employment history and income</li>
                  <li>Bank account statements</li>
                  <li>Credit card and loan balances</li>
                  <li>Assets and savings information</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-blue-50 rounded-2xl p-4">
            <h3 className="text-xl font-bold mb-2 text-blue-900">Ready to Get Started?</h3>
            <p className="text-blue-700 mb-3">
              Schedule a free consultation with our mortgage experts. No obligation, no pressure - just honest advice about your home financing options.
            </p>
            <InquiryWizard />
          </div>
        </div>
      </main>
    </div>
  );
} 