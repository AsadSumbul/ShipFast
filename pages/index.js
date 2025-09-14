import Header from "@/components/Header";
import SEOHero from "@/components/SEOHero";
import SEOFeatures from "@/components/SEOFeatures";
import Pricing from "@/components/Pricing";
import SEOTestimonials from "@/components/SEOTestimonials";
import SEOFAQ from "@/components/SEOFAQ";
import SEOCTA from "@/components/SEOCTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <SEOHero />
        <SEOFeatures />
        <SEOTestimonials />
        <Pricing />
        <SEOFAQ />
        <SEOCTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}