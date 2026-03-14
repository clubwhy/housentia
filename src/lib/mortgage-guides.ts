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
    relatedSlugs: ['what-is-loan-estimate', 'what-is-closing-disclosure', 'what-is-escrow', 'what-is-mortgage-insurance', 'what-is-mortgage-points', 'what-is-apr'],
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
    relatedSlugs: ['what-happens-at-closing', 'mortgage-funding-process', 'what-happens-after-mortgage-approval', 'what-is-a-mortgage-servicer', 'closing-disclosure-explained', 'mortgage-application-process', 'what-is-closing-disclosure', 'what-is-closing-costs'],
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
    slug: 'what-is-a-mortgage-servicer',
    title: 'What Is a Mortgage Servicer',
    description: 'The servicer collects payments, manages escrow, and handles customer service. Learn how servicing works and your rights under CFPB rules.',
    category: 'process',
    relatedSlugs: ['what-is-mortgage-default', 'what-is-mortgage-delinquency', 'what-is-a-mortgage-lender', 'what-is-a-mortgage', 'what-is-escrow', 'mortgage-closing-process', 'how-mortgages-work'],
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
    relatedSlugs: ['what-is-mortgage-default', 'what-is-mortgage-delinquency', 'what-is-piti', 'what-is-mortgage-principal', 'what-is-amortization', 'what-is-escrow'],
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
    relatedSlugs: ['va-loan', 'conventional-loan', 'what-is-pmi', 'what-is-ltv'],
  },
  {
    slug: 'va-loan',
    title: 'VA Loan Guide',
    description: 'Government-backed loans for veterans and service members. Low or no down payment options.',
    category: 'loan-types',
    relatedSlugs: ['fha-loan', 'conventional-loan', 'what-is-ltv', 'what-is-dti'],
  },
  {
    slug: 'conventional-loan',
    title: 'Conventional Loan Guide',
    description: 'Non-government-backed loans with flexible terms. PMI can be removed at 80% LTV.',
    category: 'loan-types',
    relatedSlugs: ['fha-loan', 'va-loan', 'what-is-pmi', 'what-is-mortgage-insurance', 'what-is-ltv'],
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
  // Refinancing
  {
    slug: 'refinance',
    title: 'Refinance Overview',
    description: 'Explore options to lower your rate, change your term, or access home equity.',
    category: 'refinance',
    relatedSlugs: ['what-is-refinance', 'what-is-cash-out-refinance', 'refinance-cashout', 'what-is-rate-lock'],
  },
  {
    slug: 'what-is-refinance',
    title: 'What is a Refinance',
    description: 'Learn what refinancing is, how it works, and how to compare refinance scenarios.',
    category: 'refinance',
    relatedSlugs: ['refinance', 'what-is-cash-out-refinance', 'refinance-cashout', 'what-is-apr'],
  },
  {
    slug: 'what-is-cash-out-refinance',
    title: 'What is a Cash-Out Refinance',
    description: 'Refinance for more than you owe and receive the difference in cash.',
    category: 'refinance',
    relatedSlugs: ['what-is-mortgage-equity', 'refinance', 'refinance-cashout', 'heloc', 'what-is-refinance'],
  },
  {
    slug: 'refinance-cashout',
    title: 'Refinance & Cash-Out',
    description: 'Combine rate-and-term refinance with cash-out. Compare options and considerations.',
    category: 'refinance',
    relatedSlugs: ['what-is-cash-out-refinance', 'refinance', 'heloc', 'what-is-refinance'],
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
