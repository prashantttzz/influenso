/* eslint-disable @typescript-eslint/no-explicit-any */
type MergedShapeProps = {
  children: React.ReactNode;
  variant?: "left" | "right";
  className?: string;
};

const MergedShape = ({
  children,
  variant = "right",
  className = "",
}: MergedShapeProps) => {
  return (
    <div
      className={`relative w-[340px] h-[500px] overflow-hidden rounded-4xl ${className}`}
      style={{
        clipPath:
          "path('M0 0 H250 Q279 0 279 29 V61 Q279 90 308 90 H340 V500 H0 Z')",
        transform: variant === "left" ? "scaleX(-1)" : "none",
      }}
    >
      {/* Flip content back so image doesn't mirror */}
      <div
        style={{
          transform: variant === "left" ? "scaleX(-1)" : "none",
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default MergedShape;
