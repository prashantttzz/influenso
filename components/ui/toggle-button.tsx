"use client";

type Role = "brand" | "creator";

type RoleToggleProps = {
  value: Role;
  onChange: (role: Role) => void;
};

export default function RoleToggle({ value, onChange }: RoleToggleProps) {
  return (
    <div className="relative w-full max-w-[420px] h-14 sm:h-16 md:h-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center p-1">

      <div
        className={`absolute top-1 bottom-1 w-1/2 rounded-full bg-red-500 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          value === "brand" ? "left-1" : "left-1/2"
        }`}
      />

      <button
        onClick={() => onChange("brand")}
        className={`relative z-10 w-1/2 text-center text-sm sm:text-base md:text-lg font-semibold transition-colors duration-300 ${
          value === "brand"
            ? "text-white"
            : "text-white/60 hover:text-white/80"
        }`}
      >
        I am a Brand
      </button>

      <button
        onClick={() => onChange("creator")}
        className={`relative z-10 w-1/2 text-center text-sm sm:text-base md:text-lg font-semibold transition-colors duration-300 ${
          value === "creator"
            ? "text-white"
            : "text-white/60 hover:text-white/80"
        }`}
      >
        I am a Creator
      </button>
    </div>
  );
}
