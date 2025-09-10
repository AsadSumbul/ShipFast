import Image from "next/image";
import config from "@/config";

const list = [
  {
    username: "sarahbiz",
    name: "Sarah Johnson",
    text: "AsadBiz transformed our online presence completely! Our organic traffic increased by 400% in just 3 months. The ROI has been incredible - we're getting 10x more leads than before.",
    img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
  },
  {
    username: "mikecorp",
    name: "Mike Rodriguez",
    text: "I was skeptical about SEO agencies, but AsadBiz delivered exactly what they promised. We went from page 3 to #1 rankings for our main keywords. The detailed reports show real progress every month.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
  },
  {
    username: "emmastore",
    name: "Emma Chen",
    text: "The free audit alone was worth thousands! They found issues our previous agency missed. Now we're ranking for keywords we never thought possible. Highly recommend their professional package.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
  },
];

const Testimonial = ({ i }) => {
  const testimonial = list[i];

  if (!testimonial) return null;

  return (
    <li key={i}>
      <div className="card bg-base-200 shadow-xl h-full">
        <div className="card-body">
          <p className="text-base-content/80 leading-relaxed">
            {testimonial.text}
          </p>
          <div className="card-actions justify-between items-center mt-4">
            <div className="flex items-center gap-4">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  {testimonial.img ? (
                    <Image
                      src={list[i].img}
                      alt={`${list[i].name}'s testimonial for ${config.appName}`}
                      width={48}
                      height={48}
                    />
                  ) : (
                    <div className="bg-base-300 w-12 h-12 rounded-full flex justify-center items-center text-lg font-medium">
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <div className="font-medium text-base-content">
                  {testimonial.name}
                </div>
                {testimonial.username && (
                  <div className="text-sm text-base-content/80">
                    @{testimonial.username}
                  </div>
                )}
              </div>
            </div>
            <div className="rating rating-sm">
              {[...Array(5)].map((_, i) => (
                <input key={i} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked={i === 4} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const SEOTestimonials = () => {
  return (
    <section id="testimonials">
      <div className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <div className="mb-8">
            <h2 className="sm:text-5xl text-4xl font-extrabold text-base-content">
              500+ businesses trust AsadBiz with their SEO
            </h2>
          </div>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-base-content/80">
            Don&apos;t take our word for it. Here&apos;s what our clients say about 
            the results we&apos;ve delivered for their businesses.
          </p>
        </div>

        <ul
          role="list"
          className="flex flex-col items-center lg:flex-row lg:items-stretch gap-6 lg:gap-8"
        >
          {[...Array(3)].map((e, i) => (
            <Testimonial key={i} i={i} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SEOTestimonials;
                {testimonial.name}
              </div>
              {testimonial.username && (
                <div className="mt-0.5 text-sm text-base-content/80">
                  @{testimonial.username}
                </div>
              )}
            </div>

            <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
              {testimonial.img ? (
                <Image
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                  src={list[i].img}
                  alt={`${list[i].name}'s testimonial for ${config.appName}`}
                  width={48}
                  height={48}
                />
              ) : (
                <span className="w-10 h-10 md:w-12 md:h-12 rounded-full flex justify-center items-center text-lg font-medium bg-base-300">
                  {testimonial.name.charAt(0)}
                </span>
              )}
            </div>
          </div>
        </figcaption>
      </figure>
    </li>
  );
};

const SEOTestimonials = () => {
  return (
    <section id="testimonials">
      <div className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <div className="mb-8">
            <h2 className="sm:text-5xl text-4xl font-extrabold text-base-content">
              500+ businesses trust AsadBiz with their SEO
            </h2>
          </div>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-base-content/80">
            Don&apos;t take our word for it. Here&apos;s what our clients say about 
            the results we&apos;ve delivered for their businesses.
          </p>
        </div>

        <ul
          role="list"
          className="flex flex-col items-center lg:flex-row lg:items-stretch gap-6 lg:gap-8"
        >
          {[...Array(3)].map((e, i) => (
            <Testimonial key={i} i={i} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SEOTestimonials;