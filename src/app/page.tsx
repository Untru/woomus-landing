import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import Problems from "@/components/Problems";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import Capabilities from "@/components/Capabilities";
import AISavings from "@/components/AISavings";
import Pricing from "@/components/Pricing";
import Cases from "@/components/Cases";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ClientLogos />
        <Problems />
        <Solution />
        <HowItWorks />
        <Capabilities />
        <AISavings />
        <Pricing />
        <Cases />
        <About />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
