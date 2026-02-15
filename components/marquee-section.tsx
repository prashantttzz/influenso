"use client";
import LogoLoop from "./ui/LogoLoop";

const MarqueeSection = () => {
  const logos = [
    {
      node: (
        <div className="flex items-center gap-3 text-white text-lg md:text-2xl font-bold font-manrope!">
          <img src="/apple.png" className="h-6 md:h-8 w-auto" />
          APPLE
        </div>
      ),
      href: "#",
    },
    {
      node: (
        <div className="flex items-center justify-center gap-3 text-white text-lg md:text-2xl font-bold font-manrope!">
          <img src="/nike-2.png" className="h-6 md:h-8 w-auto" />
          NIKE
        </div>
      ),
      href: "#",
    },
    {
      node: (
        <span className="text-orange-500 text-lg md:text-2xl font-bold font-manrope!">
          URBAN WEAR
        </span>
      ),
    },
    {
      node: (
        <span className="text-white/80 text-lg md:text-2xl font-bold font-manrope!">
          EcoLife
        </span>
      ),
    },
  ];

  return (
    <div className="w-full min-h-[70vh] md:h-screen flex items-center justify-center flex-col px-6">
      <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[160px] text-center font-bold font-manrope! fade-text-bottom leading-tight">
        TRUSTED <span className="text-red-500">BY</span>
      </h1>

      <LogoLoop
        logos={logos}
        speed={20}
        direction="left"
        className="mt-6 md:-mt-6"
        logoHeight={40}
        gap={80}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#000000"
        ariaLabel="Brand partners"
      />
    </div>
  );
};

export default MarqueeSection;
