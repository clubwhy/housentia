import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Lenders Calculate DTI | Debt-to-Income Ratio Formula | Housentia',
  description:
    'Learn how lenders calculate DTI: the formula, what counts as income, what counts as debt, and front-end vs back-end ratios.',
  openGraph: {
    title: 'How Lenders Calculate DTI | Housentia',
    description: 'Understand the DTI formula and what lenders include when calculating your debt-to-income ratio.',
  },
};

const ARTICLE_SLUG = 'how-dti-calculated';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'How Lenders Calculate DTI',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/how-dti-calculated';

const FAQ_ITEMS = [
  {
    question: 'What is the DTI formula?',
    answer:
      'DTI = (Total Monthly Debt Payments ÷ Gross Monthly Income) × 100. Lenders add your housing payment (or proposed mortgage payment) plus all other monthly debts, then divide by your gross income. The result is a percentage.',
  },
  {
    question: 'What counts as income for DTI?',
    answer:
      'Lenders typically use gross (pre-tax) income: W-2 wages, salary, bonuses, overtime, self-employment income (from tax returns or alternative docs), alimony, child support (if you choose to include it), rental income, retirement/pension, Social Security, and other qualifying income. Rules vary by program.',
  },
  {
    question: 'What counts as debt for DTI?',
    answer:
      'Monthly debt payments: housing (or proposed mortgage including PITI), car loans, credit card minimum payments, student loans, personal loans, alimony or child support you pay, and other recurring obligations. Some items (utilities, groceries) are not included.',
  },
  {
    question: 'What is the difference between front-end and back-end DTI?',
    answer:
      'Front-end DTI is housing payment ÷ gross income. Back-end DTI is (housing + all other debts) ÷ gross income. Lenders typically focus on back-end DTI for approval. Many conventional programs prefer back-end of 36% or below and front-end of 28% or below.',
  },
  {
    question: 'Does DTI use gross or net income?',
    answer:
      'Lenders use gross (pre-tax) monthly income, not net (take-home) income. This is standard across most mortgage programs. Your pay stubs and tax returns show gross income.',
  },
];

export default function HowDTICalculatedPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'How Lenders Calculate DTI',
    description:
      'Learn how lenders calculate debt-to-income ratio: the formula, what counts as income and debt, and front-end vs back-end DTI.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="How Lenders Calculate DTI" breadcrumbs={BREADCRUMBS} />
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
            Lenders use your <strong>debt-to-income ratio (DTI)</strong> to assess whether you can afford a mortgage. Understanding <em>how</em> they calculate it helps you estimate your DTI before applying and prepare the right documentation. This guide explains the formula, what counts as income, what counts as debt, and the difference between front-end and back-end DTI.
          </p>
          <p className="text-gray-700">
            See <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>,{' '}
            <Link href="/mortgage/how-dti-affects-mortgage-approval" className="text-primary hover:underline font-medium">How DTI Affects Mortgage Approval</Link>, and the{' '}
            <Link href="/mortgage-tools/dti-calculator" className="text-primary hover:underline font-medium">DTI Calculator</Link> to estimate your own ratios.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The DTI Formula</h2>
          <p className="text-gray-700 mb-4">
            The basic formula is:
          </p>
          <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 mb-4">
            <p className="font-mono text-lg text-gray-800 mb-2">
              DTI = (Total Monthly Debt Payments ÷ Gross Monthly Income) × 100
            </p>
            <p className="text-sm text-gray-600">
              Result is expressed as a percentage (e.g., 36%).
            </p>
          </div>
          <p className="text-gray-700 mb-4">
            Lenders add all your monthly debt obligations—including your proposed <strong>mortgage payment</strong> (principal, interest, taxes, insurance)—and divide by your gross monthly income. Gross income means income before taxes and deductions.
          </p>
          <p className="text-gray-700">
            During <strong>underwriting</strong>, the lender verifies your income and debts using pay stubs, tax returns, bank statements, and credit reports. They may adjust amounts if they find inconsistencies. Your <strong>Loan Estimate</strong> (TRID) reflects the terms offered based on that analysis.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Counts as Income</h2>
          <p className="text-gray-700 mb-4">
            Lenders use <strong>gross</strong> (pre-tax) income. Typical qualifying income includes:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>W-2 wages, salary, bonuses, overtime</li>
            <li>Self-employment income (from tax returns, Schedule C, or alternative documentation like bank statements—see <Link href="/mortgage/how-self-employed-income-is-verified" className="text-primary hover:underline">How Self-Employed Income Is Verified</Link>)</li>
            <li>Rental income (often with a vacancy factor; rules vary)</li>
            <li>Alimony, child support (if you choose to include it)</li>
            <li>Retirement, pension, Social Security, disability</li>
            <li>Investment income, dividends (if stable and documented)</li>
          </ul>
          <p className="text-gray-700">
            Income is typically averaged (e.g., 2 years of tax returns for self-employed). Overtime and bonus income may require a 2-year history. Guidelines vary by program. See <Link href="/mortgage/how-income-verified-mortgage" className="text-primary hover:underline font-medium">How Income Is Verified for a Mortgage</Link>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Counts as Debt</h2>
          <p className="text-gray-700 mb-4">
            Monthly debt payments included in DTI:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li><strong>Housing:</strong> Your current rent or mortgage (principal, interest, taxes, insurance). For a new mortgage, the lender uses your <strong>proposed</strong> PITI payment.</li>
            <li><strong>Installment debts:</strong> Car loans, student loans, personal loans—the minimum monthly payment shown on the account.</li>
            <li><strong>Revolving debts:</strong> Credit cards—the minimum monthly payment, not the balance. If a card has a $0 minimum, some lenders still use a percentage of the balance.</li>
            <li><strong>Other:</strong> Alimony, child support you pay, co-signed loans, and other recurring obligations.</li>
          </ul>
          <p className="text-gray-700">
            Not included: utilities, groceries, insurance (except mortgage insurance), cell phone, etc. These are not considered debt for DTI purposes.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Front-End vs Back-End DTI</h2>
          <p className="text-gray-700 mb-4">
            <strong>Front-end DTI</strong> (housing ratio): housing payment ÷ gross income. It measures how much of your income goes to housing alone. Many programs prefer 28% or below.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Back-end DTI</strong>: (housing + all other debts) ÷ gross income. It measures total debt burden. Lenders typically focus on back-end DTI for approval. Qualified Mortgage (QM) rules often cap back-end at 43% for certain loans, with exceptions. Conventional programs may prefer 36% or below; FHA and VA have their own guidelines.
          </p>
          <p className="text-gray-700">
            See <Link href="/mortgage/how-dti-affects-mortgage-approval" className="text-primary hover:underline font-medium">How DTI Affects Mortgage Approval</Link> for typical limits and compensating factors.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Example Calculation</h2>
          <p className="text-gray-700 mb-4">
            Alex earns $8,000 gross per month. Current debts: car loan $400, credit cards $150, student loan $300. Proposed mortgage PITI: $2,200.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Front-end DTI: $2,200 ÷ $8,000 = 27.5%</li>
            <li>Back-end DTI: ($2,200 + $400 + $150 + $300) ÷ $8,000 = $3,050 ÷ $8,000 = 38.1%</li>
          </ul>
          <p className="text-gray-700">
            Many conventional programs would view this favorably. If Alex had $1,200 in other debts instead, back-end would be 42.5%—closer to typical limits.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about how DTI is calculated">
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
            <li>Consumer Financial Protection Bureau (CFPB) – Debt-to-income ratio</li>
            <li>Fannie Mae – Selling Guide (income and debt calculation)</li>
            <li>Federal Housing Finance Agency – Qualified Mortgage standards</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          glossary={[{ label: 'DTI', href: '/mortgage-glossary/dti' }]}
          calculator={{ label: 'DTI Calculator', href: '/mortgage-tools/dti-calculator' }}
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
            DTI calculation methods vary by lender and program.
          </p>
        </section>
      </main>
    </div>
  );
}
