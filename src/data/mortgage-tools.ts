/**
 * Mortgage tools hub: calculators and their metadata for /mortgage-tools.
 * Links to existing /tools/* and future /mortgage-tools/* pages.
 */

export interface MortgageToolItem {
  id: string;
  title: string;
  description: string;
  href: string;
  category: 'payment' | 'refinance' | 'affordability' | 'comparison' | 'specialty';
  available: boolean;
  relatedGuides: { label: string; href: string }[];
  howItWorks?: string[];
}

export const MORTGAGE_TOOLS: MortgageToolItem[] = [
  {
    id: 'mortgage-calculator',
    title: 'Mortgage Payment Calculator',
    description: 'Estimate your monthly principal and interest, plus optional taxes and insurance (PITI).',
    href: '/tools/mortgage-calculator',
    category: 'payment',
    available: true,
    relatedGuides: [
      { label: 'What Is a Mortgage', href: '/mortgage/what-is-a-mortgage' },
      { label: 'Principal and Interest Explained', href: '/mortgage/principal-and-interest' },
      { label: 'Conventional Loan Guide', href: '/mortgage/conventional-loan' },
    ],
    howItWorks: ['Enter loan amount, term, and interest rate.', 'Optionally add property tax rate, insurance, and other costs.', 'View estimated monthly payment and total interest over the life of the loan.'],
  },
  {
    id: 'refinance-analyzer',
    title: 'Refinance Break-Even Calculator',
    description: 'Compare your current loan to a new loan and see how long it takes for savings to cover closing costs.',
    href: '/tools/refinance-analyzer',
    category: 'refinance',
    available: true,
    relatedGuides: [
      { label: 'Refinance Overview', href: '/mortgage/refinance' },
      { label: 'Should I Refinance', href: '/mortgage/should-i-refinance' },
      { label: 'Refinance Break-Even', href: '/mortgage/refinance-break-even' },
    ],
    howItWorks: ['Enter your current loan balance, rate, and remaining term.', 'Enter the new loan rate, term, and estimated closing costs.', 'See monthly savings and break-even period.'],
  },
  {
    id: 'affordability-calculator',
    title: 'Home Affordability Calculator',
    description: 'Estimate how much home you can afford based on income, debts, down payment, and typical DTI limits.',
    href: '/tools/affordability-calculator',
    category: 'affordability',
    available: true,
    relatedGuides: [
      { label: 'How Lenders Calculate DTI', href: '/mortgage/how-dti-calculated' },
      { label: 'Down Payment Requirements', href: '/mortgage/down-payment-requirements' },
      { label: 'First-Time Home Buyer Guide', href: '/mortgage/first-time-home-buyer' },
    ],
    howItWorks: ['Enter your income and monthly debts.', 'Set down payment and rate assumptions.', 'See estimated max home price and monthly payment.'],
  },
  {
    id: 'loan-qualification-comparison',
    title: 'Loan Qualification Scenario Comparison',
    description: 'Compare how different loan types (e.g., conventional, FHA) might treat your scenario.',
    href: '/tools/loan-qualification-comparison',
    category: 'comparison',
    available: true,
    relatedGuides: [
      { label: 'Conventional Loan Guide', href: '/mortgage/conventional-loan' },
      { label: 'FHA Loan Guide', href: '/mortgage/fha-loan' },
      { label: 'VA Loan Guide', href: '/mortgage/va-loan' },
    ],
  },
  {
    id: 'rent-vs-buy',
    title: 'Rent vs Buy Calculator',
    description: 'Compare the costs of renting versus buying a home over time, including down payment, mortgage, and maintenance.',
    href: '/mortgage-tools/rent-vs-buy',
    category: 'affordability',
    available: true,
    relatedGuides: [
      { label: 'How Much Down Payment for a House', href: '/mortgage/down-payment-requirements' },
      { label: 'What Is a Mortgage', href: '/mortgage/what-is-a-mortgage' },
    ],
    howItWorks: ['Enter rent, home price, down payment, and rate.', 'Add property tax, insurance, and maintenance assumptions.', 'Compare total cost of renting vs buying over 5–30 years.'],
  },
  {
    id: 'amortization',
    title: 'Amortization Calculator',
    description: 'View a full amortization schedule: how each payment splits between principal and interest and the remaining balance.',
    href: '/mortgage-tools/amortization',
    category: 'payment',
    available: true,
    relatedGuides: [
      { label: 'What Is Amortization', href: '/mortgage/what-is-amortization' },
      { label: 'What Is Mortgage Principal', href: '/mortgage/what-is-mortgage-principal' },
    ],
    howItWorks: ['Enter loan amount, interest rate, and term.', 'View the schedule by month.', 'See how principal and interest split changes over time.'],
  },
  {
    id: 'extra-payment',
    title: 'Extra Payment Calculator',
    description: 'See how extra principal payments reduce total interest and shorten the loan term.',
    href: '/mortgage-tools/extra-payment',
    category: 'payment',
    available: true,
    relatedGuides: [
      { label: 'What Is Amortization', href: '/mortgage/what-is-amortization' },
      { label: 'What Is Mortgage Principal', href: '/mortgage/what-is-mortgage-principal' },
    ],
    howItWorks: ['Enter your loan details.', 'Add one-time or recurring extra payments.', 'See new payoff date and interest saved.'],
  },
  {
    id: 'arm-vs-fixed',
    title: 'ARM vs Fixed-Rate Calculator',
    description: 'Compare monthly payments and total cost for an ARM and a fixed-rate mortgage over time.',
    href: '/mortgage-tools/arm-vs-fixed',
    category: 'comparison',
    available: true,
    relatedGuides: [
      { label: 'Fixed vs Adjustable Rate Mortgage', href: '/mortgage/fixed-vs-adjustable-rate-mortgage' },
      { label: 'What Is an Adjustable Rate Mortgage', href: '/mortgage/what-is-an-adjustable-rate-mortgage' },
    ],
    howItWorks: ['Enter loan amount and term.', 'Set fixed rate and ARM initial rate plus caps and index.', 'Compare payments and balance over 5–30 years.'],
  },
  {
    id: 'dti-calculator',
    title: 'Debt-to-Income (DTI) Calculator',
    description: 'Calculate your front-end and back-end DTI to see how lenders may view your affordability.',
    href: '/mortgage-tools/dti-calculator',
    category: 'affordability',
    available: true,
    relatedGuides: [
      { label: 'How DTI Affects Mortgage Approval', href: '/mortgage/how-dti-affects-mortgage-approval' },
      { label: 'What Is DTI', href: '/mortgage/what-is-dti' },
    ],
    howItWorks: ['Enter gross monthly income.', 'Enter all monthly debt payments (and proposed housing payment).', 'See front-end and back-end DTI percentages.'],
  },
  {
    id: 'down-payment-calculator',
    title: 'Down Payment Calculator',
    description: 'See how much you need to put down for a target home price and how it affects LTV and monthly payment.',
    href: '/tools/affordability-calculator',
    category: 'affordability',
    available: true,
    relatedGuides: [
      { label: 'Down Payment Requirements', href: '/mortgage/down-payment-requirements' },
      { label: 'Loan-to-Value LTV Explained', href: '/mortgage/loan-to-value-ltv' },
      { label: 'Private Mortgage Insurance PMI', href: '/mortgage/private-mortgage-insurance-pmi' },
    ],
  },
  {
    id: 'solar-savings',
    title: 'Solar Savings Estimator',
    description: 'Estimate energy savings and payback for a solar installation. Useful for solar financing decisions.',
    href: '/tools/solar-savings-estimator',
    category: 'specialty',
    available: true,
    relatedGuides: [
      { label: 'HELOC Overview', href: '/mortgage/heloc' },
      { label: 'Home Equity Loan vs HELOC', href: '/mortgage/home-equity-loan-vs-heloc' },
    ],
  },
  {
    id: 'non-qm-scenario',
    title: 'Non-QM Qualification Scenario Comparison',
    description: 'Compare scenarios for borrowers who may not fit standard QM guidelines (e.g., self-employed, bank statement).',
    href: '/tools/non-qm-scenario-comparison',
    category: 'comparison',
    available: true,
    relatedGuides: [
      { label: 'Non-QM Loan Guide', href: '/mortgage/non-qm-loan' },
      { label: 'Self-Employed Borrower', href: '/mortgage/self-employed-borrower' },
    ],
  },
];

export function getMortgageToolsByCategory(): Record<string, MortgageToolItem[]> {
  const byCategory: Record<string, MortgageToolItem[]> = {};
  for (const tool of MORTGAGE_TOOLS) {
    const cat = tool.category;
    if (!byCategory[cat]) byCategory[cat] = [];
    byCategory[cat].push(tool);
  }
  return byCategory;
}

export const CATEGORY_LABELS: Record<string, string> = {
  payment: 'Payment & Amortization',
  refinance: 'Refinance',
  affordability: 'Affordability & Qualification',
  comparison: 'Loan Comparison',
  specialty: 'Specialty',
};
