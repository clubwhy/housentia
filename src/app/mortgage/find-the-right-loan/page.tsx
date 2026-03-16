"use client";
import PageHero from '@/components/PageHero';
import GeminiChatBot from '@/components/GeminiChatBot';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import Link from 'next/link';

const ARTICLE_SLUG = 'find-the-right-loan';
const PAGE_URL = 'https://housentia.com/mortgage/find-the-right-loan';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Find the Right Loan',
  });
})();

const FAQ_ITEMS = [
  {
    question: 'How do I compare loan offers?',
    answer:
      'Use the Loan Estimate. Under TRID, lenders must provide it within 3 business days. Compare interest rate, mortgage payment, closing costs, and APR across offers. The APR incorporates some fees and helps you compare the true cost of credit.',
  },
  {
    question: 'What factors affect which loan is right for me?',
    answer:
      'Credit score, down payment, debt-to-income ratio, and how long you plan to stay in the home. FHA may suit lower credit and smaller down payments; conventional may cost less long-term if you have strong credit and 5%+ down.',
  },
  {
    question: 'Should I focus on interest rate or APR?',
    answer:
      'Both matter. The interest rate affects your mortgage payment. The APR includes some fees and reflects the total cost of credit. Compare both when shopping. See our What Is APR and APR vs Interest Rate guides.',
  },
  {
    question: 'How many lenders should I get quotes from?',
    answer:
      'Getting Loan Estimates from at least 2–3 lenders can help you compare. Rate shopping within a short window (e.g., 14–45 days) typically counts as one inquiry for credit scoring purposes.',
  },
  {
    question: 'When should I use FHA vs conventional?',
    answer:
      'FHA can be better for first-time buyers with lower credit or limited down payment. Conventional may be better if you have 620+ credit and 5%+ down, especially if you want to avoid long-term mortgage insurance. See our FHA vs Conventional Loan guide.',
  },
];

export default function FindTheRightLoanPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Home', href: '/' }, ...BREADCRUMBS], 'https://housentia.com', PAGE_URL);
  const articleSchema = buildArticleSchema({
    headline: 'Find the Right Loan',
    description: 'Learn how to compare loan options and choose the right mortgage for your situation.',
    url: PAGE_URL,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen w-full relative bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#00b89f] overflow-x-hidden">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      {/* 은은한 SVG 패턴 (점선 다이아몬드 + 컬러 원) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg width="100%" height="100%" style={{position: 'absolute', inset: 0}}>
          {/* 점선 다이아몬드 */}
          <g stroke="#fff" strokeDasharray="4 4" strokeWidth="1.5" opacity="0.13">
            <polygon points="180,80 230,130 180,180 130,130" />
            <polygon points="500,200 570,270 500,340 430,270" />
            <polygon points="900,60 950,110 900,160 850,110" />
          </g>
          {/* 컬러 원 */}
          <circle cx="160" cy="120" r="10" fill="#07c3ff" opacity="0.7" />
          <circle cx="600" cy="260" r="13" fill="#00b89f" opacity="0.7" />
          <circle cx="950" cy="120" r="8" fill="#ffc400" opacity="0.7" />
          <circle cx="300" cy="350" r="10" fill="#ff3b3b" opacity="0.7" />
        </svg>
      </div>
      <PageHero 
        title="Find the Right Loan"
        breadcrumbs={BREADCRUMBS}
      />
      {/* Educational Disclaimer */}
      <div className="max-w-4xl mx-auto px-4 mb-4">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="text-sm text-gray-700">
            <strong>Educational Guidance Only:</strong> Ask Habi provides general educational guidance only and does not recommend specific lenders, products, or loan terms. 
            This tool is designed to help you understand different loan options and ask clarifying questions. 
            Housentia is not a licensed mortgage broker, lender, or loan originator.
          </p>
        </div>
      </div>
      {/* 오른쪽 하단 워터마크 로고 (더 잘 보이게, 클릭 시 이동) */}
      {/**
      <a
        href="/mortgage/find-the-right-loan"
        style={{
          position: 'fixed',
          right: '3vw',
          bottom: '3vw',
          zIndex: 10,
          opacity: 0.35,
          filter: 'brightness(2.5) grayscale(0.4) drop-shadow(0 0 16px #fff)',
          pointerEvents: 'auto',
          width: '190px',
          height: 'auto',
          background: 'rgba(255,255,255,0.13)',
          borderRadius: '22px',
          padding: '10px',
          transition: 'opacity 0.2s',
        }}
        title="Go to Ask Habi chatbot"
      >
        <img
          src="/habi.png"
          alt="Ask Habi Logo Watermark"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </a>
      */}
      <main className="relative max-w-4xl mx-auto px-4 pt-2 pb-6 font-sans text-[17px] text-gray-100 shadow-2xl rounded-2xl overflow-hidden z-10" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7, background: 'transparent' }}>
        {/* 상단 로고/워딩은 Hero 아래로 이동 */}
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-3 px-4 mb-2" style={{ marginTop: '9px' }}>
          <img src="/habi.png" alt="Ask Habi Logo" className="w-[136px] h-14 rounded-xl bg-white shadow-md object-contain" />
          <span className="text-lg md:text-xl font-bold text-white drop-shadow">Say Hello to Smarter Home Buying</span>
        </div>
        <GeminiChatBot />
        {/* Educational Article Content */}
        <div className="mt-8 bg-white rounded-2xl p-6 md:p-10 text-gray-800 shadow-xl">
          <p className="text-sm text-gray-600 mb-6 italic">
            This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.
          </p>

          {/* Introduction */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 mb-4">
              Finding the right loan means comparing your options based on your credit, down payment, and goals. Your <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong> vary by loan type—FHA, conventional, VA, USDA—and by lender. Under TRID (TILA-RESPA Integrated Disclosure), every lender provides a <strong>Loan Estimate</strong> within 3 business days of application. That form lets you compare <strong>loan amount</strong>, rate, payment, and fees in a consistent format.
            </p>
            <p className="text-gray-700 mb-4">
              This guide explains how to evaluate loan options and use the <strong>Loan Estimate</strong> to compare. See <Link href="/mortgage/fha-vs-conventional-loan" className="text-primary hover:underline font-medium">FHA vs Conventional Loan</Link>, <Link href="/mortgage/what-is-loan-estimate" className="text-primary hover:underline font-medium">What Is a Loan Estimate</Link>, and <Link href="/mortgage/first-time-home-buyer" className="text-primary hover:underline font-medium">First-Time Home Buyer</Link> for related topics.
            </p>
          </section>

          {/* What This Means */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
            <p className="text-gray-700 mb-4">
              The &quot;right&quot; loan depends on your situation. If you have limited savings, an FHA loan with 3.5% down may be the only option. If you have strong credit and 20% down, conventional avoids <Link href="/mortgage/what-is-pmi" className="text-primary hover:underline font-medium">PMI</Link> and may cost less long-term. Your <strong>loan amount</strong> is the same for a given purchase price and down payment—but your <strong>interest rate</strong>, insurance costs, and <strong>closing costs</strong> differ by loan type and lender.
            </p>
            <p className="text-gray-700 mb-4">
              Key factors: your <Link href="/mortgage/credit-score-for-mortgage" className="text-primary hover:underline font-medium">credit score</Link>, <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">debt-to-income ratio (DTI)</Link>, <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">loan-to-value ratio (LTV)</Link>, and how long you plan to stay. A lower <strong>interest rate</strong> saves money over time—but if you refinance or sell in 5 years, <strong>closing costs</strong> matter more. The <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">APR</Link> on the Loan Estimate incorporates some fees and helps you compare.
            </p>
          </section>

          {/* How It Works */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-700 mb-4">
              You apply with one or more lenders. Each provides a <strong>Loan Estimate</strong> within 3 business days. The form shows your <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. The lender will <strong>underwrite</strong> your application—verifying income, assets, and credit. Your credit score and DTI determine which programs you qualify for and at what rate.
            </p>
            <p className="text-gray-700 mb-4">
              Compare offers using the same purchase price and down payment. Look at the <strong>interest rate</strong>, <strong>mortgage payment</strong> (including PMI or MIP if applicable), total <strong>closing costs</strong>, and APR. The TILA (Truth in Lending Act) and RESPA (Real Estate Settlement Procedures Act) require clear disclosure. Rate shopping within a short window typically counts as one credit inquiry. See <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link> and <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link> for how your payment is applied.
            </p>
          </section>

          {/* Realistic Example Scenario */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example Scenario</h2>
            <p className="text-gray-700 mb-4">
              Casey is buying a $350,000 home with 10% down ($35,000). Their <strong>loan amount</strong> is $315,000. They get <strong>Loan Estimates</strong> from three lenders: one FHA, one conventional from Lender A, one conventional from Lender B. FHA offers 6.5% with MIP; Lender A offers 6.75% with PMI; Lender B offers 6.5% with slightly higher <strong>closing costs</strong>.
            </p>
            <p className="text-gray-700 mb-4">
              Casey compares the <strong>mortgage payment</strong> (P&I plus insurance), total <strong>closing costs</strong>, and APR. Lender B has the lowest rate but $1,200 more in fees. The break-even is about 18 months. Casey plans to stay 7+ years, so Lender B is the best fit. If they had only 3.5% down, FHA might be the only option. The example is illustrative—actual terms vary.
            </p>
          </section>

          {/* Why This Matters for Homebuyers */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
            <p className="text-gray-700 mb-4">
              For first-time buyers, the loan choice affects your budget for years. A difference of 0.25% in <strong>interest rate</strong> on a $300,000 loan is about $50 per month—$18,000 over 30 years. Shopping lenders and comparing <strong>Loan Estimates</strong> can save thousands. Your <strong>mortgage payment</strong> also affects your DTI—the lower the payment, the more you may qualify for.
            </p>
            <p className="text-gray-700 mb-4">
              Use the tools available: the <strong>Loan Estimate</strong> for comparison, the <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">APR</Link> for total cost, and our guides on <Link href="/mortgage/fha-vs-conventional-loan" className="text-primary hover:underline font-medium">FHA vs Conventional</Link>, <Link href="/mortgage/down-payment-requirements-explained" className="text-primary hover:underline font-medium">Down Payment Requirements</Link>, and <Link href="/mortgage/credit-score-for-mortgage" className="text-primary hover:underline font-medium">Credit Score for Mortgage</Link>. TRID was designed to make comparison easier—use it.
            </p>
          </section>

          {/* Pros and Cons */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Shopping for the Right Loan</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Pros of Comparing Offers</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Can save thousands over the life of the loan</li>
                  <li>Loan Estimate makes comparison consistent</li>
                  <li>Rate shopping counts as one credit inquiry</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Challenges</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Takes time to get multiple quotes</li>
                  <li>Terms can change before you lock</li>
                  <li>Must compare apples to apples (same loan type, amount)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Comparing only the interest rate:</strong> Closing costs and APR matter. A lower rate with high fees may cost more overall.</li>
              <li><strong>Not getting multiple Loan Estimates:</strong> Shopping 2–3 lenders can reveal meaningful differences in rate and fees.</li>
              <li><strong>Ignoring mortgage insurance:</strong> FHA MIP and conventional PMI add to your <strong>mortgage payment</strong>. Factor them in.</li>
              <li><strong>Assuming one loan type is always best:</strong> Your credit, down payment, and goals determine the right fit.</li>
              <li><strong>Not locking your rate:</strong> Rates change. Once you choose a lender, lock your rate to secure the terms.</li>
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
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
              <li>Consumer Financial Protection Bureau (CFPB) – Loan Estimate and Closing Disclosure (TRID)</li>
              <li>Consumer Financial Protection Bureau (CFPB) – Truth in Lending Act (TILA)</li>
              <li>Consumer Financial Protection Bureau (CFPB) – Real Estate Settlement Procedures Act (RESPA)</li>
            </ul>
          </section>

          <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />

          {/* Educational Disclaimer */}
          <section className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
            <h2 className="text-lg font-bold text-gray-900 mb-2">Educational Disclaimer</h2>
            <p className="text-gray-700 text-sm mb-2">
              This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.
            </p>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Housentia is not a lender, mortgage broker, or loan originator.</strong>
            </p>
            <p className="text-gray-700 text-sm">
              Loan terms and eligibility vary by lender and program.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
} 