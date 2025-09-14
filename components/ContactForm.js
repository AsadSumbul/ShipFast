import { useState } from "react";
import { toast } from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      toast.success("Thanks! We'll contact you within 24 hours with your free SEO audit.");
      setFormData({ name: "", email: "", website: "", message: "" });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="bg-base-200 py-24" id="contact">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-base-content mb-4">
            Get Your FREE $500 SEO Audit
          </h2>
          <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
            Ready to see how your website stacks up against the competition? 
            Fill out the form below and we'll send you a comprehensive SEO audit within 24 hours.
          </p>
        </div>

        <div className="bg-base-100 rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-base-content mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-base-content mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="website" className="block text-sm font-medium text-base-content mb-2">
                Website URL *
              </label>
              <input
                type="url"
                id="website"
                name="website"
                required
                value={formData.website}
                onChange={handleChange}
                className="input input-bordered w-full"
                placeholder="https://yourwebsite.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-base-content mb-2">
                Tell us about your SEO goals (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="textarea textarea-bordered w-full"
                placeholder="What are your main SEO challenges? What keywords do you want to rank for?"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isLoading}
                className="btn btn-primary btn-lg px-8"
              >
                {isLoading ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Get My Free SEO Audit
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z" />
                    </svg>
                  </>
                )}
              </button>
              <p className="text-sm text-base-content/60 mt-4">
                No spam, no commitments. Just valuable insights about your website's SEO performance.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;