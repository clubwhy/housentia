import Disclaimer from '@/components/Disclaimer';
import Link from 'next/link';

export default function DisclaimerPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center">Legal Disclaimer</h1>
      
      <Disclaimer variant="full" className="mb-8" />
      
      <div className="bg-white rounded-xl shadow p-8 space-y-6">
        <section>
          <h2 className="text-2xl font-bold mb-4">Educational and Informational Purpose</h2>
          <p className="text-gray-700 mb-4">
            This website provides general mortgage and financial information for educational and informational purposes only. 
            The content on this site is intended to help users understand mortgage concepts, loan types, and general financial 
            information related to homeownership.
          </p>
          <p className="text-gray-700">
            The information provided does not constitute financial, legal, or mortgage advice. It should not be used as a 
            substitute for professional advice from licensed mortgage professionals, financial advisors, or attorneys.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Not a Licensed Entity</h2>
          <p className="text-gray-700 mb-4">
            <strong>Housentia is not a licensed mortgage broker, lender, or loan originator.</strong> We do not originate, 
            broker, or service mortgage loans. We do not provide mortgage advice or make loan recommendations.
          </p>
          <p className="text-gray-700">
            Users should consult with a licensed mortgage professional in their state for personalized guidance, 
            prequalification, pre-approval, and loan application services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Calculators and Estimates</h2>
          <p className="text-gray-700 mb-4">
            All mortgage calculators, affordability tools, and refinance analyzers on this site provide estimates for 
            educational purposes only. These calculations are based on general assumptions and may not reflect actual rates, 
            terms, or eligibility requirements.
          </p>
          <p className="text-gray-700">
            Actual mortgage rates, terms, fees, and eligibility may vary significantly based on:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>Individual credit history and credit score</li>
            <li>Debt-to-income ratio</li>
            <li>Down payment amount</li>
            <li>Property type and location</li>
            <li>Lender-specific requirements and policies</li>
            <li>Current market conditions</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Rate Information</h2>
          <p className="text-gray-700 mb-4">
            Mortgage rate information displayed on this site is for informational purposes only. Rates are sourced from 
            third-party providers and may not reflect rates available to individual borrowers.
          </p>
          <p className="text-gray-700">
            Actual rates offered by lenders may differ based on individual qualifications, loan type, property location, 
            and other factors. Rate information should not be considered as a guarantee or commitment from any lender.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Partner Professionals</h2>
          <p className="text-gray-700 mb-4">
            Housentia may connect users with licensed mortgage professionals, including loan officers, brokers, and lenders. 
            These professionals are independent third parties and are not employees or agents of Housentia.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Housentia does not endorse or recommend any specific mortgage professional.</strong> We provide a platform 
            for users to connect with licensed professionals, but we do not:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Guarantee the quality of services provided by partner professionals</li>
            <li>Negotiate loan terms on behalf of users</li>
            <li>Intermediate or facilitate loan applications</li>
            <li>Store or display lender offers directly</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">No Financial Advice</h2>
          <p className="text-gray-700">
            This website does not provide personalized financial advice. Information about loan types, refinancing options, 
            or mortgage strategies should not be interpreted as recommendations for your specific situation. Always consult with 
            licensed professionals who can assess your individual circumstances.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Affiliate Disclosure</h2>
          <p className="text-gray-700">
            Some links on this site may be affiliate links. We may earn a commission at no additional cost to you when you 
            click on or make a purchase through these links. This does not affect our editorial content or the information 
            we provide.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p className="text-gray-700">
            If you have questions about this disclaimer or our services, please{' '}
            <Link href="/contactus" className="text-blue-600 hover:underline">contact us</Link>.
          </p>
        </section>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </main>
  );
}

