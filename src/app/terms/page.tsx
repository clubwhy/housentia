import React from 'react';
import PageHero from '@/components/PageHero';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero 
        title="Terms of Service"
      />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Terms of Service</h2>
            
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>

            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h3>
                <p className="text-gray-700 mb-4">
                  By accessing and using Housentia ("we," "our," or "us"), including our website, mobile applications, and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
                <p className="text-gray-700">
                  These Terms of Service ("Terms") govern your use of our real estate platform, including property listings, mortgage calculators, home improvement tools, and related services.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Description of Service</h3>
                <p className="text-gray-700 mb-3">
                  Housentia provides a comprehensive real estate platform that includes:
                </p>
                <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                  <li>Property search and listing services</li>
                  <li>Mortgage calculators and loan information</li>
                  <li>Home improvement and remodeling tools</li>
                  <li>Real estate market analysis and insights</li>
                  <li>DIY and home improvement guides</li>
                  <li>Contractor and service provider directories</li>
                  <li>Solar energy and sustainability information</li>
                  <li>Real estate blog and educational content</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. User Accounts and Registration</h3>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    To access certain features of our service, you may be required to create an account. You agree to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li>Provide accurate, current, and complete information during registration</li>
                    <li>Maintain and promptly update your account information</li>
                    <li>Maintain the security of your password and account</li>
                    <li>Accept responsibility for all activities that occur under your account</li>
                    <li>Notify us immediately of any unauthorized use of your account</li>
                  </ul>
                  <p className="text-gray-700">
                    We reserve the right to terminate accounts that violate these terms or are inactive for an extended period.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Acceptable Use Policy</h3>
                <p className="text-gray-700 mb-3">
                  You agree not to use our service to:
                </p>
                <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon the rights of others</li>
                  <li>Upload or transmit malicious code, viruses, or harmful content</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt the service or servers</li>
                  <li>Use automated systems to access our service without permission</li>
                  <li>Post false, misleading, or fraudulent information</li>
                  <li>Harass, abuse, or harm other users</li>
                  <li>Use our service for commercial purposes without authorization</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Property Listings and Information</h3>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    While we strive to provide accurate and up-to-date property information, we cannot guarantee:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li>The accuracy, completeness, or timeliness of property listings</li>
                    <li>The availability of properties shown on our platform</li>
                    <li>The accuracy of pricing information or market data</li>
                    <li>The condition or quality of properties</li>
                    <li>The accuracy of property descriptions or photographs</li>
                  </ul>
                  <p className="text-gray-700">
                    Property information is provided by third parties and may change without notice. We recommend verifying all information independently before making any decisions.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Mortgage and Financial Information</h3>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    Our mortgage calculators and financial tools are for educational and informational purposes only. We do not:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li>Provide financial advice or recommendations</li>
                    <li>Guarantee loan approval or specific terms</li>
                    <li>Act as a mortgage lender or broker</li>
                    <li>Ensure the accuracy of rate information</li>
                  </ul>
                  <p className="text-gray-700">
                    All financial decisions should be made in consultation with qualified professionals. Rates and terms are subject to change and may vary by lender.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">7. Intellectual Property Rights</h3>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    The content on our platform, including but not limited to text, graphics, images, logos, and software, is owned by Housentia or its licensors and is protected by copyright, trademark, and other intellectual property laws.
                  </p>
                  <p className="text-gray-700">
                    You may not:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li>Copy, reproduce, or distribute our content without permission</li>
                    <li>Modify or create derivative works from our content</li>
                    <li>Use our trademarks or logos without written consent</li>
                    <li>Remove or alter copyright notices</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">8. User-Generated Content</h3>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    By submitting content to our platform (reviews, comments, photos, etc.), you grant us a non-exclusive, royalty-free license to use, modify, and distribute your content.
                  </p>
                  <p className="text-gray-700">
                    You represent and warrant that:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li>You own or have the right to use the content</li>
                    <li>The content does not violate any third-party rights</li>
                    <li>The content is accurate and not misleading</li>
                    <li>The content complies with our acceptable use policy</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">9. Third-Party Services and Links</h3>
                <p className="text-gray-700 mb-3">
                  Our platform may contain links to third-party websites, services, or applications. We do not:
                </p>
                <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                  <li>Endorse or control third-party content or services</li>
                  <li>Guarantee the accuracy of third-party information</li>
                  <li>Accept responsibility for third-party actions or policies</li>
                  <li>Warrant the security of third-party websites</li>
                </ul>
                <p className="text-gray-700">
                  Your interactions with third parties are solely between you and the third party, and we are not responsible for any disputes or issues that arise.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">10. Disclaimers and Limitations</h3>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong>Service Availability:</strong> We strive to maintain service availability but cannot guarantee uninterrupted access. We may temporarily suspend or modify the service for maintenance or updates.
                  </p>
                  <p className="text-gray-700">
                    <strong>No Warranty:</strong> Our service is provided "as is" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
                  </p>
                  <p className="text-gray-700">
                    <strong>Limitation of Liability:</strong> In no event shall Housentia be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or use, arising out of or relating to your use of our service.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">11. Indemnification</h3>
                <p className="text-gray-700">
                  You agree to indemnify, defend, and hold harmless Housentia and its officers, directors, employees, and agents from and against any claims, damages, losses, liabilities, costs, or expenses (including reasonable attorneys' fees) arising out of or relating to your use of our service, violation of these terms, or violation of any third-party rights.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">12. Privacy and Data Protection</h3>
                <p className="text-gray-700">
                  Your privacy is important to us. Our collection, use, and protection of your personal information is governed by our Privacy Policy, which is incorporated into these terms by reference. By using our service, you consent to our collection and use of information as described in our Privacy Policy.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">13. Termination</h3>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    We may terminate or suspend your access to our service immediately, without prior notice, for any reason, including but not limited to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    <li>Violation of these terms</li>
                    <li>Fraudulent or illegal activity</li>
                    <li>Extended periods of inactivity</li>
                    <li>At our sole discretion</li>
                  </ul>
                  <p className="text-gray-700">
                    Upon termination, your right to use the service will cease immediately, and we may delete your account and related data.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">14. Governing Law and Dispute Resolution</h3>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    These terms shall be governed by and construed in accordance with the laws of the state where Housentia is incorporated, without regard to conflict of law principles.
                  </p>
                  <p className="text-gray-700">
                    Any disputes arising out of or relating to these terms or our service shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration shall be conducted in English and the seat of arbitration shall be in the state where Housentia is incorporated.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">15. Changes to Terms</h3>
                <p className="text-gray-700">
                  We reserve the right to modify these terms at any time. We will notify users of material changes by posting the updated terms on our website and updating the "Last updated" date. Your continued use of our service after such changes constitutes acceptance of the updated terms.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">16. Severability</h3>
                <p className="text-gray-700">
                  If any provision of these terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these terms will otherwise remain in full force and effect and enforceable.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">17. Entire Agreement</h3>
                <p className="text-gray-700">
                  These terms, together with our Privacy Policy and any other agreements referenced herein, constitute the entire agreement between you and Housentia regarding your use of our service and supersede all prior agreements and understandings.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">18. Contact Information</h3>
                <p className="text-gray-700 mb-3">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    Please use our <a href="/contactus" className="text-primary hover:text-accent transition-colors">Contact Us Form</a> or send email to <a href="mailto:info@housentia.com" className="text-primary hover:text-accent transition-colors">info@housentia.com</a>                   
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">19. Acknowledgment</h3>
                <p className="text-gray-700">
                  By using our service, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 