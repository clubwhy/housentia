import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'APR vs Interest Rate: Key Differences for U.S. Homebuyers | Housentia',
  description: 'APR and interest rate are not the same. Learn the key differences, when to use each when comparing mortgages, and where to find both on your Loan Estimate and Closing Disclosure.',
  openGraph: {
    title: 'APR vs Interest Rate: Key Differences for U.S. Homebuyers | Housentia',
    description: 'Understand the difference between APR and interest rate when comparing mortgage offers.',
  },
};

const ARTICLE_SLUG = 'apr-vs-interest-rate';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'APR vs Interest Rate',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/apr-vs-interest-rate';

const FAQ_ITEMS = [
  {
    question: 'Is APR the same as the interest rate?',
    answer: 'No. The interest rate is the cost of borrowing the principal. APR (Annual Percentage Rate) includes the interest rate plus certain fees and finance charges, so APR is typically higher than the interest rate.',
  },
  {
    question: 'Which should I use when comparing mortgage offers?',
    answer: 'Use both. The interest rate drives your monthly payment. APR helps you compare the total cost of borrowing when fees differ between lenders. A loan with a lower rate but higher fees may have a higher APR.',
  },
  {
    question: 'Why is APR usually higher than the interest rate?',
    answer: 'APR includes origination fees, discount points, and other finance charges required by regulation. These costs are spread over the loan term and added to the interest rate to produce the APR.',
  },
  {
    question: 'Where do I see APR and interest rate on my loan documents?',
    answer: 'Both appear on the Loan Estimate (within 3 business days of application) and the Closing Disclosure (at least 3 business days before closing) under TRID rules.',
  },
  {
    question: 'Does APR include property taxes and insurance?',
    answer: 'No. APR typically does not include property taxes, homeowner\'s insurance, or escrow deposits. It focuses on the cost of the loan itself.',
  },
];

export default function AprVsInterestRatePage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'APR vs Interest Rate: Key Differences for U.S. Homebuyers',
    description: 'APR and interest rate are not the same. This guide explains the key differences, when to use each when comparing mortgages, and where to find both on your disclosures.',
    url: PAGE_URL,
    datePublished: '2026-03-13',
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="APR vs Interest Rate: Key Differences for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">
          This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.
        </p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            When shopping for a mortgage, you will see two key numbers: the <strong>interest rate</strong> and the <strong>APR</strong> (Annual Percentage Rate). Many borrowers assume they are the same, but they are not. Understanding the difference can help you compare loan offers more effectively and avoid choosing a loan that looks cheaper on the surface but costs more over time.
          </p>
          <p className="text-gray-700 mb-4">
            The interest rate is the percentage the lender charges you for borrowing the principal. It directly determines your monthly principal and interest payment. APR, by contrast, is a broader measure that includes the interest rate plus certain fees and finance charges. Federal law requires lenders to disclose both under the Truth in Lending Act (TILA) and the TILA-RESPA Integrated Disclosure (TRID) rules.
          </p>
          <p className="text-gray-700 mb-4">
            This guide explains the key differences between APR and interest rate, when to focus on each, and how to use both when comparing mortgage offers. The information is for general educational purposes only; mortgage terms vary by lender and borrower circumstances.
          </p>
        </section>

        {/* Key Differences */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Differences Between APR and Interest Rate</h2>
          <p className="text-gray-700 mb-4">
            The <strong>interest rate</strong> reflects the cost of borrowing the loan principal. It is expressed as a percentage and applied to your loan balance to calculate interest each month. For a fixed-rate mortgage, the interest rate stays the same for the life of the loan. Your monthly principal and interest payment is based on this rate.
          </p>
          <p className="text-gray-700 mb-4">
            The <strong>APR</strong> is a standardized measure of the total cost of credit, also expressed as a percentage. Under TILA and Regulation Z, the APR calculation includes the interest rate plus certain finance charges, such as:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Loan origination fees</li>
            <li>Discount points (if you pay to lower the rate)</li>
            <li>Certain underwriting or processing fees</li>
            <li>Mortgage insurance in some loan types</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Because APR includes these additional costs, it is typically higher than the interest rate. The gap between the two can be small (a few tenths of a percent) or larger (half a percent or more), depending on how much you pay in upfront fees.
          </p>
          <p className="text-gray-700">
            Importantly, APR does <em>not</em> include property taxes, homeowner&apos;s insurance, title insurance, or escrow deposits. Those costs affect your total housing payment but are not part of the APR calculation under federal rules.
          </p>
        </section>

        {/* When to Use Each */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">When to Use the Interest Rate vs APR</h2>
          <p className="text-gray-700 mb-4">
            <strong>Use the interest rate</strong> when you want to understand your monthly principal and interest payment. The interest rate is what drives that number. If you are comparing two loans with similar fees, the one with the lower interest rate will have the lower monthly payment.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Use the APR</strong> when you want to compare the total cost of borrowing across different lenders. A lender might advertise a lower interest rate but charge higher origination fees or points. In that case, the APR could be higher than a competitor&apos;s, even though the interest rate looks better. APR helps you see the full picture.
          </p>
          <p className="text-gray-700 mb-4">
            One caveat: APR assumes you keep the loan for its full term. If you plan to refinance or sell within a few years, the upfront fees have a bigger impact on your true cost than the APR suggests. In that situation, a loan with higher fees but a lower rate might still be cheaper if you pay off the loan early.
          </p>
          <p className="text-gray-700">
            The best approach is to look at both numbers. Compare interest rates to understand monthly payments, and compare APRs to understand total cost when fees differ. Your Loan Estimate and Closing Disclosure show both clearly.
          </p>
        </section>

        {/* Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Example: How APR and Interest Rate Differ</h2>
          <p className="text-gray-700 mb-4">
            Consider two hypothetical $400,000 loans, both 30-year fixed:
          </p>
          <div className="grid gap-6 md:grid-cols-2 mb-4">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Lender A</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>Interest rate: 6.50%</li>
                <li>Origination fee: $2,000</li>
                <li>APR: ~6.55%</li>
              </ul>
              <p className="text-gray-700 mt-3 text-sm">Lower fees, slightly higher rate.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Lender B</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>Interest rate: 6.25%</li>
                <li>Origination fee: $8,000</li>
                <li>APR: ~6.45%</li>
              </ul>
              <p className="text-gray-700 mt-3 text-sm">Lower rate, higher fees.</p>
            </div>
          </div>
          <p className="text-gray-700 mb-4">
            Lender B has the lower interest rate, so your monthly principal and interest payment would be lower. But Lender B charges more in upfront fees, which increases the APR. In this example, Lender A has a higher APR (6.55%) even though the interest rate is higher—because the fees are lower. Over the full 30 years, Lender A might cost less in total. APR helps you see that.
          </p>
          <p className="text-gray-700">
            If you plan to refinance in 5 years, the math changes. The higher upfront fees on Lender B would be spread over fewer years, potentially making Lender A the better choice. There is no single &quot;right&quot; answer; it depends on how long you keep the loan and your priorities (lower payment vs. lower total cost).
          </p>
        </section>

        {/* Why Regulators Require Both */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Regulators Require Both Disclosures</h2>
          <p className="text-gray-700 mb-4">
            The Truth in Lending Act (TILA), enacted in 1968, was designed to promote informed use of consumer credit. Before TILA, lenders could advertise low rates while burying fees in fine print. APR was created to give consumers a single, comparable number that reflects the true cost of borrowing.
          </p>
          <p className="text-gray-700 mb-4">
            Today, the Consumer Financial Protection Bureau (CFPB) enforces TILA through Regulation Z. The TRID rules, effective since 2015, integrated TILA and RESPA disclosures into the Loan Estimate and Closing Disclosure. Lenders must show both the interest rate and the APR in standardized formats so borrowers can compare offers from different lenders more easily.
          </p>
          <p className="text-gray-700">
            These disclosures do not guarantee that one loan is better than another for your situation. They provide transparency so you can make an informed choice. You have the right to receive a Loan Estimate without paying any fees, and you can shop multiple lenders before applying.
          </p>
        </section>

        {/* Where to Find Them */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Where to Find APR and Interest Rate on Your Disclosures</h2>
          <p className="text-gray-700 mb-4">
            Under TRID, lenders must provide a <strong>Loan Estimate</strong> within three business days of receiving your application. The Loan Estimate has a &quot;Loan Terms&quot; section that shows the interest rate and a &quot;Comparisons&quot; section that shows the APR. Both are clearly labeled.
          </p>
          <p className="text-gray-700 mb-4">
            At least three business days before closing, you receive the <strong>Closing Disclosure</strong>. It mirrors the Loan Estimate format and shows the final interest rate and APR. Compare the Closing Disclosure to your Loan Estimate to catch any changes before you sign.
          </p>
          <p className="text-gray-700">
            The CFPB provides sample Loan Estimate and Closing Disclosure forms on consumerfinance.gov. Familiarizing yourself with these forms can help you understand where to look when you receive your own.
          </p>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes When Comparing APR and Interest Rate</h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-gray-900">Mistake 1: Assuming the lower interest rate is always the better deal.</strong>
              <p className="text-gray-700 mt-1">Higher fees can offset a lower rate. Check the APR to see the total cost. A loan with a 6.0% rate and $10,000 in fees might cost more over time than a 6.25% loan with $2,000 in fees.</p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 2: Ignoring how long you plan to keep the loan.</strong>
              <p className="text-gray-700 mt-1">APR assumes the full loan term. If you refinance or sell in 5–7 years, upfront fees matter more. A no-closing-cost loan might have a higher APR but could be cheaper if you plan to move or refinance soon.</p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 3: Comparing APRs across different loan types.</strong>
              <p className="text-gray-700 mt-1">APR calculations can differ for fixed vs. adjustable loans, or for loans with different terms. Compare APRs only when the loan type and term are the same.</p>
            </li>
            <li>
              <strong className="text-gray-900">Mistake 4: Assuming APR includes everything.</strong>
              <p className="text-gray-700 mt-1">APR does not include property taxes, insurance, or title costs. Your total monthly payment (PITI) will be higher than what the interest rate or APR alone suggests.</p>
            </li>
          </ul>
        </section>

        {/* Key Takeaways */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>The interest rate drives your monthly principal and interest payment; APR includes the rate plus certain fees.</li>
            <li>APR is typically higher than the interest rate because it includes origination fees, points, and other finance charges.</li>
            <li>Use the interest rate to compare monthly payments; use APR to compare total cost when fees differ.</li>
            <li>Lenders must disclose both on the Loan Estimate and Closing Disclosure under TRID rules.</li>
            <li>Shop multiple lenders and compare both numbers before committing.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions">
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
          <p className="text-gray-700 mb-4">
            Information in this guide is based on publicly available educational materials from:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Consumer Financial Protection Bureau (CFPB)</li>
            <li>U.S. Department of Housing and Urban Development (HUD)</li>
            <li>Federal Housing Administration (FHA)</li>
            <li>Department of Veterans Affairs (VA)</li>
            <li>Fannie Mae and Freddie Mac</li>
            <li>Truth in Lending Act (TILA) / Regulation Z</li>
            <li>TILA-RESPA Integrated Disclosure (TRID) Rule</li>
          </ul>
          <p className="text-gray-700 mb-4">Readers may consult consumerfinance.gov, hud.gov, and fanniemae.com for additional information.</p>
        </section>

        {/* Related Guides */}
        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />

        {/* Related links */}
        <RelatedLinks
          glossary={[{ label: 'APR', href: '/mortgage-glossary/apr' }, { label: 'Loan Estimate', href: '/mortgage-glossary/loan-estimate' }, { label: 'Closing Disclosure', href: '/mortgage-glossary/closing-disclosure' }]}
          calculator={{ label: 'Mortgage Calculator', href: '/tools/mortgage-calculator' }}
          className="mb-10"
        />

        {/* Educational Disclaimer */}
        <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
          <p className="text-gray-700 text-sm mb-2">
            This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.
          </p>
          <p className="text-gray-700 text-sm mb-2">
            <strong>Housentia is not a lender, mortgage broker, or loan originator.</strong>
          </p>
          <p className="text-gray-700 text-sm mb-2">
            Mortgage rates, loan programs, and qualification requirements may vary by lender and borrower circumstances.
          </p>
          <p className="text-gray-700 text-sm">
            Readers should consult a licensed mortgage professional or financial advisor for advice specific to their situation.
          </p>
        </section>
      </main>
    </div>
  );
}
