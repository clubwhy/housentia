import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Principal and Interest Explained: A Guide for U.S. Homebuyers | Housentia',
  description:
    'Learn how principal and interest work in a mortgage payment. Understand the P&I portion, how the split changes over time, and how it affects your loan balance.',
  openGraph: {
    title: 'Principal and Interest Explained: A Guide for U.S. Homebuyers | Housentia',
    description: 'Understand principal and interest in your mortgage payment and how they work together.',
  },
};

const ARTICLE_SLUG = 'principal-and-interest';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Principal and Interest Explained',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/principal-and-interest';

const FAQ_ITEMS = [
  {
    question: 'What is principal and interest (P&I)?',
    answer:
      'Principal and interest (P&I) are the core parts of your mortgage payment. Principal is the amount you borrowed—each payment reduces it. Interest is the cost the lender charges for lending you that money. Together they make up the P&I portion of your monthly payment.',
  },
  {
    question: 'Why do early payments go mostly to interest?',
    answer:
      'Interest is calculated on the remaining loan balance. Early in the loan, the balance is highest, so the interest portion of each payment is larger. As you pay down principal, the balance drops, and more of each payment goes to principal instead of interest.',
  },
  {
    question: 'Is my P&I payment the same every month?',
    answer:
      'For a fixed-rate mortgage, yes—the total principal-and-interest payment stays the same each month. The split between principal and interest changes: early on, more goes to interest; later, more goes to principal. For an adjustable-rate mortgage, the payment can change when the rate adjusts.',
  },
  {
    question: 'How does P&I differ from PITI?',
    answer:
      'P&I is principal and interest only. PITI adds taxes and insurance. Your full housing payment often includes PITI—principal, interest, property taxes, and insurance. Taxes and insurance may be collected in an escrow account. See What Is PITI for more.',
  },
  {
    question: 'Can I pay extra toward principal?',
    answer:
      'Most U.S. mortgages allow extra principal payments without penalty. Specify that the extra amount should apply to principal. This reduces the balance faster, lowers total interest paid, and can shorten the loan term. Check your loan documents for prepayment terms.',
  },
];

export default function PrincipalAndInterestPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Principal and Interest Explained: A Guide for U.S. Homebuyers',
    description:
      'Learn how principal and interest work in a mortgage payment, how the split changes over time, and how P&I relates to PITI and amortization.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Principal and Interest Explained" breadcrumbs={BREADCRUMBS} />
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
            When you make a mortgage payment, most of it goes toward two things: <strong>principal</strong> and <strong>interest</strong>. Together they are often called P&amp;I (principal and interest). Understanding how P&amp;I works helps you see why early payments may not seem to reduce your balance quickly, how your loan is paid off over time, and how extra principal payments can save you money.
          </p>
          <p className="text-gray-700 mb-4">
            Your total monthly payment may also include property taxes and insurance (PITI). The P&amp;I portion is what pays down your loan. This guide explains principal and interest in plain language, how they are calculated, and how they change over the life of your mortgage.
          </p>
          <p className="text-gray-700">
            Your Loan Estimate and Closing Disclosure (provided under TRID) show your loan amount (principal), interest rate, and estimated monthly payment. See{' '}
            <Link href="/mortgage/what-is-loan-estimate" className="text-primary hover:underline font-medium">What Is Loan Estimate</Link> and{' '}
            <Link href="/mortgage/what-is-piti" className="text-primary hover:underline font-medium">What Is PITI</Link>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Principal and Interest?</h2>
          <p className="text-gray-700 mb-4">
            <strong>Principal</strong> is the amount you borrowed—the loan balance. If you buy a $350,000 home with $70,000 down, your mortgage principal is $280,000. Each payment reduces the principal until the balance reaches zero.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Interest</strong> is the cost the lender charges for lending you that money. It is expressed as an annual rate (e.g., 6.5%) and is calculated each month on the remaining balance. Because the balance is highest at the start, early in the loan you pay more in interest and less in principal. Over time, as the balance drops, the interest portion shrinks and the principal portion grows.
          </p>
          <p className="text-gray-700">
            For a fixed-rate mortgage, the total P&amp;I payment stays the same each month. Only the internal split changes. This process is called <strong>amortization</strong>. See{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link> for a detailed look at how the split changes over time.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Principal and Interest Are Calculated</h2>
          <p className="text-gray-700 mb-4">
            Lenders use an amortization formula to determine your monthly P&amp;I payment. The payment is designed so that if you make every payment on time, the loan is fully paid off by the end of the term (e.g., 30 years). The formula accounts for the loan amount (principal), the interest rate, and the number of payments.
          </p>
          <p className="text-gray-700 mb-4">
            Each month, interest is calculated as: <em>remaining balance × (annual rate ÷ 12)</em>. The rest of the payment goes to principal. As the principal decreases, the next month&apos;s interest is calculated on a smaller balance, so more of the payment goes to principal. Over time, the principal portion of each payment grows.
          </p>
          <p className="text-gray-700">
            An <strong>amortization schedule</strong> shows this month-by-month. You can generate one using a mortgage or amortization calculator. Many lenders provide one at closing.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Principal and Interest vs. PITI</h2>
          <p className="text-gray-700 mb-4">
            P&amp;I is just principal and interest. <strong>PITI</strong> adds property taxes and insurance. Your total housing payment often includes all four: principal, interest, taxes, and insurance. Taxes and insurance are frequently collected in an <strong>escrow account</strong>—your servicer pays them on your behalf when they are due.
          </p>
          <p className="text-gray-700 mb-4">
            Lenders use PITI to assess affordability. Your PITI (or housing payment) is compared to your gross income to calculate your front-end debt-to-income ratio. See{' '}
            <Link href="/mortgage/what-is-piti" className="text-primary hover:underline font-medium">What Is PITI</Link> and{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>.
          </p>
          <p className="text-gray-700">
            The P&amp;I portion is fixed for a fixed-rate loan. Taxes and insurance can change, so your total PITI may increase over time if property taxes or insurance premiums rise.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Example: How P&I Changes Over Time</h2>
          <p className="text-gray-700 mb-4">
            Consider a $300,000 loan at 6.5% for 30 years. The total P&amp;I payment is about $1,896 per month and stays the same. In month 1, roughly $1,625 goes to interest and $271 to principal. By month 180 (halfway through), about $1,100 goes to interest and $796 to principal. In the final months, almost the entire payment goes to principal.
          </p>
          <p className="text-gray-700">
            Over the full 30 years, you would pay about $382,000 in interest on top of the $300,000 principal. A 15-year loan at the same rate would have a higher monthly payment but much less total interest because you repay principal faster.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Extra Principal Payments</h2>
          <p className="text-gray-700 mb-4">
            Many borrowers make extra principal payments to pay off the loan faster and reduce total interest. Most U.S. mortgages allow this without penalty. When you send an extra payment, specify that it should be applied to principal—some servicers apply extra amounts to the next scheduled payment unless you direct otherwise.
          </p>
          <p className="text-gray-700">
            Applying extra to principal reduces the balance immediately, which lowers future interest and can shorten the loan term. Use an <Link href="/mortgage-tools/extra-payment" className="text-primary hover:underline font-medium">Extra Payment Calculator</Link> to see the impact.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about principal and interest">
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
            <li>Consumer Financial Protection Bureau (CFPB) – Loan Estimate and Closing Disclosure</li>
            <li>Truth in Lending Act (TILA) / Regulation Z</li>
            <li>Fannie Mae and Freddie Mac consumer materials</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          glossary={[{ label: 'Principal', href: '/mortgage-glossary/principal' }, { label: 'Amortization', href: '/mortgage-glossary/amortization' }, { label: 'PITI', href: '/mortgage-glossary/piti' }]}
          calculator={{ label: 'Mortgage Calculator', href: '/tools/mortgage-calculator' }}
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
            Mortgage rates and terms vary by lender. Consult a licensed mortgage professional for advice specific to your situation.
          </p>
        </section>
      </main>
    </div>
  );
}
