import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Servicing Transfer Explained | Housentia',
  description:
    'When your mortgage servicing is transferred, a new company collects your payments. Learn what happens, your rights under CFPB rules, and what to do when you receive a transfer notice.',
  openGraph: {
    title: 'Mortgage Servicing Transfer Explained | Housentia',
    description: 'Understand what happens when your mortgage servicing is transferred.',
  },
};

const ARTICLE_SLUG = 'mortgage-servicing-transfer-explained';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Mortgage Servicing Transfer Explained',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-servicing-transfer-explained';

const FAQ_ITEMS = [
  {
    question: 'Why does servicing transfer?',
    answer:
      'Lenders often sell loans to investors (Fannie Mae, Freddie Mac, etc.) in the secondary market. When a loan is sold, the right to service it—collect payments, manage escrow—may be transferred to another company. This is common and does not affect your loan amount, interest rate, or mortgage payment. See Mortgage Loan Delivery Process.',
  },
  {
    question: 'Do my loan terms change when servicing transfers?',
    answer:
      'No. Your interest rate, mortgage payment, due date, loan amount, and other terms stay the same. Only the company you send payments to may change. You cannot be charged a fee for the transfer. Your Loan Estimate and Closing Disclosure terms remain in effect.',
  },
  {
    question: 'What notices will I receive?',
    answer:
      'Under RESPA (enforced by the CFPB), you must receive a notice from your current servicer at least 15 days before the transfer (or with the next statement), and a notice from your new servicer within 15 days after the transfer. The notices include the effective date and new servicer contact information.',
  },
  {
    question: 'What should I do when I receive a transfer notice?',
    answer:
      'Update any automatic payments or online bill pay to send payments to the new servicer. Do not send payments to the old servicer after the transfer date. Save the new servicer\'s contact information. During a 60-day period after the transfer, the new servicer cannot report you late if you sent a timely payment to the old servicer.',
  },
  {
    question: 'Does a transfer affect my Loan Estimate or closing costs?',
    answer:
      'No. Your Loan Estimate and Closing Disclosure (TRID) set your terms at closing. Servicing transfers happen after closing. Your loan amount, interest rate, mortgage payment, and closing costs do not change. The transfer only changes who collects your payments.',
  },
  {
    question: 'Can I refuse a servicing transfer?',
    answer:
      'No. Your loan documents typically allow the lender or investor to sell or transfer the loan and servicing. You cannot prevent it. Your terms do not change. Update your payment setup with the new servicer when you receive the notice.',
  },
];

export default function MortgageServicingTransferExplainedPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Servicing Transfer Explained',
    description:
      'When your mortgage servicing is transferred, a new company collects your payments. Learn your rights and what to do.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Servicing Transfer Explained" breadcrumbs={BREADCRUMBS} />
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
            A <strong>servicing transfer</strong> occurs when the right to collect your <strong>mortgage payment</strong> and
            manage your account moves from one company to another. Lenders often sell loans to investors, and servicing
            may be transferred as part of that process. Your <strong>loan amount</strong>, <strong>interest rate</strong>,
            and <strong>mortgage payment</strong> do not change—only who you pay.
          </p>
          <p className="text-gray-700 mb-4">
            RESPA (Real Estate Settlement Procedures Act) governs servicing transfers. The CFPB enforces rules that
            protect borrowers. Your <strong>Loan Estimate</strong> and Closing Disclosure (TRID) set your terms at
            closing; a transfer happens after. First-time homebuyers may receive a transfer notice within months or
            years of closing. See{' '}
            <Link href="/mortgage/mortgage-loan-delivery-process" className="text-primary hover:underline font-medium">Mortgage Loan Delivery Process</Link> and{' '}
            <Link href="/mortgage/mortgage-payment-setup-after-closing" className="text-primary hover:underline font-medium">Mortgage Payment Setup After Closing</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            The servicer collects your <strong>mortgage payment</strong>, manages escrow (taxes, insurance), and handles
            customer service. When servicing transfers, a new company takes over. Your <strong>loan amount</strong>,{' '}
            <strong>interest rate</strong>, due date, and <strong>closing costs</strong> (already paid) do not change.
            You must update autopay, online bill pay, or any recurring payment to the new servicer.
          </p>
          <p className="text-gray-700 mb-4">
            RESPA requires notice before and after the transfer. You cannot be charged a fee. During a 60-day period,
            the new servicer cannot report you late if you sent a timely payment to the old servicer. See{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link> and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>.
          </p>
        </section>

        {/* Design object 1: Transfer timeline table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works: Transfer Timeline</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Stage</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">What Happens</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Before transfer</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Current servicer sends notice (15+ days before, or with next statement)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Transfer date</td>
                  <td className="px-4 py-3 text-sm text-gray-700">New servicer takes over; you make payments to new servicer</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">After transfer</td>
                  <td className="px-4 py-3 text-sm text-gray-700">New servicer sends notice within 15 days; update autopay, bill pay</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">60-day protection</td>
                  <td className="px-4 py-3 text-sm text-gray-700">No late report if you paid old servicer on time</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Your loan amount, interest rate, and mortgage payment do not change. RESPA protects you.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            Lenders originate loans and often sell them to investors (Fannie Mae, Freddie Mac, Ginnie Mae, or private
            investors) in the secondary market. When a loan is sold, the servicing rights may be transferred to a
            company that specializes in servicing. This is standard practice. Your <strong>Loan Estimate</strong> and
            Closing Disclosure (TRID) showed the original servicer at closing; that may change.
          </p>
          <p className="text-gray-700 mb-4">
            Under RESPA (enforced by the CFPB), you receive a notice from your current servicer at least 15 days before
            the transfer (or with the next statement), and a notice from your new servicer within 15 days after. The
            notices include the effective date and new servicer contact information. You cannot be charged a fee. Update
            autopay and online bill pay. See{' '}
            <Link href="/mortgage/what-is-a-mortgage-servicer" className="text-primary hover:underline font-medium">What Is a Mortgage Servicer</Link>,{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>, and{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Sam closed 8 months ago. The Closing Disclosure showed Servicer A. Sam has autopay set up for a{' '}
            <strong>mortgage payment</strong> of $2,100. In month 9, Sam receives a notice: servicing transfers to
            Servicer B on the 15th. Sam updates autopay to Servicer B&apos;s payment address. Servicer B sends a welcome
            notice within 15 days.
          </p>
          <p className="text-gray-700 mb-4">
            Sam&apos;s <strong>loan amount</strong>, <strong>interest rate</strong>, and payment do not change. Sam
            registers for online access with Servicer B. The example is illustrative. See{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link> and{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>.
          </p>
        </section>

        {/* Design object 2: Key takeaway callout */}
        <div className="mb-10 rounded-xl border-l-4 border-emerald-500 bg-emerald-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-emerald-900 mb-2">Key Takeaway</h3>
          <p className="text-emerald-800 text-[15px] leading-relaxed">
            Your <strong>loan amount</strong>, <strong>interest rate</strong>, and <strong>mortgage payment</strong> do
            not change when servicing transfers. Only who you pay changes. RESPA requires notice before and after. Update
            autopay and bill pay to the new servicer. You cannot be charged a fee. Your <strong>Loan Estimate</strong> and
            Closing Disclosure terms remain in effect.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            First-time buyers may receive a transfer notice within months of closing and wonder if something is wrong.
            Servicing transfers are normal. Lenders sell loans to investors; servicing may move to a different company.
            Your terms do not change. Understanding this helps you respond calmly: update your payment setup and save the
            new servicer&apos;s contact information.
          </p>
          <p className="text-gray-700 mb-4">
            RESPA protects you with required notices and a 60-day grace period. If you paid the old servicer on time
            but the payment arrived after the transfer, the new servicer cannot report you late during that window. See{' '}
            <Link href="/mortgage/mortgage-loan-delivery-process" className="text-primary hover:underline font-medium">Mortgage Loan Delivery Process</Link> and{' '}
            <Link href="/mortgage/mortgage-investor-guidelines-explained" className="text-primary hover:underline font-medium">Mortgage Investor Guidelines Explained</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Servicing Transfers</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Your loan terms do not change</li>
                <li>RESPA requires notice; 60-day late-report protection</li>
                <li>No fee for the transfer</li>
                <li>New servicer may offer updated online tools</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Considerations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Must update autopay, bill pay</li>
                <li>New login, new contact info</li>
                <li>May receive multiple notices</li>
                <li>Rare: servicer errors during transition</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Continuing to pay the old servicer after the transfer:</strong> After the transfer date, send payments to the new servicer. Payments sent to the old servicer may be forwarded, but update immediately to avoid confusion or delay.</li>
            <li><strong>Ignoring the transfer notice:</strong> Open and read it. Update autopay, online bill pay, and any recurring transfers. Save the new servicer&apos;s phone number, address, and website. Set up online access with the new servicer.</li>
            <li><strong>Thinking your terms changed:</strong> Your loan amount, interest rate, mortgage payment, and due date stay the same. The transfer does not change your Loan Estimate or Closing Disclosure terms. Do not assume you need to renegotiate.</li>
            <li><strong>Paying a &quot;transfer fee&quot;:</strong> You cannot be charged a fee for the transfer. If someone asks for a fee, it may be a scam. Contact your servicer or the CFPB.</li>
            <li><strong>Assuming you can refuse the transfer:</strong> Your loan documents allow the lender or investor to sell or transfer the loan. You cannot prevent it. Your terms do not change.</li>
            <li><strong>Not setting up online access with the new servicer:</strong> Register for the new servicer&apos;s online portal to view your balance, payment history, and escrow. See <Link href="/mortgage/mortgage-payment-setup-after-closing" className="text-primary hover:underline font-medium">Mortgage Payment Setup After Closing</Link>.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about servicing transfer">
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
            <li>Consumer Financial Protection Bureau (CFPB) – Real Estate Settlement Procedures Act (RESPA)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Mortgage servicing transfer rules</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Loan Estimate and Closing Disclosure (TRID)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Truth in Lending Act (TILA)</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          glossary={[{ label: 'Mortgage Servicing', href: '/mortgage-glossary/servicing' }, { label: 'Transfer of Servicing', href: '/mortgage-glossary/transfer-of-servicing' }]}
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
            If you have questions about a servicing transfer, contact your servicer or the CFPB.
          </p>
        </section>
      </main>
    </div>
  );
}
