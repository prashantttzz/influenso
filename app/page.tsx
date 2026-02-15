import DualSection from "@/components/dual-section";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import MarqueeSection from "@/components/marquee-section";
import StatSection from "@/components/stat-section";
import { Spotlight } from "@/components/ui/spotlight-new";

const HomePage = () => {
  return (
    <div className="w-full relative min-h-screen overflow-hidden ">
  <Spotlight
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(255,0,60,0.12) 0, rgba(255,0,60,0.06) 40%, rgba(255,0,60,0.02) 70%, transparent 100%)"
        duration={8}
        xOffset={10}
      />{" "}
      <Header />
      <HeroSection />
      <DualSection />
      <MarqueeSection />
      <StatSection />
    </div>
  );
};

export default HomePage;
