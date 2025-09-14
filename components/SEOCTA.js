import Image from "next/image";

const SEOCTA = () => {
  return (
    <section className="bg-gradient-to-br from-primary to-secondary py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col items-center text-center text-white">
          <div className="bg-warning text-warning-content px-4 py-2 rounded-full text-sm font-bold mb-8">
            🚀 LIMITED TIME OFFER
          </div>
          
          <h2 className="font-bold text-4xl md:text-6xl tracking-tight mb-8 max-w-4xl">
            Ready to dominate Google and 
            <span className="text-yellow-300"> crush your competition?</span>
          </h2>
          
          <p className="text-xl opacity-90 mb-12 leading-relaxed max-w-3xl">
            Stop watching your competitors steal your customers. Get your FREE $500 SEO audit 
            and discover exactly how to outrank them. No fluff, no BS - just actionable 
            insights that will transform your online presence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center mb-8">
            <a href="#contact" className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
              Get Free SEO Audit
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z" />
              </svg>
            </a>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Free audit • No credit card required
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">500+</div>
              <div className="text-white/80">Successful Campaigns</div>
              <div className="text-sm text-white/60">Happy clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">300%</div>
              <div className="text-white/80">Traffic Increase</div>
              <div className="text-sm text-white/60">Average growth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">90 Days</div>
              <div className="text-white/80">Results Timeline</div>
              <div className="text-sm text-white/60">To see results</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOCTA;