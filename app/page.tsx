import DualSection from "@/components/dual-section";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import MarqueeSection from "@/components/marquee-section";
import StatSection from "@/components/stat-section";
import React from "react";

const HomePage = () => {
  return (
    <div className="w-full  relative min-h-screen ">
      <Header />
      <HeroSection />
      <DualSection />
      <MarqueeSection />
      <StatSection />
    </div>
  );
};

export default HomePage;
