import config from "@/config";
import ButtonCheckout from "./ButtonCheckout";

const plans = [
  {
    name: "🌱 SEO Starter",
    description: "Perfect for small businesses taking their first step into SEO.",
    price: 299,
    period: "month",
    features: [
      "Complete SEO audit",
      "On-page optimization (up to 3 pages)",
      "Technical SEO fixes (speed, indexing, sitemaps)",
      "Google My Business (GMB) profile setup & management",
      "Monthly progress report",
      "Email & WhatsApp support"
    ],
    benefit: "📈 Boost your visibility & start attracting local leads",
    freeAudit: "👉 FREE $500 SEO audit included"
  },
  {
    name: "⭐ SEO Professional",
    description: "Ideal for growing businesses ready to scale their rankings & customer flow.",
    price: 599,
    period: "month",
    isFeatured: true,
    badge: "Most Popular",
    features: [
      "Everything in SEO Starter",
      "On-page optimization (up to 10 pages)",
      "Competitor analysis",
      "Link building strategy",
      "Local SEO optimization (maps, citations)",
      "Ongoing Google My Business (GMB) management",
      "Bi-weekly progress reports",
      "Priority WhatsApp & email support"
    ],
    benefit: "📈 Designed to bring in more consistent leads",
    freeAudit: "👉 FREE $500 SEO audit included"
  },
  {
    name: "🏆 SEO Enterprise",
    description: "Built for expanding brands & multi-location businesses with advanced SEO needs.",
    price: 1299,
    period: "month",
    features: [
      "Everything in SEO Professional",
      "On-page optimization (25+ pages)",
      "Advanced competitor & market analysis",
      "Custom link building campaigns",
      "Multi-location SEO optimization",
      "Advanced GMB management (multi-branch)",
      "Weekly progress reports",
      "Dedicated account manager",
      "Phone, WhatsApp & email support"
    ],
    benefit: "📈 Scale up and capture more leads across every location",
    freeAudit: "👉 FREE $500 SEO audit included"
  }
];

const Pricing = () => {
  return (
    <section className="bg-base-200 overflow-hidden" id="pricing">
      <div className="py-24 px-8 max-w-6xl mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <p className="font-medium text-primary mb-8">Pricing</p>
          <h2 className="font-bold text-3xl lg:text-5xl tracking-tight">
            Choose the perfect SEO package for your business
          </h2>
          <p className="mt-4 text-base-content/80 max-w-2xl mx-auto">
            All packages include a FREE comprehensive SEO audit worth $500. 
            No contracts, no hidden fees - just results.
          </p>
          <div className="alert alert-success max-w-md mx-auto mt-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>FREE $500 SEO Audit Included!</span>
          </div>
        </div>

        <div className="relative flex justify-center flex-col lg:flex-row items-stretch gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`relative w-full ${plan.isFeatured ? 'lg:scale-105 lg:z-10' : ''}`}>
              {plan.isFeatured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <span className="bg-primary text-primary-content px-4 py-2 rounded-full text-sm font-semibold">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className={`relative h-full p-8 rounded-2xl shadow-xl bg-white text-gray-900 flex flex-col ${
                plan.isFeatured 
                  ? 'border-4 border-primary' 
                  : 'border border-gray-200'
              }`}>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-3">{plan.name}</h2>
                  <p className="text-gray-600 mb-6">
                    {plan.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-extrabold text-gray-900">
                        ${plan.price}
                      </span>
                      <span className="text-gray-500">/ {plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5 shrink-0 text-green-500 mt-0.5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-blue-800 font-medium mb-2">{plan.benefit}</p>
                    <p className="text-blue-600 text-sm">{plan.freeAudit}</p>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <ButtonCheckout amount={plan.price} planName={plan.name} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;