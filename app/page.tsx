
import Navbar from "@/app/_components/Navbar";
import Hero from "./_components/Hero";
import Mission from "./_components/Mission";
import Service from "./_components/Service";
import CardSer from "./_components/cardSer";
import PrivacyTerms from "./_components/Privacy&Terms";
import Stats from "./_components/Stats";
import SlideText from "./_components/SlideTest";
import Testimonail from "./_components/Testimonial";
import ContactSection from "./_components/Contact";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    
      <div className="pt-10">
      <Hero />
      <Mission />
      <CardSer />
      <Service />
      <Stats />
      <SlideText />
      <Testimonail />
      <PrivacyTerms />
      <ContactSection />
      </div>
      
    
  );
}
