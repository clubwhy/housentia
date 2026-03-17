import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'W2 vs Self Employed Mortgage Qualification | Housentia',
  description:
    'W-2 employees and self-employed borrowers face different documentation and qualification paths. Compare requirements and options.',
  openGraph: { title: 'W2 vs Self Employed Mortgage Qualification | Housentia', description: 'Compare W-2 vs self-employed mortgage qualification.' },
};

const ARTICLE_SLUG = 'w2-vs-self-employed-mortgage-qualification';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'W2 vs Self Employed Mortgage Qualification' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/w2-vs-self-employed-mortgage-qualification';

const FAQ_ITEMS = [
  {
    question: 'Is it harder to get a mortgage if I am self-employed?',
    answer:
      'Often yes. Lenders use tax returns for self-employed income, which may show lower taxable income due to deductions. Documentation can be more complex. Your income affects your DTI and the loan amount you qualify for. See Self-Employed Borrower and What Is DTI.',
  },
  {
    question: 'What documents do W-2 employees need?',
    answer:
      'Pay stubs (typically 2 months), W-2s (2 years), and often employment verification. Income is typically calculated from current pay. Your Loan Estimate is based on the income used to qualify you. See Mortgage Application Documents.',
  },
  {
    question: 'What documents do self-employed borrowers need?',
    answer:
      '2 years of personal and business tax returns, P&L statements, 1099s, and sometimes bank statements. Lenders may average income over 2 years. See How Self Employed Income Is Verified and Mortgage Income Verification.',
  },
  {
    question: 'Can self-employed borrowers use bank statement programs?',
    answer:
      'Yes. Non-QM bank statement loans use bank deposits instead of tax returns. These may have different interest rates and terms. See Non-QM Loan.',
  },
  {
    question: 'How does income affect my loan amount and mortgage payment?',
    answer:
      'Lenders use your income to calculate DTI (debt-to-income ratio). A higher qualifying income can support a larger loan amount and mortgage payment. W-2 income is often easier to document; self-employed income may be lower on tax returns due to deductions. See What Is DTI and What Is LTV.',
  },
  {
    question: 'Do both use the same Loan Estimate?',
    answer:
      'Yes. Under TRID (TILA-RESPA Integrated Disclosure), both W-2 and self-employed borrowers receive a Loan Estimate within 3 business days of application. It shows your loan amount, interest rate, mortgage payment, and closing costs. Income verification happens during underwriting.',
  },
];

export default function W2VsSelfEmployedMortgageQualificationPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'W2 vs Self Employed Mortgage Qualification', description: 'Compare W-2 and self-employed mortgage qualification.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="W2 vs Self Employed Mortgage Qualification" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            <strong>W-2 vs self-employed mortgage qualification</strong> differs mainly in income documentation. W-2 employees use pay stubs and W-2s; self-employed borrowers typically need tax returns, P&L statements, and sometimes bank statements. Lenders use your income to calculate DTI and determine the <strong>loan amount</strong> and <strong>mortgage payment</strong> you qualify for.
          </p>
          <p className="text-gray-700 mb-4">
            Under TILA (Truth in Lending Act) and the ability-to-repay rule, lenders must verify that you can repay the loan. Your <strong>Loan Estimate</strong> (TRID) shows your <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. Income verification happens during <strong>underwriting</strong>. See{' '}
            <Link href="/mortgage/self-employed-borrower" className="text-primary hover:underline font-medium">Self-Employed Borrower</Link>,{' '}
            <Link href="/mortgage/how-self-employed-income-is-verified" className="text-primary hover:underline font-medium">How Self Employed Income Is Verified</Link>, and{' '}
            <Link href="/mortgage/non-qm-loan" className="text-primary hover:underline font-medium">Non-QM Loan</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            <strong>W-2 employees</strong> receive a Form W-2 from their employer each year. Income is typically calculated from current pay stubs or the W-2. The process is straightforward—lenders verify employment and income with minimal documents. <strong>Self-employed borrowers</strong> (sole proprietors, partners, 1099 contractors, business owners) do not receive W-2s. Lenders use tax returns, which may show lower taxable income due to business deductions.
          </p>
          <p className="text-gray-700 mb-4">
            Your qualifying income affects your <strong>loan amount</strong> and <strong>mortgage payment</strong>. A higher documented income can support a larger loan. Self-employed borrowers may qualify for less on conventional loans because tax return income is often lower than actual cash flow. Non-QM programs (e.g., bank statement loans) may use different methods. See{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>,{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>, and{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>.
          </p>
        </section>

        {/* Design object 1: Documentation comparison table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">W-2 vs Self-Employed: Documentation at a Glance</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Factor</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">W-2 Employee</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Self-Employed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Primary income docs</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Pay stubs, W-2s</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Tax returns, P&L, 1099s</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Income calculation</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Current pay or W-2</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Tax return income (often averaged)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Typical timeline</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Simpler, faster</td>
                  <td className="px-4 py-3 text-sm text-gray-700">More complex, may take longer</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Alternative options</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Standard conventional, FHA, VA</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Non-QM, bank statement programs</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">Requirements vary by lender and program. Your Loan Estimate shows the loan terms based on your application.</p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            You apply and provide income documentation. For W-2 employees, the lender reviews pay stubs and W-2s, then may contact your employer for verification. Income is typically your gross monthly pay. For self-employed borrowers, the lender reviews 2 years of tax returns (personal and business if applicable), P&L statements, and 1099s. Income is often the average of 2 years of taxable income—after deductions.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Underwriting</strong> uses your income to calculate DTI. Your <strong>loan amount</strong> and <strong>mortgage payment</strong> must fit within the lender&apos;s DTI limits. Your <strong>Loan Estimate</strong> (TRID) shows the <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. See{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>,{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>, and{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            Jordan (W-2) earns $72,000/year ($6,000/month gross). With a 45% DTI limit, Jordan qualifies for a <strong>mortgage payment</strong> of about $2,700 (including P&I, taxes, insurance). That supports a <strong>loan amount</strong> of roughly $340,000 at 6.5% <strong>interest rate</strong>. Documentation: 2 pay stubs, 2 W-2s. Underwriting is straightforward.
          </p>
          <p className="text-gray-700 mb-4">
            Sam (self-employed) has $90,000 in gross revenue but $45,000 in taxable income after deductions (averaged over 2 years). That is $3,750/month. With the same 45% DTI, Sam qualifies for a <strong>mortgage payment</strong> of about $1,688—supporting a <strong>loan amount</strong> of roughly $213,000. Sam&apos;s cash flow is higher, but the lender uses tax return income. Sam might explore a Non-QM bank statement loan. This is illustrative. See{' '}
            <Link href="/mortgage/mortgage-income-verification" className="text-primary hover:underline font-medium">Mortgage Income Verification</Link> and{' '}
            <Link href="/mortgage/mortgage-application-documents" className="text-primary hover:underline font-medium">Mortgage Application Documents</Link>.
          </p>
        </section>

        {/* Design object 2: Key takeaway callout */}
        <div className="mb-10 rounded-xl border-l-4 border-teal-500 bg-teal-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-teal-900 mb-2">Key Takeaway</h3>
          <p className="text-teal-800 text-[15px] leading-relaxed">
            <strong>W-2 employees</strong> use pay stubs and W-2s—income is straightforward to document. <strong>Self-employed borrowers</strong> use tax returns and P&L statements—taxable income may be lower due to deductions. Your qualifying income affects your <strong>loan amount</strong>, <strong>mortgage payment</strong>, and DTI. Your <strong>Loan Estimate</strong> (TRID) shows the terms. See{' '}
            <Link href="/mortgage/self-employed-borrower" className="text-teal-700 underline font-medium">Self-Employed Borrower</Link> and{' '}
            <Link href="/mortgage/how-self-employed-income-is-verified" className="text-teal-700 underline font-medium">How Self Employed Income Is Verified</Link>.
          </p>
        </div>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            Understanding the difference helps you prepare. W-2 employees can gather pay stubs and W-2s quickly. Self-employed borrowers should ensure tax returns are filed and accurate—lenders will use them. If you are self-employed and your taxable income is low due to deductions, you may qualify for less than you expect on a conventional loan.
          </p>
          <p className="text-gray-700 mb-4">
            Non-QM programs (e.g., bank statement loans) may use bank deposits instead of tax returns. These can help self-employed borrowers with strong cash flow but lower taxable income. Terms and <strong>interest rates</strong> may differ. Your <strong>Loan Estimate</strong> shows the <strong>closing costs</strong> and <strong>mortgage payment</strong>. See{' '}
            <Link href="/mortgage/non-qm-loan" className="text-primary hover:underline font-medium">Non-QM Loan</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">W-2 Employee</h3>
              <p className="text-gray-700 mb-2 font-medium">Pros:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-2">
                <li>Simpler documentation</li>
                <li>Faster underwriting</li>
                <li>Income easy to verify</li>
              </ul>
              <p className="text-gray-700 mb-2 font-medium">Cons:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Income limited to employment</li>
                <li>Job change can affect approval</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Self-Employed</h3>
              <p className="text-gray-700 mb-2 font-medium">Pros:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-2">
                <li>Non-QM options (bank statement, etc.)</li>
                <li>May use add-backs in some cases</li>
                <li>Flexibility in business structure</li>
              </ul>
              <p className="text-gray-700 mb-2 font-medium">Cons:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>More complex documentation</li>
                <li>Tax return income may be lower</li>
                <li>May qualify for less on conventional</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Self-employed: Taking excessive deductions:</strong> Deductions reduce taxable income. Lenders use tax return income. If you deduct heavily, your qualifying income may be lower and you may qualify for a smaller <strong>loan amount</strong>.</li>
            <li><strong>Not having tax returns ready:</strong> Self-employed borrowers need 2 years of tax returns. File on time and have them available. Delays can slow <strong>underwriting</strong>.</li>
            <li><strong>Assuming gross revenue equals qualifying income:</strong> Lenders use taxable income (after deductions), not gross revenue. Your <strong>mortgage payment</strong> qualification is based on what appears on your tax returns.</li>
            <li><strong>Ignoring the Loan Estimate:</strong> Your <strong>Loan Estimate</strong> (TRID) shows the <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. Compare it to the Closing Disclosure before closing.</li>
            <li><strong>Not exploring Non-QM if conventional is tight:</strong> If tax return income limits your conventional qualification, Non-QM programs (e.g., bank statement) may be an option. Terms differ. See <Link href="/mortgage/non-qm-loan" className="text-primary hover:underline font-medium">Non-QM Loan</Link>.</li>
            <li><strong>W-2: Changing jobs during the process:</strong> A job change can affect approval. Lenders may require proof of continued income. Discuss with your lender before making changes.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about W2 vs self-employed">
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
            <li>Consumer Financial Protection Bureau (CFPB) – Ability-to-repay and qualified mortgage rule</li>
            <li>Fannie Mae – Selling Guide (income documentation)</li>
            <li>Freddie Mac – Single-Family Seller/Servicer Guide (self-employed income)</li>
            <li>Internal Revenue Service (IRS) – Form W-2, Schedule C</li>
          </ul>
        </section>
        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks calculator={{ label: 'Non-QM Scenario Comparison', href: '/tools/non-qm-scenario-comparison' }} className="mb-10" />
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
