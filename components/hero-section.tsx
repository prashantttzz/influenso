"use client";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";

const HeroSection = () => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.3,
      },
    },
  };

  const fadeUp:Variants = {
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
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // video animation
  const videoAnim:Variants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 80,
    },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.4,
      },
    },
  };

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 lg:px-20 text-white gap-10 lg:gap-0">
      
      {/* left */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full lg:w-1/2 h-full mt-30 md:mt-0 flex flex-col gap-8 md:gap-10 items-center lg:items-start justify-center text-center lg:text-left"
      >
        {/* heading */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
        >
          Where Global <span className="text-red-500">Brands</span> Meet Iconic{" "}
          <span className="text-red-500">Creators</span>
        </motion.h1>

        {/* button */}
        <motion.div variants={fadeUp}>
          <Button
            className="rounded-full glass px-8 py-6 text-base md:text-lg lg:text-xl cursor-pointer hover:text-white flex items-center gap-2"
            variant="ghost"
          >
            Get Started
            <ArrowUpRight className="text-white" />
          </Button>
        </motion.div>
      </motion.div>

      {/* right video */}
      <div className="w-full lg:w-1/2 h-full justify-center items-center flex">
        <motion.video
          variants={videoAnim}
          initial="hidden"
          animate="show"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/poster.jpg"
          className="w-full max-w-[420px] sm:max-w-[500px] lg:max-w-[650px] object-contain lg:mt-20 lg:ml-20"
        >
          <source src="/planet4.mp4" type="video/mp4" />
        </motion.video>
      </div>
    </div>
  );
};

export default HeroSection;
