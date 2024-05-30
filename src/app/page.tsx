import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/95 antialiased bg-grid-white/5 text-white">
      <HeroSection />
      <FeatureSection />
      <WhyChooseUs />
      <MusicSchoolTestimonials />
      <UpcomingWebinars />
    </main>
  );
}
