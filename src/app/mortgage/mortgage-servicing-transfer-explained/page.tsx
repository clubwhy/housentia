import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Servicing Transfer Explained | Housentia',
  description:
    'When your mortgage servicing is transferred, a new company collects your payments. Learn what happens, your rights under CFPB rules, and what to do when you receive a transfer notice.',
  openGraph: {
    title: 'Mortgage Servicing Transfer Explained | Housentia',
    description: 'Understand what happens when your mortgage servicing is transferred.',
  },
};

const ARTICLE_SLUG = 'mortgage-servicing-transfer-explained';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'Mortgage Servicing Transfer Explained',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/mortgage-servicing-transfer-explained';

const FAQ_ITEMS = [
  {
    question: 'Why does servicing transfer?',
    answer:
      'Lenders often sell loans to investors (Fannie Mae, Freddie Mac, etc.) in the secondary market. When a loan is sold, the right to service it—collect payments, manage escrow—may be transferred to another company. This is common and does not affect your loan terms.',
  },
  {
    question: 'Do my loan terms change when servicing transfers?',
    answer:
      'No. Your interest rate, payment amount, due date, and other loan terms stay the same. Only the company you send payments to may change. You cannot be charged a fee for the transfer.',
  },
  {
    question: 'What notices will I receive?',
    answer:
      'Under CFPB rules, you must receive a notice from your current servicer at least 15 days before the transfer (or with the next statement), and a notice from your new servicer within 15 days after the transfer. The notices include the effective date and new servicer contact information.',
  },
  {
    question: 'What should I do when I receive a transfer notice?',
    answer:
      'Update any automatic payments or online bill pay to send payments to the new servicer. Do not send payments to the old servicer after the transfer date. Save the new servicer\'s contact information. During a 60-day period after the transfer, the new servicer cannot report you late if you sent a timely payment to the old servicer.',
  },
];

export default function MortgageServicingTransferExplainedPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'Mortgage Servicing Transfer Explained',
    description:
      'When your mortgage servicing is transferred, a new company collects your payments. Learn your rights and what to do.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="Mortgage Servicing Transfer Explained" breadcrumbs={BREADCRUMBS} />
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
            A <strong>servicing transfer</strong> occurs when the right to collect your mortgage payments and manage your account moves from one company to another. Lenders often sell loans to investors, and servicing may be transferred as part of that process. Your loan terms do not change—only who you pay.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Servicing Transfers</h2>
          <p className="text-gray-700 mb-4">
            Lenders originate loans and often sell them to investors (Fannie Mae, Freddie Mac, Ginnie Mae, or private investors) in the secondary market. When a loan is sold, the servicing rights may be transferred to a company that specializes in servicing. This is standard practice and allows lenders to free up capital to make more loans.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights Under CFPB Rules</h2>
          <p className="text-gray-700 mb-4">
            The Consumer Financial Protection Bureau (CFPB) has rules that protect borrowers when servicing transfers:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>You must receive a notice from your <strong>current servicer</strong> at least 15 days before the transfer (or with the next statement)</li>
            <li>You must receive a notice from your <strong>new servicer</strong> within 15 days after the transfer</li>
            <li>You cannot be charged a fee for the transfer</li>
            <li>During a 60-day period after the transfer, the new servicer cannot report you late if you sent a timely payment to the old servicer</li>
          </ul>
          <p className="text-gray-700">
            The notices must include the effective date, the new servicer&apos;s contact information, and information about your payment. See{' '}
            <Link href="/mortgage/what-is-a-mortgage-servicer" className="text-primary hover:underline font-medium">
              What Is a Mortgage Servicer?
            </Link>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Do When You Receive a Transfer Notice</h2>
          <p className="text-gray-700 mb-4">
            Update any automatic payments, online bill pay, or recurring transfers to send payments to the new servicer. Do not send payments to the old servicer after the transfer date. Save the new servicer&apos;s phone number, address, and website. Set up an online account with the new servicer if they offer one.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about servicing transfer">
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

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          glossary={[{ label: 'Mortgage Servicing', href: '/mortgage-glossary/servicing' }, { label: 'Transfer of Servicing', href: '/mortgage-glossary/transfer-of-servicing' }]}
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
            If you have questions about a servicing transfer, contact your servicer or the CFPB.
          </p>
        </section>
      </main>
    </div>
  );
}
