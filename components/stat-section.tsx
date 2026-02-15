"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, Variants, useInView, useMotionValue, useSpring } from "framer-motion";

const statsData = [
  {
    number: 2000000,
    suffix: "+",
    text: "Active Creators",
    desc: "Creators building, posting and earning daily on the platform.",
  },
  {
    number: 500000000,
    suffix: "+",
    text: "Monthly Reach",
    desc: "Global audience reached across all supported channels.",
  },
  {
    number: 10000000,
    prefix: "$",
    suffix: "+",
    text: "Paid to Creators",
    desc: "Total payouts delivered directly to creators worldwide.",
  },
];


const AnimatedNumber = ({
  value,
  prefix = "",
  suffix = "",
  start,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  start: boolean;
}) => {
  const motionValue = useMotionValue(0);

  // correct spring config
  const spring = useSpring(motionValue, {
    stiffness: 40,
    damping: 20,
    mass: 1,
  });

  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (start) {
      motionValue.set(value);
    }
  }, [start, value, motionValue]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      setDisplay(Math.floor(latest));
    });
    return unsubscribe;
  }, [spring]);

  const format = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(0) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return num.toString();
  };

  return (
    <span>
      {prefix}
      {format(display)}
      {suffix}
    </span>
  );
};

export default function StatSection() {
  const [startCount, setStartCount] = useState(false);


  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
useEffect(() => {
  if (!inView) return;

  const timer = setTimeout(() => {
    setStartCount(true);
  }, 2000); // ← 2 sec delay

  return () => clearTimeout(timer);
}, [inView]);
  /* ---------- variants ---------- */

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 60, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  // each card different entry
  const cardVariants: Variants = {
    hidden: (i: number) => ({
      opacity: 0,
      y: 80,
      scale: 0.9,
      filter: "blur(10px)",
    }),
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      variants={container}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="min-h-screen w-full flex flex-col gap-6 items-center justify-center px-6 md:px-16 py-20"
    >
      {/* tag */}
      <motion.div
        variants={fadeUp}
        className="rounded-full px-6 py-2 text-white/60 glass text-sm"
      >
        Platform Growth
      </motion.div>

      {/* heading */}
      <motion.h1
        variants={fadeUp}
        className="text-3xl md:text-5xl font-semibold text-center font-manrope"
      >
        Numbers that actually matter
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="text-white/60 text-center max-w-xl"
      >
        Real metrics from real creators earning and growing with consistency,
        not fake dashboard screenshots.
      </motion.p>

      {/* grid */}
      <div className="grid w-full max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {statsData.map((i, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            whileHover={{
              y: -10,
              scale: 1.03,
              transition: { type: "spring", stiffness: 200 },
            }}
            className="rounded-3xl h-[260px] md:h-[320px] flex items-center justify-center flex-col px-8 glass text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold font-manrope bg-gradient-to-b from-white from-[30%] to-black bg-clip-text text-transparent">
              <AnimatedNumber
                value={i.number}
                prefix={i.prefix}
                suffix={i.suffix}
                start={startCount}
              />
            </h1>

            <div className="mt-4">
              <h2 className="text-xl md:text-2xl font-bold font-manrope text-red-500">
                {i.text}
              </h2>
              <p className="text-white/60 text-sm mt-2">{i.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
