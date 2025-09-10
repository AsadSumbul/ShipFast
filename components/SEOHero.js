import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import ButtonLead from "@/components/ButtonLead";

const SEOHero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <div className="badge badge-outline">
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
          <ButtonLead />
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
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
        <Image
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80"
          alt="SEO Analytics Dashboard"
          className="w-full rounded-2xl shadow-2xl relative z-10"
          priority={true}
          width={600}
          height={400}
        />
        
        {/* Floating stats */}
        <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 z-20">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold">+300% Traffic</span>
          </div>
        </div>
        
        <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 z-20">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold">#1 Rankings</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOHero;