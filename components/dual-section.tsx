"use client";
import CreatorSection from "./creator-section";
import BrandSection from "./brand-section";
import RoleToggle from "./ui/toggle-button";
import { Variants } from "framer-motion";
import { useRef, useEffect } from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DualSection = () => {
  const [role, setRole] = useState<"brand" | "creator">("brand");

useEffect(() => {
  if (!window.lenis) return;

  // wait for section swap animation to start
  const t = setTimeout(() => {
    const halfScreen = window.innerHeight * 0.5;

    window.lenis.scrollTo(window.scrollY + halfScreen, {
      duration: 1.2,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
    });
  }, 150); // small delay so new section mounts

  return () => clearTimeout(t);
}, [role]);
  // container stagger
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2,
      },
    },
  };

  // fade from bottom
  const fadeUp:Variants = {
    hidden: {
      opacity: 0,
      y: 60,
      filter: "blur(6px)",
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

  // switch animation (brand/creator)
  const switchAnim:Variants = {
    initial: { opacity: 0, y: 40, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -40, scale: 0.98 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="w-full flex items-center justify-start flex-col px-10 md:px-16 lg:px-32 py-16 md:py-24 gap-10"
    >
      {/* top section */}
      <motion.div
        variants={fadeUp}
        className="flex md:h-screen flex-col items-center justify-start gap-12 md:gap-20 text-center"
      >
        <div className="flex flex-col items-center justify-center gap-4">
          
          {/* pill */}
          <motion.div
            variants={fadeUp}
            className="px-6 md:px-10 py-1 w-fit glass text-white/50 rounded-full text-sm"
          >
            Select Your Role
          </motion.div>

          {/* heading + desc */}
          <motion.div
            variants={fadeUp}
            className="gap-3 flex flex-col items-center justify-center max-w-2xl"
          >
            <h1 className="text-3xl md:text-5xl font-bold font-manrope! leading-tight">
              Built for Brands & Creators
            </h1>
            <p className="text-white/50 font-semibold text-sm md:text-base">
              Choose how you want to use the platform. Brands can discover and
              manage creator partnerships, while creators can land sponsorships,
              track deals and get paid — all in one place.
            </p>
          </motion.div>
        </div>

        {/* toggle */}
        <motion.div variants={fadeUp} className="w-full flex items-center justify-center">
          <RoleToggle value={role} onChange={setRole} />
        </motion.div>
      </motion.div>

      {/* switching sections */}
      <div className="w-full relative" >
        <AnimatePresence mode="wait">
          {role === "brand" ? (
            <motion.div key="brand" {...switchAnim}>
              <BrandSection />
            </motion.div>
          ) : (
            <motion.div key="creator" {...switchAnim}>
              <CreatorSection />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default DualSection;
