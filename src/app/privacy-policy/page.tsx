import React from 'react';
import PageHero from '@/components/PageHero';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero 
        title="Privacy Policy"
        subtitle="How we protect and handle your information"
      />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy Policy</h2>
            
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>

            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Introduction</h3>
                <p className="text-gray-700 mb-4">
                  Welcome to Housentia ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us in any way.
                </p>
                <p className="text-gray-700">
                  By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Information We Collect</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-2">Personal Information</h4>
                    <p className="text-gray-700">
                      We may collect personal information that you voluntarily provide to us, including:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 ml-4 mt-2">
                      <li>Name and contact information (email address, phone number, mailing address)</li>
                      <li>Account credentials and profile information</li>
                      <li>Property preferences and search criteria</li>
                      <li>Financial information for mortgage calculations</li>
                      <li>Communication preferences and feedback</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-2">Automatically Collected Information</h4>
                    <p className="text-gray-700">
                      When you visit our website, we automatically collect certain information, including:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 ml-4 mt-2">
                      <li>IP address and device information</li>
                      <li>Browser type and version</li>
                      <li>Pages visited and time spent on our website</li>
                      <li>Referring website and search terms</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. How We Use Your Information</h3>
                <p className="text-gray-700 mb-3">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                  <li>Providing and maintaining our real estate services</li>
                  <li>Processing mortgage calculations and loan applications</li>
                  <li>Personalizing your experience and showing relevant properties</li>
                  <li>Communicating with you about our services and updates</li>
                  <li>Improving our website functionality and user experience</li>
                  <li>Analyzing usage patterns and trends</li>
                  <li>Complying with legal obligations and preventing fraud</li>
                  <li>Marketing and promotional activities (with your consent)</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Information Sharing and Disclosure</h3>
                <p className="text-gray-700 mb-3">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                  <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and providing services</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights and safety</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
                  <li><strong>Consent:</strong> We may share information with your explicit consent</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Data Security</h3>
                <p className="text-gray-700 mb-3">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                  <li>Encryption of sensitive data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication procedures</li>
                  <li>Employee training on data protection practices</li>
                  <li>Incident response and breach notification procedures</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Cookies and Tracking Technologies</h3>
                <p className="text-gray-700 mb-3">
                  We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user behavior. You can control cookie settings through your browser preferences.
                </p>
                <p className="text-gray-700">
                  Types of cookies we use include:
                </p>
                <ul className="list-disc list-inside text-gray-700 ml-4 mt-2">
                  <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  <li><strong>Marketing Cookies:</strong> Used for targeted advertising and marketing campaigns</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">7. Your Rights and Choices</h3>
                <p className="text-gray-700 mb-3">
                  You have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                  <li><strong>Opt-out:</strong> Opt out of marketing communications</li>
                  <li><strong>Restriction:</strong> Request restriction of processing</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">8. Children's Privacy</h3>
                <p className="text-gray-700">
                  Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">9. Third-Party Links</h3>
                <p className="text-gray-700">
                  Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review their privacy policies before providing any personal information.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">10. International Data Transfers</h3>
                <p className="text-gray-700">
                  Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">11. Changes to This Privacy Policy</h3>
                <p className="text-gray-700">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">12. Contact Us</h3>
                <p className="text-gray-700 mb-3">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                     Please use our <a href="/contactus" className="text-primary hover:text-accent transition-colors">Contact Us Form</a> or send email to <a href="mailto:info@housentia.com" className="text-primary hover:text-accent transition-colors">info@housentia.com</a>
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">13. California Privacy Rights</h3>
                <p className="text-gray-700">
                  California residents have additional rights under the California Consumer Privacy Act (CCPA). If you are a California resident, you have the right to know what personal information we collect, use, and disclose, and to request deletion of your personal information. Please contact us for more information about your California privacy rights.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">14. GDPR Compliance</h3>
                <p className="text-gray-700">
                  If you are located in the European Economic Area (EEA), you have additional rights under the General Data Protection Regulation (GDPR). These rights include the right to data portability, the right to be forgotten, and the right to object to processing. Please contact us to exercise your GDPR rights.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 