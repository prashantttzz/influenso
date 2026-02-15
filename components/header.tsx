"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);

  // framer scroll tracking (works with lenis)
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;

    // scroll down -> hide
    if (latest > prev && latest > 80) {
      setShow(false);
    }
    // scroll up -> show
    else if (latest < prev) {
      setShow(true);
    }
  });

  return (
    <>
      {/* Animated header */}
      <motion.div
        initial={{ y: -120, opacity: 0 }}
        animate={{
          y: show ? 0 : -120,
          opacity: show ? 1 : 0,
        }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1], // smooth premium easing
        }}
        className="w-[92%] md:w-[80%] fixed top-4 left-1/2 -translate-x-1/2 rounded-full h-16 bg-white/10 backdrop-blur-[8px] backdrop-saturate-150 z-[999] flex items-center justify-between px-5 md:px-6 text-white"
      >
        <h1 className="font-semibold text-lg">CreatorSync</h1>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <p className="cursor-pointer hover:text-white/80">Role</p>
          <p className="cursor-pointer hover:text-white/80">Trusted by</p>
          <p className="cursor-pointer hover:text-white/80">Stats</p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            className="glass rounded-4xl hidden md:flex items-center gap-2"
            variant="ghost"
          >
            Get in Touch
            <span className="rounded-full bg-white p-1">
              <ArrowUpRight className="text-black size-4" />
            </span>
          </Button>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex items-center justify-center"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed top-24 left-1/2 -translate-x-1/2 w-[92%] bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col gap-6 text-white md:hidden z-[998]"
        >
          <p className="text-lg">Home</p>
          <p className="text-lg">About</p>
          <p className="text-lg">Works</p>

          <Button
            className="glass rounded-full flex items-center justify-center gap-2 mt-2"
            variant="ghost"
          >
            Get in Touch
            <span className="rounded-full bg-white p-1">
              <ArrowUpRight className="text-black size-4" />
            </span>
          </Button>
        </motion.div>
      )}
    </>
  );
};

export default Header;
