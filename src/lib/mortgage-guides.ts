/**
 * Mortgage Education Topic Cluster — central data for 200+ guides.
 * Categories, articles, and related-guide mappings for SEO and navigation.
 */

export type CategorySlug =
  | 'basics'
  | 'process'
  | 'loan-types'
  | 'refinance'
  | 'home-buying'
  | 'costs'
  | 'rates'
  | 'credit';

export interface GuideArticle {
  slug: string;
  title: string;
  description: string;
  category: CategorySlug;
  /** Slugs of related guides for internal linking (same or adjacent topics) */
  relatedSlugs: string[];
  /** Optional: search keywords for duplicate detection (e.g. "escrow", "에스크로", "escrow account") */
  keywords?: string[];
}

export interface GuideCategory {
  slug: CategorySlug;
  title: string;
  description: string;
}

export const GUIDE_CATEGORIES: GuideCategory[] = [
  {
    slug: 'basics',
    title: 'Mortgage Basics',
    description: 'Learn the core concepts behind mortgages.',
  },
  {
    slug: 'process',
    title: 'Mortgage Process',
    description: 'Understand the steps from application to closing.',
  },
  {
    slug: 'loan-types',
    title: 'Loan Types',
    description: 'Explore FHA, VA, conventional and other loan programs.',
  },
  {
    slug: 'refinance',
    title: 'Refinancing',
    description: 'Information about refinancing your existing mortgage.',
  },
  {
    slug: 'home-buying',
    title: 'Home Buying',
    description: 'Guides for buyers, including first-time home buyer information.',
  },
  {
    slug: 'costs',
    title: 'Mortgage Costs',
    description: 'Understand closing costs, PMI, points, and other fees.',
  },
  {
    slug: 'rates',
    title: 'Mortgage Rates',
    description: 'Learn about APR, rate locks, and how rates work.',
  },
  {
    slug: 'credit',
    title: 'Credit & Qualification',
    description: 'Credit, income documentation, and qualification requirements.',
  },
];

/** All mortgage guide articles. Add new guides here as they are published. */
export const GUIDE_ARTICLES: GuideArticle[] = [
  {
    slug: 'apr-vs-interest-rate',
    title: 'APR vs Interest Rate',
    description: 'APR vs Interest Rate is a key concept for mortgage borrowers. Learn how it works and how it affects your loan.',
    category: 'basics',
    relatedSlugs: ['what-is-apr', 'what-is-dti', 'what-is-ltv', 'what-is-amortization'],
  },
  {
    slug: 'how-mortgages-work',
    title: 'How Mortgages Work',
    description: 'Learn how mortgages work from application to payoff. Understand principal, interest, amortization, and the process from application through closing.',
    category: 'basics',
    relatedSlugs: ['what-is-a-mortgage-servicer', 'what-is-apr', 'what-is-dti', 'what-is-ltv', 'what-is-amortization'],
  },
  // Mortgage Basics
  {
    slug: 'what-is-a-mortgage',
    title: 'What Is a Mortgage',
    description: 'A mortgage is a loan secured by real property. Learn how mortgages work, key terms, types of loans, and the regulatory framework that protects U.S. borrowers.',
    category: 'basics',
    relatedSlugs: ['what-is-a-mortgage-lender', 'what-is-a-mortgage-servicer', 'what-is-apr', 'what-is-interest-rate', 'what-is-dti', 'what-is-ltv', 'mortgage-application-process'],
  },
  {
    slug: 'what-is-dti',
    title: 'What is DTI',
    description: 'Debt-to-Income ratio compares monthly debt payments to gross income. Learn how lenders use it in underwriting.',
    category: 'basics',
    relatedSlugs: ['what-is-piti', 'what-is-apr', 'what-is-ltv', 'what-is-mortgage-points', 'what-is-pmi'],
  },
  {
    slug: 'what-is-ltv',
    title: 'What is LTV',
    description: 'Loan-to-value compares your mortgage amount to the home\'s value. Learn how it affects underwriting and PMI.',
    category: 'basics',
    relatedSlugs: ['what-is-mortgage-equity', 'what-is-dti', 'what-is-pmi', 'what-is-mortgage-insurance', 'what-is-apr', 'what-is-mortgage-points'],
  },
  {
    slug: 'what-is-mortgage-principal',
    title: 'What Is Mortgage Principal',
    description: 'Principal is the amount you borrow. Learn how it differs from interest, how payments reduce it, and how extra principal payments work.',
    category: 'basics',
    relatedSlugs: ['what-is-a-mortgage-payment', 'what-is-piti', 'what-is-amortization', 'what-is-interest-rate', 'what-is-loan-term', 'what-is-apr'],
    keywords: ['principal', 'mortgage principal', 'loan balance'],
  },
  {
    slug: 'what-is-piti',
    title: 'What Is PITI',
    description: 'PITI stands for Principal, Interest, Taxes, and Insurance. Learn how it is calculated and how lenders use it to assess affordability.',
    category: 'basics',
    relatedSlugs: ['what-is-a-mortgage-payment', 'what-is-mortgage-principal', 'what-is-interest-rate', 'what-is-escrow', 'what-is-dti'],
    keywords: ['piti', 'principal interest taxes insurance', 'housing payment'],
  },
  {
    slug: 'what-is-amortization',
    title: 'What is Amortization',
    description: 'How loan principal and interest are paid over time. Understand amortization schedules.',
    category: 'basics',
    relatedSlugs: ['what-is-mortgage-equity', 'what-is-a-mortgage-payment', 'what-is-mortgage-principal', 'what-is-loan-term', 'what-is-apr', 'what-is-dti', 'what-is-ltv', 'what-is-mortgage-points'],
  },
  {
    slug: 'what-is-loan-term',
    title: 'What is a Loan Term',
    description: 'How long you have to repay. Learn about 15-year vs 30-year terms and how they affect your payment.',
    category: 'basics',
    relatedSlugs: ['what-is-mortgage-principal', 'what-is-amortization', 'what-is-interest-rate', 'what-is-apr', 'refinance'],
  },
  // Mortgage Process
  {
    slug: 'what-is-closing-costs',
    title: 'What are Closing Costs',
    description: 'Fees and prepaid items paid to finalize a mortgage. Learn what\'s included and how to review them.',
    category: 'costs',
    relatedSlugs: ['what-is-loan-estimate', 'what-is-closing-disclosure', 'what-is-escrow', 'what-is-mortgage-insurance', 'what-is-mortgage-points', 'what-is-apr', 'what-is-an-appraisal-fee', 'what-is-a-credit-report-fee', 'what-is-a-title-insurance-fee', 'what-is-a-recording-fee'],
  },
  {
    slug: 'what-is-escrow',
    title: 'What is Escrow',
    description: 'Escrow holds funds for property taxes and insurance. Learn how mortgage escrow accounts work.',
    category: 'costs',
    relatedSlugs: ['what-is-a-mortgage-payment', 'what-is-a-mortgage-servicer', 'what-is-piti', 'what-is-closing-costs', 'what-is-mortgage-insurance', 'what-is-loan-estimate', 'what-is-pmi'],
    keywords: ['escrow', '에스크로', 'escrow account'],
  },
  {
    slug: 'what-is-loan-estimate',
    title: 'What is a Loan Estimate',
    description: 'The standardized form lenders provide within 3 days of application. Understand its sections.',
    category: 'process',
    relatedSlugs: ['what-is-a-mortgage-broker', 'loan-estimate-explained', 'what-is-closing-disclosure', 'what-is-closing-costs', 'what-is-apr', 'what-is-rate-lock'],
  },
  {
    slug: 'what-is-closing-disclosure',
    title: 'What is a Closing Disclosure',
    description: 'The final disclosure before closing. Compare it to your Loan Estimate.',
    category: 'process',
    relatedSlugs: ['closing-disclosure-explained', 'what-is-loan-estimate', 'what-is-closing-costs', 'what-is-apr', 'what-is-rate-lock'],
  },
  {
    slug: 'mortgage-pre-approval',
    title: 'Mortgage Pre-Approval',
    description: 'Pre-approval means a lender has reviewed your finances and conditionally approved a loan amount.',
    category: 'credit',
    relatedSlugs: ['mortgage-pre-approval-process', 'mortgage-pre-approval-vs-pre-qualification', 'prequalify', 'mortgage-application-process', 'credit-score-for-mortgage', 'first-time-home-buyer'],
  },
  {
    slug: 'mortgage-application-process',
    title: 'Mortgage Application Process',
    description: 'Steps from pre-approval to closing. Understand Loan Estimate, underwriting, and what to expect.',
    category: 'process',
    relatedSlugs: ['mortgage-approval-process', 'what-happens-after-mortgage-approval', 'steps-to-get-a-mortgage', 'what-is-a-mortgage-lender', 'mortgage-pre-approval', 'mortgage-underwriting-explained', 'what-is-loan-estimate', 'mortgage-closing-process'],
  },
  {
    slug: 'mortgage-underwriting-explained',
    title: 'Mortgage Underwriting Explained',
    description: 'How lenders evaluate your application. Learn what underwriters look for.',
    category: 'process',
    relatedSlugs: ['mortgage-processing-explained', 'mortgage-application-documents', 'mortgage-approval-process', 'mortgage-application-process', 'what-lenders-look-at-mortgage-approval', 'how-dti-affects-mortgage-approval', 'how-income-verified-mortgage'],
  },
  {
    slug: 'loan-estimate-explained',
    title: 'Loan Estimate Explained',
    description: 'A detailed walkthrough of the Loan Estimate form. Learn what each section means.',
    category: 'process',
    relatedSlugs: ['what-is-loan-estimate', 'closing-disclosure-explained', 'what-is-closing-costs', 'what-is-apr'],
  },
  {
    slug: 'closing-disclosure-explained',
    title: 'Closing Disclosure Explained',
    description: 'A detailed walkthrough of the Closing Disclosure. Compare it to your Loan Estimate.',
    category: 'process',
    relatedSlugs: ['what-is-closing-disclosure', 'loan-estimate-explained', 'mortgage-closing-process', 'what-is-closing-costs'],
  },
  {
    slug: 'mortgage-closing-process',
    title: 'Mortgage Closing Process',
    description: 'What happens at closing: signing documents, funding the loan, and taking ownership.',
    category: 'process',
    relatedSlugs: ['what-happens-after-closing', 'what-happens-at-closing', 'mortgage-funding-process', 'what-happens-after-mortgage-approval', 'what-is-a-mortgage-servicer', 'closing-disclosure-explained', 'mortgage-application-process', 'what-is-closing-disclosure', 'what-is-closing-costs'],
  },
  {
    slug: 'mortgage-approval-process',
    title: 'Mortgage Approval Process',
    description: 'Learn how mortgage approval works: conditional approval, final approval, and clear to close.',
    category: 'process',
    relatedSlugs: ['mortgage-conditional-approval-explained', 'mortgage-final-approval-explained', 'mortgage-underwriting-explained', 'what-happens-after-mortgage-approval', 'mortgage-closing-process', 'mortgage-application-process'],
    keywords: ['mortgage approval', 'conditional approval', 'clear to close'],
  },
  {
    slug: 'steps-to-get-a-mortgage',
    title: 'Steps to Get a Mortgage',
    description: 'A step-by-step checklist for getting a mortgage from credit check to closing.',
    category: 'process',
    relatedSlugs: ['mortgage-pre-approval-process', 'mortgage-application-process', 'mortgage-approval-process', 'mortgage-closing-process'],
    keywords: ['steps to get mortgage', 'mortgage checklist'],
  },
  {
    slug: 'steps-to-buy-a-house-with-a-mortgage',
    title: 'Steps to Buy a House with a Mortgage',
    description: 'Learn the steps to buy a house with a mortgage from pre-approval to closing.',
    category: 'home-buying',
    relatedSlugs: ['first-time-home-buyer', 'mortgage-pre-approval-process', 'mortgage-application-process', 'mortgage-closing-process'],
    keywords: ['steps to buy a house', 'buying a house with mortgage'],
  },
  {
    slug: 'mortgage-pre-approval-process',
    title: 'Mortgage Pre-Approval Process',
    description: 'Learn the steps to get mortgage pre-approved: documents, timeline, and pre-approval letter.',
    category: 'credit',
    relatedSlugs: ['mortgage-pre-approval', 'mortgage-pre-approval-vs-pre-qualification', 'steps-to-get-a-mortgage', 'mortgage-application-process'],
    keywords: ['pre-approval process', 'how to get pre-approved'],
  },
  {
    slug: 'what-happens-after-mortgage-approval',
    title: 'What Happens After Mortgage Approval',
    description: 'After conditional approval: appraisal, conditions, clear to close, and closing.',
    category: 'process',
    relatedSlugs: ['mortgage-approval-process', 'mortgage-closing-process', 'mortgage-application-process'],
    keywords: ['after mortgage approval', 'after approval'],
  },
  {
    slug: 'what-happens-at-closing',
    title: 'What Happens at Closing',
    description: 'At closing you sign documents, the lender funds the loan, and you receive the keys. Learn what to expect.',
    category: 'process',
    relatedSlugs: ['mortgage-closing-process', 'mortgage-funding-process', 'what-is-closing-disclosure'],
  },
  {
    slug: 'mortgage-processing-explained',
    title: 'Mortgage Processing Explained',
    description: 'Mortgage processing prepares your application for underwriting. Learn what processors do.',
    category: 'process',
    relatedSlugs: ['mortgage-underwriting-explained', 'mortgage-application-process', 'mortgage-application-documents'],
  },
  {
    slug: 'mortgage-loan-timeline',
    title: 'Mortgage Loan Timeline',
    description: 'A typical mortgage takes 30 to 45 days. Learn the timeline and key milestones.',
    category: 'process',
    relatedSlugs: ['mortgage-application-process', 'mortgage-approval-process', 'mortgage-closing-process'],
  },
  {
    slug: 'mortgage-application-documents',
    title: 'Mortgage Application Documents',
    description: 'Learn what documents you need for a mortgage: income, assets, identification.',
    category: 'credit',
    relatedSlugs: ['mortgage-income-verification', 'mortgage-asset-verification', 'how-income-verified-mortgage', 'mortgage-application-process'],
  },
  {
    slug: 'mortgage-income-verification',
    title: 'Mortgage Income Verification',
    description: 'Lenders verify income through documents and employer contact. Learn how it works.',
    category: 'credit',
    relatedSlugs: ['how-income-verified-mortgage', 'mortgage-employment-verification', 'mortgage-application-documents', 'self-employed-borrower'],
  },
  {
    slug: 'mortgage-asset-verification',
    title: 'Mortgage Asset Verification',
    description: 'Lenders verify assets through bank statements. Learn how it works and how large deposits are handled.',
    category: 'credit',
    relatedSlugs: ['mortgage-application-documents', 'mortgage-income-verification', 'what-is-closing-costs'],
  },
  {
    slug: 'mortgage-employment-verification',
    title: 'Mortgage Employment Verification',
    description: 'Lenders verify employment through pay stubs, W-2s, and employer contact. Learn how it works.',
    category: 'credit',
    relatedSlugs: ['mortgage-income-verification', 'how-income-verified-mortgage', 'mortgage-application-process'],
  },
  {
    slug: 'mortgage-conditional-approval-explained',
    title: 'Mortgage Conditional Approval Explained',
    description: 'Conditional approval means you are approved subject to conditions. Learn how to clear them.',
    category: 'process',
    relatedSlugs: ['mortgage-approval-process', 'mortgage-final-approval-explained', 'what-happens-after-mortgage-approval'],
  },
  {
    slug: 'mortgage-final-approval-explained',
    title: 'Mortgage Final Approval Explained',
    description: 'Final approval (clear to close) means all conditions are satisfied. Learn what happens next.',
    category: 'process',
    relatedSlugs: ['mortgage-conditional-approval-explained', 'mortgage-funding-process', 'mortgage-approval-process', 'what-happens-at-closing'],
  },
  {
    slug: 'mortgage-funding-process',
    title: 'Mortgage Funding Process',
    description: 'Mortgage funding is when the lender sends the loan proceeds. Learn how it works and when you get the keys.',
    category: 'process',
    relatedSlugs: ['what-happens-at-closing', 'mortgage-closing-process', 'mortgage-final-approval-explained'],
  },
  {
    slug: 'what-happens-after-closing',
    title: 'What Happens After Closing',
    description: 'After closing you receive the keys, set up payments, and your loan is boarded. Learn what to expect.',
    category: 'process',
    relatedSlugs: ['mortgage-payment-setup-after-closing', 'mortgage-loan-boarding-process', 'mortgage-servicing-transfer-explained', 'what-is-a-mortgage-payment'],
  },
  {
    slug: 'mortgage-servicing-transfer-explained',
    title: 'Mortgage Servicing Transfer Explained',
    description: 'When your mortgage servicing is transferred, a new company collects your payments. Learn your rights and what to do.',
    category: 'process',
    relatedSlugs: ['what-is-a-mortgage-servicer', 'what-happens-after-closing', 'mortgage-loan-delivery-process'],
  },
  {
    slug: 'mortgage-payment-setup-after-closing',
    title: 'Mortgage Payment Setup After Closing',
    description: 'After closing, set up your mortgage payment with your servicer. Learn how to set up autopay and when your first payment is due.',
    category: 'process',
    relatedSlugs: ['what-happens-after-closing', 'mortgage-loan-boarding-process', 'what-is-a-mortgage-payment'],
  },
  {
    slug: 'mortgage-escrow-setup-process',
    title: 'Mortgage Escrow Setup Process',
    description: 'If your loan has an escrow account, the servicer sets it up after closing. Learn how it works.',
    category: 'process',
    relatedSlugs: ['what-is-escrow', 'what-happens-after-closing', 'mortgage-loan-boarding-process'],
  },
  {
    slug: 'mortgage-loan-boarding-process',
    title: 'Mortgage Loan Boarding Process Explained',
    description: 'Loan boarding is when the servicer adds your loan to their system. Learn what it means for you.',
    category: 'process',
    relatedSlugs: ['what-happens-after-closing', 'mortgage-payment-setup-after-closing', 'mortgage-escrow-setup-process'],
  },
  {
    slug: 'mortgage-loan-delivery-process',
    title: 'Mortgage Loan Delivery Process Explained',
    description: 'Loan delivery is when the lender sells the mortgage to an investor. Learn what it means for you.',
    category: 'process',
    relatedSlugs: ['mortgage-investor-guidelines-explained', 'mortgage-servicing-transfer-explained', 'what-is-a-mortgage-servicer'],
  },
  {
    slug: 'mortgage-investor-guidelines-explained',
    title: 'Mortgage Investor Guidelines Explained',
    description: 'Investors set guidelines that lenders follow. Learn how they affect your loan eligibility and terms.',
    category: 'process',
    relatedSlugs: ['mortgage-loan-delivery-process', 'conventional-loan', 'mortgage-compliance-checks-explained'],
  },
  {
    slug: 'mortgage-compliance-checks-explained',
    title: 'Mortgage Compliance Checks Explained',
    description: 'Lenders perform compliance checks to ensure loans meet federal and state rules. Learn how they protect borrowers.',
    category: 'process',
    relatedSlugs: ['what-is-loan-estimate', 'what-is-closing-disclosure', 'mortgage-investor-guidelines-explained', 'mortgage-quality-control-process', 'mortgage-audit-process'],
  },
  {
    slug: 'mortgage-quality-control-process',
    title: 'Mortgage Quality Control Process Explained',
    description: 'Lenders use quality control to verify loan files before and after closing. Learn how the process works and what it means for borrowers.',
    category: 'process',
    relatedSlugs: ['mortgage-file-review-process', 'mortgage-audit-process', 'mortgage-compliance-checks-explained', 'mortgage-underwriting-explained'],
  },
  {
    slug: 'mortgage-audit-process',
    title: 'Mortgage Audit Process Explained',
    description: 'Lenders and investors audit mortgage files to verify accuracy and compliance. Learn how the process works and what it means for borrowers.',
    category: 'process',
    relatedSlugs: ['mortgage-quality-control-process', 'mortgage-file-review-process', 'mortgage-compliance-checks-explained'],
  },
  {
    slug: 'mortgage-file-review-process',
    title: 'Mortgage File Review Process Explained',
    description: 'Mortgage file review is when underwriters, processors, or QC teams examine your loan file. Learn what reviewers look for and how to help your file pass.',
    category: 'process',
    relatedSlugs: ['mortgage-quality-control-process', 'mortgage-underwriting-explained', 'mortgage-processing-explained', 'mortgage-application-documents'],
  },
  {
    slug: 'what-is-a-mortgage-servicer',
    title: 'What Is a Mortgage Servicer',
    description: 'The servicer collects payments, manages escrow, and handles customer service. Learn how servicing works and your rights under CFPB rules.',
    category: 'process',
    relatedSlugs: ['mortgage-servicing-transfer-explained', 'what-is-mortgage-default', 'what-is-mortgage-delinquency', 'what-is-a-mortgage-lender', 'what-is-a-mortgage', 'what-is-escrow', 'mortgage-closing-process', 'how-mortgages-work'],
    keywords: ['mortgage servicer', 'servicing', 'loan servicer'],
  },
  {
    slug: 'what-is-a-mortgage-lender',
    title: 'What Is a Mortgage Lender',
    description: 'The lender funds your loan. Learn how lenders differ from brokers and servicers, and how to compare and choose one.',
    category: 'basics',
    relatedSlugs: ['what-is-a-mortgage-broker', 'what-is-a-mortgage-servicer', 'what-is-a-mortgage', 'mortgage-application-process'],
    keywords: ['mortgage lender', 'lender', 'loan originator'],
  },
  {
    slug: 'what-is-a-mortgage-broker',
    title: 'What Is a Mortgage Broker',
    description: 'A broker connects borrowers with lenders. Learn how brokers work, how they are compensated, and when using one may make sense.',
    category: 'basics',
    relatedSlugs: ['what-is-a-mortgage-lender', 'what-is-loan-estimate', 'mortgage-application-process', 'prequalify'],
    keywords: ['mortgage broker', 'broker', 'loan broker'],
  },
  {
    slug: 'mortgage-pre-approval-vs-pre-qualification',
    title: 'Mortgage Pre-Approval vs Pre-Qualification',
    description: 'Pre-approval and prequalification both estimate how much you can borrow. Learn the key differences and when each matters.',
    category: 'credit',
    relatedSlugs: ['mortgage-pre-approval', 'prequalify', 'mortgage-application-process', 'first-time-home-buyer'],
    keywords: ['pre-approval vs prequalification', 'preapproval', 'prequalification'],
  },
  {
    slug: 'what-is-a-mortgage-payment',
    title: 'What Is a Mortgage Payment',
    description: 'A mortgage payment typically includes principal, interest, taxes, and insurance (PITI). Learn how payments are calculated and what to expect.',
    category: 'basics',
    relatedSlugs: ['mortgage-payment-setup-after-closing', 'what-is-mortgage-default', 'what-is-mortgage-delinquency', 'what-is-piti', 'what-is-mortgage-principal', 'what-is-amortization', 'what-is-escrow'],
    keywords: ['mortgage payment', 'monthly payment', 'PITI'],
  },
  {
    slug: 'what-is-mortgage-equity',
    title: 'What Is Mortgage Equity',
    description: 'Mortgage equity is the portion of your home you own outright. Learn how equity builds and how you can use it.',
    category: 'basics',
    relatedSlugs: ['what-is-ltv', 'what-is-amortization', 'what-is-cash-out-refinance', 'heloc'],
    keywords: ['mortgage equity', 'home equity', 'equity'],
  },
  {
    slug: 'what-is-mortgage-default',
    title: 'What Is Mortgage Default',
    description: 'Mortgage default means failing to meet your loan terms. Learn what default is and what to do if you are struggling.',
    category: 'basics',
    relatedSlugs: ['what-is-mortgage-delinquency', 'what-is-a-mortgage-payment', 'what-is-a-mortgage-servicer'],
    keywords: ['mortgage default', 'default', 'foreclosure'],
  },
  {
    slug: 'what-is-mortgage-delinquency',
    title: 'What Is Mortgage Delinquency',
    description: 'Mortgage delinquency means you are past due on a payment. Learn how it is measured and what to do if you fall behind.',
    category: 'basics',
    relatedSlugs: ['what-is-mortgage-default', 'what-is-a-mortgage-payment', 'what-is-a-mortgage-servicer'],
    keywords: ['mortgage delinquency', 'delinquency', 'past due'],
  },
  // Loan Types
  {
    slug: 'fha-loan',
    title: 'FHA Loan Guide',
    description: 'Loans backed by the Federal Housing Administration. Often used by first-time buyers.',
    category: 'loan-types',
    relatedSlugs: ['va-loan', 'conventional-loan', 'fha-vs-conventional-loan', 'usda-vs-fha-loan', 'what-is-pmi', 'what-is-ltv'],
  },
  {
    slug: 'va-loan',
    title: 'VA Loan Guide',
    description: 'Government-backed loans for veterans and service members. Low or no down payment options.',
    category: 'loan-types',
    relatedSlugs: ['fha-loan', 'conventional-loan', 'va-vs-conventional-loan', 'what-is-ltv', 'what-is-dti'],
  },
  {
    slug: 'conventional-loan',
    title: 'Conventional Loan Guide',
    description: 'Non-government-backed loans with flexible terms. PMI can be removed at 80% LTV.',
    category: 'loan-types',
    relatedSlugs: ['fha-loan', 'va-loan', 'fha-vs-conventional-loan', 'va-vs-conventional-loan', 'jumbo-loan', 'what-is-pmi', 'what-is-mortgage-insurance', 'what-is-ltv'],
  },
  {
    slug: 'heloc',
    title: 'HELOC Overview',
    description: 'Home Equity Line of Credit. Borrow against your home\'s equity for projects or expenses.',
    category: 'loan-types',
    relatedSlugs: ['what-is-mortgage-equity', 'what-is-cash-out-refinance', 'refinance-cashout', 'what-is-ltv', 'refinance'],
  },
  {
    slug: 'reverse',
    title: 'Reverse Mortgage Guide',
    description: 'Converts home equity into cash. Available to homeowners age 62 and older.',
    category: 'loan-types',
    relatedSlugs: ['heloc', 'what-is-ltv', 'refinance', 'what-is-cash-out-refinance'],
  },
  {
    slug: 'non-qm-loan',
    title: 'Non-QM Loan Guide',
    description: 'Non-qualified mortgages for borrowers who don\'t fit traditional guidelines.',
    category: 'loan-types',
    relatedSlugs: ['conventional-loan', 'self-employed-borrower', 'what-is-dti', 'fha-loan'],
  },
  {
    slug: 'usda-loan',
    title: 'What Is a USDA Loan',
    description: 'USDA loans offer zero down payment for eligible rural and suburban areas. Learn requirements.',
    category: 'loan-types',
    relatedSlugs: ['fha-loan', 'va-loan', 'usda-vs-fha-loan'],
  },
  {
    slug: 'jumbo-loan',
    title: 'What Is a Jumbo Loan',
    description: 'Jumbo loans exceed conforming limits. Learn requirements and when they apply.',
    category: 'loan-types',
    relatedSlugs: ['conventional-loan', 'what-is-ltv'],
  },
  {
    slug: 'what-is-a-fixed-rate-mortgage',
    title: 'What Is a Fixed Rate Mortgage',
    description: 'A fixed rate keeps the same rate for the entire term. Learn how it works.',
    category: 'rates',
    relatedSlugs: ['what-is-an-adjustable-rate-mortgage', 'fixed-vs-adjustable-rate-mortgage', '15-vs-30-year-mortgage'],
  },
  {
    slug: 'what-is-an-adjustable-rate-mortgage',
    title: 'What Is an Adjustable Rate Mortgage',
    description: 'An ARM rate can change after an initial fixed period. Learn how it works.',
    category: 'rates',
    relatedSlugs: ['what-is-a-fixed-rate-mortgage', 'fixed-vs-adjustable-rate-mortgage'],
  },
  {
    slug: 'fixed-vs-adjustable-rate-mortgage',
    title: 'Fixed vs Adjustable Rate Mortgage',
    description: 'Compare fixed and ARM. Learn when each makes sense.',
    category: 'rates',
    relatedSlugs: ['what-is-a-fixed-rate-mortgage', 'what-is-an-adjustable-rate-mortgage', 'what-is-loan-term'],
  },
  {
    slug: 'fha-vs-conventional-loan',
    title: 'FHA vs Conventional Loan',
    description: 'Compare FHA and conventional: down payment, credit, MI.',
    category: 'loan-types',
    relatedSlugs: ['fha-loan', 'conventional-loan', 'what-is-pmi'],
  },
  {
    slug: 'va-vs-conventional-loan',
    title: 'VA vs Conventional Loan',
    description: 'Compare VA and conventional: zero down, no PMI, funding fee.',
    category: 'loan-types',
    relatedSlugs: ['va-loan', 'conventional-loan', 'what-is-pmi'],
  },
  {
    slug: 'usda-vs-fha-loan',
    title: 'USDA vs FHA Loan',
    description: 'Compare USDA and FHA: zero down vs 3.5%, location, income limits.',
    category: 'loan-types',
    relatedSlugs: ['usda-loan', 'fha-loan', 'fha-vs-conventional-loan'],
  },
  {
    slug: '15-vs-30-year-mortgage',
    title: '15 vs 30 Year Mortgage',
    description: 'Compare 15-year and 30-year: payment, interest, and when each makes sense.',
    category: 'rates',
    relatedSlugs: ['what-is-loan-term', 'what-is-amortization', 'what-is-a-fixed-rate-mortgage'],
  },
  {
    slug: 'what-is-a-balloon-mortgage',
    title: 'What Is a Balloon Mortgage',
    description: 'A balloon mortgage has a large payment due at the end. Learn how it works.',
    category: 'loan-types',
    relatedSlugs: ['what-is-an-interest-only-mortgage', 'what-is-a-fixed-rate-mortgage', 'refinance'],
  },
  {
    slug: 'what-is-an-interest-only-mortgage',
    title: 'What Is an Interest Only Mortgage',
    description: 'Interest-only lets you pay only interest for a period. Learn how it works.',
    category: 'loan-types',
    relatedSlugs: ['what-is-mortgage-principal', 'what-is-a-balloon-mortgage', 'what-is-amortization'],
  },
  {
    slug: 'what-is-a-portfolio-loan',
    title: 'What Is a Portfolio Loan',
    description: 'A portfolio loan is held by the lender. Learn about flexible guidelines.',
    category: 'loan-types',
    relatedSlugs: ['non-qm-loan', 'mortgage-loan-delivery-process', 'conventional-loan'],
  },
  {
    slug: 'what-is-a-bridge-loan',
    title: 'What Is a Bridge Loan',
    description: 'A bridge loan helps you buy before selling. Learn how it works.',
    category: 'loan-types',
    relatedSlugs: ['steps-to-buy-a-house-with-a-mortgage', 'what-is-mortgage-equity', 'refinance'],
  },
  {
    slug: 'construction-loan',
    title: 'What Is a Construction Loan',
    description: 'A construction loan finances building a new home. Learn how it works.',
    category: 'loan-types',
    relatedSlugs: ['renovation-loan', 'fha-203k-loan', 'conventional-loan'],
  },
  {
    slug: 'renovation-loan',
    title: 'What Is a Renovation Loan',
    description: 'A renovation loan finances purchase and renovation. Learn how it works.',
    category: 'loan-types',
    relatedSlugs: ['fha-203k-loan', 'construction-loan', 'fha-loan'],
  },
  {
    slug: 'fha-203k-loan',
    title: 'What Is an FHA 203k Loan',
    description: 'FHA 203k finances purchase and renovation. Learn limited vs. standard.',
    category: 'loan-types',
    relatedSlugs: ['renovation-loan', 'fha-loan', 'construction-loan'],
  },
  {
    slug: 'homeready-loan',
    title: 'What Is a HomeReady Loan',
    description: 'HomeReady offers 3% down for eligible borrowers. Learn requirements.',
    category: 'loan-types',
    relatedSlugs: ['home-possible-loan', 'conventional-loan', 'fha-vs-conventional-loan'],
  },
  {
    slug: 'home-possible-loan',
    title: 'What Is a Home Possible Loan',
    description: 'Home Possible offers 3% down for eligible borrowers. Learn requirements.',
    category: 'loan-types',
    relatedSlugs: ['homeready-loan', 'conventional-loan', 'fha-vs-conventional-loan'],
  },
  {
    slug: 'piggyback-loan',
    title: 'What Is a Piggyback Loan',
    description: 'A piggyback loan combines first and second mortgages to avoid PMI. Learn how it works.',
    category: 'loan-types',
    relatedSlugs: ['what-is-a-second-mortgage', 'what-is-pmi', 'what-is-ltv'],
  },
  {
    slug: 'what-is-a-second-mortgage',
    title: 'What Is a Second Mortgage',
    description: 'A second mortgage ranks behind the first. Learn about HELOCs, home equity loans, and piggybacks.',
    category: 'loan-types',
    relatedSlugs: ['heloc', 'piggyback-loan', 'what-is-mortgage-equity'],
  },
  // Refinancing
  {
    slug: 'refinance',
    title: 'Refinance Overview',
    description: 'Explore options to lower your rate, change your term, or access home equity.',
    category: 'refinance',
    relatedSlugs: ['what-is-refinance', 'how-mortgage-refinancing-works', 'when-to-refinance-a-mortgage', 'what-is-cash-out-refinance', 'refinance-cashout'],
  },
  {
    slug: 'what-is-refinance',
    title: 'What is a Refinance',
    description: 'Learn what refinancing is, how it works, and how to compare refinance scenarios.',
    category: 'refinance',
    relatedSlugs: ['refinance', 'how-mortgage-refinancing-works', 'what-is-cash-out-refinance', 'refinance-cashout', 'what-is-apr'],
  },
  {
    slug: 'what-is-cash-out-refinance',
    title: 'What is a Cash-Out Refinance',
    description: 'Refinance for more than you owe and receive the difference in cash.',
    category: 'refinance',
    relatedSlugs: ['what-is-mortgage-equity', 'refinance', 'cash-out-vs-rate-and-term-refinance', 'refinance-cashout', 'heloc', 'what-is-refinance'],
  },
  {
    slug: 'refinance-cashout',
    title: 'Refinance & Cash-Out',
    description: 'Combine rate-and-term refinance with cash-out. Compare options and considerations.',
    category: 'refinance',
    relatedSlugs: ['what-is-cash-out-refinance', 'refinance', 'heloc', 'what-is-refinance'],
  },
  {
    slug: 'how-mortgage-refinancing-works',
    title: 'How Mortgage Refinancing Works',
    description: 'Learn the refinance process from application to payoff.',
    category: 'refinance',
    relatedSlugs: ['what-is-refinance', 'refinance-timeline-explained', 'refinance-documentation-requirements'],
  },
  {
    slug: 'when-to-refinance-a-mortgage',
    title: 'When to Refinance a Mortgage',
    description: 'Learn when refinancing makes sense and when to avoid it.',
    category: 'refinance',
    relatedSlugs: ['refinance-break-even-point-explained', 'refinance-after-interest-rates-drop', 'what-is-refinance'],
  },
  {
    slug: 'what-is-a-rate-and-term-refinance',
    title: 'What Is a Rate and Term Refinance',
    description: 'A rate and term refinance changes rate or term without cash out.',
    category: 'refinance',
    relatedSlugs: ['cash-out-vs-rate-and-term-refinance', 'what-is-cash-out-refinance', 'what-is-refinance'],
  },
  {
    slug: 'cash-out-vs-rate-and-term-refinance',
    title: 'Cash Out vs Rate and Term Refinance',
    description: 'Compare cash-out and rate-and-term refinancing.',
    category: 'refinance',
    relatedSlugs: ['what-is-a-rate-and-term-refinance', 'what-is-cash-out-refinance', 'refinance-vs-heloc'],
  },
  {
    slug: 'refinance-closing-costs-explained',
    title: 'Refinance Closing Costs Explained',
    description: 'Learn what refinance closing costs include and how to reduce them.',
    category: 'refinance',
    relatedSlugs: ['what-is-closing-costs', 'refinance-break-even-point-explained', 'what-is-loan-estimate'],
  },
  {
    slug: 'refinance-break-even-point-explained',
    title: 'Refinance Break Even Point Explained',
    description: 'Learn how to calculate refinance break-even and why it matters.',
    category: 'refinance',
    relatedSlugs: ['refinance-closing-costs-explained', 'when-to-refinance-a-mortgage', 'what-is-refinance'],
  },
  {
    slug: 'refinance-vs-home-equity-loan',
    title: 'Refinance vs Home Equity Loan',
    description: 'Compare refinance and home equity loan when accessing equity.',
    category: 'refinance',
    relatedSlugs: ['refinance-vs-heloc', 'what-is-a-second-mortgage', 'what-is-cash-out-refinance'],
  },
  {
    slug: 'refinance-vs-heloc',
    title: 'Refinance vs HELOC',
    description: 'Compare refinance and HELOC when accessing equity.',
    category: 'refinance',
    relatedSlugs: ['heloc', 'refinance-vs-home-equity-loan', 'what-is-cash-out-refinance'],
  },
  {
    slug: 'can-you-refinance-with-bad-credit',
    title: 'Can You Refinance with Bad Credit',
    description: 'Learn refinance options when you have bad credit.',
    category: 'refinance',
    relatedSlugs: ['fha-streamline-refinance', 'va-irrrl-refinance', 'credit-score-for-mortgage'],
  },
  {
    slug: 'refinance-after-home-value-increase',
    title: 'Refinance After Home Value Increase',
    description: 'Learn refinance options when your home value has increased.',
    category: 'refinance',
    relatedSlugs: ['what-is-mortgage-equity', 'what-is-ltv', 'what-is-pmi', 'refinance-appraisal-requirements'],
  },
  {
    slug: 'refinance-after-interest-rates-drop',
    title: 'Refinance After Interest Rates Drop',
    description: 'Learn when to refinance when rates drop and how to calculate savings.',
    category: 'refinance',
    relatedSlugs: ['refinance-break-even-point-explained', 'when-to-refinance-a-mortgage', 'refinance-closing-costs-explained', 'refinance-waiting-periods'],
  },
  {
    slug: 'refinance-timeline-explained',
    title: 'Refinance Timeline Explained',
    description: 'Learn the typical refinance timeline and what affects it.',
    category: 'refinance',
    relatedSlugs: ['how-mortgage-refinancing-works', 'mortgage-loan-timeline', 'streamline-refinance-explained'],
  },
  {
    slug: 'refinance-documentation-requirements',
    title: 'Refinance Documentation Requirements',
    description: 'Learn what documents you need for a refinance.',
    category: 'refinance',
    relatedSlugs: ['mortgage-application-documents', 'fha-streamline-refinance', 'va-irrrl-refinance'],
  },
  {
    slug: 'streamline-refinance-explained',
    title: 'Streamline Refinance Explained',
    description: 'Learn about streamline refinancing and its benefits.',
    category: 'refinance',
    relatedSlugs: ['fha-streamline-refinance', 'va-irrrl-refinance', 'what-is-refinance'],
  },
  {
    slug: 'fha-streamline-refinance',
    title: 'FHA Streamline Refinance',
    description: 'Learn about FHA streamline refinance eligibility and benefits.',
    category: 'refinance',
    relatedSlugs: ['streamline-refinance-explained', 'fha-loan', 'can-you-refinance-with-bad-credit'],
  },
  {
    slug: 'va-irrrl-refinance',
    title: 'VA IRRRL Refinance',
    description: 'Learn about VA IRRRL eligibility and benefits.',
    category: 'refinance',
    relatedSlugs: ['streamline-refinance-explained', 'va-loan', 'can-you-refinance-with-bad-credit'],
  },
  {
    slug: 'refinance-appraisal-requirements',
    title: 'Refinance Appraisal Requirements',
    description: 'Learn when refinance appraisals are required and about waivers.',
    category: 'refinance',
    relatedSlugs: ['what-is-an-appraisal-fee', 'streamline-refinance-explained', 'refinance-after-home-value-increase'],
  },
  {
    slug: 'refinance-waiting-periods',
    title: 'Refinance Waiting Periods',
    description: 'Learn about refinance waiting periods and seasoning requirements.',
    category: 'refinance',
    relatedSlugs: ['fha-streamline-refinance', 'va-irrrl-refinance', 'refinance-after-interest-rates-drop'],
  },
  // Home Buying
  {
    slug: 'first-time-home-buyer',
    title: 'First Time Home Buyer Guide',
    description: 'Steps, programs, and tips for first-time homebuyers.',
    category: 'home-buying',
    relatedSlugs: ['steps-to-buy-a-house-with-a-mortgage', 'mortgage-pre-approval-vs-pre-qualification', 'fha-loan', 'what-is-dti', 'what-is-ltv', 'prequalify'],
  },
  {
    slug: 'find-the-right-loan',
    title: 'Find the Right Loan',
    description: 'Compare loan options and find the best fit for your situation.',
    category: 'home-buying',
    relatedSlugs: ['first-time-home-buyer', 'conventional-loan', 'fha-loan', 'prequalify'],
  },
  // Mortgage Costs
  {
    slug: 'what-is-pmi',
    title: 'What is PMI',
    description: 'Private Mortgage Insurance for conventional loans with less than 20% down.',
    category: 'costs',
    relatedSlugs: ['what-is-mortgage-insurance', 'what-is-ltv', 'what-is-closing-costs', 'conventional-loan', 'what-is-mortgage-points'],
  },
  {
    slug: 'what-is-mortgage-insurance',
    title: 'What is Mortgage Insurance',
    description: 'Overview of mortgage insurance: PMI, FHA MIP, and how it protects lenders when you put down less than 20%.',
    category: 'costs',
    relatedSlugs: ['what-is-pmi', 'what-is-ltv', 'what-is-closing-costs', 'conventional-loan'],
    keywords: ['mortgage insurance', 'PMI', 'MIP', 'mortgage insurance premium'],
  },
  {
    slug: 'what-is-mortgage-points',
    title: 'What are Mortgage Points',
    description: 'Upfront charges that can lower your rate. Learn how points affect APR and closing costs.',
    category: 'costs',
    relatedSlugs: ['discount-points-vs-origination-fee', 'what-is-apr', 'what-is-closing-costs', 'what-is-rate-lock', 'what-is-dti'],
  },
  {
    slug: 'discount-points-vs-origination-fee',
    title: 'Discount Points vs Origination Fee',
    description: 'Discount points lower your rate; origination fees cover processing. Learn the difference.',
    category: 'costs',
    relatedSlugs: ['what-is-mortgage-points', 'what-is-origination-fee', 'what-is-apr', 'what-is-closing-costs'],
  },
  {
    slug: 'what-is-origination-fee',
    title: 'What is an Origination Fee',
    description: 'A charge for processing your mortgage. Learn what it covers and how it appears on the Loan Estimate.',
    category: 'costs',
    relatedSlugs: ['discount-points-vs-origination-fee', 'what-is-mortgage-points', 'what-is-apr', 'what-is-closing-costs'],
  },
  {
    slug: 'what-is-an-appraisal-fee',
    title: 'What Is an Appraisal Fee',
    description: 'The appraisal fee pays for a professional valuation of the property. Learn what it covers and typical costs.',
    category: 'costs',
    relatedSlugs: ['what-is-closing-costs', 'what-is-ltv', 'what-is-origination-fee'],
  },
  {
    slug: 'what-is-a-credit-report-fee',
    title: 'What Is a Credit Report Fee',
    description: 'The credit report fee covers the cost of pulling your credit report for mortgage underwriting. Learn typical costs.',
    category: 'costs',
    relatedSlugs: ['what-is-closing-costs', 'credit-score-for-mortgage', 'what-lenders-look-at-mortgage-approval'],
  },
  {
    slug: 'what-is-a-title-insurance-fee',
    title: 'What Is a Title Insurance Fee',
    description: 'Title insurance protects against defects in the property title. Learn about lender and owner policies and typical costs.',
    category: 'costs',
    relatedSlugs: ['what-is-closing-costs', 'what-is-loan-estimate', 'what-is-a-recording-fee'],
  },
  {
    slug: 'what-is-a-recording-fee',
    title: 'What Is a Recording Fee',
    description: 'The recording fee pays the county to record your deed and mortgage in public records. Learn typical costs.',
    category: 'costs',
    relatedSlugs: ['what-is-closing-costs', 'what-is-a-title-insurance-fee', 'what-happens-at-closing'],
  },
  {
    slug: 'what-is-an-escrow-fee',
    title: 'What Is an Escrow Fee',
    description: 'The escrow fee pays for the neutral third party during closing. Learn what it covers and typical costs.',
    category: 'costs',
    relatedSlugs: ['what-is-escrow', 'what-is-closing-costs', 'what-is-a-title-insurance-fee'],
  },
  {
    slug: 'what-is-a-processing-fee',
    title: 'What Is a Processing Fee',
    description: 'The processing fee covers preparing your application for underwriting. Learn what it includes.',
    category: 'costs',
    relatedSlugs: ['mortgage-processing-explained', 'what-is-origination-fee', 'what-is-an-underwriting-fee'],
  },
  {
    slug: 'what-is-an-underwriting-fee',
    title: 'What Is an Underwriting Fee',
    description: 'The underwriting fee pays for evaluating your application. Learn what it covers.',
    category: 'costs',
    relatedSlugs: ['mortgage-underwriting-explained', 'what-is-origination-fee', 'what-is-a-processing-fee'],
  },
  {
    slug: 'what-is-a-flood-certification-fee',
    title: 'What Is a Flood Certification Fee',
    description: 'The flood certification fee determines if the property is in a flood zone. Learn what it covers.',
    category: 'costs',
    relatedSlugs: ['what-is-closing-costs'],
  },
  {
    slug: 'what-is-a-tax-service-fee',
    title: 'What Is a Tax Service Fee',
    description: 'The tax service fee pays for monitoring property tax payments. Learn what it covers.',
    category: 'costs',
    relatedSlugs: ['what-is-escrow', 'what-is-closing-costs'],
  },
  {
    slug: 'what-is-a-loan-discount-fee',
    title: 'What Is a Loan Discount Fee',
    description: 'The loan discount fee (discount points) lowers your rate. Learn how it works.',
    category: 'costs',
    relatedSlugs: ['what-is-mortgage-points', 'discount-points-vs-origination-fee', 'mortgage-points-vs-rate-trade-off'],
  },
  {
    slug: 'what-is-mortgage-insurance-premium',
    title: 'What Is Mortgage Insurance Premium',
    description: 'MIP protects the lender when you put down less than 20%. Learn upfront and annual MIP.',
    category: 'costs',
    relatedSlugs: ['what-is-pmi', 'what-is-mortgage-insurance', 'upfront-mortgage-insurance-explained', 'monthly-mortgage-insurance-explained'],
  },
  {
    slug: 'upfront-mortgage-insurance-explained',
    title: 'Upfront Mortgage Insurance Explained',
    description: 'Upfront mortgage insurance is paid at closing. Learn how FHA upfront MIP works.',
    category: 'costs',
    relatedSlugs: ['what-is-mortgage-insurance-premium', 'monthly-mortgage-insurance-explained', 'fha-loan'],
  },
  {
    slug: 'monthly-mortgage-insurance-explained',
    title: 'Monthly Mortgage Insurance Explained',
    description: 'Monthly mortgage insurance is paid with each payment. Learn how FHA MIP and PMI work.',
    category: 'costs',
    relatedSlugs: ['what-is-pmi', 'what-is-mortgage-insurance-premium', 'upfront-mortgage-insurance-explained'],
  },
  {
    slug: 'mortgage-closing-cost-breakdown',
    title: 'Mortgage Closing Cost Breakdown',
    description: 'A breakdown of lender fees, third-party fees, prepaid items, and escrow.',
    category: 'costs',
    relatedSlugs: ['what-is-closing-costs', 'loan-estimate-explained', 'average-mortgage-closing-costs', 'who-pays-closing-costs'],
  },
  {
    slug: 'average-mortgage-closing-costs',
    title: 'Average Mortgage Closing Costs',
    description: 'Typical closing costs range from 2% to 5% of the loan. Learn what affects the total.',
    category: 'costs',
    relatedSlugs: ['what-is-closing-costs', 'mortgage-closing-cost-breakdown', 'who-pays-closing-costs'],
  },
  {
    slug: 'who-pays-closing-costs',
    title: 'Who Pays Closing Costs',
    description: 'Buyers typically pay most closing costs; sellers may contribute. Learn how it works.',
    category: 'costs',
    relatedSlugs: ['seller-paid-closing-costs-explained', 'what-is-closing-costs', 'mortgage-closing-cost-breakdown'],
  },
  {
    slug: 'seller-paid-closing-costs-explained',
    title: 'Seller Paid Closing Costs Explained',
    description: 'Seller concessions allow the seller to pay part of the buyer\'s closing costs. Learn the limits.',
    category: 'costs',
    relatedSlugs: ['who-pays-closing-costs', 'what-is-closing-costs'],
  },
  {
    slug: 'mortgage-lender-credits-explained',
    title: 'Mortgage Lender Credits Explained',
    description: 'Lender credits reduce closing costs in exchange for a higher rate. Learn how they work.',
    category: 'costs',
    relatedSlugs: ['mortgage-points-vs-rate-trade-off', 'what-is-mortgage-points', 'what-is-closing-costs'],
  },
  {
    slug: 'mortgage-points-vs-rate-trade-off',
    title: 'Mortgage Points vs Rate Trade Off',
    description: 'Paying points lowers your rate. Learn the trade-off and when it makes sense.',
    category: 'costs',
    relatedSlugs: ['what-is-mortgage-points', 'what-is-a-loan-discount-fee', 'mortgage-lender-credits-explained'],
  },
  {
    slug: 'mortgage-rate-buydown-explained',
    title: 'Mortgage Rate Buydown Explained',
    description: 'A rate buydown lowers your rate. Learn about permanent and temporary buydowns.',
    category: 'costs',
    relatedSlugs: ['temporary-rate-buydown-explained', 'what-is-mortgage-points', 'mortgage-points-vs-rate-trade-off'],
  },
  {
    slug: 'temporary-rate-buydown-explained',
    title: 'Temporary Rate Buydown Explained',
    description: 'A temporary buydown lowers your rate for the first year or two. Learn how it works.',
    category: 'costs',
    relatedSlugs: ['mortgage-rate-buydown-explained', 'what-is-mortgage-points'],
  },
  // Mortgage Rates
  {
    slug: 'what-is-apr',
    title: 'What is APR',
    description: 'Annual Percentage Rate helps you compare mortgage costs. Learn how it differs from the interest rate.',
    category: 'rates',
    relatedSlugs: ['what-is-mortgage-principal', 'what-is-interest-rate', 'what-is-dti', 'what-is-ltv', 'what-is-mortgage-points', 'what-is-rate-lock'],
  },
  {
    slug: 'what-is-interest-rate',
    title: 'What is an Interest Rate',
    description: 'The cost of borrowing. Learn how it differs from APR and how it affects your monthly payment.',
    category: 'rates',
    relatedSlugs: ['what-is-piti', 'what-is-mortgage-principal', 'what-is-apr', 'what-is-rate-lock', 'what-is-mortgage-points', 'todays-mortgage-rates'],
  },
  {
    slug: 'what-is-rate-lock',
    title: 'What is a Rate Lock',
    description: 'Locks your interest rate for a period. Learn how it relates to your Loan Estimate and closing.',
    category: 'rates',
    relatedSlugs: ['what-is-apr', 'what-is-loan-estimate', 'what-is-closing-disclosure', 'what-is-mortgage-points'],
  },
  {
    slug: 'todays-mortgage-rates',
    title: "Today's Mortgage Rates",
    description: 'Current mortgage rate trends and historical data. Educational reference only.',
    category: 'rates',
    relatedSlugs: ['what-is-apr', 'what-is-rate-lock', 'refinance', 'find-the-right-loan'],
  },
  // Credit & Qualification
  {
    slug: 'prequalify',
    title: 'Mortgage Prequalification',
    description: 'Learn about prequalification, what it means, and how it helps you understand your options.',
    category: 'credit',
    relatedSlugs: ['mortgage-pre-approval-vs-pre-qualification', 'what-is-dti', 'first-time-home-buyer', 'self-employed-borrower', 'find-the-right-loan'],
  },
  {
    slug: 'self-employed-borrower',
    title: 'Self-Employed Borrower Scenarios',
    description: 'Income documentation and qualification options for self-employed borrowers.',
    category: 'credit',
    relatedSlugs: ['how-income-verified-mortgage', 'what-is-dti', 'prequalify', 'non-qm-loan', 'find-the-right-loan'],
  },
  {
    slug: 'credit-score-for-mortgage',
    title: 'What Credit Score Is Needed for a Mortgage',
    description: 'Credit score requirements vary by loan type. Learn typical ranges for conventional, FHA, and VA.',
    category: 'credit',
    relatedSlugs: ['what-lenders-look-at-mortgage-approval', 'how-dti-affects-mortgage-approval', 'prequalify', 'conventional-loan'],
  },
  {
    slug: 'how-dti-affects-mortgage-approval',
    title: 'How DTI Affects Mortgage Approval',
    description: 'DTI is a key factor in approval. Learn how lenders use it and typical limits.',
    category: 'credit',
    relatedSlugs: ['what-is-dti', 'what-lenders-look-at-mortgage-approval', 'credit-score-for-mortgage', 'prequalify'],
  },
  {
    slug: 'what-lenders-look-at-mortgage-approval',
    title: 'What Lenders Look at When Approving a Mortgage',
    description: 'Credit, income, assets, debt, and the property. Learn the key factors.',
    category: 'credit',
    relatedSlugs: ['mortgage-underwriting-explained', 'credit-score-for-mortgage', 'how-dti-affects-mortgage-approval', 'how-income-verified-mortgage'],
  },
  {
    slug: 'how-income-verified-mortgage',
    title: 'How Income Is Verified for a Mortgage',
    description: 'Pay stubs, W-2s, tax returns, and more. Learn what documents are needed.',
    category: 'credit',
    relatedSlugs: ['mortgage-income-verification', 'mortgage-employment-verification', 'self-employed-borrower', 'what-lenders-look-at-mortgage-approval', 'mortgage-underwriting-explained', 'prequalify'],
  },
  {
    slug: 'minimum-credit-score-for-fha-loan',
    title: 'Minimum Credit Score for FHA Loan',
    description: 'Learn FHA credit score requirements and lender overlays.',
    category: 'credit',
    relatedSlugs: ['fha-loan', 'credit-score-for-mortgage', 'what-credit-score-needed-to-buy-house'],
  },
  {
    slug: 'minimum-credit-score-for-conventional-loan',
    title: 'Minimum Credit Score for Conventional Loan',
    description: 'Learn conventional loan credit score requirements.',
    category: 'credit',
    relatedSlugs: ['conventional-loan', 'credit-score-for-mortgage', 'how-credit-score-affects-mortgage-rates'],
  },
  {
    slug: 'how-credit-score-affects-mortgage-rates',
    title: 'How Credit Score Affects Mortgage Rates',
    description: 'Learn how credit score affects your mortgage rate.',
    category: 'credit',
    relatedSlugs: ['credit-score-for-mortgage', 'what-is-apr', 'minimum-credit-score-for-conventional-loan'],
  },
  {
    slug: 'what-credit-score-needed-to-buy-house',
    title: 'What Credit Score Is Needed to Buy a House',
    description: 'Learn credit score requirements for buying a home.',
    category: 'credit',
    relatedSlugs: ['credit-score-for-mortgage', 'first-time-home-buyer', 'minimum-credit-score-for-fha-loan'],
  },
  {
    slug: 'mortgage-income-requirements',
    title: 'Mortgage Income Requirements',
    description: 'Learn mortgage income requirements and documentation.',
    category: 'credit',
    relatedSlugs: ['what-is-dti', 'how-dti-affects-mortgage-approval', 'mortgage-income-verification'],
  },
  {
    slug: 'how-self-employed-income-is-verified',
    title: 'How Self Employed Income Is Verified',
    description: 'Learn how lenders verify self-employed income.',
    category: 'credit',
    relatedSlugs: ['self-employed-borrower', 'mortgage-income-verification', 'w2-vs-self-employed-mortgage-qualification'],
  },
  {
    slug: 'w2-vs-self-employed-mortgage-qualification',
    title: 'W2 vs Self Employed Mortgage Qualification',
    description: 'Compare W-2 and self-employed mortgage qualification.',
    category: 'credit',
    relatedSlugs: ['self-employed-borrower', 'how-self-employed-income-is-verified', 'non-qm-loan'],
  },
  {
    slug: 'what-is-mortgage-reserve-requirement',
    title: 'What Is Mortgage Reserve Requirement',
    description: 'Learn about mortgage reserve requirements.',
    category: 'credit',
    relatedSlugs: ['what-assets-count-for-mortgage-approval', 'mortgage-asset-verification', 'mortgage-compensating-factors-explained'],
  },
  {
    slug: 'what-assets-count-for-mortgage-approval',
    title: 'What Assets Count for Mortgage Approval',
    description: 'Learn which assets count for mortgage approval.',
    category: 'credit',
    relatedSlugs: ['mortgage-asset-verification', 'gift-funds-for-down-payment-explained', 'what-is-mortgage-reserve-requirement'],
  },
  {
    slug: 'gift-funds-for-down-payment-explained',
    title: 'Gift Funds for Down Payment Explained',
    description: 'Learn about gift funds for down payment.',
    category: 'credit',
    relatedSlugs: ['down-payment-requirements-explained', 'what-assets-count-for-mortgage-approval', 'first-time-home-buyer'],
  },
  {
    slug: 'down-payment-requirements-explained',
    title: 'Down Payment Requirements Explained',
    description: 'Learn down payment requirements by loan type.',
    category: 'credit',
    relatedSlugs: ['what-is-ltv', 'can-you-buy-a-house-with-no-down-payment', 'gift-funds-for-down-payment-explained'],
  },
  {
    slug: 'can-you-buy-a-house-with-no-down-payment',
    title: 'Can You Buy a House with No Down Payment',
    description: 'Learn about no-down-payment options.',
    category: 'credit',
    relatedSlugs: ['va-loan', 'usda-loan', 'down-payment-requirements-explained'],
  },
  {
    slug: 'mortgage-compensating-factors-explained',
    title: 'Mortgage Compensating Factors Explained',
    description: 'Learn about mortgage compensating factors.',
    category: 'credit',
    relatedSlugs: ['how-dti-affects-mortgage-approval', 'what-is-mortgage-reserve-requirement', 'what-is-automated-underwriting'],
  },
  {
    slug: 'what-is-automated-underwriting',
    title: 'What Is Automated Underwriting',
    description: 'Learn about automated underwriting systems.',
    category: 'credit',
    relatedSlugs: ['what-is-desktop-underwriter', 'what-is-loan-product-advisor', 'what-is-manual-underwriting'],
  },
  {
    slug: 'what-is-desktop-underwriter',
    title: 'What Is Desktop Underwriter',
    description: 'Learn about Fannie Mae Desktop Underwriter.',
    category: 'credit',
    relatedSlugs: ['what-is-automated-underwriting', 'what-is-loan-product-advisor', 'conventional-loan'],
  },
  {
    slug: 'what-is-loan-product-advisor',
    title: 'What Is Loan Product Advisor',
    description: 'Learn about Freddie Mac Loan Product Advisor.',
    category: 'credit',
    relatedSlugs: ['what-is-automated-underwriting', 'what-is-desktop-underwriter', 'conventional-loan'],
  },
  {
    slug: 'what-is-manual-underwriting',
    title: 'What Is Manual Underwriting',
    description: 'Learn about manual underwriting.',
    category: 'credit',
    relatedSlugs: ['mortgage-underwriting-explained', 'what-is-automated-underwriting', 'mortgage-compensating-factors-explained'],
  },
  {
    slug: 'mortgage-qualification-checklist',
    title: 'Mortgage Qualification Checklist',
    description: 'A checklist for mortgage qualification.',
    category: 'credit',
    relatedSlugs: ['what-lenders-look-at-mortgage-approval', 'mortgage-application-documents', 'steps-to-get-a-mortgage'],
  },
];

const ARTICLE_BY_SLUG = new Map(GUIDE_ARTICLES.map((a) => [a.slug, a]));
const CATEGORY_BY_SLUG = new Map(GUIDE_CATEGORIES.map((c) => [c.slug, c]));

/** Get article by slug */
export function getArticle(slug: string): GuideArticle | undefined {
  return ARTICLE_BY_SLUG.get(slug);
}

/** Get category by slug */
export function getCategory(slug: CategorySlug): GuideCategory | undefined {
  return CATEGORY_BY_SLUG.get(slug);
}

/** Get all articles in a category */
export function getArticlesByCategory(categorySlug: CategorySlug): GuideArticle[] {
  return GUIDE_ARTICLES.filter((a) => a.category === categorySlug);
}

/** Get related guides for an article (resolved to full article objects) */
export function getRelatedGuides(articleSlug: string, limit = 4): GuideArticle[] {
  const article = getArticle(articleSlug);
  if (!article) return [];
  const related = article.relatedSlugs
    .map((s) => getArticle(s))
    .filter((a): a is GuideArticle => a != null && a.slug !== articleSlug);
  return related.slice(0, limit);
}

/** Category page path */
export function getCategoryPath(slug: CategorySlug): string {
  return `/mortgage-guides/${slug}`;
}

/** Article page path (unchanged URLs) */
export function getArticlePath(slug: string): string {
  return `/mortgage/${slug}`;
}

/** Valid category slugs for dynamic routing */
export const VALID_CATEGORY_SLUGS: CategorySlug[] = GUIDE_CATEGORIES.map((c) => c.slug);

// --- Duplicate detection & workflow helpers ---

/** Normalize subject for comparison: lowercase, collapse spaces, remove punctuation */
function normalizeForSearch(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Extract core terms from subject (e.g. "What is Escrow?" -> ["escrow"]) */
function extractCoreTerms(subject: string): string[] {
  const normalized = normalizeForSearch(subject);
  const stopWords = new Set(['what', 'is', 'are', 'a', 'an', 'the', 'how', 'when', 'why', 'guide', 'explained', 'overview']);
  return normalized
    .split(/\s+/)
    .filter((w) => w.length > 1 && !stopWords.has(w));
}

/**
 * Find potential duplicate articles for a given subject.
 * Checks: slug, title, description, keywords.
 * Returns articles that might cover the same topic (for human review).
 */
export function findPotentialDuplicates(subject: string): GuideArticle[] {
  const terms = extractCoreTerms(subject);
  const normalizedSubject = normalizeForSearch(subject);
  const slugCandidate = normalizedSubject.replace(/\s+/g, '-').replace(/-+/g, '-');

  return GUIDE_ARTICLES.filter((article) => {
    const slugNorm = normalizeForSearch(article.slug.replace(/-/g, ' '));
    const titleNorm = normalizeForSearch(article.title);
    const descNorm = normalizeForSearch(article.description);
    const keywordsNorm = (article.keywords || []).map((k) => normalizeForSearch(k));

    // Exact slug match
    if (article.slug === slugCandidate || article.slug.includes(slugCandidate) || slugCandidate.includes(article.slug)) {
      return true;
    }
    // All core terms appear in slug/title/description
    const searchable = [slugNorm, titleNorm, descNorm, ...keywordsNorm].join(' ');
    const allTermsMatch = terms.every((term) => searchable.includes(term));
    if (allTermsMatch && terms.length > 0) return true;
    // Subject is contained in title or vice versa
    if (titleNorm.includes(normalizedSubject) || normalizedSubject.includes(titleNorm)) return true;
    return false;
  });
}

/**
 * Suggest related articles for a new guide (same category + cross-category).
 * Use these to populate relatedSlugs when creating a new article.
 */
export function suggestRelatedForNewArticle(
  categorySlug: CategorySlug,
  limit = 4,
  excludeSlug?: string
): GuideArticle[] {
  const sameCategory = getArticlesByCategory(categorySlug).filter((a) => a.slug !== excludeSlug);
  // Prefer same category; if not enough, add from adjacent (e.g. costs <-> process)
  const adjacent: CategorySlug[] =
    categorySlug === 'costs' ? ['process', 'rates'] : categorySlug === 'process' ? ['costs', 'basics'] : ['basics', 'costs'];
  const fromAdjacent = adjacent.flatMap((c) => getArticlesByCategory(c)).filter((a) => a.slug !== excludeSlug);
  const combined = [...sameCategory, ...fromAdjacent].filter((a, i, arr) => arr.findIndex((b) => b.slug === a.slug) === i);
  return combined.slice(0, limit);
}

/**
 * Category hints for common topics. Use with human judgment.
 * See docs/MORTGAGE-GUIDE-WORKFLOW.md for full mapping.
 */
export const CATEGORY_HINTS: Record<string, CategorySlug> = {
  escrow: 'costs',
  'closing costs': 'costs',
  pmi: 'costs',
  points: 'costs',
  apr: 'rates',
  'rate lock': 'rates',
  dti: 'basics',
  ltv: 'basics',
  amortization: 'basics',
  'loan estimate': 'process',
  'closing disclosure': 'process',
  fha: 'loan-types',
  va: 'loan-types',
  conventional: 'loan-types',
  usda: 'loan-types',
  jumbo: 'loan-types',
  heloc: 'loan-types',
  refinance: 'refinance',
  'cash-out': 'refinance',
  'first-time': 'home-buying',
  prequalify: 'credit',
  'self-employed': 'credit',
  credit: 'credit',
};

/**
 * Suggest category for a new guide based on subject keywords.
 * Returns best guess; always verify with docs/MORTGAGE-GUIDE-WORKFLOW.md.
 */
export function suggestCategory(subject: string): CategorySlug | null {
  const normalized = normalizeForSearch(subject);
  for (const [keyword, category] of Object.entries(CATEGORY_HINTS)) {
    if (normalized.includes(keyword)) return category;
  }
  return null;
}
