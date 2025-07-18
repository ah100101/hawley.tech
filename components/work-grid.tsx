import type React from "react"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import Image from "next/image"

// Define the type for work items
export type WorkItem = {
  title: string
  description: string
  imageUrl: string
  className: string
  icon: React.ReactNode
  href?: string
  // Added optional event property
  event?: {
    name: string
    date: string
  }
}

type WorkGridProps = {
  items: WorkItem[]
}

export default function WorkGrid({ items }: WorkGridProps) {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[26rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={<WorkBanner src={item.imageUrl} alt={item.title} />}
          className={item.className}
          icon={item.icon}
          href={item.href}
          event={item.event}
        />
      ))}
    </BentoGrid>
  )
}

const WorkBanner = ({ src, alt }: { src: string; alt: string }) => (
  <div className="flex flex-1 w-full h-full rounded-xl border border-white">
    <Image
      alt={alt}
      width="100"
      height="100"
      src={src || "/placeholder.svg"}
      className="object-cover object-center w-full h-full rounded-xl"
    />
  </div>
)
