import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons"
import { BellIcon, Share2Icon } from "lucide-react"
import {Calendar} from "./ui/calendar"
import { cn } from "@/lib/utils"
import { Marquee } from "./ui/marquee"
import { BentoCard, BentoGrid } from "./ui/bento-grid"
import { Input } from "./ui/input"
import { AnimatedListDemo } from "./ui/animate-list-demo"
import { AnimatedBeamMultipleOutputDemo } from "./ui/animate-beam-output"

const deals = [
  {
    name: "Nike Campaign",
    body: "Short-form reels promotion for new sneaker drop. Deliverables: 3 reels + 5 stories.",
  },
  {
    name: "Spotify Collab",
    body: "Music promotion campaign targeting Gen-Z audience across reels and shorts.",
  },
  {
    name: "Amazon Tech",
    body: "YouTube integration campaign with performance tracking and affiliate revenue.",
  },
  {
    name: "Fashion Nova",
    body: "Monthly creator partnership with recurring sponsored content deliverables.",
  },
  {
    name: "Gaming Brand",
    body: "Twitch + YouTube cross-platform promotion with engagement-based payouts.",
  },
]

const features = [
  {
    Icon: FileTextIcon,
    name: "Deal & Contract Management",
    description:
      "Store, manage and track all brand deals, contracts and deliverables in one place.",
    href: "#",
    cta: "Explore",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] [--duration:20s]"
      >
        {deals.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-40 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-col">
              <figcaption className="text-sm font-medium dark:text-white">
                {f.name}
              </figcaption>
              <blockquote className="mt-2 text-xs opacity-70">
                {f.body}
              </blockquote>
            </div>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: BellIcon,
    name: "Campaign Notifications",
    description:
      "Get instant updates when brands send offers, approve content or release payments.",
    href: "#",
    cta: "Explore",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo className="absolute top-4 right-2 h-[300px] w-full scale-75 border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90" />
    ),
  },
  {
    Icon: Share2Icon,
    name: "Brand & Creator Collaboration",
    description:
      "Seamlessly connect with brands, share deliverables and manage approvals in real time.",
    href: "#",
    cta: "Explore",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute top-4 right-2 h-[300px] border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-105" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Content & Payment Timeline",
    description:
      "Track posting schedules, deadlines and payment releases across all campaigns.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Explore",
    background: (
    <Calendar
        mode="single"
        selected={new Date(2022, 4, 11, 0, 0, 0)}
        className="absolute top-10 right-0 origin-top scale-75 rounded-md border glass [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90"
      />
    ),
  },
]

export function BentoDemo() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard  key={idx} {...feature} />
      ))}
    </BentoGrid>
  )
}
