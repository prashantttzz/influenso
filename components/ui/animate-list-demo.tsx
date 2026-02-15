"use client"

import { cn } from "@/lib/utils"
import { AnimatedList } from "./animated-list"

interface Item {
  name: string
  description: string
  icon: string
  color: string
  time: string
}

let notifications = [
  {
    name: "Brand deal received",
    description: "Nike sent you a collaboration request for Reels campaign.",
    time: "2m ago",
    icon: "🤝",
    color: "#7C3AED",
  },
  {
    name: "Payment released",
    description: "$1,200 payment from Spotify campaign has been processed.",
    time: "8m ago",
    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "Content approved",
    description: "Your YouTube integration was approved by Amazon Tech.",
    time: "12m ago",
    icon: "✅",
    color: "#22C55E",
  },
  {
    name: "New campaign invite",
    description: "Fashion Nova invited you to a monthly partnership.",
    time: "18m ago",
    icon: "🔥",
    color: "#FF3D71",
  },
  {
    name: "Deadline reminder",
    description: "Submit Instagram Reel for Puma campaign today.",
    time: "25m ago",
    icon: "⏰",
    color: "#FFB800",
  },
  {
    name: "Message from brand",
    description: "Gaming Brand: Can we revise the intro section?",
    time: "32m ago",
    icon: "💬",
    color: "#1E86FF",
  },
  {
    name: "Contract signed",
    description: "You signed the deal with Adidas successfully.",
    time: "40m ago",
    icon: "📝",
    color: "#6366F1",
  },
  {
    name: "Performance update",
    description: "Your campaign reached 1.2M views in 24 hours.",
    time: "55m ago",
    icon: "📈",
    color: "#10B981",
  },
]

notifications = Array.from({ length: 10 }, () => notifications).flat()

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "glass [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center text-lg font-medium whitespace-pre dark:text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  )
}

export function AnimatedListDemo({
  className,
}: {
  className?: string
}) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"></div>
    </div>
  )
}
