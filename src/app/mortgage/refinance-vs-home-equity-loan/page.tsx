import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refinance vs Home Equity Loan | Housentia',
  description:
    'Compare refinancing and home equity loans when you need to access home equity. Learn when each makes sense.',
  openGraph: { title: 'Refinance vs Home Equity Loan | Housentia', description: 'Compare refinance and home equity loan.' },
};

const ARTICLE_SLUG = 'refinance-vs-home-equity-loan';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Refinance vs Home Equity Loan' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/refinance-vs-home-equity-loan';

const FAQ_ITEMS = [
  {
    question: 'What is the main difference between refinance and home equity loan?',
    answer:
      'Refinance replaces your first mortgage—you get a new loan amount, interest rate, and mortgage payment. A home equity loan is a second mortgage; you keep your first loan and add a new one. You have two loans, two payments. Refinance = one loan. Home equity loan = first + second.',
  },
  {
    question: 'When is refinance better than a home equity loan?',
    answer:
      'When you want to lower your interest rate on the full balance, change your term, or do a large cash-out. Refinancing can simplify to one mortgage payment. A cash-out refinance replaces the first mortgage and gives you a lump sum. See What Is Cash-Out Refinance.',
  },
  {
    question: 'When is a home equity loan better than refinance?',
    answer:
      'When you have a low rate on your first mortgage and only need a smaller amount. You avoid refinancing the entire balance and preserve your current rate. You add a second mortgage with its own loan amount and payment. See What Is a Second Mortgage.',
  },
  {
    question: 'Which has lower closing costs?',
    answer:
      'Home equity loans may have lower closing costs than a full refinance because they are typically smaller and do not replace the first mortgage. Compare total cost and monthly payment. Your Loan Estimate (TRID) shows refinance costs.',
  },
  {
    question: 'How does TRID apply to refinance vs home equity loan?',
    answer:
      'Under TRID (TILA-RESPA Integrated Disclosure), a refinance triggers a Loan Estimate within 3 business days and a Closing Disclosure before closing. Home equity loans have disclosure requirements under TILA. Both must disclose the interest rate, loan amount, and closing costs.',
  },
  {
    question: 'Can I have a fixed rate on a home equity loan?',
    answer:
      'Yes. Home equity loans are typically fixed-rate, fixed-term second mortgages—unlike HELOCs, which are usually variable. You receive a lump sum and make a fixed mortgage payment. Compare the interest rate and payment to a cash-out refinance. See Refinance vs HELOC.',
  },
];

export default function RefinanceVsHomeEquityLoanPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Refinance vs Home Equity Loan', description: 'Compare refinance and home equity loan when accessing equity.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Refinance vs Home Equity Loan" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            When you need to access home equity, two common options are a <strong>refinance</strong> (often cash-out) and a <strong>home equity loan</strong>.
            A refinance replaces your first mortgage—you get a new <strong>loan amount</strong>, <strong>interest rate</strong>, and <strong>mortgage payment</strong>.
            A home equity loan is a <strong>second mortgage</strong>; you keep your first loan and add a new one. You have two loans and two payments.
          </p>
          <p className="text-gray-700 mb-4">
            Both are subject to consumer protection rules. Under TILA (Truth in Lending Act), RESPA (Real Estate Settlement Procedures Act), and TRID
            (TILA-RESPA Integrated Disclosure), a refinance triggers a <strong>Loan Estimate</strong> and Closing Disclosure. Home equity loans have disclosure
            requirements under TILA. See <Link href="/mortgage/refinance-vs-heloc" className="text-primary hover:underline font-medium">Refinance vs HELOC</Link>,{' '}
            <Link href="/mortgage/what-is-a-second-mortgage" className="text-primary hover:underline font-medium">What Is a Second Mortgage</Link>, and{' '}
            <Link href="/mortgage/what-is-cash-out-refinance" className="text-primary hover:underline font-medium">What Is Cash-Out Refinance</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            A <strong>cash-out refinance</strong> gives you a lump sum by replacing your first mortgage with a larger one. Your new <strong>mortgage payment</strong> is
            based on the full <strong>loan amount</strong>. A home equity loan adds a second lien. You keep your first mortgage and its rate. You receive a lump sum
            from the second loan and make a second <strong>mortgage payment</strong>. Your first payment stays the same.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Underwriting</strong> for both evaluates your credit, income, DTI, and LTV. Refinance <strong>closing costs</strong> can be substantial because
            you are replacing the entire first mortgage. Home equity loans may have lower costs. Compare the <strong>interest rate</strong>, total payment, and
            total cost. See <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>,{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>, and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>.
          </p>
        </section>

        {/* Design object 1: Comparison table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Refinance vs Home Equity Loan at a Glance</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Factor</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Refinance (Cash-Out)</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Home Equity Loan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Structure</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Replaces first mortgage; one loan</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Second mortgage; two loans</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Payments</td>
                  <td className="px-4 py-3 text-sm text-gray-700">One mortgage payment</td>
                  <td className="px-4 py-3 text-sm text-gray-700">First + second payment</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Rate</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Often fixed; applies to full balance</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Often fixed; second typically higher</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Closing costs</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Typically 2%–5% of loan</td>
                  <td className="px-4 py-3 text-sm text-gray-700">May be lower; smaller loan</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Your Loan Estimate (TRID) shows refinance terms. Compare to home equity loan disclosures.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            <strong>Refinance:</strong> You apply, the lender runs <strong>underwriting</strong>, orders an appraisal for LTV, and you receive a{' '}
            <strong>Loan Estimate</strong> within 3 business days. At closing, the new loan pays off the old one. You get a lump sum (cash-out) or a new
            rate/term. Your <strong>mortgage payment</strong> is based on the full <strong>loan amount</strong> and <strong>interest rate</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Home equity loan:</strong> You apply for a second mortgage. The lender establishes a <strong>loan amount</strong> based on your <strong>LTV</strong>.
            You receive a lump sum at closing. You make two <strong>mortgage payment</strong>s—one on the first, one on the second. Your first mortgage and its
            rate stay unchanged. Compare the total payment and <strong>closing costs</strong>. See <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>,{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>, and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Dana has a $280,000 balance at 6% and needs $50,000 for renovations. <strong>Option A—Cash-out refinance:</strong> New <strong>loan amount</strong> $330,000
            at 6.25%. One <strong>mortgage payment</strong> (P&I): about $2,031. <strong>Closing costs</strong>: ~$7,000. Dana receives $50,000 − $7,000 = $43,000.
            The first mortgage rate is replaced.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Option B—Home equity loan:</strong> Dana keeps the first mortgage ($280K at 6%, payment ~$1,679). Second mortgage: $50,000 at 8% (15-year).
            Second payment: about $478. Total: $2,157. Home equity <strong>closing costs</strong> may be lower (e.g., $2,500). Dana preserves the 6% rate on the
            first $280K. This is illustrative. See <Link href="/mortgage/refinance-cashout" className="text-primary hover:underline font-medium">Refinance & Cash-Out</Link> and{' '}
            <Link href="/mortgage/refinance-closing-costs-explained" className="text-primary hover:underline font-medium">Refinance Closing Costs Explained</Link>.
          </p>
        </section>

        {/* Design object 2: Key takeaway callout */}
        <div className="mb-10 rounded-xl border-l-4 border-teal-500 bg-teal-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-teal-900 mb-2">Key Takeaway</h3>
          <p className="text-teal-800 text-[15px] leading-relaxed">
            <strong>Refinance</strong> = replace first mortgage, one <strong>loan amount</strong>, one <strong>mortgage payment</strong>. <strong>Home equity loan</strong> = keep
            first mortgage, add second, two payments. If your first mortgage has a low <strong>interest rate</strong>, a home equity loan may preserve it. Compare
            total payment, <strong>closing costs</strong>, and <strong>Loan Estimate</strong> (TRID) for refinance.
          </p>
        </div>

        {/* Why This Matters for Homeowners */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homeowners</h2>
          <p className="text-gray-700 mb-4">
            If you have a low <strong>interest rate</strong> on your first mortgage, refinancing replaces it. A cash-out refinance resets your <strong>loan amount</strong> and
            <strong> mortgage payment</strong> on the full balance. A home equity loan keeps the first loan and adds a second. You preserve the rate on the
            first balance—but you have two <strong>mortgage payment</strong>s and the second typically has a higher rate.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>Loan Estimate</strong> (TRID) for a refinance shows the rate, payment, and <strong>closing costs</strong>. Compare to a home equity loan
            offer. Consider total payment, total cost, and whether you want to preserve your first mortgage. See{' '}
            <Link href="/mortgage/refinance" className="text-primary hover:underline font-medium">Refinance Overview</Link> and{' '}
            <Link href="/mortgage/what-is-mortgage-equity" className="text-primary hover:underline font-medium">What Is Mortgage Equity</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Refinance (Cash-Out)</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>One loan, one mortgage payment</li>
                <li>May lower rate on full balance</li>
                <li>Often fixed rate; predictable</li>
                <li>Higher closing costs; replaces first mortgage</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Home Equity Loan</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Preserves first mortgage rate</li>
                <li>Often fixed rate; lump sum</li>
                <li>May have lower closing costs</li>
                <li>Two loans, two payments; second rate often higher</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Comparing only the second loan rate:</strong> A home equity loan adds a second payment. Compare total monthly payment (first + second) to the refinance payment.</li>
            <li><strong>Ignoring that refinance replaces your first mortgage:</strong> If you have a low rate, refinancing resets it. A home equity loan keeps the first loan. Consider whether you want to preserve it.</li>
            <li><strong>Assuming home equity loan has no costs:</strong> Home equity loans have closing costs. They may be lower than a full refinance, but compare total cost.</li>
            <li><strong>Not factoring in DTI:</strong> Both payments count toward your DTI. Underwriting evaluates whether you can afford first + second. See <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>.</li>
            <li><strong>Confusing home equity loan with HELOC:</strong> A home equity loan is a lump-sum second mortgage with fixed payments. A HELOC is a revolving line. See <Link href="/mortgage/refinance-vs-heloc" className="text-primary hover:underline font-medium">Refinance vs HELOC</Link>.</li>
            <li><strong>Not reviewing the Loan Estimate:</strong> For a refinance, TRID requires a Loan Estimate within 3 business days. It shows your loan amount, rate, mortgage payment, and closing costs. Compare before deciding.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about refinance vs home equity loan">
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
            <li>Consumer Financial Protection Bureau (CFPB) – Home equity loans and lines of credit</li>
            <li>Fannie Mae – Selling Guide (refinance and second lien guidelines)</li>
            <li>Freddie Mac – Single-Family Seller/Servicer Guide (second liens)</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks className="mb-10" />
        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Housentia is not a lender, mortgage broker, or loan originator.</strong></p>
          <p className="text-gray-700 text-sm">Compare offers for your situation.</p>
        </section>
      </main>
    </div>
  );
}
