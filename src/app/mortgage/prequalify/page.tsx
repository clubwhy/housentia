"use client";
import PageHero from '@/components/PageHero';
import InquiryWizard from '@/components/InquiryWizard';
import Disclaimer from '@/components/Disclaimer';

export default function PrequalifyPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        title="Connect with Licensed Professionals"
        breadcrumbs={[
          { label: 'Mortgage', href: '/mortgage' },
          { label: 'Partner Professionals' }
        ]}
      />
      <main className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Compliance: Disclaimer at top */}
          <Disclaimer variant="full" className="mb-8" />
          
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Connect with Licensed Mortgage Professionals</h1>
            <p className="text-lg text-gray-600 mb-8">
              Learn about mortgage options and connect with licensed professionals who can help you understand prequalification 
              and explore loan options based on your situation.
            </p>
          </div>

          {/* Benefits Section - Updated to neutral, educational tone */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">Understanding Prequalification</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2 text-blue-800">Budget Planning</h3>
                <p className="text-blue-700">
                  Prequalification can help you understand an estimated price range you may be able to consider when shopping for a home.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2 text-green-800">Seller Communication</h3>
                <p className="text-green-700">
                  Some sellers may view a prequalification letter as an indicator of buyer readiness.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2 text-purple-800">Process Preparation</h3>
                <p className="text-purple-700">
                  Having prequalification information may help streamline the home buying process.
                </p>
              </div>
            </div>
          </div>

          {/* What You'll Learn Section - Updated to neutral tone */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">Topics You May Explore</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Estimated home purchase price range</li>
                    <li>Loan program options that may be available</li>
                    <li>General mortgage information</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Estimated monthly payment ranges</li>
                    <li>Current interest rate information</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Typical down payment requirements</li>
                    <li>General qualification factors</li>
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

          {/* CTA Section - Updated to reflect connection with licensed professionals */}
          <div className="text-center bg-blue-50 rounded-2xl p-4">
            <h3 className="text-xl font-bold mb-2 text-blue-900">Connect with Licensed Professionals</h3>
            <p className="text-blue-700 mb-3">
              Get connected with licensed mortgage professionals who can provide personalized guidance based on your situation. 
              No obligation - explore your options with qualified experts.
            </p>
            <InquiryWizard />
          </div>
        </div>
      </main>
    </div>
  );
} 