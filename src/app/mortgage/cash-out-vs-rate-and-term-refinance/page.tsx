import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cash Out vs Rate and Term Refinance | Housentia',
  description:
    'Compare cash-out and rate-and-term refinancing. Learn when each makes sense and how they differ in underwriting and cost.',
  openGraph: { title: 'Cash Out vs Rate and Term Refinance | Housentia', description: 'Compare cash-out and rate-and-term refinancing.' },
};

const ARTICLE_SLUG = 'cash-out-vs-rate-and-term-refinance';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({ categorySlug: category?.slug, categoryTitle: category?.title, currentTitle: 'Cash Out vs Rate and Term Refinance' });
})();
const PAGE_URL = 'https://housentia.com/mortgage/cash-out-vs-rate-and-term-refinance';

const FAQ_ITEMS = [
  { question: 'What is the main difference between cash-out and rate-and-term refinance?', answer: 'Rate and term: you refinance for the payoff amount (or less) and change your interest rate or loan term. Cash-out: you borrow more than you owe and receive the difference in cash. Your new loan amount is higher with cash-out.' },
  { question: 'When is cash-out refinance used?', answer: 'When you need funds for home improvements, debt consolidation, education, or other expenses. You tap home equity. The cash you receive is the difference between your new loan amount and what you owed on the old loan.' },
  { question: 'Which has stricter underwriting?', answer: 'Cash-out often has stricter LTV limits, credit requirements, and may have higher interest rates. Rate and term can be simpler, especially for FHA streamline and VA IRRRL programs, which typically do not allow cash-out.' },
  { question: 'Can I do a small cash-out?', answer: 'Yes. Some borrowers take a small amount of cash out (e.g., to cover closing costs or a minor expense) while primarily doing a rate-and-term refinance. The loan is still classified as cash-out, which may affect LTV limits and pricing.' },
  { question: 'How does cash-out affect my mortgage payment?', answer: 'Cash-out increases your loan amount, so your monthly mortgage payment is higher than it would be with a rate-and-term refinance. The more you take out, the higher the payment.' },
  { question: 'Should I consider a HELOC instead of cash-out?', answer: 'A HELOC is a separate line of credit secured by your home. It may make sense if you need flexibility or want to borrow only what you need over time. Compare the costs and terms. See Refinance vs HELOC for more.' },
];

export default function CashOutVsRateAndTermRefinancePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({ headline: 'Cash Out vs Rate and Term Refinance', description: 'Compare cash-out and rate-and-term refinancing.', url: PAGE_URL, datePublished: new Date().toISOString().split('T')[0], dateModified: new Date().toISOString().split('T')[0] });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Cash Out vs Rate and Term Refinance" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.</p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            When you refinance, you replace your existing mortgage with a new one. The two main types are <strong>rate-and-term refinance</strong> and <strong>cash-out refinance</strong>. Understanding the difference helps you choose the right option for your situation. A rate-and-term refinance changes your <strong>interest rate</strong> or loan term without taking cash—your new <strong>loan amount</strong> equals (or is less than) what you owed. A cash-out refinance lets you borrow more than you owe and receive the difference in cash, increasing your <strong>loan amount</strong> and typically your <strong>mortgage payment</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            Federal rules—including the Truth in Lending Act (TILA), the Real Estate Settlement Procedures Act (RESPA), and TRID (TILA-RESPA Integrated Disclosure)—require lenders to provide a <strong>Loan Estimate</strong> within 3 business days of application. This form shows your <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong> for the refinance you are considering. Comparing a rate-and-term and cash-out scenario (if you are weighing both) can help you see the cost difference.
          </p>
          <p className="text-gray-700">
            This guide explains cash-out vs rate-and-term refinancing, how each works, and what first-time refinancers should know. For more detail, see <Link href="/mortgage/what-is-a-rate-and-term-refinance" className="text-primary hover:underline font-medium">What Is a Rate and Term Refinance</Link>, <Link href="/mortgage/what-is-cash-out-refinance" className="text-primary hover:underline font-medium">What Is a Cash Out Refinance</Link>, and <Link href="/mortgage/refinance-vs-heloc" className="text-primary hover:underline font-medium">Refinance vs HELOC</Link>.
          </p>
        </section>

        {/* What This Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-gray-700 mb-4">
            With a <strong>rate-and-term refinance</strong>, your new <strong>loan amount</strong> pays off your existing mortgage—plus any <strong>closing costs</strong> you roll in—and you receive no cash at closing. You are refinancing to get a lower <strong>interest rate</strong>, a different loan term (e.g., 30 years to 15 years), or both. Your <strong>mortgage payment</strong> may go down (if the rate drops or you extend the term) or up (if you shorten the term). Your <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">loan-to-value ratio (LTV)</Link> typically stays the same or improves slightly.
          </p>
          <p className="text-gray-700 mb-4">
            With a <strong>cash-out refinance</strong>, your new <strong>loan amount</strong> exceeds what you owe. The difference—minus <strong>closing costs</strong>—is paid to you at closing. You are tapping your home equity. Your <strong>loan amount</strong> increases, so your <strong>mortgage payment</strong> increases. Your LTV goes up because you are borrowing more relative to the home&apos;s value. Lenders often have stricter LTV limits for cash-out (e.g., 80% for conventional) and may charge slightly higher <strong>interest rates</strong>.
          </p>
          <p className="text-gray-700">
            FHA streamline and VA IRRRL refinances are typically rate-and-term only—they do not allow cash-out. If you want to tap equity and have an FHA or VA loan, you would need a full cash-out refinance, which has different <strong>underwriting</strong> and eligibility rules.
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            For both types, the lender will <strong>underwrite</strong> your application—verifying income, assets, credit, and the property. For a rate-and-term refinance, the lender confirms your current balance and that the new <strong>loan amount</strong> does not exceed the payoff plus allowable fees. For a cash-out refinance, the lender also verifies the property value (usually with an appraisal) and applies LTV limits. Your <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">debt-to-income ratio (DTI)</Link> must support the new <strong>mortgage payment</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            Conventional cash-out refinances often cap LTV at 80% (or lower in some cases)—meaning you can borrow up to 80% of the home&apos;s value. If your home is worth $400,000 and you owe $250,000, you have $70,000 in equity above an 80% LTV ($320,000). You could potentially take up to $70,000 in cash-out, minus <strong>closing costs</strong>. Rate-and-term refinances may allow higher LTV (e.g., 97% for some programs) because you are not increasing the <strong>loan amount</strong> beyond the payoff.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>Loan Estimate</strong> will show the <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. For a cash-out refinance, the form will also show the amount of cash you will receive. Under TRID, you receive the Loan Estimate within 3 business days of application. Compare the payment and total cost for a rate-and-term vs cash-out scenario to see how much the extra borrowing adds to your <strong>mortgage payment</strong>. See <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link> and <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link> for context on how payments apply over time.
          </p>
          <p className="text-gray-700">
            <strong>Closing costs</strong> are similar for both—appraisal, title, lender fees, etc. With cash-out, the appraisal is typically required to establish value. With rate-and-term, some streamline programs waive the appraisal. You can often roll <strong>closing costs</strong> into the <strong>loan amount</strong> for either type, which increases your balance and payment slightly.
          </p>
        </section>

        {/* Realistic Example Scenario */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
          <p className="text-gray-700 mb-4">
            David owes $280,000 on his home. It is worth $400,000. He is considering two options: a rate-and-term refinance to lower his rate from 7% to 6.25%, or a cash-out refinance to get $30,000 for a kitchen remodel while also lowering his rate.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Rate-and-term:</strong> New <strong>loan amount</strong> = $280,000 (plus $5,000 in <strong>closing costs</strong> rolled in = $285,000). At 6.25%, his <strong>mortgage payment</strong> (principal and interest) is about $1,755. He receives no cash at closing.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Cash-out:</strong> New <strong>loan amount</strong> = $280,000 + $30,000 cash + $5,500 <strong>closing costs</strong> = $315,500. At 6.5% (slightly higher rate for cash-out), his <strong>mortgage payment</strong> is about $1,995. He receives $30,000 at closing. His LTV is 79% ($315,500 ÷ $400,000), within typical limits.
          </p>
          <p className="text-gray-700 mb-4">
            The cash-out option costs David about $240 more per month than the rate-and-term option. He must decide whether the $30,000 for the remodel is worth the higher payment. If he does not need the cash, the rate-and-term refinance is the simpler, lower-cost path.
          </p>
          <p className="text-gray-700">
            This example is illustrative. Actual <strong>interest rates</strong>, <strong>closing costs</strong>, and LTV limits vary by lender and program. David&apos;s scenario shows the trade-off: cash-out gives you access to equity but increases your <strong>loan amount</strong> and <strong>mortgage payment</strong>.
          </p>
        </section>

        {/* Why This Matters for Homebuyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            If you have built equity in your home—through appreciation or paying down <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">principal</Link>—you may be able to access it through a cash-out refinance. Common uses include home improvements, debt consolidation, education, or emergency expenses. A rate-and-term refinance, by contrast, is focused on lowering your <strong>interest rate</strong> or changing your term. It does not give you cash—it may lower your <strong>mortgage payment</strong> or help you pay off the loan sooner.
          </p>
          <p className="text-gray-700 mb-4">
            For many homeowners, a rate-and-term refinance is the right choice when rates drop. You reduce your payment or shorten your term without increasing your debt. A cash-out refinance makes sense when you need funds and are comfortable with a higher <strong>loan amount</strong> and <strong>mortgage payment</strong>. Your <strong>Loan Estimate</strong> will show both scenarios if you request quotes for each—use it to compare.
          </p>
          <p className="text-gray-700">
            Alternatives to cash-out refinance include a <Link href="/mortgage/refinance-vs-heloc" className="text-primary hover:underline font-medium">HELOC</Link> (home equity line of credit) or a home equity loan. These are second liens—you keep your existing mortgage and add a separate loan or line. They may have different <strong>interest rates</strong>, terms, and <strong>closing costs</strong>. Compare all options before deciding.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Rate-and-Term Refinance</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Lower loan amount—no new debt</li>
                <li>May qualify for streamline (FHA, VA) with simpler underwriting</li>
                <li>Often lower interest rate than cash-out</li>
                <li>Focused on reducing payment or shortening term</li>
              </ul>
              <p className="text-gray-600 text-sm mt-2">Cons: No access to equity; you receive no cash</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Cash-Out Refinance</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Access to home equity in a lump sum</li>
                <li>One loan, one payment</li>
                <li>May have lower rate than HELOC or credit cards</li>
                <li>Funds can be used for various purposes</li>
              </ul>
              <p className="text-gray-600 text-sm mt-2">Cons: Higher loan amount and payment; stricter LTV; may have higher rate</p>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Taking more cash than you need:</strong> Every dollar you take out increases your <strong>loan amount</strong> and <strong>mortgage payment</strong>. Borrow only what you need.</li>
            <li><strong>Ignoring the payment increase:</strong> Cash-out raises your payment. Ensure your budget can handle it—especially if you use the cash for something that does not generate income (e.g., a vacation).</li>
            <li><strong>Assuming streamline allows cash-out:</strong> FHA streamline and VA IRRRL typically do not allow cash-out. If you need cash and have an FHA or VA loan, you need a full cash-out refinance.</li>
            <li><strong>Not comparing to HELOC:</strong> A HELOC may be cheaper if you need flexibility or a smaller amount. Compare <strong>interest rates</strong>, <strong>closing costs</strong>, and terms.</li>
            <li><strong>Overlooking the break-even:</strong> Refinancing has <strong>closing costs</strong>. For rate-and-term, calculate when monthly savings offset the cost. For cash-out, the benefit is the cash—but the higher payment is a real cost.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-label="Frequently asked questions about cash out vs rate and term">
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
            <li>Fannie Mae – Selling Guide (conventional refinance guidelines)</li>
            <li>Freddie Mac – Single-Family Seller/Servicer Guide</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks className="mb-10" />

        {/* Educational Disclaimer */}
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
