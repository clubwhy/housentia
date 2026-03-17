import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refinance vs HELOC | Housentia',
  description:
    'Compare refinancing and a HELOC when accessing home equity. Learn when each makes sense for rate reduction vs. flexible borrowing.',
  openGraph: { title: 'Refinance vs HELOC | Housentia', description: 'Compare refinance and HELOC.' },
};

const ARTICLE_SLUG = 'refinance-vs-heloc';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Refinance vs HELOC' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/refinance-vs-heloc';

const FAQ_ITEMS = [
  {
    question: 'What is the main difference between refinance and HELOC?',
    answer:
      'Refinance replaces your first mortgage or adds a new one—you get a lump sum (cash-out) or a new rate/term. A HELOC is a revolving line of credit; you borrow as needed and pay interest only on what you use. Refinance = new loan amount, new mortgage payment. HELOC = credit line with flexible draws.',
  },
  {
    question: 'When is refinance better than a HELOC?',
    answer:
      'When you want to lower your interest rate, lock in a fixed mortgage payment, or need a large lump sum. A cash-out refinance replaces your first mortgage and gives you cash. Compare the new loan amount, interest rate, mortgage payment, and closing costs. See What Is Cash-Out Refinance.',
  },
  {
    question: 'When is a HELOC better than refinance?',
    answer:
      'When you need flexible access to funds over time (e.g., ongoing projects), when you want to preserve your current first mortgage rate, or when you need smaller amounts. HELOCs typically have variable rates. You pay interest only on the balance. See HELOC Overview.',
  },
  {
    question: 'Do HELOCs have variable rates?',
    answer:
      'Most HELOCs have variable interest rates tied to an index. Refinances can be fixed or adjustable. Consider rate risk when choosing. Your Loan Estimate (TRID) shows the rate and payment for a refinance. HELOC disclosures show the variable rate terms.',
  },
  {
    question: 'How does TRID apply to refinance vs HELOC?',
    answer:
      'Under TRID (TILA-RESPA Integrated Disclosure), a refinance triggers a Loan Estimate within 3 business days and a Closing Disclosure before closing. HELOCs have different disclosure requirements under TILA. Both must disclose the interest rate, fees, and terms.',
  },
  {
    question: 'Can I have both a first mortgage and a HELOC?',
    answer:
      'Yes. A HELOC is typically a second lien. You keep your first mortgage and its rate. You add a HELOC for flexible borrowing. Your total debt (first + HELOC balance) affects your LTV. Underwriting for a HELOC evaluates your DTI with both payments. See What Is LTV and What Is DTI.',
  },
];

export default function RefinanceVsHelocPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Refinance vs HELOC', description: 'Compare refinance and HELOC when accessing equity.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Refinance vs HELOC" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            When you want to access home equity, two common options are a <strong>refinance</strong> (often cash-out) and a <strong>HELOC</strong> (home equity
            line of credit). A refinance replaces your first mortgage—you get a new <strong>loan amount</strong>, <strong>interest rate</strong>, and{' '}
            <strong>mortgage payment</strong>. A HELOC is a revolving line of credit; you borrow as needed and pay interest only on what you use.
          </p>
          <p className="text-gray-700 mb-4">
            Both are subject to consumer protection rules. Under TILA (Truth in Lending Act), RESPA (Real Estate Settlement Procedures Act), and TRID
            (TILA-RESPA Integrated Disclosure), a refinance triggers a <strong>Loan Estimate</strong> and Closing Disclosure. HELOCs have separate disclosure
            requirements. See <Link href="/mortgage/heloc" className="text-primary hover:underline font-medium">HELOC Overview</Link>,{' '}
            <Link href="/mortgage/refinance-vs-home-equity-loan" className="text-primary hover:underline font-medium">Refinance vs Home Equity Loan</Link>, and{' '}
            <Link href="/mortgage/what-is-cash-out-refinance" className="text-primary hover:underline font-medium">What Is Cash-Out Refinance</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            A <strong>cash-out refinance</strong> gives you a lump sum. The new <strong>loan amount</strong> exceeds your payoff; you receive the difference
            minus <strong>closing costs</strong>. Your <strong>mortgage payment</strong> is based on the full loan. A HELOC keeps your first mortgage and
            adds a second lien. You draw from the line as needed; you pay interest only on the balance. Your first <strong>mortgage payment</strong> stays the same.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Underwriting</strong> for both evaluates your credit, income, DTI, and LTV. Refinance <strong>closing costs</strong> can be substantial;
            HELOCs may have lower upfront fees. Compare the <strong>interest rate</strong>, payment, and total cost. See{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>,{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>, and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>.
          </p>
        </section>

        {/* Design object 1: Comparison table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Refinance vs HELOC at a Glance</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Factor</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Refinance (Cash-Out)</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">HELOC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Structure</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Replaces first mortgage; lump sum</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Second lien; revolving line</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Rate</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Often fixed</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Usually variable</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Payment</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Full mortgage payment on loan amount</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Interest on balance; draw as needed</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Closing costs</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Typically 2%–5% of loan</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Often lower; may have annual fee</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Your Loan Estimate (TRID) shows refinance terms. Compare to HELOC disclosures.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            <strong>Refinance:</strong> You apply, the lender runs <strong>underwriting</strong>, orders an appraisal for LTV, and you receive a{' '}
            <strong>Loan Estimate</strong> within 3 business days. At closing, the new loan pays off the old one. You get a lump sum (cash-out) or a new
            rate/term. Your <strong>mortgage payment</strong> is based on the <strong>loan amount</strong> and <strong>interest rate</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>HELOC:</strong> You apply for a credit line. The lender establishes a limit based on your <strong>LTV</strong>. You draw as needed during
            the draw period. You pay interest only on the balance. Your first mortgage stays in place. Compare the rate, <strong>closing costs</strong>, and
            flexibility. See <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>,{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>, and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Chris has a $250,000 balance at 7% and needs $40,000 for home improvements. <strong>Option A—Cash-out refinance:</strong> New <strong>loan amount</strong> $290,000
            at 6.5%. New <strong>mortgage payment</strong> (P&I): about $1,833. <strong>Closing costs</strong>: ~$6,000. Chris receives $40,000 − $6,000 = $34,000.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Option B—HELOC:</strong> Chris keeps the first mortgage ($250K at 7%, payment ~$1,663). HELOC for $40,000 at variable 8.5%. Chris draws $40,000.
            Interest-only payment: about $283. Total payment: $1,946. HELOC <strong>closing costs</strong> may be lower. Chris pays interest only on the $40K.
            This is illustrative. Compare your own numbers. See <Link href="/mortgage/refinance-cashout" className="text-primary hover:underline font-medium">Refinance & Cash-Out</Link> and <Link href="/mortgage/refinance-closing-costs-explained" className="text-primary hover:underline font-medium">Refinance Closing Costs Explained</Link>.
          </p>
        </section>

        {/* Design object 2: Key takeaway callout */}
        <div className="mb-10 rounded-xl border-l-4 border-teal-500 bg-teal-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-teal-900 mb-2">Key Takeaway</h3>
          <p className="text-teal-800 text-[15px] leading-relaxed">
            <strong>Refinance</strong> = replace first mortgage, new <strong>loan amount</strong>, new <strong>mortgage payment</strong>, lump sum. <strong>HELOC</strong> = keep
            first mortgage, revolving line, pay interest on balance, flexible draws. Compare <strong>interest rate</strong>, <strong>closing costs</strong>, and
            whether you need a lump sum or ongoing access. Your <strong>Loan Estimate</strong> (TRID) shows refinance terms.
          </p>
        </div>

        {/* Why This Matters for Homeowners */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homeowners</h2>
          <p className="text-gray-700 mb-4">
            If you want to lower your <strong>interest rate</strong> and need cash, a cash-out refinance may make sense—but you pay <strong>closing costs</strong> and
            reset your <strong>mortgage payment</strong> on a larger <strong>loan amount</strong>. If you have a low rate on your first mortgage and need flexible
            access over time, a HELOC may be better. You keep the first loan and add a second.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>Loan Estimate</strong> (TRID) for a refinance shows the rate, payment, and costs. Compare to HELOC disclosures. Consider rate risk: HELOCs
            are usually variable. See <Link href="/mortgage/refinance" className="text-primary hover:underline font-medium">Refinance Overview</Link> and{' '}
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
                <li>Lump sum; may lower rate on first mortgage</li>
                <li>Often fixed rate; predictable payment</li>
                <li>One loan, one mortgage payment</li>
                <li>Higher closing costs; resets loan term</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">HELOC</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Flexible draws; pay interest on balance only</li>
                <li>Keep first mortgage and its rate</li>
                <li>Often lower upfront costs</li>
                <li>Variable rate; repayment phase after draw</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Comparing only the interest rate:</strong> Refinance has closing costs and a new loan amount. HELOC has variable rate risk. Compare total cost and payment over your expected use period.</li>
            <li><strong>Ignoring that refinance replaces your first mortgage:</strong> If you have a low rate, refinancing resets it. A HELOC keeps your first loan. Consider whether you want to preserve your current rate.</li>
            <li><strong>Assuming HELOC has no costs:</strong> HELOCs may have application fees, annual fees, or closing costs. Compare to refinance closing costs.</li>
            <li><strong>Not considering variable rate risk:</strong> HELOC rates can rise. If rates increase, your HELOC payment rises. A fixed-rate refinance locks your payment. See <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>.</li>
            <li><strong>Overdrawing the HELOC:</strong> Your LTV and DTI matter. Drawing the full line increases your debt. Ensure you can afford the payment. See <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link> and <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>.</li>
            <li><strong>Not reviewing the Loan Estimate:</strong> For a refinance, TRID requires a Loan Estimate within 3 business days. It shows your loan amount, rate, mortgage payment, and closing costs. Compare before deciding.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about refinance vs HELOC">
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
            <li>Consumer Financial Protection Bureau (CFPB) – Home equity lines of credit</li>
            <li>Fannie Mae – Selling Guide (refinance and HELOC guidelines)</li>
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
