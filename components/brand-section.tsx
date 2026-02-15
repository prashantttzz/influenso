"use client";
import { AnalyticDashboard } from "./ui/dashboard";
import { ShimmerButton } from "./ui/shimmer-button";
import { Marquee } from "./ui/marquee";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const BrandSection = () => {
  const images = [
    "/creator1.jpg",
    "/cretor2.jpg",
    "/creator3.jpg",
    "/creator4.jpg",
    "/creator6.jpg",
  ];

  const firstRow = images.slice(0, 3);
  const secondRow = images.slice(3);

  /* ---------------- ANIMATION VARIANTS ---------------- */

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: 60,
      filter: "blur(8px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const scaleIn: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.94,
      y: 80,
    },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const leftSlide: Variants = {
    hidden: { opacity: 0, x: -100 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const rightSlide: Variants = {
    hidden: { opacity: 0, x: 100 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  /* ---------------- UI ---------------- */

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="w-full flex flex-col gap-20 md:gap-24 px-4 sm:px-6 lg:px-20"
    >
      {/* Dashboard */}
      <motion.div variants={scaleIn}>
        <AnalyticDashboard />
      </motion.div>

      {/* ROI SECTION */}
      <motion.div
        variants={scaleIn}
        className="relative w-full rounded-3xl min-h-[380px] md:min-h-[480px] border border-white/20 bg-[url('/roi-bg.png')] bg-cover bg-center overflow-hidden"
      >
        <div className="relative z-10 py-16 md:py-20 px-6 lg:px-16 text-center flex flex-col items-center gap-5 md:gap-6">

          <motion.h1
            variants={fadeUp}
            className="text-2xl sm:text-3xl lg:text-5xl font-semibold tracking-tight max-w-3xl"
          >
            Predict Campaign ROI Before You Invest
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-sm sm:text-base lg:text-lg text-white/70 max-w-2xl"
          >
            Instantly estimate reach, engagement, conversions and projected revenue
            across top-performing creators in your niche.
          </motion.p>

          <motion.div variants={fadeUp}>
            <ShimmerButton className="px-6 md:px-8 py-3 glass">
              <span className="text-sm md:text-base font-medium">
                Open ROI Calculator
              </span>
            </ShimmerButton>
          </motion.div>

        </div>
      </motion.div>

      {/* CREATOR DISCOVERY */}
      <motion.div
        variants={scaleIn}
        className="w-full flex flex-col glass rounded-3xl lg:rounded-4xl min-h-[120px] px-6 sm:px-8 lg:px-10 py-10 lg:py-0 lg:flex-row gap-10 items-center overflow-hidden"
      >
        {/* LEFT MARQUEE */}
        <motion.div
          variants={leftSlide}
          className="hidden lg:block w-[240px] xl:w-[270px] h-[450px] overflow-hidden rounded-3xl"
        >
          <Marquee reverse className="[--duration:60s]" vertical>
            {firstRow.map((src, index) => (
              <div
                key={index}
                className="relative w-[240px] xl:w-[280px] h-[300px] rounded-3xl overflow-hidden"
              >
                <Image src={src} alt="" fill className="object-cover" />
              </div>
            ))}
          </Marquee>
        </motion.div>

        {/* CENTER */}
        <div className="flex-1 text-center flex flex-col items-center gap-5 md:gap-6">

          <motion.span
            variants={fadeUp}
            className="text-[10px] sm:text-xs uppercase tracking-widest text-white glass px-4 sm:px-5 py-1 rounded-full"
          >
            Creator Discovery
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight max-w-xl"
          >
            Find Creators That Match Your Brand DNA
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-white/70 max-w-xl text-sm sm:text-base"
          >
            Search by audience demographics, engagement rate, category, region,
            and performance metrics. Connect with creators aligned with your
            campaign goals.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="w-full max-w-md h-12 sm:h-14 rounded-full border border-white/20 px-5 sm:px-6 flex items-center bg-white/5 backdrop-blur-lg"
          >
            <input
              className="bg-transparent outline-none w-full text-sm sm:text-base text-white placeholder:text-white/40"
              placeholder="Search creators by niche, platform, or audience..."
            />
          </motion.div>

        </div>

        {/* RIGHT MARQUEE */}
        <motion.div
          variants={rightSlide}
          className="hidden lg:block w-[240px] xl:w-[280px] h-[380px] lg:h-[420px] overflow-hidden rounded-3xl"
        >
          <Marquee className="[--duration:60s]" vertical>
            {secondRow.map((src, index) => (
              <div
                key={index}
                className="relative w-[240px] xl:w-[280px] h-[300px] rounded-3xl overflow-hidden"
              >
                <Image src={src} alt="" fill className="object-cover" />
              </div>
            ))}
          </Marquee>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default BrandSection;
