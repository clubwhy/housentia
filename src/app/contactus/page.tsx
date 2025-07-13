"use client";
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        title="Contact Us"
        breadcrumbs={[
          { label: 'Contact Us' }
        ]}
      />
      <main className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Hero */}
          <p className="text-lg text-gray-600 mb-8">Get in touch with us for any questions, feedback, or support. We're here to help you with your home journey.</p>

          {/* Response Time */}
          <div className="bg-blue-50 p-6 rounded-lg text-center mb-12">
            <p className="text-lg font-semibold text-blue-800 mb-2">We typically respond within 24 hours</p>
            <p className="text-gray-700">For urgent matters, please include "URGENT" in your email subject line.</p>
          </div>

          {/* Contact Form */}
          <div className="mb-12">
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  );
} 