import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is a HomeReady Loan? | Housentia',
  description:
    'HomeReady is a Fannie Mae program for low- to moderate-income borrowers. Learn about 3% down, reduced MI, and income limits.',
  openGraph: { title: 'What Is a HomeReady Loan? | Housentia', description: 'Understand Fannie Mae HomeReady loans.' },
};

const ARTICLE_SLUG = 'homeready-loan';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'What Is a HomeReady Loan?' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/homeready-loan';

const FAQ_ITEMS = [
  {
    question: 'What is a HomeReady loan?',
    answer:
      'HomeReady is a Fannie Mae program for low- to moderate-income borrowers. It offers 3% down payment, reduced mortgage insurance, and flexible funding (e.g., gifts, grants, community seconds). The property must be owner-occupied.',
  },
  {
    question: 'Who qualifies for HomeReady?',
    answer:
      'Borrowers must meet income limits (typically 80% of area median income) and complete homebuyer education. The property must be a primary residence. First-time and repeat buyers may qualify. Eligibility varies by lender and location.',
  },
  {
    question: 'How does HomeReady differ from standard conventional?',
    answer:
      'HomeReady allows 3% down with reduced PMI compared to standard conventional. Income limits apply. It is designed for low- to moderate-income buyers. Standard conventional may require 5% or more down and has no income limit. PMI can be removed at 80% LTV for both.',
  },
  {
    question: 'Is HomeReady the same as Home Possible?',
    answer:
      'No. HomeReady is Fannie Mae; Home Possible is Freddie Mac. Both offer 3% down for eligible borrowers. Income limits and eligibility rules differ. Compare both if you qualify.',
  },
  {
    question: 'Can I use gift funds for my HomeReady down payment?',
    answer:
      'Yes. HomeReady allows flexible funding including gifts from family members. See our Gift Funds for Down Payment Explained guide. Documentation is required.',
  },
  {
    question: 'Where does HomeReady appear on the Loan Estimate?',
    answer:
      'The Loan Estimate shows your loan amount, interest rate, mortgage payment, and closing costs. Under TRID, you receive it within 3 business days of application. The program name may appear in the loan details.',
  },
];

export default function HomereadyLoanPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'What Is a HomeReady Loan?', description: 'HomeReady offers 3% down for eligible borrowers. Learn requirements.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Is a HomeReady Loan?" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            A <strong>HomeReady loan</strong> is a Fannie Mae program for low- to moderate-income borrowers. It offers a 3% down payment, reduced <Link href="/mortgage/what-is-pmi" className="text-primary hover:underline font-medium">private mortgage insurance (PMI)</Link>, and flexible funding options—including gifts, grants, and community second mortgages. If you qualify, it can lower your upfront cost and your <strong>mortgage payment</strong> compared to a standard conventional loan.
          </p>
          <p className="text-gray-700 mb-4">
            HomeReady is a conventional loan—it follows Fannie Mae guidelines. It is not FHA or VA. Your <strong>loan amount</strong>, <strong>interest rate</strong>, and <strong>closing costs</strong> are disclosed on the <strong>Loan Estimate</strong> you receive within 3 business days of application under TRID (TILA-RESPA Integrated Disclosure). See <Link href="/mortgage/home-possible-loan" className="text-primary hover:underline font-medium">What Is a Home Possible Loan</Link>, <Link href="/mortgage/conventional-loan" className="text-primary hover:underline font-medium">What Is a Conventional Loan</Link>, and <Link href="/mortgage/fha-vs-conventional-loan" className="text-primary hover:underline font-medium">FHA vs Conventional Loan</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            With a 3% down payment, you need less cash at closing than a standard 5% or 20% conventional loan. For a $300,000 home, 3% down is $9,000—versus $15,000 at 5% or $60,000 at 20%. Your <strong>loan amount</strong> would be $291,000. PMI is required because you are below 20% <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">LTV</Link>, but HomeReady offers reduced PMI rates compared to standard conventional loans. That can lower your <strong>mortgage payment</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            Income limits apply. Eligibility is typically based on 80% of the area median income (AMI)—though some areas allow higher. The property must be your primary residence (owner-occupied). Homebuyer education is required. You can use <Link href="/mortgage/gift-funds-for-down-payment-explained" className="text-primary hover:underline font-medium">gift funds</Link>, grants, or community seconds to cover the down payment and closing costs. See <Link href="/mortgage/down-payment-requirements-explained" className="text-primary hover:underline font-medium">Down Payment Requirements Explained</Link>.
          </p>
          <p className="text-gray-700">
            Like other conventional loans, PMI can be removed when you reach 80% LTV—through paydown, appreciation, or refinancing. That differs from FHA, where MIP often lasts for the life of the loan. Your <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">debt-to-income ratio (DTI)</Link> is calculated using your <strong>mortgage payment</strong> (including PMI). See <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link> and <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            You apply with a lender that offers HomeReady. The lender will <strong>underwrite</strong> your application using Fannie Mae guidelines. They verify your income, assets, credit, and that you meet the income limit for your area. The property must be a primary residence. You complete homebuyer education—often online or in person—before or at closing. The lender provides a <strong>Loan Estimate</strong> within 3 business days showing your <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            Your down payment can come from your own funds, gifts from family, grants, or community seconds. Documentation is required. The TILA (Truth in Lending Act) and RESPA (Real Estate Settlement Procedures Act) require clear disclosure of all costs. Your <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">APR</Link> on the Loan Estimate reflects the cost of credit. Compare HomeReady with <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">interest rate</Link> and <Link href="/mortgage/apr-vs-interest-rate" className="text-primary hover:underline font-medium">APR</Link> from other programs—FHA, standard conventional, Home Possible—to see what fits.
          </p>
          <p className="text-gray-700">
            Credit requirements: Fannie Mae sets minimum credit score guidelines. Lenders may have overlays. HomeReady is available for first-time and repeat buyers. Eligibility is based on area and income—check with your lender for your location.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Sam is buying a $320,000 home in an eligible area. Their household income is 72% of the area median—within the limit. They use HomeReady with 3% down ($9,600). Their <strong>loan amount</strong> is $310,400. They receive a $6,000 grant from a local housing agency and use $3,600 from savings plus the grant for the down payment and some <strong>closing costs</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            At 6.5% <strong>interest rate</strong>, their <strong>mortgage payment</strong> (principal and interest) is about $1,962. With reduced HomeReady PMI, they pay about $109 per month for PMI—compared to roughly $155 for a standard conventional loan at the same LTV. Total P&I plus PMI: about $2,071. They complete homebuyer education online before closing. The example is illustrative—actual rates, PMI, and eligibility vary by lender and location.
          </p>
          <p className="text-gray-700">
            If Sam had used FHA instead, they might have paid 3.5% down with FHA MIP for the life of the loan. HomeReady offers a conventional path with PMI that can be removed at 80% LTV. Compare the full <strong>Loan Estimate</strong> to see the difference.
          </p>
        </section>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            For first-time homebuyers, saving for a down payment is often the biggest hurdle. HomeReady reduces that hurdle to 3% with reduced PMI. If you qualify by income and location, it can be a lower-cost alternative to FHA—especially because PMI can be removed at 80% LTV, whereas FHA MIP often lasts for the life of the loan. Your <strong>mortgage payment</strong> may be lower with HomeReady than with FHA at the same <strong>loan amount</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            Flexible funding helps. Gifts from family, grants from housing agencies, and community seconds can cover the down payment and <strong>closing costs</strong>. That can make homeownership possible with less personal savings. The homebuyer education requirement helps you understand the process—many buyers find it useful. Use the <strong>Loan Estimate</strong> to compare HomeReady with FHA, Home Possible, and standard conventional. Your <strong>interest rate</strong> and <strong>closing costs</strong> may vary by program.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of HomeReady</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Pros</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>3% down payment</li>
                <li>Reduced PMI compared to standard conventional</li>
                <li>PMI removable at 80% LTV</li>
                <li>Flexible funding (gifts, grants, community seconds)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Cons</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Income limits apply</li>
                <li>Homebuyer education required</li>
                <li>Primary residence only</li>
                <li>Not all lenders offer HomeReady</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Assuming you qualify without checking income:</strong> Income limits vary by area. Verify your eligibility before applying.</li>
            <li><strong>Skipping homebuyer education:</strong> It is required. Complete it early to avoid closing delays.</li>
            <li><strong>Using the property as a second home or investment:</strong> HomeReady is for primary residence only.</li>
            <li><strong>Not comparing with Home Possible and FHA:</strong> Get <strong>Loan Estimates</strong> for multiple programs. Your <strong>interest rate</strong> and <strong>closing costs</strong> may differ.</li>
            <li><strong>Not documenting gift funds:</strong> If you use a gift, follow the gift letter and transfer requirements. See <Link href="/mortgage/gift-funds-for-down-payment-explained" className="text-primary hover:underline font-medium">Gift Funds for Down Payment Explained</Link>.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about HomeReady">
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
            <li>Fannie Mae – HomeReady Mortgage</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Loan Estimate and Closing Disclosure (TRID)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Truth in Lending Act (TILA)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Real Estate Settlement Procedures Act (RESPA)</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks className="mb-10" />

        {/* Educational Disclaimer */}
        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>
          <p className="text-gray-700 text-sm mb-2"><strong>Housentia is not a lender, mortgage broker, or loan originator.</strong></p>
          <p className="text-gray-700 text-sm">HomeReady eligibility and rules vary. Consult a lender for your situation.</p>
        </section>
      </main>
    </div>
  );
}
