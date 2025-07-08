export default function MortgagePage() {
  const cards = [
    {
      title: 'VA Loans',
      description: 'Flexible, government-backed loans for veterans and service members. Low or no down payment options.',
      button: 'Learn More',
    },
    {
      title: 'FHA Loans',
      description: 'Accessible loans for first-time buyers and those with lower credit. Backed by the Federal Housing Administration.',
      button: 'Learn More',
    },
    {
      title: 'Refinance',
      description: 'Lower your rate, change your term, or tap into home equity. See if refinancing is right for you.',
      button: 'See Options',
    },
    {
      title: 'HELOC',
      description: 'Home Equity Line of Credit: flexible borrowing using your home\'s equity. Great for projects or emergencies.',
      button: 'Explore HELOC',
    },
    {
      title: 'Reverse Mortgage',
      description: 'Convert home equity into cash for retirement. For homeowners age 62 and older.',
      button: 'Discover More',
    },
  ];

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-center">Mortgage Solutions</h1>
      <p className="text-gray-700 text-base md:text-lg mb-10 text-center max-w-2xl mx-auto">
        Explore your options for buying, refinancing, or leveraging your home's equity. Find the right mortgage product for your needs.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <div key={card.title} className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold mb-2">{card.title}</h2>
              <p className="text-gray-600 mb-4">{card.description}</p>
            </div>
            <button className="mt-auto px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-accent transition">
              {card.button}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
} 