import config from "@/config";
import ButtonCheckout from "./ButtonCheckout";

// Modified to use custom amounts instead of priceId

const Pricing = () => {
  return (
    <section className="bg-base-200 overflow-hidden" id="pricing">
      <div className="py-24 px-8 max-w-5xl mx-auto">
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

        <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
          {config.stripe.plans.map((plan) => (
            <div key={plan.priceId} className="relative w-full max-w-lg">
              {plan.isFeatured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <span className="bg-primary text-primary-content px-4 py-2 rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </span>
                </div>
              )}


              <div className="relative h-full p-8 rounded-2xl shadow-xl border bg-white text-gray-900 border-gray-200">
                <h2 className="card-title text-2xl">{plan.name}</h2>
                {plan.description && (
                  <p className="mt-2 text-gray-600">
                    {plan.description}
                  </p>
                )}
                
                <div className="flex gap-2 mt-4">
                  {plan.priceAnchor && (
                    <div className="flex flex-col justify-end mb-[4px] text-lg ">
                      <p className="relative">
                        <span className="absolute h-[1.5px] inset-x-0 top-[53%] bg-gray-900"></span>
                        <span className="text-gray-500">
                          ${plan.priceAnchor}
                        </span>
                      </p>
                    </div>
                  )}
                  <p className="text-5xl tracking-tight font-extrabold">
                    ${plan.price}
                  </p>
                  <div className="flex flex-col justify-end mb-[4px]">
                    <p className="text-xs uppercase font-semibold text-gray-500">
                      USD
                    </p>
                  </div>
                </div>
                
                {plan.features && (
                  <ul className="space-y-2.5 leading-relaxed text-base flex-1 mt-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-[18px] h-[18px] shrink-0 text-green-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <span>{feature.name} </span>
                      </li>
                    ))}
                  </ul>
                )}
                
                <div className="mt-8 space-y-4">
                  <div className="flex justify-center">
                    <ButtonCheckout amount={plan.price} planName={plan.name} />
                  </div>
                  <p className="text-sm text-center font-medium text-gray-600">
                    Pay once. Access forever.
                  </p>
                  <p className="text-xs text-center text-gray-500">
                    Includes FREE $500 SEO audit
                  </p>
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