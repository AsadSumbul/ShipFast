import { useRef, useState } from "react";

const faqList = [
  {
    question: "How long does it take to see SEO results?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>
          Most clients start seeing improvements within 30-60 days, with significant 
          results typically visible within 3-6 months. SEO is a long-term strategy, 
          but our proven methods accelerate the timeline considerably.
        </p>
        <p>
          We provide monthly reports so you can track progress every step of the way.
        </p>
      </div>
    ),
  },
  {
    question: "What's included in the free SEO audit?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>
          Our comprehensive free audit includes:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Technical SEO analysis (page speed, mobile-friendliness, crawl errors)</li>
          <li>On-page optimization opportunities</li>
          <li>Keyword gap analysis vs competitors</li>
          <li>Backlink profile assessment</li>
          <li>Local SEO evaluation (if applicable)</li>
          <li>Actionable recommendations with priority levels</li>
        </ul>
        <p>This audit alone is worth $500 and comes with no strings attached.</p>
      </div>
    ),
  },
  {
    question: "Do you guarantee first page rankings?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>
          While no ethical SEO agency can guarantee specific rankings (Google's algorithm 
          is constantly evolving), we do guarantee significant improvements in your 
          organic visibility and traffic.
        </p>
        <p>
          Our track record shows 95% of clients achieve first-page rankings for their 
          target keywords within 6 months. We focus on sustainable, white-hat techniques 
          that provide long-term results.
        </p>
      </div>
    ),
  },
  {
    question: "What makes AsadBiz different from other SEO agencies?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>
          Unlike agencies that use cookie-cutter approaches, we create custom strategies 
          for each client based on their industry, competition, and goals.
        </p>
        <p>Key differentiators:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Transparent reporting with real-time dashboard access</li>
          <li>Dedicated account manager for personalized service</li>
          <li>Proven track record with 500+ successful campaigns</li>
          <li>White-hat techniques that protect your site long-term</li>
          <li>Free audit worth $500 with every consultation</li>
        </ul>
      </div>
    ),
  },
  {
    question: "Can you help with local SEO?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>
          Absolutely! Local SEO is one of our specialties. We help businesses dominate 
          local search results through:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Google My Business optimization</li>
          <li>Local keyword targeting</li>
          <li>Citation building and NAP consistency</li>
          <li>Review management strategies</li>
          <li>Local content creation</li>
        </ul>
        <p>
          Our local SEO clients typically see a 500% increase in local visibility 
          within 90 days.
        </p>
      </div>
    ),
  },
  {
    question: "What if I'm not satisfied with the results?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>
          We're confident in our ability to deliver results, but if you're not 
          completely satisfied within the first 30 days, we'll work with you to 
          address any concerns.
        </p>
        <p>
          Our success is measured by your success. We provide detailed monthly 
          reports showing exactly what we've accomplished and the impact on your 
          business metrics.
        </p>
      </div>
    ),
  },
];

const Item = ({ item }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const SEOFAQ = () => {
  return (
    <section className="bg-base-200" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
          <p className="mt-4 text-base-content/80">
            Got questions about our SEO services? We've got answers. 
            If you don't see your question here, feel free to reach out.
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SEOFAQ;