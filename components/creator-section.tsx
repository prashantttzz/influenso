"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import MergedShape from "./ui/shape";
import { BentoDemo } from "./bento-grid";
import { motion, Variants, useInView } from "framer-motion";
import { useRef } from "react";

const CreatorSection = () => {

  /* refs for intersection */
  const topRef = useRef(null);
  const sponsorRef = useRef(null);
  const viralRef = useRef(null);

  const topInView = useInView(topRef, { once: true, margin: "-120px" });
  const sponsorInView = useInView(sponsorRef, { once: true, margin: "-120px" });
  const viralInView = useInView(viralRef, { once: true, margin: "-120px" });

  /* variants */
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.2 },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 80, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.92, y: 100 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1.1, ease: "easeOut" },
    },
  };

  const leftSlide: Variants = {
    hidden: { opacity: 0, x: -120, scale: 0.9 },
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 1.1, ease: "easeOut" },
    },
  };

  const rightSlide: Variants = {
    hidden: { opacity: 0, x: 120, scale: 0.9 },
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 1.1, ease: "easeOut" },
    },
  };

  const videoReveal: Variants = {
    hidden: { opacity: 0, scale: 0.85, y: 120 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full flex flex-col gap-24 md:gap-32 font-sf px-6 mt-0 md:mt-32">

      {/* TOP */}
      <motion.div
        ref={topRef}
        variants={container}
        initial="hidden"
        animate={topInView ? "show" : "hidden"}
        className="flex gap-16 md:gap-20 flex-col"
      >
        <div className="flex flex-col lg:flex-row lg:items-end justify-between w-full gap-8">

          <div className="space-y-3 max-w-2xl">
            <motion.h1 variants={fadeUp} className="text-3xl md:text-5xl lg:text-6xl font-bold">
              Creating the future together
            </motion.h1>

            <motion.h1 variants={fadeUp} className="text-3xl md:text-5xl lg:text-6xl font-bold text-red-500">
              join us
            </motion.h1>

            <motion.p variants={fadeUp} className="text-white/60 text-sm md:text-base">
              We are always on the lookout for talent, so if youre looking for a
              team of like-minded people to implement your ideas, join us.
            </motion.p>
          </div>

          <motion.div variants={fadeUp} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.96 }} className="bg-white w-fit">
            <Button className="rounded-sm text-lg md:text-2xl lg:text-3xl px-6 py-3 text-red-500 font-bold">
              JOIN
            </Button>
          </motion.div>
        </div>

        <motion.div variants={scaleIn} className="relative h-[300px] md:h-[500px] lg:h-screen w-full overflow-hidden rounded-4xl">
          <Image src="/creator.avif" alt="creator-image" fill className="object-cover" />
        </motion.div>
      </motion.div>

      {/* SPONSOR */}
      <motion.div
        ref={sponsorRef}
        variants={container}
        initial="hidden"
        animate={sponsorInView ? "show" : "hidden"}
        className="flex min-h-screen flex-col gap-8 justify-center items-center text-center"
      >
        <motion.h1 variants={fadeUp} className="text-3xl md:text-5xl font-bold">
          Sponsorship Management
        </motion.h1>

        <motion.p variants={fadeUp} className="text-white/60 max-w-xl text-sm md:text-base">
          Manage brand deals, track campaign performance and collaborate with
          sponsors seamlessly from one powerful dashboard.
        </motion.p>

        <motion.div variants={scaleIn}>
          <BentoDemo />
        </motion.div>
      </motion.div>

      {/* VIRAL */}
      <motion.div
        ref={viralRef}
        variants={container}
        initial="hidden"
        animate={viralInView ? "show" : "hidden"}
        className="h-fit md:h-screen w-full flex flex-col gap-10 md:gap-20 items-center"
      >
        <motion.h1 variants={fadeUp} className="text-3xl md:text-6xl lg:text-7xl font-bold text-center leading-tight">
          Go viral , get <span className="text-red-500">PAID</span><br /> Start here
        </motion.h1>

        <div className="w-full flex flex-col lg:flex-row justify-between gap-6 md:gap-10 items-center">

          <motion.div variants={leftSlide} className="hidden md:block">
            <MergedShape variant="right" className="relative">
              <Image src="/roi1.jpeg" alt="creator" fill className="object-cover" />
            </MergedShape>
          </motion.div>

          <motion.div variants={videoReveal} className="flex-1 w-full h-[260px] sm:h-[320px] md:h-[500px] lg:h-[80%] rounded-3xl md:rounded-4xl overflow-hidden relative">
            <video autoPlay muted loop playsInline preload="auto" className="object-cover w-full h-full">
              <source src="/roi-video.mp4" type="video/mp4" />
            </video>
          </motion.div>

          <motion.div variants={rightSlide} className="hidden md:block">
            <MergedShape variant="left" className="relative">
              <Image src="/roi2.jpeg" alt="creator" fill className="object-cover" />
            </MergedShape>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
};

export default CreatorSection;
