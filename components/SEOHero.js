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
          <a href="#contact" className="btn btn-primary btn-lg">
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
      
      <div className="lg:w-full">
        <Image
          src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
          alt="SEO Analytics Dashboard"
          className="w-full rounded-lg shadow-xl"
          priority={true}
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default SEOHero;