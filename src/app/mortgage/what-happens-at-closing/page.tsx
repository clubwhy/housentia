import PageHero from '@/components/PageHero';
import Disclaimer from '@/components/Disclaimer';
import RelatedLinks from '@/components/RelatedLinks';
import { RelatedGuides, buildGuideBreadcrumbs } from '@/components/mortgage-guides';
import { getArticle, getCategory } from '@/lib/mortgage-guides';
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/StructuredData';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Happens at Closing? A Complete Guide for U.S. Homebuyers | Housentia',
  description:
    'Learn what happens at mortgage closing: the 3-day rule, documents you sign, cash to close, wire fraud risks, and when you get the keys. Step-by-step guide for first-time homebuyers.',
  openGraph: {
    title: 'What Happens at Closing? A Complete Guide for U.S. Homebuyers | Housentia',
    description: 'Step-by-step guide to mortgage closing: documents, timeline, wire fraud warning, and first-time buyer tips.',
  },
};

const ARTICLE_SLUG = 'what-happens-at-closing';
const BREADCRUMBS = (() => {
  const article = getArticle(ARTICLE_SLUG);
  const category = article ? getCategory(article.category) : undefined;
  return buildGuideBreadcrumbs({
    categorySlug: category?.slug,
    categoryTitle: category?.title,
    currentTitle: 'What Happens at Closing?',
  });
})();
const PAGE_URL = 'https://housentia.com/mortgage/what-happens-at-closing';

const FAQ_ITEMS = [
  {
    question: 'What documents do I sign at closing?',
    answer:
      'You typically sign the promissory note (your promise to repay), the deed of trust or mortgage (securing the loan), the Closing Disclosure, and other settlement documents. The closing agent will guide you through each. Your Closing Disclosure (TRID) shows your loan amount, interest rate, mortgage payment, and closing costs.',
  },
  {
    question: 'How long does closing take?',
    answer:
      'The signing often takes 30 to 60 minutes. Funding and recording may happen the same day or the next business day. You receive the keys once the loan is funded and the deed is recorded (for a purchase). See Mortgage Funding Process.',
  },
  {
    question: 'What do I need to bring to closing?',
    answer:
      'Bring a government-issued ID, the Closing Disclosure (if you have it), and a certified or cashier\'s check or wire confirmation for the amount due at closing. Your lender or title company will tell you the exact amount. Avoid last-minute wire instructions from unknown sources—verify with your title company.',
  },
  {
    question: 'When do I get the keys?',
    answer:
      'For a purchase, you typically receive the keys after the loan is funded and the deed is recorded. In some states, this happens the same day; in others, it may be the next business day. See What Happens After Closing.',
  },
  {
    question: 'What if the Closing Disclosure differs from my Loan Estimate?',
    answer:
      'Under TRID, certain changes between the Loan Estimate and Closing Disclosure can trigger a new 3-day waiting period. Compare the two documents before closing. If you see unexpected changes to your loan amount, interest rate, or closing costs, ask your lender or closing agent for an explanation.',
  },
  {
    question: 'Can I back out at the last minute at closing?',
    answer:
      'Once you sign the documents, you are legally bound. Before signing, you can walk away—but you may lose your earnest money or face other contract penalties depending on your purchase agreement. If you have concerns, address them before the closing date.',
  },
  {
    question: 'What is cash to close?',
    answer:
      'Cash to close is the total amount you must bring to the closing table. It includes your down payment plus closing costs, minus any credits (lender credits, seller concessions) and deposits already paid. Your Closing Disclosure shows this amount on the final page.',
  },
  {
    question: 'Is closing the same as settlement?',
    answer:
      'Yes. &quot;Closing&quot; and &quot;settlement&quot; are used interchangeably. Both refer to the final step when you sign loan documents, the lender funds the loan, ownership transfers, and—for a purchase—you receive the keys.',
  },
];

export default function WhatHappensAtClosingPage() {
  const breadcrumbSchema = buildBreadcrumbSchema(
    [{ label: 'Home', href: '/' }, ...BREADCRUMBS],
    'https://housentia.com',
    PAGE_URL
  );
  const articleSchema = buildArticleSchema({
    headline: 'What Happens at Closing? A Complete Guide for U.S. Homebuyers',
    description:
      'Learn what happens at mortgage closing: the 3-day rule, documents you sign, cash to close, wire fraud risks, and when you get the keys. Step-by-step guide for first-time homebuyers.',
    url: PAGE_URL,
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
  });
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={[breadcrumbSchema, articleSchema, faqSchema]} />
      <PageHero title="What Happens at Closing? A Guide for U.S. Homebuyers" breadcrumbs={BREADCRUMBS} />
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
            <strong>Closing</strong> (also called <strong>settlement</strong>) is the final step in buying a home with a mortgage. It is when you sign the loan documents, the lender funds the loan, and you receive the keys and become the legal owner. For first-time homebuyers, closing can feel overwhelming—dozens of pages to sign, unfamiliar terminology, and a significant amount of money changing hands. Understanding exactly what happens at the closing table helps you prepare, know what to bring, and avoid common pitfalls.
          </p>
          <p className="text-gray-700 mb-4">
            Under federal law—TILA (Truth in Lending Act), RESPA (Real Estate Settlement Procedures Act), and TRID (TILA-RESPA Integrated Disclosure)—you must receive a <strong>Closing Disclosure</strong> at least 3 business days before closing. This form shows your final <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. It is designed to give you time to review and compare it to your earlier Loan Estimate. Use that time wisely. See{' '}
            <Link href="/mortgage/what-is-closing-disclosure" className="text-primary hover:underline font-medium">What Is Closing Disclosure</Link>,{' '}
            <Link href="/mortgage/what-is-closing-costs" className="text-primary hover:underline font-medium">What Is Closing Costs</Link>, and{' '}
            <Link href="/mortgage/mortgage-closing-process" className="text-primary hover:underline font-medium">Mortgage Closing Process</Link>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Closing (Settlement) Means</h2>
          <p className="text-gray-700 mb-4">
            &quot;What happens at closing&quot; refers to the entire final step of the mortgage process: signing the loan documents, funding the loan, recording the deed, and—for a purchase—receiving the keys. The terms <strong>closing</strong> and <strong>settlement</strong> are used interchangeably. At closing, your <strong>loan amount</strong>, <strong>interest rate</strong>, and <strong>mortgage payment</strong> become legally final. You sign the <strong>promissory note</strong> (your promise to repay) and the <strong>deed of trust</strong> or <strong>mortgage</strong> (which secures the loan with the property as collateral).
          </p>
          <p className="text-gray-700 mb-4">
            The <strong>closing agent</strong> (a title company, escrow company, or attorney, depending on your state) coordinates the signing. They work with the lender, the seller (in a purchase), and you to ensure all documents are signed correctly and funds are disbursed properly. After you sign, the lender wires the loan proceeds to the closing agent, who pays off any existing liens, distributes funds to the seller, and records the deed with the county. Only then do you receive the keys. Your loan is later boarded with the servicer, and you set up your <strong>mortgage payment</strong>. See{' '}
            <Link href="/mortgage/what-is-amortization" className="text-primary hover:underline font-medium">What Is Amortization</Link>,{' '}
            <Link href="/mortgage/what-is-mortgage-principal" className="text-primary hover:underline font-medium">What Is Mortgage Principal</Link>, and{' '}
            <Link href="/mortgage/what-happens-after-closing" className="text-primary hover:underline font-medium">What Happens After Closing</Link>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Before You Arrive: The 3-Day Rule and Preparation</h2>
          <p className="text-gray-700 mb-4">
            The days leading up to closing are critical. Under TRID, you must receive the Closing Disclosure at least 3 <em>business</em> days before closing. Weekends and federal holidays do not count. This gives you time to review the final loan terms, compare them to your Loan Estimate, and raise any questions before you sit at the closing table.
          </p>
          <p className="text-gray-700 mb-4">
            When you receive the Closing Disclosure, check the following: your <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong> (principal and interest), and all <strong>closing costs</strong>. Compare these to your Loan Estimate. Some variation is normal—for example, if you shopped for a different title company. But significant changes (such as an APR increase or a different loan product) may trigger a new 3-day waiting period. If you see unexpected fees or numbers that do not match what you were promised, contact your lender or closing agent immediately. Do not wait until closing day.
          </p>
          <p className="text-gray-700 mb-4">
            Confirm the exact amount you need to bring: <strong>cash to close</strong>. This appears on the last page of the Closing Disclosure. Your lender or closing agent will tell you how to pay: typically a certified check, cashier&apos;s check, or wire transfer. If you are wiring funds, <strong>never</strong> use wiring instructions received by email without verifying them by phone. Wire fraud is a serious and common scam—see the section below.
          </p>
          <p className="text-gray-700 mb-4">
            Pack the night before: a government-issued photo ID (driver&apos;s license or passport), your copy of the Closing Disclosure, and your payment (check or wire confirmation). Some lenders may request additional documents. Ask ahead of time.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Closing Day: Step-by-Step Timeline</h2>
          <p className="text-gray-700 mb-4">
            On closing day, you typically arrive at the closing agent&apos;s office, a title company, or an attorney&apos;s office. Sometimes the closing occurs at a real estate office or even remotely (depending on state laws and lender requirements). Plan to spend 30 to 60 minutes for the signing, though it can take longer if there are questions or last-minute issues.
          </p>
          <p className="text-gray-700 mb-4">
            The closing agent will verify your identity, walk you through each document, and explain what you are signing. You will sign the promissory note, the deed of trust or mortgage, the Closing Disclosure acknowledgment, and various affidavits and forms. Some documents may require a notary. Take your time. Read what you can. Ask questions if anything is unclear. Once you sign, you are legally bound.
          </p>
          <p className="text-gray-700 mb-4">
            After all parties sign, the closing agent sends the signed documents to the lender. The lender reviews them and then funds the loan—wiring the loan proceeds to the closing agent. The closing agent pays off liens (if any), disburses funds to the seller (in a purchase), and records the deed with the county recorder&apos;s office. For a purchase, you receive the keys once funding and recording are complete. In some states this happens the same afternoon; in others, it may be the next business day. Your real estate agent or closing agent will tell you when to expect the keys.
          </p>
        </section>

        {/* Design object 1: Documents table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Documents You Sign at Closing</h2>
          <p className="text-gray-700 mb-4">
            At closing you will sign numerous documents. The closing agent will explain each one, but understanding them in advance reduces stress. Below are the main documents you will encounter.
          </p>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Document</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Promissory note</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Your legal promise to repay the loan amount. It specifies your interest rate, payment schedule, and loan term.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Deed of trust / mortgage</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Secures the loan with the property. If you default, the lender can foreclose. Most states use a deed of trust; some use a mortgage.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Closing Disclosure</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Final summary of loan terms, interest rate, mortgage payment, closing costs, and cash to close. You acknowledge receipt.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Deed (purchase)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Transfers legal ownership from the seller to you. The seller signs; it is recorded after funding.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Affidavits</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Sworn statements (e.g., occupancy, identity, that information is correct). Lying on an affidavit is a federal crime.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Initial escrow disclosure</td>
                  <td className="px-4 py-3 text-sm text-gray-700">If you have an escrow account for taxes and insurance, this explains how it works. See <Link href="/mortgage/what-is-escrow" className="text-primary hover:underline">What Is Escrow</Link>.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-3 italic">The closing agent will walk you through each document. Ask questions if anything is unclear. You have the right to understand what you are signing.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Purchase vs Refinance: What Changes</h2>
          <p className="text-gray-700 mb-4">
            For a <strong>purchase</strong>, closing involves the seller, you (the buyer), and the lender. You sign loan documents, the seller signs the deed, and funds flow from the lender to the seller (minus liens and closing costs). You receive the keys once the deed is recorded.
          </p>
          <p className="text-gray-700 mb-4">
            For a <strong>refinance</strong>, there is no seller. You are both the borrower and the owner. You sign loan documents to replace your existing mortgage. The new lender pays off the old loan, and you receive any cash-out amount (if applicable). You already have the keys; the new loan simply replaces the old one. The Closing Disclosure and most of the signing process are the same. See{' '}
            <Link href="/mortgage/what-is-refinance" className="text-primary hover:underline font-medium">What Is Refinance</Link> and{' '}
            <Link href="/mortgage/how-mortgage-refinancing-works" className="text-primary hover:underline font-medium">How Mortgage Refinancing Works</Link>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Wire Fraud: A Critical Warning</h2>
          <p className="text-gray-700 mb-4">
            <strong>Wire fraud</strong> is one of the biggest risks at closing. Scammers intercept email communications and send fake wiring instructions—often at the last minute—that direct your funds to their accounts instead of the closing agent. Once you wire money, it is typically gone. Recovering it is extremely difficult.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Never</strong> wire funds based on instructions received only by email. If you receive wiring instructions—especially changed or &quot;corrected&quot; instructions—call your closing agent or lender using a phone number you looked up yourself (from their official website or your original documents). Do not use a number from the email. Confirm the account number, bank name, and routing number verbally. Some title companies use secure portals or verification codes. When in doubt, consider paying with a certified or cashier&apos;s check instead of a wire.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Funding, Recording, and When You Get the Keys</h2>
          <p className="text-gray-700 mb-4">
            After you sign, the closing agent sends the executed documents to the lender. The lender reviews them and wires the loan proceeds to the closing agent. The closing agent then pays off any existing liens (including the seller&apos;s mortgage in a purchase), disburses funds to the seller, and records the deed with the county.
          </p>
          <p className="text-gray-700 mb-4">
            In <strong> escrow states</strong> (e.g., California, Nevada, Arizona), the closing agent holds funds in escrow until all conditions are met. In <strong>attorney states</strong> (e.g., New York, New Jersey, Massachusetts), an attorney typically handles the closing and recording. Recording can happen the same day as signing or the next business day, depending on state law and county office hours. You receive the keys once the deed is recorded and funding is complete. See{' '}
            <Link href="/mortgage/mortgage-funding-process" className="text-primary hover:underline font-medium">Mortgage Funding Process</Link>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Realistic Example: A First-Time Buyer&apos;s Closing Day</h2>
          <p className="text-gray-700 mb-4">
            Taylor is buying a $350,000 home in a suburban market. The <strong>loan amount</strong> is $315,000 (10% down), <strong>interest rate</strong> 6.5%, and <strong>mortgage payment</strong> about $1,991 (principal and interest plus PMI). Taylor received the Closing Disclosure four days earlier, sat down with it, and compared every line to the Loan Estimate. The numbers matched; no surprises.
          </p>
          <p className="text-gray-700 mb-4">
            On closing day, Taylor arrives at the title company with a government-issued ID and a cashier&apos;s check for $12,800—the exact cash to close from the Closing Disclosure. That amount includes the down payment ($35,000), closing costs (loan origination, appraisal, title insurance, recording fees), and prepaid items (property taxes, insurance, and interest from closing to the first payment). Taylor chose a cashier&apos;s check over a wire to avoid wire fraud risk.
          </p>
          <p className="text-gray-700 mb-4">
            The closing agent takes 45 minutes to walk through each document. Taylor signs the promissory note, deed of trust, Closing Disclosure acknowledgment, occupancy affidavit, and other forms. Taylor asks two questions: one about the escrow account setup and one about when the first payment is due. The agent clarifies both. The lender funds the loan the same afternoon; the deed is recorded at the county recorder&apos;s office; Taylor receives the keys from the real estate agent. Taylor keeps copies of the Closing Disclosure, promissory note, and deed in a fireproof safe. This scenario is illustrative. See{' '}
            <Link href="/mortgage/what-is-dti" className="text-primary hover:underline font-medium">What Is DTI</Link>,{' '}
            <Link href="/mortgage/what-is-ltv" className="text-primary hover:underline font-medium">What Is LTV</Link>, and{' '}
            <Link href="/mortgage/what-happens-after-closing" className="text-primary hover:underline font-medium">What Happens After Closing</Link>.
          </p>
        </section>

        {/* Design object 2: Key takeaway callout */}
        <div className="mb-10 rounded-xl border-l-4 border-teal-500 bg-teal-50/80 p-5 shadow-sm">
          <h3 className="text-lg font-bold text-teal-900 mb-2">Key Takeaway</h3>
          <p className="text-teal-800 text-[15px] leading-relaxed">
            At closing you sign the loan documents, the lender funds the loan, and—for a purchase—you receive the keys. Bring a government-issued ID and funds for closing. Your <strong>Closing Disclosure</strong> (TRID) shows your <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. Review it before closing. See{' '}
            <Link href="/mortgage/what-is-closing-disclosure" className="text-teal-700 underline font-medium">What Is Closing Disclosure</Link>.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            Knowing what happens at closing helps you prepare. You will need to bring the right documents and funds. Reviewing the Closing Disclosure before closing lets you catch any surprises and compare it to your Loan Estimate. Wire fraud is a risk—never wire funds based on last-minute email instructions; verify with your title company or lender by phone.
          </p>
          <p className="text-gray-700 mb-4">
            Your <strong>loan amount</strong>, <strong>interest rate</strong>, and <strong>mortgage payment</strong> are set at closing. After closing, you set up payments with the servicer. See{' '}
            <Link href="/mortgage/what-is-apr" className="text-primary hover:underline font-medium">What Is APR</Link>,{' '}
            <Link href="/mortgage/what-is-interest-rate" className="text-primary hover:underline font-medium">What Is Interest Rate</Link>, and{' '}
            <Link href="/mortgage/mortgage-payment-setup-after-closing" className="text-primary hover:underline font-medium">Mortgage Payment Setup After Closing</Link>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros and Cons of Being Prepared</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits of Being Prepared</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>You know exactly what to bring (ID, funds, documents) and avoid delays</li>
                <li>You can review the Closing Disclosure before signing and catch errors or unexpected changes</li>
                <li>You can ask questions before committing to a legally binding contract</li>
                <li>You reduce the risk of wire fraud by verifying instructions</li>
                <li>You understand the timeline—when you get keys, when your first payment is due</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What Can Go Wrong</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Missing funds or wrong amount can delay or cancel closing</li>
                <li>Wire fraud—sending funds to criminals—is often irreversible</li>
                <li>Unexpected changes in the Closing Disclosure may require a new 3-day wait</li>
                <li>Recording delays or funding issues can push back key receipt</li>
                <li>Last-minute title or underwriting issues can postpone closing</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes to Avoid</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Not reviewing the Closing Disclosure before closing:</strong> You receive it at least 3 business days before closing. Use that time. Compare it line-by-line to your Loan Estimate. Verify your <strong>loan amount</strong>, <strong>interest rate</strong>, <strong>mortgage payment</strong>, and <strong>closing costs</strong>. Unexpected changes (e.g., higher APR, different loan product) may trigger a new 3-day wait—or may signal an error. Ask before you sign.</li>
            <li><strong>Wiring funds based on unverified instructions:</strong> Wire fraud is a major threat. Scammers send fake emails with &quot;corrected&quot; wiring instructions. Always verify by calling your title company or lender using a phone number you found yourself (website, original docs)—never from an email. When in doubt, use a cashier&apos;s check.</li>
            <li><strong>Bringing the wrong amount or wrong payment method:</strong> Your lender or closing agent provides the exact cash-to-close amount. Bring a certified or cashier&apos;s check, or complete the wire before arrival. Personal checks are usually not accepted. Being short can delay closing.</li>
            <li><strong>Forgetting a government-issued ID:</strong> You need a valid photo ID to sign. Passport or driver&apos;s license. Without it, the notary cannot notarize, and closing may be postponed.</li>
            <li><strong>Not asking questions:</strong> The closing agent will walk you through each document. If anything is unclear, stop and ask. You are signing legally binding contracts. &quot;I don&apos;t understand&quot; is a valid reason to pause.</li>
            <li><strong>Assuming you get keys immediately:</strong> In some states, funding and recording happen the same day. In others, the next business day. Do not schedule a moving truck for the closing afternoon without confirming when you will receive the keys. See <Link href="/mortgage/what-happens-after-closing" className="text-primary hover:underline font-medium">What Happens After Closing</Link>.</li>
            <li><strong>Making major financial changes before closing:</strong> Avoid large purchases, new credit, job changes, or large unexplained deposits between approval and closing. Lenders may re-verify. See <Link href="/mortgage/what-happens-after-mortgage-approval" className="text-primary hover:underline font-medium">What Happens After Mortgage Approval</Link>.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips for First-Time Homebuyers</h2>
          <p className="text-gray-700 mb-4">
            If this is your first closing, you are not alone in feeling nervous. Here are practical tips to ease the process:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li><strong>Request the Closing Disclosure early:</strong> You must receive it at least 3 days before closing, but some lenders send it sooner. The earlier you get it, the more time you have to review and ask questions.</li>
            <li><strong>Do a final walkthrough:</strong> For a purchase, do a final walkthrough of the property shortly before closing (often the morning of) to ensure the condition matches the contract and that the seller has moved out as agreed.</li>
            <li><strong>Bring a trusted person:</strong> You can bring a spouse, partner, or family member to closing for support. They cannot sign for you, but they can take notes and help you stay calm.</li>
            <li><strong>Keep copies of everything:</strong> Request copies of all signed documents. Store them securely. You will need them for taxes, refinancing, or selling. See <Link href="/mortgage/what-happens-after-closing" className="text-primary hover:underline font-medium">What Happens After Closing</Link> for what to keep.</li>
            <li><strong>Know your first payment date:</strong> Your first <strong>mortgage payment</strong> is typically due the month after the month in which you closed. Your Closing Disclosure will specify. Set a reminder or autopay as soon as you receive your servicer welcome letter.</li>
          </ul>
          <p className="text-gray-700">
            For a broader overview of the homebuying process, see <Link href="/mortgage/steps-to-buy-a-house-with-a-mortgage" className="text-primary hover:underline font-medium">Steps to Buy a House With a Mortgage</Link> and <Link href="/mortgage/first-time-home-buyer" className="text-primary hover:underline font-medium">First-Time Home Buyer Guide</Link>.
          </p>
        </section>

        <section className="mb-10" aria-label="Frequently asked questions about closing">
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
            <li>Consumer Financial Protection Bureau (CFPB) – Loan Estimate and Closing Disclosure (TRID)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Truth in Lending Act (TILA)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Real Estate Settlement Procedures Act (RESPA)</li>
            <li>Consumer Financial Protection Bureau (CFPB) – Owning a home</li>
            <li>U.S. Department of Housing and Urban Development (HUD) – Buying a home</li>
          </ul>
        </section>

        <RelatedGuides articleSlug={ARTICLE_SLUG} className="mb-10" />
        <RelatedLinks
          glossary={[{ label: 'Closing Disclosure', href: '/mortgage-glossary/closing-disclosure' }]}
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
            Closing procedures vary by state and lender.
          </p>
        </section>
      </main>
    </div>
  );
}
