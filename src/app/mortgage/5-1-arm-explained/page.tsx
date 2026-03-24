import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '5/1 ARM Explained: A Guide for U.S. Homebuyers | Housentia',
  description:
    'A 5/1 ARM is fixed for 5 years, then adjusts annually. Learn how it works, rate caps, and when it may make sense versus a fixed-rate mortgage.',
  openGraph: {
    title: '5/1 ARM Explained | Housentia',
    description: 'Understand how a 5/1 adjustable-rate mortgage works and when it makes sense.',
  },
};

const ARTICLE_SLUG = '5-1-arm-explained';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: '5/1 ARM Explained',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/5-1-arm-explained';

const FAQ_ITEMS = [
  {
    question: 'What does 5/1 ARM mean?',
    answer:
      'The first number (5) is the initial fixed period in years—your rate stays the same for 5 years. The second number (1) means the rate can adjust once per year after that. So a 5/1 ARM is fixed for 5 years, then adjusts annually.',
  },
  {
    question: 'What happens after the first 5 years?',
    answer:
      'After 5 years, your rate adjusts based on an index (e.g., SOFR) plus a margin. It can go up or down, subject to rate caps. Your mortgage payment will change with each adjustment. The Loan Estimate shows the adjustment schedule and caps.',
  },
  {
    question: 'What are 5/1 ARM rate caps?',
    answer:
      'ARMs typically have a periodic cap (e.g., 2% per adjustment) and a lifetime cap (e.g., 5% above the initial rate). These limit how much your rate and payment can increase. The Loan Estimate under TRID shows your specific caps.',
  },
  {
    question: 'When does a 5/1 ARM make sense?',
    answer:
      'A 5/1 ARM can make sense if you plan to sell or refinance within 5 years—you benefit from the lower initial rate without facing an adjustment. It may not make sense if you plan to stay long-term and want payment certainty. See Fixed vs Adjustable Rate Mortgage.',
  },
  {
    question: 'Is the 5/1 ARM initial rate always lower than fixed?',
    answer:
      'Often yes, but not always. Market conditions vary. Compare the APR, mortgage payment, and total cost over your expected ownership period using the Loan Estimate.',
  },
];

export default function FiveOneARMExplainedPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: '5/1 ARM Explained',
    description: 'A 5/1 ARM is fixed for 5 years, then adjusts annually. Learn how it works, rate caps, and when it may make sense.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="5/1 ARM Explained" breadcrumbs={BREADCRUMBS} />
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
            A <strong>5/1 ARM</strong> (adjustable-rate mortgage) has an <strong>interest rate</strong> that stays fixed for the first 5 years, then can adjust once per year. The &quot;5&quot; is the initial fixed period in years; the &quot;1&quot; is how often the rate can adjust after that (annually). A 5/1 ARM often starts with a lower rate than a 30-year fixed, which can reduce your <strong>mortgage payment</strong> during the first 5 years. After that, the rate moves with an index plus a margin, subject to caps.
          </p>
          <p className="text-gray-700">
            See <Link href="/mortgage/what-is-an-adjustable-rate-mortgage" className="text-primary hover:underline font-medium">What Is an Adjustable Rate Mortgage</Link>,{' '}
            <Link href="/mortgage/fixed-vs-adjustable-rate-mortgage" className="text-primary hover:underline font-medium">Fixed vs Adjustable Rate Mortgage</Link>, and{' '}
            <Link href="/mortgage-tools/arm-vs-fixed" className="text-primary hover:underline font-medium">ARM vs Fixed-Rate Calculator</Link>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How a 5/1 ARM Works</h2>
          <p className="text-gray-700 mb-4">
            For the first 5 years, your <strong>interest rate</strong> and <strong>mortgage payment</strong> (principal and interest) are fixed. After year 5, the rate adjusts annually based on an index (such as SOFR or a Treasury index) plus a margin. If the index rises, your rate and payment can increase—up to the periodic cap (e.g., 2% per year). A lifetime cap (e.g., 5% above the initial rate) limits the total increase over the loan.
          </p>
          <p className="text-gray-700 mb-4">
            Under TRID (TILA-RESPA Integrated Disclosure), your <strong>Loan Estimate</strong> shows the initial rate, index, margin, adjustment schedule, and caps. The <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">APR</Link> is based on the initial rate and may not reflect future adjustments.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5/1 ARM vs 7/1 and 10/1 ARMs</h2>
          <p className="text-gray-700 mb-4">
            A <strong>7/1 ARM</strong> is fixed for 7 years, then adjusts annually. A <strong>10/1 ARM</strong> is fixed for 10 years. Longer fixed periods mean more payment certainty but often a slightly higher initial rate. The 5/1 typically has the lowest initial rate among common ARMs—and the earliest adjustment. Choose based on how long you expect to keep the loan.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">When a 5/1 ARM May Make Sense</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li><strong>Planning to sell or refinance in 5 years or less:</strong> You benefit from the lower initial rate without facing an adjustment.</li>
            <li><strong>Expecting a large income increase:</strong> You may be able to absorb a higher payment after year 5.</li>
            <li><strong>Rates are high and you expect them to fall:</strong> You could refinance to fixed before or after the first adjustment.</li>
          </ul>
          <p className="text-gray-700">
            A 5/1 ARM may not make sense if you plan to stay 10+ years and want payment certainty. A <Link href="/mortgage/what-is-a-fixed-rate-mortgage" className="text-primary hover:underline font-medium">fixed-rate mortgage</Link> avoids adjustment risk.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about 5/1 ARM">
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
            <li>Consumer Financial Protection Bureau (CFPB) – Adjustable-rate mortgages</li>
            <li>Federal Housing Finance Agency – ARM disclosures</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          calculator={{ label: 'ARM vs Fixed-Rate Calculator', href: '/mortgage-tools/arm-vs-fixed' }}
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
            5/1 ARM terms and caps vary by lender.
          </p>
        </section>
      </main>
    </div>
  );
}
