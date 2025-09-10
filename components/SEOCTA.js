import Image from "next/image";

const SEOCTA = () => {
  return (
    <section className="hero min-h-screen bg-gradient-to-br from-primary to-secondary">
      <div className="hero-content text-center text-primary-content">
        <div className="max-w-2xl">
          <div className="badge badge-warning badge-lg mb-6">
            🚀 LIMITED TIME OFFER
          </div>
          
          <h2 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 md:mb-12">
            Ready to dominate Google and 
            <span className="text-warning"> crush your competition?</span>
          </h2>
          
          <p className="text-lg opacity-90 mb-8 md:mb-12 leading-relaxed">
            Stop watching your competitors steal your customers. Get your FREE $500 SEO audit 
            and discover exactly how to outrank them. No fluff, no BS - just actionable 
            insights that will transform your online presence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center mb-8">
            <a href="#pricing" className="btn btn-warning btn-lg">
              Get Free SEO Audit
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z" />
              </svg>
            </a>
            <div className="flex items-center gap-2 text-sm text-primary-content/80">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Free audit • No credit card required
            </div>
          </div>

          <div className="stats stats-vertical lg:stats-horizontal shadow bg-base-100 text-base-content">
            <div className="stat">
              <div className="stat-title">Successful Campaigns</div>
              <div className="stat-value text-primary">500+</div>
              <div className="stat-desc">Happy clients</div>
            </div>
            <div className="stat">
              <div className="stat-title">Traffic Increase</div>
              <div className="stat-value text-secondary">300%</div>
              <div className="stat-desc">Average growth</div>
            </div>
            <div className="stat">
              <div className="stat-title">Results Timeline</div>
              <div className="stat-value text-accent">90 Days</div>
              <div className="stat-desc">To see results</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOCTA;