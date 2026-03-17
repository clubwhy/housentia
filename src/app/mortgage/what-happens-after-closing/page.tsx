import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Happens After Closing? A Guide for U.S. Homeowners | Housentia',
  description:
    'After closing you receive the keys, set up payments, and your loan is boarded with the servicer. Learn what to expect in the days and weeks after closing.',
  openGraph: {
    title: 'What Happens After Closing? A Guide for U.S. Homeowners | Housentia',
    description: 'Understand what happens after you close on your mortgage.',
  },
};

const ARTICLE_SLUG = 'what-happens-after-closing';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'What Happens After Closing?',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-happens-after-closing';

const FAQ_ITEMS = [
  {
    question: 'When do I make my first mortgage payment?',
    answer:
      'Your first payment is typically due the month after the month in which you closed. For example, if you closed in March, your first payment may be due May 1. Your closing documents and Closing Disclosure (provided under TRID) will specify the due date. Prepaid interest from closing to the first payment is often collected at closing.',
  },
  {
    question: 'When will I receive my first statement?',
    answer:
      'You typically receive your first statement from the servicer within a few weeks of closing. It will show your payment amount, due date, and how to make payments. If you do not receive one, contact your servicer. See Mortgage Payment Setup After Closing for more details.',
  },
  {
    question: 'Can my servicer change after closing?',
    answer:
      'Yes. Lenders often sell loans to investors, and servicing may be transferred. Your loan amount, interest rate, and mortgage payment do not change. You will receive a RESPA notice with the new servicer\'s contact information. See Mortgage Servicing Transfer Explained.',
  },
  {
    question: 'What documents should I keep after closing?',
    answer:
      'Keep your Closing Disclosure, promissory note, deed of trust or mortgage, and proof of title insurance. Store them in a safe place. You may need them for taxes, refinancing, or selling. Consider making digital copies as backup.',
  },
  {
    question: 'What if I do not receive a welcome letter from my servicer?',
    answer:
      'Contact your servicer. Your Closing Disclosure shows who your servicer is. RESPA requires servicers to provide certain notices. If you have not received a welcome packet within a few weeks of closing, reach out. You can also find your servicer via the Mortgage Electronic Registration Systems (MERS) or by contacting your lender.',
  },
  {
    question: 'How does my mortgage payment work after closing?',
    answer:
      'Your mortgage payment (principal and interest) is set at closing. If you have an escrow account, it also includes property taxes and insurance (PITI). Your first statement shows the breakdown. See What Is a Mortgage Payment and What Is Amortization for how payments are applied to principal over time.',
  },
];

export default function WhatHappensAfterClosingPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'What Happens After Closing? A Guide for U.S. Homeowners',
    description:
      'After closing you receive the keys, set up payments, and your loan is boarded. Learn what to expect.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Happens After Closing? A Guide for U.S. Homeowners" breadcrumbs={BREADCRUMBS} />
      <main
        className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800"
        style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}
      >
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">
          This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            After you close on your mortgage, several things happen behind the scenes and on your end. You receive the keys (for a purchase), your loan is boarded with the servicer, and you set up your <strong>mortgage payment</strong>. Understanding what to expect in the days and weeks after closing helps you stay on track and avoid common pitfalls.
          </p>
          <p className="text-gray-700 mb-4">
            Under TILA (Truth in Lending Act), RESPA (Real Estate Settlement Procedures Act), and TRID (TILA-RESPA Integrated Disclosure), you receive a <strong>Closing Disclosure</strong> at least three business days before closing. It summarizes your <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. After closing, the servicer uses this information to set up your account. See{' '}
            <Link href="/mortgage/what-is-loan-estimate" className="text-primary hover:underline font-medium">What Is Loan Estimate</Link>,{' '}
            <Link href="/mortgage/what-is-closing-costs" className="text-primary hover:underline font-medium">What Is Closing Costs</Link>, and{' '}
            <Link href="/mortgage/mortgage-payment-setup-after-closing" className="text-primary hover:underline font-medium">Mortgage Payment Setup After Closing</Link>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            &quot;What happens after closing&quot; refers to the sequence of events from the moment you sign your closing documents until your loan is fully set up with the servicer and you are making regular payments. The lender funds the loan, the deed is recorded, and the loan file is sent to the servicer. The servicer &quot;boards&quot; your loan—adds it to their system—so they can collect your <strong>mortgage payment</strong>, send statements, and manage your escrow account if you have one.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>loan amount</strong>, <strong>interest rate</strong>, and <strong>mortgage payment</strong> are fixed at closing. They do not change when servicing transfers or when the loan is sold to an investor. What changes is who you send your payment to—the servicer. See{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link> and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link> for how your payment is applied over the <strong>loan term</strong>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            For a purchase, you receive the keys once the loan is funded and the deed is recorded. The closing agent or your real estate agent will hand them over. For a refinance, you already have the keys—the new loan replaces the old one.
          </p>
          <p className="text-gray-700 mb-4">
            The lender sends the loan file to the servicer (or the servicer is the same as the lender). The servicer boards your loan—adds it to their system—so they can collect payments and send statements. During <strong>underwriting</strong>, your application was evaluated; after closing, the servicer receives the final loan data and sets up your account. Within a few weeks, you should receive a welcome letter with your account number, payment instructions, and how to set up online access.
          </p>
          <p className="text-gray-700 mb-4">
            Your first <strong>mortgage payment</strong> is typically due the month after the month in which you closed. There is often a period of prepaid interest (per diem) that you paid at closing. Your Closing Disclosure and welcome letter will show your due date and payment amount. Set up automatic payments or a reminder so you do not miss the first payment. See{' '}
            <Link href="/mortgage/mortgage-payment-setup-after-closing" className="text-primary hover:underline font-medium">Mortgage Payment Setup After Closing</Link> and{' '}
            <Link href="/mortgage/what-is-a-mortgage-payment" className="text-primary hover:underline font-medium">What Is a Mortgage Payment</Link>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome Package and Statements</h2>
          <p className="text-gray-700 mb-4">
            Within a few weeks of closing, you should receive a welcome letter or package from your servicer. It will include your account number, how to make payments, and how to set up online access. You will receive a monthly statement each billing cycle. The statement shows your <strong>mortgage payment</strong> breakdown—principal, interest, escrow (if applicable), and remaining balance.
          </p>
          <p className="text-gray-700 mb-4">
            If you do not receive a welcome letter within three to four weeks, contact your servicer. Your Closing Disclosure lists who your servicer is. RESPA requires servicers to provide certain notices. Registering for online access lets you view your balance, payment history, and escrow account. See{' '}
            <Link href="/mortgage/mortgage-payment-setup-after-closing" className="text-primary hover:underline font-medium">Mortgage Payment Setup After Closing</Link> for step-by-step guidance.
          </p>
        </section>

        {/* Design object 1: Timeline table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Typical Timeline After Closing</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">When</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">What Happens</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Day of closing</td>
                  <td className="px-4 py-3 text-sm text-gray-700">You sign documents; loan funds; deed recorded; keys handed over (purchase)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Within 1–2 weeks</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Lender sends loan file to servicer; servicer boards the loan</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Within 2–4 weeks</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Welcome letter and first statement arrive; you can set up online access and autopay</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Month after closing month</td>
                  <td className="px-4 py-3 text-sm text-gray-700">First mortgage payment typically due</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Timelines vary by lender and servicer. Your Closing Disclosure and welcome letter will specify your dates.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Jordan closes on a $320,000 home in April with a conventional loan. The <strong>loan amount</strong> is $304,000 (5% down), <strong>interest rate</strong> 6.75%, and <strong>mortgage payment</strong> about $1,972 (P&I + PMI). At the closing table, Jordan receives the keys and a copy of the Closing Disclosure.
          </p>
          <p className="text-gray-700 mb-4">
            Within two weeks, Jordan receives a welcome letter from the servicer with an account number and a link to register online. Jordan sets up automatic payments for the 1st of each month. The first payment is due June 1—the month after the month of closing. Jordan had paid prepaid interest at closing for April 15–30, so the June 1 payment covers the first full month (May). Jordan keeps the Closing Disclosure, promissory note, and deed in a fireproof safe. This is illustrative. See{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link> and{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>.
          </p>
        </section>

        {/* Design object 2: Key takeaway callout */}
        <div className="mb-10 rounded-xl border-l-4 border-teal-500 bg-teal-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-teal-900 mb-2">Key Takeaway</h3>
          <p className="text-teal-800 text-[15px] leading-relaxed">
            After closing, you receive the keys (purchase), your loan is boarded with the servicer, and you set up your <strong>mortgage payment</strong>. Your first payment is typically due the month after the month in which you closed. Keep your Closing Disclosure, promissory note, and deed. Your <strong>loan amount</strong>, <strong>interest rate</strong>, and <strong>mortgage payment</strong> do not change if servicing transfers. See{' '}
            <Link href="/mortgage/mortgage-payment-setup-after-closing" className="text-teal-700 underline font-medium">Mortgage Payment Setup After Closing</Link>.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            Knowing what happens after closing helps you plan. You will need to set up payments, keep important documents, and understand when your first payment is due. Missing the first payment can hurt your credit and may trigger late fees. Setting up autopay early reduces the risk.
          </p>
          <p className="text-gray-700 mb-4">
            If your servicer changes (common when lenders sell loans), your <strong>loan amount</strong>, <strong>interest rate</strong>, and <strong>mortgage payment</strong> stay the same. You will receive a RESPA notice with the new servicer&apos;s contact information. Update your payment setup with the new servicer. See{' '}
            <Link href="/mortgage/mortgage-servicing-transfer-explained" className="text-primary hover:underline font-medium">Mortgage Servicing Transfer Explained</Link> and{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits of Understanding the Process</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>You know when to expect your first statement and payment</li>
                <li>You can set up autopay early to avoid missed payments</li>
                <li>You keep the right documents for taxes and refinancing</li>
                <li>You are prepared if servicing transfers</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What Can Go Wrong</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Missing the first payment if you do not set a reminder</li>
                <li>Losing closing documents needed for taxes or refinancing</li>
                <li>Not updating payment info when servicing transfers</li>
                <li>Confusion about due dates (first payment timing)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Assuming the first payment is due immediately:</strong> Your first payment is typically due the month after the month in which you closed. Your Closing Disclosure and welcome letter specify the date. Do not assume—check.</li>
            <li><strong>Not setting up autopay or a reminder:</strong> Missing the first payment can hurt your credit and trigger late fees. Set up autopay as soon as you receive your welcome letter, or set a calendar reminder.</li>
            <li><strong>Throwing away closing documents:</strong> Keep your Closing Disclosure, promissory note, deed of trust or mortgage, and proof of title insurance. You may need them for taxes, refinancing, or selling. Make digital copies.</li>
            <li><strong>Ignoring a servicing transfer notice:</strong> If your servicer changes, you must send payments to the new servicer. Your loan terms do not change. Update your autopay and online login. See <Link href="/mortgage/mortgage-servicing-transfer-explained" className="text-primary hover:underline font-medium">Mortgage Servicing Transfer Explained</Link>.</li>
            <li><strong>Not verifying the payment amount:</strong> Your <strong>mortgage payment</strong> is on your Closing Disclosure and first statement. If something looks wrong, contact your servicer before the first due date.</li>
            <li><strong>Assuming you will get a paper statement:</strong> Some servicers default to e-statements. Register for online access to ensure you receive notices and can view your balance, payment history, and escrow.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Documents to Keep</h2>
          <p className="text-gray-700 mb-4">
            Keep your Closing Disclosure, promissory note, deed of trust or mortgage, and proof of title insurance in a safe place. You may need them for tax purposes, refinancing, or when you sell. Consider making digital copies as backup.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about what happens after closing">
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

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
            <li>Consumer Financial Protection Bureau (CFPB) – Loan Estimate and Closing Disclosure (TRID)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Truth in Lending Act (TILA)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Real Estate Settlement Procedures Act (RESPA)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Mortgage servicing</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Owning a home</li>
            <li>U.S. Department of Housing and Urban Development (HUD) – Buying a home</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          glossary={[{ label: 'Mortgage Servicing', href: '/mortgage-glossary/servicing' }]}
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
            Procedures vary by lender and servicer.
          </p>
        </section>
      </main>
    </div>
  );
}
