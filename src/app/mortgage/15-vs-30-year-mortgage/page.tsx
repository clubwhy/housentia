import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '15 vs 30 Year Mortgage | Housentia',
  description:
    'Compare 15-year and 30-year mortgages: monthly payment, total interest, and when each makes sense.',
  openGraph: { title: '15 vs 30 Year Mortgage | Housentia', description: 'Compare 15-year and 30-year mortgages.' },
};

const ARTICLE_SLUG = '15-vs-30-year-mortgage';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: '15 vs 30 Year Mortgage' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/15-vs-30-year-mortgage';

const FAQ_ITEMS = [
  { question: 'What is the main difference between 15-year and 30-year mortgages?', answer: 'A 15-year loan has higher monthly payments but pays off faster and costs less in total interest. A 30-year loan has lower monthly payments but more total interest over time. The choice often depends on your budget and goals.' },
  { question: 'Which has the lower monthly payment?', answer: 'The 30-year has a lower monthly payment because you spread the loan over twice as long. For the same loan amount and rate, the 15-year payment is roughly 25%–35% higher.' },
  { question: 'Which saves more interest?', answer: 'The 15-year saves significant interest because you pay off the principal faster. You also build equity quicker. Over the life of the loan, total interest paid on a 15-year is typically much lower than on a 30-year.' },
  { question: 'Do 15-year mortgages have lower interest rates?', answer: 'Often yes. Lenders may offer slightly lower rates on 15-year loans because the shorter term means less risk. The difference varies by lender and market conditions.' },
  { question: 'When does a 15-year make sense?', answer: 'A 15-year can make sense if you can comfortably afford the higher payment and want to pay off the loan sooner. A 30-year offers flexibility and lower payments if cash flow or other expenses are a concern.' },
  { question: 'Can I pay off a 30-year loan early?', answer: 'Yes. Most U.S. mortgages do not have prepayment penalties. You can make extra principal payments or pay off the loan early. A 30-year gives you the option to pay like a 15-year when you can, with lower required payments when you cannot.' },
];

export default function FifteenVsThirtyYearMortgagePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: '15 vs 30 Year Mortgage', description: 'Compare 15-year and 30-year: payment, interest, and when each makes sense.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="15 vs 30 Year Mortgage" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            One of the first decisions you will face when getting a mortgage is the <strong>loan term</strong>—how long you have to repay the loan. The two most common terms in the United States are 15 years and 30 years. Understanding the trade-offs between them can help you choose a term that fits your budget and goals.
          </p>
          <p className="text-gray-700 mb-4">
            A <strong>15-year mortgage</strong> has higher monthly payments but pays off the <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">principal</Link> faster and typically costs less in total interest. A <strong>30-year mortgage</strong> has lower monthly payments and more flexibility, but you pay interest for twice as long. Both are fully amortizing loans—each <strong>mortgage payment</strong> covers principal and interest until the loan is paid off. See <Link href="/mortgage/what-is-loan-term" className="text-primary hover:underline font-medium">What Is a Loan Term</Link>, <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>, and <Link href="/mortgage/what-is-a-fixed-rate-mortgage" className="text-primary hover:underline font-medium">What Is a Fixed Rate Mortgage</Link> for more context.
          </p>
          <p className="text-gray-700">
            Federal laws such as the Truth in Lending Act (TILA) and TRID (TILA-RESPA Integrated Disclosure) require lenders to provide a <strong>Loan Estimate</strong> within 3 business days of application. This form shows your estimated <strong>loan amount</strong>, <strong>interest rate</strong>, monthly payment, and <strong>closing costs</strong> for the term you choose—helping you compare 15-year and 30-year options side by side.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            The <strong>15 vs 30 year</strong> choice affects three main things: your monthly payment, how much total interest you pay over the life of the loan, and how quickly you build equity. With a 15-year loan, you make 180 payments (15 × 12). With a 30-year loan, you make 360 payments. The shorter term means each payment is larger, but you pay interest for half the time.
          </p>
          <p className="text-gray-700 mb-4">
            Lenders often offer slightly lower <strong>interest rates</strong> on 15-year loans because the shorter term reduces their risk. That rate advantage, combined with paying off the principal faster, can result in significantly less total interest. The trade-off is that your required <strong>mortgage payment</strong> is higher, which can affect your <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">debt-to-income ratio (DTI)</Link> and qualification.
          </p>
          <p className="text-gray-700">
            Your <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">loan-to-value ratio (LTV)</Link> and equity build differently with each term. With a 15-year loan, you pay down principal faster, so you build equity more quickly. With a 30-year loan, you build equity more slowly in the early years because a larger share of each payment goes toward interest.
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            Both 15-year and 30-year fixed-rate mortgages use the same <strong>amortization</strong> principle: each payment covers interest due for that period plus a portion of principal. Over time, the principal balance decreases until the loan is paid in full. The difference is the pace.
          </p>
          <p className="text-gray-700 mb-4">
            With a 30-year loan, you spread the same <strong>loan amount</strong> over 360 payments. That means smaller monthly payments, but more of each early payment goes to interest. With a 15-year loan, you compress the same principal into 180 payments. Each payment is larger, and a greater share goes to principal from the start—so the balance decreases faster and you pay less interest overall.
          </p>
          <p className="text-gray-700 mb-4">
            When you apply, the lender will <strong>underwrite</strong> your application based on the term you select. Your DTI is calculated using the monthly payment for that term. A 15-year payment is higher, so it can be harder to qualify if your income or DTI is tight. The <strong>Loan Estimate</strong> you receive under TRID will show the payment, <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">APR</Link>, and total interest for the term you choose—allowing you to compare before you commit.
          </p>
          <p className="text-gray-700">
            <strong>Closing costs</strong> are generally similar for 15-year and 30-year loans. The main cost difference is in the interest you pay over time, not in upfront fees. Some lenders may offer slightly different pricing by term; your Loan Estimate will reflect the specific offer.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            James is buying a $350,000 home with a $70,000 down payment. His <strong>loan amount</strong> is $280,000. He is comparing a 15-year and a 30-year fixed-rate mortgage, both at 6.5% (15-year rates are often a bit lower; this example uses the same rate for simplicity).
          </p>
          <p className="text-gray-700 mb-4">
            <strong>30-year at 6.5%:</strong> Monthly <strong>mortgage payment</strong> (principal and interest) is about $1,770. Total interest over 30 years: roughly $357,000.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>15-year at 6.5%:</strong> Monthly payment is about $2,440. Total interest over 15 years: roughly $159,000.
          </p>
          <p className="text-gray-700 mb-4">
            The 15-year saves about $198,000 in interest but requires an extra $670 per month. James must decide whether he can comfortably afford the higher payment. If his income supports it and he values paying off the loan sooner, the 15-year may fit. If he prefers lower payments to leave room for savings, emergencies, or other goals, the 30-year may be a better fit. He could also choose a 30-year and make extra principal payments when possible—many mortgages allow prepayment without penalty.
          </p>
          <p className="text-gray-700">
            This example is for illustration only. Actual payments and interest depend on the <strong>interest rate</strong>, <strong>loan amount</strong>, and other factors. Use a mortgage calculator to compare your own scenarios.
          </p>
        </section>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            For first-time homebuyers, the 15 vs 30 year decision affects how much house you can qualify for and how much you pay over time. A 30-year loan typically allows you to qualify for a larger loan amount because the monthly payment is lower. A 15-year loan may limit the amount you can borrow—but if you can afford it, you will pay less interest and own your home sooner.
          </p>
          <p className="text-gray-700 mb-4">
            Your choice also affects your budget for years to come. A 30-year payment leaves more room for retirement savings, emergencies, or other expenses. A 15-year payment commits more of your income to the mortgage. Consider your job stability, family plans, and other financial goals when deciding.
          </p>
          <p className="text-gray-700">
            Under TRID, your <strong>Loan Estimate</strong> and Closing Disclosure will clearly show the payment, total interest, and total payment over the life of the loan for the term you select. Review these forms carefully before closing. You can also ask your lender to provide estimates for both terms so you can compare.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">15-Year Mortgage</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Lower total interest paid</li>
                <li>Faster equity building</li>
                <li>Often slightly lower interest rate</li>
                <li>Loan paid off in half the time</li>
              </ul>
              <p className="text-gray-600 text-sm mt-2">Cons: Higher monthly payment; may limit qualification or budget flexibility</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">30-Year Mortgage</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Lower monthly payment</li>
                <li>Easier to qualify for a larger loan</li>
                <li>More budget flexibility</li>
                <li>Option to make extra payments when able</li>
              </ul>
              <p className="text-gray-600 text-sm mt-2">Cons: More total interest; slower equity building</p>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Choosing a 15-year without room in the budget:</strong> If the higher payment stretches your budget, you may struggle during job loss, illness, or other setbacks. Leave a cushion.</li>
            <li><strong>Ignoring the total interest difference:</strong> The 30-year costs more in interest over time. If you can afford a 15-year, the savings can be substantial—but only if you can sustain the payments.</li>
            <li><strong>Not comparing both terms:</strong> Ask for Loan Estimates for both 15-year and 30-year options. Seeing the numbers side by side helps you decide.</li>
            <li><strong>Assuming you cannot pay off a 30-year early:</strong> Most U.S. mortgages allow prepayment. A 30-year gives you the flexibility to pay extra when you can, without the obligation of a higher required payment.</li>
            <li><strong>Forgetting about closing costs:</strong> <strong>Closing costs</strong> are similar for both terms, but they affect your total cost. Factor them into your comparison.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about 15 vs 30 year">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <dl className="space-y-4">{FAQ_ITEMS.map((faq) => (
            <div key={faq.question} className="bg-gray-50 rounded-lg p-4">
              <dt className="font-semibold text-gray-900 mb-2">{faq.question}</dt>
              <dd className="text-gray-700">{faq.answer}</dd>
            </div>
          ))}</dl>
        </section>

        {/* Sources */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
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
          <p className="text-gray-700 text-sm">Use a mortgage calculator to compare scenarios.</p>
        </section>
      </main>
    </div>
  );
}
