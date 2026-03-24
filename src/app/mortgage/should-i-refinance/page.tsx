import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Should I Refinance My Mortgage? A Guide for U.S. Homeowners | Housentia',
  description:
    'Wondering if you should refinance? Learn when refinancing makes sense, how to calculate break-even, and what to consider before making a decision.',
  openGraph: {
    title: 'Should I Refinance My Mortgage? A Guide for U.S. Homeowners | Housentia',
    description: 'Decide whether refinancing makes sense for you. Compare break-even, costs, and your goals.',
  },
};

const ARTICLE_SLUG = 'should-i-refinance';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Should I Refinance?',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/should-i-refinance';

const FAQ_ITEMS = [
  {
    question: 'Should I refinance if rates have dropped?',
    answer:
      'Not automatically. A lower rate can reduce your monthly payment, but refinancing has closing costs. Calculate your break-even—how long until your monthly savings offset those costs. If you plan to move or sell before break-even, refinancing may not pay off. See Refinance Break Even Point Explained.',
  },
  {
    question: 'How much do I need to lower my rate to make refinancing worth it?',
    answer:
      'A common rule of thumb is 0.75% to 1%, but the real test is your break-even period. A smaller rate drop with low closing costs might work; a bigger drop with high costs might not if you move soon. Use a refinance calculator to compare.',
  },
  {
    question: 'Should I refinance to shorten my term (e.g., 30 to 15 years)?',
    answer:
      'A shorter term typically means a higher monthly payment but less total interest over time. It makes sense if you can afford the higher payment and want to pay off the loan sooner. Compare total cost and your budget. See When to Refinance a Mortgage.',
  },
  {
    question: 'When should I avoid refinancing?',
    answer:
      'Avoid refinancing if you plan to move before break-even, if closing costs exceed your savings, if it would reset your payoff clock without a clear benefit, or if you cannot afford the new payment (e.g., a shorter term). Compare carefully.',
  },
  {
    question: 'What if I want cash out?',
    answer:
      'A cash-out refinance increases your loan amount to access equity. You get cash but owe more. Consider whether you need the cash, the new rate, and the longer payoff. Compare to a HELOC or home equity loan. See What Is Cash Out Refinance and Refinance vs HELOC.',
  },
];

export default function ShouldIRefinancePage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Should I Refinance My Mortgage? A Guide for U.S. Homeowners',
    description:
      'Decide whether refinancing makes sense. Learn about break-even, when to refinance, when to avoid it, and how to compare your options.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Should I Refinance My Mortgage?" breadcrumbs={BREADCRUMBS} />
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
            &quot;Should I refinance?&quot; is one of the most common questions homeowners ask when <strong>interest rates</strong> drop or when their goals change. Refinancing replaces your current mortgage with a new one—often to get a lower rate, change the <strong>loan term</strong>, access equity, or remove <strong>PMI</strong>. But refinancing has <strong>closing costs</strong>, and it is not always the right choice.
          </p>
          <p className="text-gray-700 mb-4">
            This guide helps you think through the decision: when refinancing may make sense, when to avoid it, and how to compare your options using break-even and total cost. See{' '}
            <Link href="/mortgage/what-is-refinance" className="text-primary hover:underline font-medium">What Is Refinance</Link>,{' '}
            <Link href="/mortgage/refinance-break-even-point-explained" className="text-primary hover:underline font-medium">Refinance Break Even Point Explained</Link>, and{' '}
            <Link href="/mortgage/when-to-refinance-a-mortgage" className="text-primary hover:underline font-medium">When to Refinance a Mortgage</Link>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Question: Will You Stay Long Enough to Break Even?</h2>
          <p className="text-gray-700 mb-4">
            The most important factor is your <strong>time horizon</strong>. Refinancing has upfront closing costs. Your monthly payment may drop, but you need to stay in the home long enough for those savings to offset the costs. That point is called the <strong>break-even point</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            Example: If closing costs are $4,000 and you save $150 per month, break-even is about 27 months. If you move or refinance again before that, you may not recoup what you paid. If you stay 10 years, you are likely ahead.
          </p>
          <p className="text-gray-700">
            Use a <Link href="/tools/refinance-analyzer" className="text-primary hover:underline font-medium">Refinance Break-Even Calculator</Link> to compare your current loan to a new one. Your Loan Estimate (under TRID) shows the new rate, payment, and closing costs for comparison.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">When Refinancing May Make Sense</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li><strong>Lower rate:</strong> You can get a meaningfully lower interest rate and will stay past break-even. Even 0.5% can add up over time.</li>
            <li><strong>Shorter term:</strong> You want to pay off the loan sooner (e.g., 30 to 15 years) and can afford the higher monthly payment.</li>
            <li><strong>Switch from ARM to fixed:</strong> Your adjustable-rate mortgage is about to adjust, and you want payment stability.</li>
            <li><strong>Remove PMI:</strong> Your home has appreciated or you have paid down principal enough to reach 80% LTV. A refinance can eliminate PMI. See <Link href="/mortgage/what-is-pmi" className="text-primary hover:underline">What Is PMI</Link>.</li>
            <li><strong>Cash out:</strong> You need to access equity for home improvements, debt consolidation, or other purposes. Compare to a <Link href="/mortgage/refinance-vs-heloc" className="text-primary hover:underline">HELOC</Link> or home equity loan.</li>
          </ul>
          <p className="text-gray-700">
            Your situation is unique. Run the numbers and talk to a licensed mortgage professional.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">When to Avoid Refinancing</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li><strong>Planning to move soon:</strong> If you will sell or move before break-even, refinancing typically does not pay off.</li>
            <li><strong>Closing costs exceed savings:</strong> If your break-even is 10+ years and you are unsure you will stay that long, it may not be worth it.</li>
            <li><strong>Resetting the clock:</strong> Refinancing into a new 30-year loan when you are 10 years into your current one extends your payoff date. You may pay more total interest even with a lower rate.</li>
            <li><strong>Cannot afford a shorter term:</strong> Switching to a 15-year loan raises the monthly payment. Only do it if your budget allows.</li>
            <li><strong>Credit or income issues:</strong> You may not qualify for a better rate. Check your credit and documents before applying.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Compare Your Options</h2>
          <p className="text-gray-700 mb-4">
            Get Loan Estimates from one or more lenders. Compare the new <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. Calculate break-even: closing costs ÷ monthly payment savings. Consider total interest over the time you expect to stay.
          </p>
          <p className="text-gray-700 mb-4">
            Under TRID, the Loan Estimate and Closing Disclosure present terms in a standardized format. Use them to compare offers. See{' '}
            <Link href="/mortgage/refinance-closing-costs-explained" className="text-primary hover:underline font-medium">Refinance Closing Costs Explained</Link> and{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link> for comparing total cost.
          </p>
        </section>

        <div className="mb-10 rounded-xl border-l-4 border-teal-500 bg-teal-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-teal-900 mb-2">Key Takeaway</h3>
          <p className="text-teal-800 text-[15px] leading-relaxed">
            Refinancing can lower your payment or help you reach other goals, but it has upfront costs. Calculate your break-even and ask: &quot;Will I stay long enough to recoup those costs?&quot; If yes, and the numbers work, refinancing may make sense. If not, it may be better to wait. See{' '}
            <Link href="/mortgage/refinance-break-even-point-explained" className="text-teal-700 underline font-medium">Refinance Break Even Point Explained</Link>.
          </p>
        </div>

        <section className="mb-10" aria-label="Frequently asked questions about whether to refinance">
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
            <li>Consumer Financial Protection Bureau (CFPB) – Refinancing</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Loan Estimate and Closing Disclosure</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          calculator={{ label: 'Refinance Break-Even Calculator', href: '/tools/refinance-analyzer' }}
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
            Your situation is unique. Use a refinance calculator and consult a licensed mortgage professional.
          </p>
        </section>
      </main>
    </div>
  );
}
