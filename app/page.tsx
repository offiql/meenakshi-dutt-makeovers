import FAQSection from "@/component/faqSection";
import FooterSection from "@/component/footerSection";
import FounderSection from "@/component/founderSection";
import GallerySection from "@/component/gallerySection";
import HeroSection from "@/component/Hero1";
import LuxuryAboutSection from "@/component/luxuryAboutSection";
import LuxuryServicesSection from "@/component/luxuryServiceSection";
import Navbar from "@/component/navbar";
import PhilosophySection from "@/component/philosophySection";
import TestimonialsSection from "@/component/testimonialSection";
import WhyChooseUsSection from "@/component/whyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-dvh overflow-x-hidden overflow-y-scroll">
      <Navbar />
      <HeroSection/>
      <LuxuryAboutSection/>
      {/* <FounderSection/> */}
      <LuxuryServicesSection/>
      {/* <WhyChooseUsSection/> */}
      <GallerySection/>
      {/* <TestimonialsSection/> */}
      {/* <PhilosophySection/> */}
      <FAQSection/>
      <FooterSection/>
    </div>
  );
}
