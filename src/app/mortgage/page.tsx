import Disclaimer from '@/components/Disclaimer';

export default function MortgagePage() {
  const cards = [
    {
      title: 'VA Loans',
      description: 'Government-backed loans for veterans and service members. Commonly features low or no down payment options.',
      button: 'Learn More',
      href: '/mortgage/va-loan',
    },
    {
      title: 'FHA Loans',
      description: 'Loans backed by the Federal Housing Administration. Often used by first-time buyers and those with lower credit scores.',
      button: 'Learn More',
      href: '/mortgage/fha-loan',
    },
    {
      title: 'Refinance',
      description: 'Explore options to potentially lower your rate, change your term, or access home equity. Learn about refinancing considerations.',
      button: 'Explore Options',
      href: '/mortgage/refinance',
    },
    {
      title: 'HELOC',
      description: 'Home Equity Line of Credit: a type of borrowing that uses your home\'s equity. Some borrowers use HELOCs for projects or expenses.',
      button: 'Learn More',
      href: '/mortgage/heloc',
    },
    {
      title: 'Reverse Mortgage',
      description: 'A loan type that converts home equity into cash. Available to homeowners age 62 and older.',
      button: 'Learn More',
      href: '/mortgage/reverse',
    },
  ];

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-center">Mortgage Guides</h1>
      <p className="text-gray-700 text-base md:text-lg mb-6 text-center max-w-2xl mx-auto">
        Educational information about mortgage options for buying, refinancing, or leveraging your home's equity. 
        Explore different loan types and learn about their characteristics.
      </p>
      
      {/* Compliance: Disclaimer at top of mortgage pages */}
      <Disclaimer variant="full" className="mb-8" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <div key={card.title} className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 flex-col">
            <div>
              <h2 className="text-xl font-bold mb-2">{card.title}</h2>
              <p className="text-gray-600 mb-4">{card.description}</p>
            </div>
            <a 
              href={card.href}
              className="mt-auto inline-block px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-accent transition text-center"
            >
              {card.button}
            </a>
          </div>
        ))}
      </div>
    </main>
  );
} 