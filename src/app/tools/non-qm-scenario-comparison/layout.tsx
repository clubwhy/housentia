import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Non-QM Qualification Scenario Comparison | Compare Conventional vs Non-QM | Housentia',
  description:
    'Compare how Conventional (QM) and Non-QM loans evaluate self-employed borrowers, high DTI, asset-based qualification, and investors. Educational tool for understanding qualification differences.',
  openGraph: {
    title: 'Non-QM Qualification Scenario Comparison | Housentia',
    description: 'Compare Conventional vs Non-QM qualification approaches for self-employed, high DTI, asset-based, and investor scenarios.',
  },
};

export default function NonQMScenarioComparisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
