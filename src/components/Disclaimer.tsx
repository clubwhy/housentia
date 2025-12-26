/**
 * Disclaimer Component
 * 
 * Compliance Note: This component provides mandatory legal disclaimers
 * to ensure the site is positioned as educational/informational only.
 * The site owner does NOT have a mortgage license, broker license, or loan officer license.
 */

interface DisclaimerProps {
  variant?: 'full' | 'compact' | 'inline';
  className?: string;
}

export default function Disclaimer({ variant = 'full', className = '' }: DisclaimerProps) {
  const baseClasses = variant === 'inline' 
    ? 'text-sm text-gray-600' 
    : 'bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4';

  const compactText = (
    <p className="text-sm text-gray-700">
      <strong>Disclaimer:</strong> This website provides general mortgage and financial information for educational purposes only. 
      It does not constitute financial, legal, or mortgage advice. Housentia is not a licensed mortgage broker, lender, or loan originator.
    </p>
  );

  const fullText = (
    <div>
      <p className="text-sm text-gray-700 mb-2">
        <strong>Legal Disclaimer:</strong> This website provides general mortgage and financial information for educational purposes only. 
        It does not constitute financial, legal, or mortgage advice.
      </p>
      <p className="text-sm text-gray-700 mb-2">
        <strong>Housentia is not a licensed mortgage broker, lender, or loan originator.</strong> Users should consult with a licensed 
        mortgage professional in their state for personalized guidance.
      </p>
      <p className="text-sm text-gray-700">
        All mortgage calculators, rate information, and loan comparisons are provided for informational and educational purposes only. 
        Actual rates, terms, and eligibility may vary based on individual circumstances and lender requirements.
      </p>
    </div>
  );

  if (variant === 'inline') {
    return (
      <span className={`${baseClasses} ${className}`}>
        {compactText}
      </span>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`${baseClasses} ${className}`}>
        {compactText}
      </div>
    );
  }

  // Full variant (default)
  return (
    <div className={`${baseClasses} ${className}`}>
      {fullText}
    </div>
  );
}

