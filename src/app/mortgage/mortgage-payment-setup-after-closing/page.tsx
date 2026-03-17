import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Payment Setup After Closing | Housentia',
  description:
    'After closing, set up your mortgage payment with your servicer. Learn how to set up automatic payments, online access, and when your first payment is due.',
  openGraph: {
    title: 'Mortgage Payment Setup After Closing | Housentia',
    description: 'Understand how to set up your mortgage payment after closing.',
  },
};

const ARTICLE_SLUG = 'mortgage-payment-setup-after-closing';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Mortgage Payment Setup After Closing',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-payment-setup-after-closing';

const FAQ_ITEMS = [
  {
    question: 'When can I set up my mortgage payment?',
    answer:
      'You can typically set up payments once your loan is boarded with the servicer—usually within a few days to a couple of weeks of closing. Your welcome letter or first statement will include instructions and a link to register for online access. Your Closing Disclosure (provided under TRID) shows your servicer and first payment date.',
  },
  {
    question: 'Should I set up automatic payments?',
    answer:
      'Automatic payments can help you avoid missing a due date. Many servicers offer autopay, and some may offer a small rate discount for enrolling. Ensure you have sufficient funds in your account before the payment date. Your mortgage payment (principal and interest) is set at closing—autopay deducts that amount each month.',
  },
  {
    question: 'When is my first payment due?',
    answer:
      'Your first payment is typically due the month after the month in which you closed. For example, a March closing often means a May 1 first payment. Your Closing Disclosure and welcome letter will specify the exact date. Prepaid interest (from closing to first payment) is often collected at closing, so your first payment covers the first full month.',
  },
  {
    question: 'What if I do not receive a welcome letter?',
    answer:
      'Contact your servicer. Your Closing Disclosure shows who your servicer is. You can also find your servicer by checking the Mortgage Electronic Registration Systems (MERS) or by contacting your lender. RESPA requires servicers to provide certain notices; if you have not received a welcome packet within a few weeks, reach out.',
  },
  {
    question: 'Does my mortgage payment amount change if servicing transfers?',
    answer:
      'No. Your loan amount, interest rate, and mortgage payment stay the same if servicing transfers. You will receive a RESPA notice with the new servicer\'s contact information. Update your payment setup (autopay, online login) with the new servicer. Your payment amount does not change.',
  },
  {
    question: 'What is included in my mortgage payment?',
    answer:
      'Your payment typically includes principal and interest (P&I). If you have an escrow account, it also includes property taxes and insurance (PITI). The Closing Disclosure and your first statement show the breakdown. See What Is PITI and What Is Amortization for how payments are applied.',
  },
];

export default function MortgagePaymentSetupAfterClosingPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Payment Setup After Closing',
    description:
      'After closing, set up your mortgage payment with your servicer. Learn how to set up autopay and when your first payment is due.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Payment Setup After Closing" breadcrumbs={BREADCRUMBS} />
      <main
        className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800"
        style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}
      >
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">
          This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.
        </p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            After closing, your loan is boarded with the servicer and you need to set up how you will make payments.
            Your <strong>mortgage payment</strong>—principal and interest (P&I), and often taxes and insurance (PITI) if
            you have escrow—was set at closing. The <strong>loan amount</strong>, <strong>interest rate</strong>, and
            terms were disclosed in your <strong>Loan Estimate</strong> and Closing Disclosure (TRID). Now you must
            choose how to pay each month.
          </p>
          <p className="text-gray-700 mb-4">
            Most servicers offer online access, automatic payments, and other options. Setting this up early helps
            first-time homebuyers avoid missing the first payment. RESPA (Real Estate Settlement Procedures Act) governs
            servicer requirements. If servicing transfers later, you will receive a notice. See{' '}
            <Link href="/mortgage/mortgage-servicing-transfer-explained" className="text-primary hover:underline font-medium">Mortgage Servicing Transfer Explained</Link> and{' '}
            <Link href="/mortgage/mortgage-loan-boarding-process" className="text-primary hover:underline font-medium">Mortgage Loan Boarding Process</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            At closing, you signed the promissory note (your promise to repay the <strong>loan amount</strong>) and the
            mortgage. Your <strong>interest rate</strong> and <strong>mortgage payment</strong> are fixed (or
            adjustable per your note). The servicer collects your payments each month. You do not need to renegotiate
            terms—you only need to choose how to deliver the payment.
          </p>
          <p className="text-gray-700 mb-4">
            The servicer is the company shown on your Closing Disclosure. They may be the same as your lender or
            different after a servicing transfer. Your loan must be boarded (added to their system) before you can set
            up online access or autopay. See{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>,{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>, and{' '}
            <Link href="/mortgage/what-is-piti" className="text-primary hover:underline font-medium">What Is PITI</Link>.
          </p>
        </section>

        {/* Design object 1: Payment setup timeline table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works: Payment Setup Timeline</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Stage</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Timing</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">What Happens</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Closing</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Day 0</td>
                  <td className="px-4 py-3 text-sm text-gray-700">You sign; loan amount, rate, mortgage payment set</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Loan boarding</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Days 1–14</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Servicer adds your loan to their system</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Welcome letter</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Days 3–21</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Servicer sends instructions; link to register online</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Set up payment</td>
                  <td className="px-4 py-3 text-sm text-gray-700">When boarded</td>
                  <td className="px-4 py-3 text-sm text-gray-700">You enroll in autopay, online login, or other</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">First payment due</td>
                  <td className="px-4 py-3 text-sm text-gray-700">~1 month after closing</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Closing Disclosure shows exact date</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Timing varies by servicer. Set up early to avoid missing the first payment.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            After closing, the lender (or investor) delivers the loan to the servicer. The servicer boards the loan
            and sends you a welcome letter or first statement. This typically happens within a few days to two weeks.
            The letter includes your account number, payment address, and a link to register for online access.
          </p>
          <p className="text-gray-700 mb-4">
            Once registered, you can view your <strong>loan amount</strong>, <strong>interest rate</strong>,{' '}
            <strong>mortgage payment</strong>, and payment history. You can set up automatic debit (autopay), make
            one-time payments online, or mail a check. Your <strong>closing costs</strong> were paid at closing;
            prepaid interest (from closing to first payment) is often collected then. Your first full payment covers
            the first month. See{' '}
            <Link href="/mortgage/what-is-a-mortgage-payment" className="text-primary hover:underline font-medium">What Is a Mortgage Payment</Link>,{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>, and{' '}
            <Link href="/mortgage/mortgage-funding-process" className="text-primary hover:underline font-medium">Mortgage Funding Process</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Sam closes on March 15. The Closing Disclosure shows a <strong>mortgage payment</strong> of $2,100 (P&I) and
            first payment due May 1. Prepaid interest (March 15–April 30) was collected at closing. On March 22, Sam
            receives a welcome letter from the servicer. Sam registers online, sets up autopay, and confirms the May 1
            payment will be withdrawn automatically.
          </p>
          <p className="text-gray-700 mb-4">
            Sam&apos;s <strong>loan amount</strong> and <strong>interest rate</strong> do not change. The payment is
            debited on May 1. The example is illustrative. Servicer timing varies. See{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link> and{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>.
          </p>
        </section>

        {/* Design object 2: Key takeaway callout */}
        <div className="mb-10 rounded-xl border-l-4 border-sky-500 bg-sky-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-sky-900 mb-2">Key Takeaway</h3>
          <p className="text-sky-800 text-[15px] leading-relaxed">
            Set up your <strong>mortgage payment</strong> as soon as the servicer boards your loan. Your welcome letter
            or first statement has the link. Enroll in autopay or set a reminder before your first payment date. Your{' '}
            <strong>loan amount</strong>, <strong>interest rate</strong>, and payment were set at closing—you only
            choose how to pay each month.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            First-time buyers may not realize they need to actively set up payments after closing. The lender does not
            automatically deduct your payment—you must register and choose a method. Missing the first payment can
            result in late fees and may affect your credit. Setting up early gives you time to verify the amount and
            date before the due date.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>Closing Disclosure</strong> (provided under TRID) shows your servicer and first payment date.
            Keep it handy. If you close near the end of a month, your first payment may be due in about 5–6 weeks.
            If you close early in the month, it may be 6–8 weeks. See{' '}
            <Link href="/mortgage/closing-disclosure-explained" className="text-primary hover:underline font-medium">Closing Disclosure Explained</Link> and{' '}
            <Link href="/mortgage/mortgage-closing-cost-breakdown" className="text-primary hover:underline font-medium">Mortgage Closing Cost Breakdown</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Payment Options</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Autopay: Avoid late fees; some servicers offer small rate discounts</li>
                <li>Online access: View balance, payment history, escrow</li>
                <li>Multiple options: Online, mail, phone (varies by servicer)</li>
                <li>Payment amount fixed at closing</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Considerations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Must set up yourself—payment is not automatic</li>
                <li>Boarding can take 1–2 weeks; wait for welcome letter</li>
                <li>If servicing transfers, update payment info with new servicer</li>
                <li>Ensure sufficient funds before autopay date</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Assuming payment is automatic:</strong> You must set up payment. The lender does not auto-enroll you. Register and choose a method (autopay, online, mail) as soon as you receive the welcome letter.</li>
            <li><strong>Waiting until the last minute:</strong> Boarding can take 1–2 weeks. If you wait until a few days before the first payment, you may miss the deadline. Set up as soon as you can.</li>
            <li><strong>Ignoring the welcome letter:</strong> It may look like marketing. Open it promptly—it contains your account number, payment address, and registration link. Set a reminder for your first payment date.</li>
            <li><strong>Not updating after a servicing transfer:</strong> If servicing transfers later, you will receive a RESPA notice. Update your autopay and online login with the new servicer. Your mortgage payment amount does not change.</li>
            <li><strong>Confusing the lender with the servicer:</strong> The lender originated the loan. The servicer collects payments. They may be the same company or different. Your Closing Disclosure shows the servicer. Make payments to the servicer.</li>
            <li><strong>Missing the first payment:</strong> Late fees and possible credit impact. Set up autopay or a calendar reminder before the due date shown on your Closing Disclosure.</li>
          </ul>
        </section>

        {/* Payment Options (keep, expanded) */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Options</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li><strong>Online</strong> — Log in to the servicer&apos;s website and make a one-time payment or set up recurring payments</li>
            <li><strong>Automatic debit</strong> — Authorize the servicer to withdraw the <strong>mortgage payment</strong> from your bank account each month</li>
            <li><strong>Check or money order</strong> — Mail a check to the address on your statement</li>
            <li><strong>Phone</strong> — Some servicers allow payments by phone</li>
          </ul>
          <p className="text-gray-700">
            Automatic payments can help you avoid late fees. Ensure you have sufficient funds before the payment date.
            Your <strong>loan amount</strong> and <strong>interest rate</strong> do not change. See{' '}
            <Link href="/mortgage/what-is-a-mortgage-payment" className="text-primary hover:underline font-medium">What Is a Mortgage Payment</Link> and{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about payment setup">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <dl className="space-y-4">
            {FAQ_ITEMS.map((faq) => (
              <div key={faq.question} className="bg-gray-50 rounded-lg p-4">
                <dt className="font-semibold text-gray-900 mb-2">{faq.question}</dt>
                <dd className="text-gray-700">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Sources */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
            <li>Consumer Financial Protection Bureau (CFPB) – Loan Estimate and Closing Disclosure (TRID)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Truth in Lending Act (TILA)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Real Estate Settlement Procedures Act (RESPA)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Mortgage servicing and payment</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Servicing transfer rules</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          className="mb-10"
        />

        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">
            This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.
          </p>
          <p className="text-gray-700 text-sm mb-2">
            <strong>Housentia is not a lender, mortgage broker, or loan originator.</strong>
          </p>
          <p className="text-gray-700 text-sm">
            Payment options vary by servicer.
          </p>
        </section>
      </main>
    </div>
  );
}
