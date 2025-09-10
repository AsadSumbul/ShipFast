import Image from "next/image";
import ButtonLead from "@/components/ButtonLead";

const SEOCTA = () => {
  return (
    <section className="relative hero overflow-hidden min-h-screen">
      <Image
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        alt="SEO Success Background"
        className="object-cover w-full"
        fill
      />
      <div className="relative hero-overlay bg-neutral bg-opacity-80"></div>
      <div className="relative hero-content text-center text-neutral-content p-8">
        <div className="flex flex-col items-center max-w-2xl p-8 md:p-0">
          <div className="badge badge-accent badge-lg mb-6">
            🚀 LIMITED TIME OFFER
          </div>
          
          <h2 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 md:mb-12">
            Ready to dominate Google and 
            <span className="text-accent"> crush your competition?</span>
          </h2>
          
          <p className="text-lg opacity-90 mb-8 md:mb-12 leading-relaxed">
            Stop watching your competitors steal your customers. Get your FREE $500 SEO audit 
            and discover exactly how to outrank them. No fluff, no BS - just actionable 
            insights that will transform your online presence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center mb-8">
            <ButtonLead />
            <div className="flex items-center gap-2 text-sm text-neutral-content/80">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Free audit • No credit card required
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-accent">500+</div>
              <div className="text-sm opacity-80">Successful Campaigns</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-accent">300%</div>
              <div className="text-sm opacity-80">Average Traffic Increase</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-accent">90 Days</div>
              <div className="text-sm opacity-80">To See Results</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOCTA;