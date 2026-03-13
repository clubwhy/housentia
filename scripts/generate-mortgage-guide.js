#!/usr/bin/env node

/**
 * MAKE-200 Mortgage Guide Generator
 *
 * Reads docs/MAKE-200.md and creates the next mortgage guide topic.
 * Run manually: node scripts/generate-mortgage-guide.js [--count N]
 *
 * Usage:
 *   node scripts/generate-mortgage-guide.js        # Create 1 topic
 *   node scripts/generate-mortgage-guide.js --count 3   # Create 3 topics
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const MAKE_200_PATH = path.join(ROOT, 'docs', 'MAKE-200.md');
const MORTGAGE_GUIDES_PATH = path.join(ROOT, 'src', 'lib', 'mortgage-guides.ts');
const SITEMAP_PATH = path.join(ROOT, 'src', 'app', 'sitemap.ts');
const MORTGAGE_PAGES_DIR = path.join(ROOT, 'src', 'app', 'mortgage');

// MAKE-200 category header -> mortgage-guides category slug
const CATEGORY_MAP = {
  '1️⃣ Mortgage Basics (30 topics)': 'basics',
  '2️⃣ Mortgage Process (30 topics)': 'process',
  '3️⃣ Mortgage Costs (25 topics)': 'costs',
  '4️⃣ Loan Types (25 topics)': 'loan-types',
  '5️⃣ Refinancing (20 topics)': 'refinance',
  '6️⃣ Credit & Qualification (20 topics)': 'credit',
  '7️⃣ Mortgage Rates (15 topics)': 'rates',
  '8️⃣ Home Buying (20 topics)': 'home-buying',
  '9️⃣ Mortgage Calculations (15 topics)': 'basics',
};

// Topic title -> existing slug (skip creation, topic already covered)
const TOPIC_TO_EXISTING_SLUG = {
  'What Is APR': 'what-is-apr',
  'What Is Interest Rate': 'what-is-interest-rate',
  'What Is DTI': 'what-is-dti',
  'What Is LTV': 'what-is-ltv',
  'What Is PMI': 'what-is-pmi',
  'What Is Escrow': 'what-is-escrow',
  'What Is Amortization': 'what-is-amortization',
  'What Is Loan Term': 'what-is-loan-term',
  'What Is Mortgage Insurance': 'what-is-mortgage-insurance',
  'What Is a Loan Estimate': 'what-is-loan-estimate',
  'What Is a Closing Disclosure': 'what-is-closing-disclosure',
  'What Is a Mortgage Rate Lock': 'what-is-rate-lock',
  'What Is Mortgage Pre Approval': 'mortgage-pre-approval',
  'What Is Mortgage Pre Qualification': 'prequalify',
  'What Is Mortgage Refinancing': 'what-is-refinance',
  'Mortgage Application Process': 'mortgage-application-process',
  'Mortgage Underwriting Process': 'mortgage-underwriting-explained',
  'Mortgage Closing Process': 'mortgage-closing-process',
  'What Are Closing Costs': 'what-is-closing-costs',
  'What Are Mortgage Points': 'what-is-mortgage-points',
  'Discount Points vs Origination Fee': 'discount-points-vs-origination-fee',
  'What Is an Origination Fee': 'what-is-origination-fee',
  'What Is a Conventional Loan': 'conventional-loan',
  'What Is an FHA Loan': 'fha-loan',
  'What Is a VA Loan': 'va-loan',
  'What Is a Reverse Mortgage': 'reverse',
  'What Is a Non QM Loan': 'non-qm-loan',
  'What Is a Cash Out Refinance': 'what-is-cash-out-refinance',
  'Credit Score for Mortgage': 'credit-score-for-mortgage',
  'How DTI Affects Mortgage Approval': 'how-dti-affects-mortgage-approval',
  'What Lenders Look for in a Mortgage Application': 'what-lenders-look-at-mortgage-approval',
  'Mortgage Income Verification': 'how-income-verified-mortgage',
  'First Time Home Buyer Guide': 'first-time-home-buyer',
  'What Is a Mortgage': 'what-is-a-mortgage',
};

function titleToSlug(title) {
  return title
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function toPascalCase(str) {
  return str
    .replace(/[^a-zA-Z0-9\s]/g, '')
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join('');
}

function parseMake200(content) {
  if (!content || content.trim().length < 100) {
    console.warn('⚠️  MAKE-200.md is empty or too short. Using embedded topic list.');
    return getEmbeddedTopics();
  }
  const lines = content.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  const topics = [];
  let currentCategory = 'basics';

  for (const line of lines) {
    if (CATEGORY_MAP[line]) {
      currentCategory = CATEGORY_MAP[line];
      continue;
    }
    if (line.match(/^\d[️⃣]?/)) continue;
    if (line.length < 3) continue;
    topics.push({ title: line, category: currentCategory });
  }

  return topics.length > 0 ? topics : getEmbeddedTopics();
}

function getEmbeddedTopics() {
  const list = [
    ['basics', 'What Is a Mortgage'], ['basics', 'How Mortgages Work'], ['basics', 'What Is APR'], ['basics', 'What Is Interest Rate'],
    ['basics', 'APR vs Interest Rate'], ['basics', 'What Is DTI'], ['basics', 'What Is LTV'], ['basics', 'What Is PMI'],
    ['basics', 'What Is Escrow'], ['basics', 'What Is Amortization'], ['basics', 'What Is Loan Term'], ['basics', 'What Is Mortgage Principal'],
    ['process', 'Mortgage Application Process'], ['process', 'Mortgage Underwriting Process'], ['process', 'Mortgage Closing Process'],
    ['costs', 'What Are Closing Costs'], ['costs', 'What Are Mortgage Points'], ['costs', 'What Is an Origination Fee'],
    ['loan-types', 'What Is a Conventional Loan'], ['loan-types', 'What Is an FHA Loan'], ['loan-types', 'What Is a VA Loan'],
    ['refinance', 'What Is Mortgage Refinancing'], ['refinance', 'What Is a Cash Out Refinance'],
    ['credit', 'Credit Score for Mortgage'], ['credit', 'How DTI Affects Mortgage Approval'],
    ['rates', 'What Determines Mortgage Rates'], ['home-buying', 'First Time Home Buyer Guide'],
  ];
  return list.map(([category, title]) => ({ title, category }));
}

function getExistingSlugs() {
  const guidesContent = fs.readFileSync(MORTGAGE_GUIDES_PATH, 'utf8');
  const slugs = [];
  const re = /slug:\s*['"]([^'"]+)['"]/g;
  let m;
  while ((m = re.exec(guidesContent)) !== null) slugs.push(m[1]);
  return new Set(slugs);
}

function getNextTopic(topics, existingSlugs) {
  for (const t of topics) {
    const existingSlug = TOPIC_TO_EXISTING_SLUG[t.title];
    if (existingSlug && existingSlugs.has(existingSlug)) continue;

    const slug = existingSlug || titleToSlug(t.title);
    if (existingSlugs.has(slug)) continue;

    const pagePath = path.join(MORTGAGE_PAGES_DIR, slug, 'page.tsx');
    if (fs.existsSync(pagePath)) {
      existingSlugs.add(slug);
      continue;
    }

    return { ...t, slug };
  }
  return null;
}

function escapeJs(str) {
  return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/'/g, "\\'").replace(/\n/g, '\\n');
}

function generatePageContent(topic) {
  const { title, slug, category } = topic;
  const term = title.replace(/^(What Is|What Are|How|When|Why|What)\s+(a\s+|an\s+)?/i, '').trim();
  const termLc = term.toLowerCase();
  const componentName = toPascalCase(slug) + 'Page';
  const today = new Date().toISOString().split('T')[0];

  const faqItems = [
    { q: `What is ${termLc} in the context of mortgages?`, a: `${term} is an important concept for U.S. homebuyers. Understanding it helps you make informed decisions when applying for a mortgage. Consult your Loan Estimate and Closing Disclosure for specifics.` },
    { q: `How does ${termLc} affect my mortgage?`, a: `Lenders consider ${termLc} when evaluating your application. The impact varies by loan type and lender. Your Loan Estimate will show how it applies to your specific scenario.` },
    { q: `Where can I find ${termLc} on my loan documents?`, a: `Under TRID rules, key terms appear on the Loan Estimate and Closing Disclosure. These standardized forms help you compare offers and understand costs.` },
    { q: `Does ${termLc} vary by lender?`, a: `Yes. Mortgage terms and requirements can vary by lender and loan program. Shop multiple lenders and compare your Loan Estimates.` },
    { q: `Who can I ask about ${termLc}?`, a: `A licensed mortgage professional can explain how ${termLc} applies to your situation. Housentia provides educational content only and is not a lender.` },
  ];

  const faqJsx = faqItems
    .map(
      (f) => `  {
    question: "${escapeJs(f.q)}",
    answer: "${escapeJs(f.a)}",
  }`
    )
    .join(',\n');

  return `import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${escapeJs(title)}? A Guide for U.S. Homebuyers | Housentia',
  description: '${escapeJs(term)} is a key concept for mortgage borrowers. Learn how it works, how it affects your loan, and where to find it on your Loan Estimate and Closing Disclosure.',
  openGraph: {
    title: '${escapeJs(title)}? A Guide for U.S. Homebuyers | Housentia',
    description: 'Learn how ${escapeJs(termLc)} works and how it affects your mortgage.',
  },
};

const ARTICLE_SLUG = '${slug}';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: '${escapeJs(title)}?',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/${slug}';

const FAQ_ITEMS = [
${faqJsx}
];

export default function ${componentName}() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: '${escapeJs(title)}? A Guide for U.S. Homebuyers',
    description: '${escapeJs(term)} is a key concept for mortgage borrowers. This guide explains how it works and how it affects your loan.',
    url: PAGE_URL,
    datePublished: '${today}',
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="${escapeJs(title)}? A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <Disclaimer variant="compact" className="mb-6" />
        <p className="text-sm text-gray-600 mb-8 italic">
          This content is provided for general educational purposes only and does not constitute financial, legal, or mortgage advice.
        </p>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            When navigating the mortgage process in the United States, understanding ${termLc} is essential. This guide explains what ${termLc} means, how it works, and how it affects your loan. Whether you are a first-time homebuyer or refinancing, this information can help you make informed decisions.
          </p>
          <p className="text-gray-700 mb-4">
            The U.S. mortgage market is regulated by federal laws such as the Truth in Lending Act (TILA) and the TILA-RESPA Integrated Disclosure (TRID) rules. These regulations require lenders to provide clear, standardized disclosures. The Consumer Financial Protection Bureau (CFPB) oversees many of these requirements to protect consumers.
          </p>
          <p className="text-gray-700">
            This content is for general educational purposes only. Mortgage terms and requirements vary by lender and borrower circumstances. Consult a licensed mortgage professional for advice specific to your situation.
          </p>
        </section>

        {/* What It Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What ${title.replace(/^What (Is|Are)\s+/i, '').trim()} Means</h2>
          <p className="text-gray-700 mb-4">
            ${term} refers to a concept that lenders use when evaluating mortgage applications and structuring loan terms. Understanding this concept helps you compare offers and anticipate how your loan will work.
          </p>
          <p className="text-gray-700 mb-4">
            When you apply for a mortgage, you will receive a Loan Estimate within three business days (under TRID rules). This form shows estimated terms and costs. The Closing Disclosure, provided at least three business days before closing, reflects the final terms. Both documents use standardized formats to help you compare offers.
          </p>
          <p className="text-gray-700">
            Lenders consider multiple factors when approving a loan, including credit, income, assets, debt, and the property. ${term} is one of the factors that may influence your eligibility and loan terms.
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            In the context of mortgages, ${termLc} plays a role in how lenders assess risk and structure loan products. The specifics depend on the loan type—conventional, FHA, VA, USDA, or non-QM—and the lender&apos;s guidelines.
          </p>
          <p className="text-gray-700 mb-4">
            Federal regulations require lenders to make a reasonable, good-faith determination that you can repay the loan (Ability to Repay / Qualified Mortgage rules). This means they must verify income, review debt obligations, and evaluate the property. ${term} may be part of that evaluation.
          </p>
          <p className="text-gray-700 mb-4">
            If you have questions about how ${termLc} applies to your situation, a licensed loan officer or mortgage broker can provide guidance. You also have the right to shop multiple lenders and compare Loan Estimates before committing.
          </p>
          <p className="text-gray-700">
            Remember that Housentia is not a lender, mortgage broker, or loan originator. We provide educational content only. Rates, programs, and requirements vary by lender.
          </p>
        </section>

        {/* Key Takeaways */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>${term} is a factor that may affect your mortgage eligibility and terms.</li>
            <li>Lenders must provide a Loan Estimate and Closing Disclosure under TRID rules.</li>
            <li>Shop multiple lenders and compare offers before committing.</li>
            <li>Consult a licensed mortgage professional for advice specific to your situation.</li>
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
          glossary={[{ label: 'Loan Estimate', href: '/mortgage-glossary/loan-estimate' }, { label: 'Closing Disclosure', href: '/mortgage-glossary/closing-disclosure' }]}
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
`;
}

function addToMortgageGuides(topic) {
  const { title, slug, category } = topic;
  const desc = `${title} is a key concept for mortgage borrowers. Learn how it works and how it affects your loan.`;
  const entry = `  {
    slug: '${slug}',
    title: '${title.replace(/'/g, "\\'")}',
    description: '${desc.replace(/'/g, "\\'")}',
    category: '${category}',
    relatedSlugs: [],
  },`;

  let content = fs.readFileSync(MORTGAGE_GUIDES_PATH, 'utf8');
  const insertMarker = 'export const GUIDE_ARTICLES: GuideArticle[] = [';
  const idx = content.indexOf(insertMarker) + insertMarker.length;
  content = content.slice(0, idx) + '\n' + entry + content.slice(idx);
  fs.writeFileSync(MORTGAGE_GUIDES_PATH, content);
}

function addRelatedSlugs(slug, category) {
  const content = fs.readFileSync(MORTGAGE_GUIDES_PATH, 'utf8');
  const categorySlugs = {
    basics: ['what-is-apr', 'what-is-dti', 'what-is-ltv', 'what-is-amortization'],
    process: ['mortgage-application-process', 'mortgage-underwriting-explained', 'what-is-loan-estimate', 'mortgage-closing-process'],
    costs: ['what-is-closing-costs', 'what-is-pmi', 'what-is-mortgage-points', 'what-is-escrow'],
    'loan-types': ['conventional-loan', 'fha-loan', 'va-loan', 'refinance'],
    refinance: ['refinance', 'what-is-refinance', 'what-is-cash-out-refinance', 'heloc'],
    credit: ['credit-score-for-mortgage', 'how-dti-affects-mortgage-approval', 'prequalify', 'mortgage-pre-approval'],
    rates: ['what-is-apr', 'what-is-interest-rate', 'what-is-rate-lock', 'todays-mortgage-rates'],
    'home-buying': ['first-time-home-buyer', 'find-the-right-loan', 'mortgage-pre-approval', 'what-is-closing-costs'],
  };
  const related = (categorySlugs[category] || categorySlugs.basics).filter((s) => s !== slug).slice(0, 4);
  const relatedStr = `relatedSlugs: [${related.map((s) => `'${s}'`).join(', ')}]`;

  const re = new RegExp(`(slug: '${slug}'[^}]+)relatedSlugs: \\[\\]`, 's');
  const newContent = content.replace(re, `$1${relatedStr}`);
  if (newContent !== content) fs.writeFileSync(MORTGAGE_GUIDES_PATH, newContent);
}

function addToSitemap(slug) {
  const today = new Date().toISOString().split('T')[0];
  const newEntry = `    url('/mortgage/${slug}', { lastmod: '${today}', changefreq: 'monthly', priority: 0.85 }),\n`;
  let content = fs.readFileSync(SITEMAP_PATH, 'utf8');
  if (content.includes(`url('/mortgage/${slug}'`)) return;
  const lastMortgage = content.lastIndexOf("url('/mortgage/");
  const lineEnd = content.indexOf('\n', content.indexOf(')', lastMortgage));
  const insertAt = lineEnd > 0 ? lineEnd : content.indexOf(')', lastMortgage) + 1;
  content = content.slice(0, insertAt) + '\n' + newEntry.trimEnd() + content.slice(insertAt);
  fs.writeFileSync(SITEMAP_PATH, content);
}

function main() {
  const countArg = process.argv.find((a) => a.startsWith('--count='));
  const count = countArg ? parseInt(countArg.split('=')[1], 10) || 1 : 1;

  if (!fs.existsSync(MAKE_200_PATH)) {
    console.error('❌ docs/MAKE-200.md not found');
    process.exit(1);
  }

  const make200Content = fs.readFileSync(MAKE_200_PATH, 'utf8');
  const topics = parseMake200(make200Content);
  const existingSlugs = getExistingSlugs();

  const created = [];
  for (let i = 0; i < count; i++) {
    const topic = getNextTopic(topics, existingSlugs);
    if (!topic) {
      console.log(i === 0 ? '✅ All topics from MAKE-200.md already exist.' : `\n✅ No more topics. Created ${created.length} this run.`);
      break;
    }

    const pageDir = path.join(MORTGAGE_PAGES_DIR, topic.slug);
    const pagePath = path.join(pageDir, 'page.tsx');
    fs.mkdirSync(pageDir, { recursive: true });
    fs.writeFileSync(pagePath, generatePageContent(topic), 'utf8');

    addToMortgageGuides(topic);
    addRelatedSlugs(topic.slug, topic.category);
    addToSitemap(topic.slug);

    existingSlugs.add(topic.slug);
    created.push({ title: topic.title, slug: topic.slug });
    console.log(`✅ Created: ${topic.title} → /mortgage/${topic.slug}`);
  }

  if (created.length > 0) {
    console.log(`\n📝 Next: Run "npm run build" to verify. Consider expanding content to 2000+ words for SEO.`);
  }
}

main();
