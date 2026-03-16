import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gift Funds for Down Payment Explained | Housentia',
  description:
    'Gift funds from family can help with down payment and closing costs. Learn gift letter requirements and donor rules.',
  openGraph: { title: 'Gift Funds for Down Payment Explained | Housentia', description: 'Understand gift funds for down payment.' },
};

const ARTICLE_SLUG = 'gift-funds-for-down-payment-explained';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Gift Funds for Down Payment Explained' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/gift-funds-for-down-payment-explained';

const FAQ_ITEMS = [
  {
    question: 'Who can gift money for a down payment?',
    answer:
      'Family members (spouse, parent, sibling, grandparent, aunt, uncle, etc.) for most programs. Some programs allow gifts from employers, labor unions, or charitable organizations. Lenders and loan types have different rules—check with your lender.',
  },
  {
    question: 'What is a gift letter?',
    answer:
      'A signed letter from the donor stating the funds are a gift with no repayment expected. It typically includes the donor\'s name, relationship, amount, and confirmation that the borrower has no obligation to repay. Lenders require it and may require proof of transfer.',
  },
  {
    question: 'What part of the down payment can be a gift?',
    answer:
      'Conventional: often 100% for primary residence with 20%+ down; some programs allow 100% with less down from family. FHA and VA: often 100% from eligible donors. Investment property rules are stricter—often requiring borrower funds.',
  },
  {
    question: 'Are gift funds taxable?',
    answer:
      'Gift tax may apply to the donor above annual exclusion amounts ($18,000 per recipient in 2024; amounts change). Borrowers typically do not owe income tax on receiving a gift. Consult a tax professional for your situation.',
  },
  {
    question: 'When do I need to document the gift?',
    answer:
      'Before or during underwriting. The lender will verify the gift letter and proof that funds were transferred into your account. Plan ahead—transfers can take a few days, and the lender may need to see the paper trail.',
  },
  {
    question: 'Can gift funds cover closing costs too?',
    answer:
      'Yes, in many cases. Gift funds can often be used for down payment and closing costs. The gift letter should specify the total amount and its intended use. Some programs limit how much of closing costs can be gifted.',
  },
];

export default function GiftFundsForDownPaymentExplainedPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Gift Funds for Down Payment Explained', description: 'Learn about gift funds for down payment.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Gift Funds for Down Payment Explained" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            <strong>Gift funds for down payment</strong> allow family members—and in some cases employers or other sources—to help you buy a home. The gift reduces the amount you need to save and can make homeownership possible sooner. Lenders accept gift funds for many loan programs but require documentation: a gift letter and proof that the funds were transferred. Rules vary by loan type and lender.
          </p>
          <p className="text-gray-700 mb-4">
            Your down payment and <strong>closing costs</strong> are part of the cash you need at closing. Under TRID (TILA-RESPA Integrated Disclosure), your <strong>Loan Estimate</strong> shows the estimated cash to close. If a family member is gifting funds, the lender will verify the source during <strong>underwriting</strong>. See <Link href="/mortgage/down-payment-requirements-explained" className="text-primary hover:underline font-medium">Down Payment Requirements Explained</Link>, <Link href="/mortgage/what-assets-count-for-mortgage-approval" className="text-primary hover:underline font-medium">What Assets Count for Mortgage Approval</Link>, and <Link href="/mortgage/first-time-home-buyer" className="text-primary hover:underline font-medium">First-Time Home Buyer</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            A gift is money given with no expectation of repayment. For mortgage purposes, the lender must confirm that the funds are a true gift—not a loan in disguise. If you must repay the donor, it is a loan, and the lender may count it as debt, which affects your <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">debt-to-income ratio (DTI)</Link>. The gift letter states that no repayment is expected.
          </p>
          <p className="text-gray-700 mb-4">
            Gift funds can cover your down payment and often your <strong>closing costs</strong>. If you are buying a $300,000 home with 10% down, you need $30,000 for the down payment plus <strong>closing costs</strong> (often 2–5% of the <strong>loan amount</strong>). A $35,000 gift could cover both. Your <strong>loan amount</strong> would still be $270,000—the gift does not change the <strong>interest rate</strong> or <strong>mortgage payment</strong>; it simply provides the cash you need at closing. See <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link> for how down payment affects your loan.
          </p>
          <p className="text-gray-700">
            Eligible donors vary by program. Conventional loans typically allow gifts from family members (spouse, parent, sibling, grandparent, aunt, uncle, etc.). FHA and VA have similar rules. Some programs allow employer gifts or grants. Investment properties often have stricter rules—the borrower may need to contribute a portion from their own funds.
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            The donor transfers funds into your account (or an account you will use for the purchase). You provide the lender with a signed gift letter. The letter typically includes: donor name and relationship, gift amount, property address, statement that no repayment is expected, and donor signature. The lender will <strong>underwrite</strong> your application and verify the gift—they may request bank statements showing the deposit and the donor&apos;s ability to give (e.g., their bank statement showing the withdrawal).
          </p>
          <p className="text-gray-700 mb-4">
            Timing matters. The gift should be in your account before or during <strong>underwriting</strong>. Large deposits that are not documented can raise questions. If the gift arrives shortly before closing, the lender needs to see the paper trail: the donor&apos;s withdrawal, the transfer to you, and your deposit. Some lenders require the gift to be &quot;seasoned&quot;—in your account for a certain period—though many accept recent gifts with proper documentation.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>Loan Estimate</strong> shows the cash to close. The RESPA (Real Estate Settlement Procedures Act) and TILA (Truth in Lending Act) require clear disclosure. The gift does not appear as a loan or debt—it is your asset once received. Your <strong>mortgage payment</strong> is based on your <strong>loan amount</strong> and <strong>interest rate</strong>, not on the gift. See <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link> and <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
          </p>
          <p className="text-gray-700">
            Program rules: Conventional loans often allow 100% gifted down payment for primary residence when the down payment is 20% or more. With less than 20% down, some programs require the borrower to contribute a portion (e.g., 5% from own funds). FHA and VA typically allow 100% of the down payment from eligible donors. Check your specific program.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Alex is buying a $350,000 home with 10% down. They need $35,000 for the down payment plus about $8,000 in <strong>closing costs</strong>—$43,000 total. Alex has saved $15,000. Their parents gift $28,000. The parents write a gift letter stating the amount, that it is a gift with no repayment expected, and their relationship to Alex. They transfer the funds to Alex&apos;s account. Alex provides the lender with the gift letter and bank statements showing the deposit.
          </p>
          <p className="text-gray-700 mb-4">
            The lender verifies the gift during <strong>underwriting</strong>. They confirm the donor&apos;s ability to give (the parents&apos; bank statement showing the withdrawal) and that the funds landed in Alex&apos;s account. Alex&apos;s <strong>loan amount</strong> is $315,000. Their <strong>mortgage payment</strong> and <strong>interest rate</strong> are based on that amount—the gift does not affect the loan terms. Alex closes with the combined $43,000 (their savings plus the gift). The example is illustrative—actual requirements vary by lender and program.
          </p>
          <p className="text-gray-700">
            If Alex had been buying an investment property, the conventional program might have required 5% or more from their own funds. Gift rules for second homes and investment properties are often stricter.
          </p>
        </section>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            For first-time homebuyers, saving for a down payment is often the biggest hurdle. Gift funds can bridge the gap. Without the gift, Alex might have needed another year or two to save. With it, they can buy now. The gift does not increase your <strong>loan amount</strong> or <strong>mortgage payment</strong>—it simply provides the cash you need at closing. Your <strong>interest rate</strong> is based on your credit, <strong>loan amount</strong>, and <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">LTV</Link>, not on whether you used gift funds.
          </p>
          <p className="text-gray-700 mb-4">
            Plan ahead. The gift letter and transfer should happen early enough for the lender to verify. Do not make the gift at the last minute—<strong>underwriting</strong> needs time to document it. If the donor is in another state or country, wire transfers are common. Keep records of the transfer. The lender may ask for the donor&apos;s bank statement showing the withdrawal and your statement showing the deposit. See <Link href="/mortgage/down-payment-requirements-explained" className="text-primary hover:underline font-medium">Down Payment Requirements Explained</Link> for how much you need.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Using Gift Funds</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Pros</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Can buy sooner with less personal savings</li>
                <li>Family can help without lending (no repayment)</li>
                <li>Accepted by most conventional, FHA, and VA programs</li>
                <li>Can cover down payment and closing costs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Cons / Considerations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Documentation required (gift letter, proof of transfer)</li>
                <li>Donor may have gift tax considerations</li>
                <li>Investment property rules often restrict gifts</li>
                <li>Must be a true gift—no repayment expected</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Treating a loan as a gift:</strong> If you must repay the donor, it is a loan. The lender may count it as debt and it can affect your DTI. The gift letter must state no repayment is expected.</li>
            <li><strong>Waiting until the last minute:</strong> Transfer funds and get the gift letter early. <strong>Underwriting</strong> needs time to verify. Last-minute deposits can delay closing.</li>
            <li><strong>Incomplete gift letter:</strong> The letter should include donor name, relationship, amount, property address, and the no-repayment statement. Ask your lender for a template.</li>
            <li><strong>Not documenting the transfer:</strong> The lender needs to see the paper trail—donor&apos;s withdrawal and your deposit. Keep bank statements.</li>
            <li><strong>Assuming all programs allow 100% gift:</strong> Investment property and some conventional programs require borrower funds. Check your program rules.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about gift funds">
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
            <li>U.S. Department of Housing and Urban Development (HUD) – FHA Single Family Housing Policy Handbook</li>
            <li>Internal Revenue Service (IRS) – Gift Tax</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks className="mb-10" />

        {/* Educational Disclaimer */}
        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Housentia is not a lender, mortgage broker, or loan originator.</strong></p>
          <p className="text-gray-700 text-sm">Requirements vary by lender and program.</p>
        </section>
      </main>
    </div>
  );
}
