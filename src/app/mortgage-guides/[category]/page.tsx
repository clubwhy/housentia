import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import { GuideArticleCard, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import {
  getCategory,
  getArticlesByCategory,
  getArticlePath,
  getArticle,
  VALID_CATEGORY_SLUGS,
  getCategoryPath,
} from '@/lib/mortgage-guides';
import Link from 'next/link';
import type { Metadata } from 'next';

const ARTICLES_PER_PAGE = 12;
const BASE_URL = 'https://housentia.com';

type Props = { params: Promise<{ category: string }>; searchParams: Promise<{ page?: string }> };

export async function generateStaticParams() {
  return VALID_CATEGORY_SLUGS.map((slug) => ({ category: slug }));
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { category } = await params;
  const { page: pageParam } = await searchParams;
  const cat = getCategory(category as Parameters<typeof getCategory>[0]);
  if (!cat) return { title: 'Mortgage Guides | Housentia' };

  const page = Math.max(1, parseInt(String(pageParam || '1'), 10) || 1);
  const displayTitle = cat.slug === 'process' && page === 1 ? 'Mortgage Process Guide' : cat.title;
  const baseMetadata: Metadata = {
    title: `${displayTitle} | Mortgage Guides | Housentia`,
    description: `${cat.description} Browse educational guides in this category.`,
    openGraph: {
      title: `${displayTitle} | Mortgage Guides | Housentia`,
      description: cat.description,
    },
  };

  if (page > 1) {
    return {
      ...baseMetadata,
      robots: { index: false, follow: true },
    };
  }
  return baseMetadata;
}

const PROCESS_FAQ_ITEMS = [
  {
    question: 'How long does the mortgage process take?',
    answer:
      'The mortgage process typically takes 30 to 45 days from application to closing. Timeline varies by lender, loan type, and whether conditions are cleared quickly. Delays can occur if documents are incomplete or the appraisal takes longer.',
  },
  {
    question: 'What happens after loan approval?',
    answer:
      'After conditional approval, you may need to satisfy conditions (e.g., provide additional documents). Once all conditions are cleared, you receive a clear-to-close. You then receive the Closing Disclosure, review it, and attend closing to sign the final documents.',
  },
  {
    question: 'Can a mortgage be denied after approval?',
    answer:
      'Yes. Conditional approval is subject to conditions. If a condition is not met (e.g., final credit check reveals new debt, employment changes), the lender may rescind approval. This is uncommon when borrowers avoid major financial changes during underwriting.',
  },
  {
    question: 'What is underwriting in simple terms?',
    answer:
      'Underwriting is when the lender evaluates whether to approve your loan. They review your credit, income, assets, employment, and the property appraisal to confirm you meet the loan criteria. It is the decision-making phase of the mortgage process.',
  },
  {
    question: 'When do I receive the Closing Disclosure?',
    answer:
      'Under TRID rules, you must receive the Closing Disclosure at least three business days before closing. This gives you time to review the final loan terms, costs, and cash to close before you sign.',
  },
];

/** Pillar content for Mortgage Process category — SEO-optimized intro and step links */
function ProcessPillarContent() {
  const steps = [
    {
      slug: 'mortgage-application-process',
      desc: 'The mortgage application process covers pre-approval through submitting your application. Learn what documents you need and how the timeline works.',
    },
    {
      slug: 'loan-estimate-explained',
      desc: 'Your Loan Estimate summarizes the loan terms, projected payments, and closing costs. Lenders must provide it within three business days of application.',
    },
    {
      slug: 'mortgage-underwriting-explained',
      desc: 'Underwriting is when the lender evaluates your credit, income, assets, and the property to decide whether to approve the loan.',
    },
    {
      slug: 'mortgage-approval-process',
      desc: 'The approval process moves from conditional approval to clear to close. Understand the milestones and what conditions you may need to clear.',
    },
    {
      slug: 'mortgage-closing-process',
      desc: 'At closing, you sign the loan documents and complete the transaction. Learn what to expect and what documents you will sign.',
    },
    {
      slug: 'mortgage-funding-process',
      desc: 'Funding is when the lender disburses the loan proceeds. You typically receive the keys after funding and recording.',
    },
  ] as const;

  return (
    <>
      <div className="prose prose-gray max-w-none mb-10">
        <p className="text-gray-700 mb-4">
          Understanding the mortgage process helps you navigate from pre-approval to closing. In the
          United States, the journey typically begins when you apply with a lender or through a
          mortgage broker. Within three business days of application, you receive a{' '}
          <Link href={getArticlePath('loan-estimate-explained')} className="text-primary hover:underline font-medium">
            Loan Estimate
          </Link>{' '}
          that shows your estimated loan terms, interest rate, monthly payment, and closing costs.
          This standardized form, required under TILA-RESPA Integrated Disclosure (TRID) rules, lets
          you compare offers across lenders.
        </p>
        <p className="text-gray-700 mb-4">
          After you choose a loan and lock your rate, the lender moves into underwriting. They
          verify your income, assets, employment, and credit, and order an appraisal to confirm the
          property value. Once all conditions are satisfied, you receive a clear-to-close and a
          Closing Disclosure at least three business days before closing. At the closing table, you
          sign the note, deed of trust (or mortgage), and other settlement documents. The lender
          funds the loan, and you receive the keys to your new home.
        </p>
        <p className="text-gray-700 mb-8">
          This guide walks you through each step so you know what to expect. The process varies by
          lender and loan type, but the general flow from application to closing follows a similar
          path.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview of the Mortgage Process</h2>
      <p className="text-gray-700 mb-6">
        The mortgage process typically spans 30 to 45 days from application to closing. Key stages
        include application, processing, underwriting, conditional approval, final approval (clear
        to close), closing disclosure review, and closing. Your Loan Estimate and{' '}
        <Link href={getArticlePath('what-is-closing-disclosure')} className="text-primary hover:underline font-medium">
          Closing Disclosure
        </Link>{' '}
        are the main documents that explain your costs and terms under TRID.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">Step-by-Step Mortgage Process</h2>
      <ul className="space-y-4 mb-10">
        {steps.map(({ slug, desc }) => {
          const article = getArticle(slug);
          if (!article) return null;
          return (
            <li key={slug} className="border-l-2 border-primary/30 pl-4">
              <Link
                href={getArticlePath(slug)}
                className="text-primary hover:underline font-medium block"
              >
                {article.title}
              </Link>
              <p className="text-gray-600 text-[15px] mt-1">{desc}</p>
            </li>
          );
        })}
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">Why the Mortgage Process Matters</h2>
      <p className="text-gray-700 mb-4">
        Understanding the mortgage process before you apply helps with financial planning and reduces surprises. You can estimate how much cash you will need at closing, when key milestones occur, and what documents lenders typically request. This knowledge supports better budgeting and timing decisions, especially if you are coordinating a home sale or lease end date.
      </p>
      <p className="text-gray-700 mb-4">
        Familiarity with the process also helps you avoid delays. Missing document deadlines or misunderstanding lender requirements can push your closing date back, which may affect your rate lock, purchase contract, or moving plans. Knowing what to expect from{' '}
        <Link href={getArticlePath('mortgage-underwriting-explained')} className="text-primary hover:underline font-medium">
          mortgage underwriting
        </Link>{' '}
        and the approval stages allows you to respond quickly when the lender requests additional information.
      </p>
      <p className="text-gray-700 mb-4">
        Lender requirements are designed to verify that you can repay the loan. Understanding these requirements—income documentation, asset verification, credit standards—helps you gather the right documents upfront and avoid back-and-forth requests that slow the{' '}
        <Link href={getArticlePath('mortgage-application-process')} className="text-primary hover:underline font-medium">
          mortgage application process
        </Link>{' '}
        down.
      </p>
      <p className="text-gray-700 mb-10">
        Finally, understanding lender requirements helps you protect your qualification. Major financial changes during underwriting can affect your approval. Knowing which actions to avoid—such as taking on new debt or changing jobs—reduces the risk of last-minute denials or delays.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes During the Mortgage Process</h2>
      <ul className="space-y-6 mb-10">
        <li>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Changing jobs during underwriting</h3>
          <p className="text-gray-700">
            Switching employers can complicate income verification. Lenders typically want to confirm stable employment, and a new job may require additional documentation or delay approval. If a job change is unavoidable, communicate with your loan officer promptly.
          </p>
        </li>
        <li>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Taking on new debt</h3>
          <p className="text-gray-700">
            New credit cards, car loans, or other debt can increase your debt-to-income ratio and affect your approval. Lenders often run a final credit check before closing. Large purchases or new credit lines can jeopardize your qualification.
          </p>
        </li>
        <li>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Missing document deadlines</h3>
          <p className="text-gray-700">
            Lenders set deadlines for conditions (e.g., bank statements, employment letters). Delays in providing documents can push back your closing and may require a rate lock extension or re-underwriting. Respond quickly to condition requests.
          </p>
        </li>
        <li>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Misunderstanding Loan Estimate vs Closing Disclosure</h3>
          <p className="text-gray-700">
            The <Link href={getArticlePath('loan-estimate-explained')} className="text-primary hover:underline font-medium">Loan Estimate</Link> is an early estimate; the{' '}
            <Link href={getArticlePath('what-is-closing-disclosure')} className="text-primary hover:underline font-medium">Closing Disclosure</Link> is the final disclosure. Some costs can change within regulatory limits. Compare the two and ask questions if you see unexpected differences.
          </p>
        </li>
        <li>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Not locking your interest rate</h3>
          <p className="text-gray-700">
            Rate locks protect you from increases during the process. If you do not lock, your rate can rise before closing. Understand your lender&apos;s lock terms and expiration. See{' '}
            <Link href={getArticlePath('what-is-rate-lock')} className="text-primary hover:underline font-medium">what a rate lock is</Link> and how it works.
          </p>
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">Mortgage Process Timeline Example</h2>
      <p className="text-gray-700 mb-4">
        The following is a typical 35-day timeline. Actual timelines vary by lender, property type, and market conditions.
      </p>
      <ul className="space-y-3 mb-10">
        <li><strong>Days 1–3: Application</strong> — Submit application and receive Loan Estimate within three business days.</li>
        <li><strong>Days 4–7: Processing</strong> — Lender reviews documents, orders appraisal, and prepares the file for underwriting.</li>
        <li><strong>Days 8–21: Underwriting</strong> — Lender evaluates credit, income, assets, and appraisal. You may receive condition requests.</li>
        <li><strong>Days 22–28: Conditional approval and conditions</strong> — Satisfy conditions; lender may issue clear-to-close.</li>
        <li><strong>Days 29–32: Closing Disclosure</strong> — You receive the Closing Disclosure at least three business days before closing.</li>
        <li><strong>Days 33–34: Closing</strong> — Sign loan documents and settlement papers at the <Link href={getArticlePath('mortgage-closing-process')} className="text-primary hover:underline font-medium">mortgage closing</Link>.</li>
        <li><strong>Days 35+: Funding</strong> — Lender funds the loan; deed is recorded; you receive the keys. See{' '}
          <Link href={getArticlePath('mortgage-funding-process')} className="text-primary hover:underline font-medium">mortgage funding process</Link>.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
      <dl className="space-y-4 mb-10">
        {PROCESS_FAQ_ITEMS.map((faq) => (
          <div key={faq.question} className="bg-gray-50 rounded-lg p-4">
            <dt className="font-semibold text-gray-900 mb-2">{faq.question}</dt>
            <dd className="text-gray-700">{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </>
  );
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { category } = await params;
  const { page: pageParam } = await searchParams;

  if (!VALID_CATEGORY_SLUGS.includes(category as (typeof VALID_CATEGORY_SLUGS)[number])) {
    notFound();
  }

  const cat = getCategory(category as Parameters<typeof getCategory>[0]);
  if (!cat) notFound();

  const allArticles = getArticlesByCategory(category as Parameters<typeof getArticlesByCategory>[0]);
  const page = Math.max(1, parseInt(pageParam || '1', 10) || 1);
  const totalPages = Math.ceil(allArticles.length / ARTICLES_PER_PAGE) || 1;
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * ARTICLES_PER_PAGE;
  const articles = allArticles.slice(start, start + ARTICLES_PER_PAGE);

  const breadcrumbs = buildGuideBreadcrumbs({
    categorySlug: cat.slug,
    categoryTitle: cat.title,
    currentTitle: cat.title,
    isCategoryPage: true,
  });

  const pageUrl = `${BASE_URL}${getCategoryPath(cat.slug)}`;
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, { label: 'Mortgage Guides', href: '/mortgage-guides' }, { label: cat.title }],
    BASE_URL,
    pageUrl
  );
  const articleSchema = buildArticleSchema({
    headline: `${cat.title} | Mortgage Guides`,
    description: cat.description,
    url: pageUrl,
  });

  const isProcessPillar = category === 'process';
  const pageTitle = isProcessPillar ? 'Mortgage Process Guide' : cat.title;
  const faqSchema = isProcessPillar ? buildFAQSchema(PROCESS_FAQ_ITEMS) : null;
  const structuredData = [breadcrumbSchema, articleSchema, ...(faqSchema ? [faqSchema] : [])];

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={structuredData} />
      <PageHero title={pageTitle} breadcrumbs={breadcrumbs} />
      <main
        className="max-w-5xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800"
        style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}
      >
        {isProcessPillar ? (
          <ProcessPillarContent />
        ) : (
          <p className="text-gray-700 mb-8">{cat.description}</p>
        )}

        {/* Article grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <GuideArticleCard key={article.slug} article={article} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <nav
            className="mt-10 flex items-center justify-center gap-2"
            aria-label="Category pagination"
          >
            {currentPage > 1 && (
              <Link
                href={currentPage === 2 ? getCategoryPath(cat.slug) : `${getCategoryPath(cat.slug)}?page=${currentPage - 1}`}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                ← Previous
              </Link>
            )}
            <span className="px-4 py-2 text-gray-600 text-sm">
              Page {currentPage} of {totalPages}
            </span>
            {currentPage < totalPages && (
              <Link
                href={`${getCategoryPath(cat.slug)}?page=${currentPage + 1}`}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Next →
              </Link>
            )}
          </nav>
        )}

        {/* Back to hub */}
        <div className="mt-10 pt-8 border-t border-gray-200">
          <Link href="/mortgage-guides" className="text-primary hover:underline font-medium">
            ← Back to Mortgage Guides
          </Link>
        </div>
      </main>
    </div>
  );
}
