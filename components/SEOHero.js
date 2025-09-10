import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";

const SEOHero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <div className="badge badge-primary badge-lg">
          🎯 FREE SEO AUDIT INCLUDED
        </div>

        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
          Dominate Google Rankings & 
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> 
            {" "}Skyrocket Your Traffic
          </span>
        </h1>
        
        <p className="text-lg opacity-80 leading-relaxed">
          Stop losing customers to your competitors. Our proven SEO strategies have helped 500+ businesses increase their organic traffic by 300% in just 90 days. Get your FREE audit and see how we can transform your online presence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a href="#pricing" className="btn btn-primary btn-lg">
            Get Free SEO Audit
            <svg
              xmlns="http://www.w3.org/2000/svg" 
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"
              />
            </svg>
          </a>
          <div className="flex items-center gap-2 text-sm text-base-content/70">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            No commitment • Results in 30 days
          </div>
        </div>

        <TestimonialsAvatars priority={true} />
      </div>
      
      <div className="lg:w-full relative">
        <div className="mockup-browser border bg-base-300">
          <div className="mockup-browser-toolbar">
            <div className="input">https://yourbusiness.com</div>
          </div>
          <div className="flex justify-center px-4 py-16 bg-base-200">
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-figure text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div className="stat-title">Traffic</div>
                <div className="stat-value text-primary">+300%</div>
                <div className="stat-desc">90 days</div>
              </div>
              
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
                  </svg>
                </div>
                <div className="stat-title">Rankings</div>
                <div className="stat-value text-secondary">#1</div>
                <div className="stat-desc">Google Position</div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default SEOHero;