"use client";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";

export function AnalyticDashboard() {
  return (
    <div className="flex flex-col overflow-hidden font-manrope!">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-3xl md:text-5xl font-bold text-center uppercase fade-text">
              Track what actually drives{" "}
              <span className="block font-bold mt-2 text-4xl md:text-[5rem] leading-none">
                <span className="text-red-500">Brand</span> Growth
              </span>
            </h1>

            <p className="text-white/60 text-center max-w-2xl mx-auto mt-6 text-sm md:text-lg">
              One powerful analytics dashboard to monitor campaigns, creator
              performance, conversions and revenue. Stop guessing. Start scaling
              with real data.
            </p>

            <div className="flex items-center justify-center gap-4 mt-8 mb-10">
              <button className="px-6 py-3 rounded-xl bg-white text-black font-semibold">
                View Live Dashboard
              </button>
              <button className="px-6 py-3 rounded-xl border border-white/20 text-white/80">
                See How It Works
              </button>
            </div>
          </>
        }
      >
        <Image
          src={`/dashboard.png`}
          alt="Brand analytics dashboard preview"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
          priority
        />
      </ContainerScroll>
    </div>
  );
}
