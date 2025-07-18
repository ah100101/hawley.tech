import { BentoGrid, BentoGridItem, type WorkItemType } from "@/components/ui/bento-grid"
import Image from "next/image"
import {
  IconClipboardCopy,
  IconTableColumn,
  IconBulb,
  IconMicrophone,
  IconPresentation,
  IconCalendar,
} from "@tabler/icons-react"

// Define the type for work items
export type WorkItem = {
  title: string
  description?: string
  imageUrl: string
  className: string
  type: WorkItemType
  href?: string
  eventName?: string
  date?: string
}

type WorkGridProps = {
  items: WorkItem[]
}

// Map work item types to their icons
const workItemTypeIcons = {
  guide: <IconClipboardCopy className="h-4 w-4" />,
  template: <IconTableColumn className="h-4 w-4" />,
  solution: <IconBulb className="h-4 w-4" />,
  webinar: <IconMicrophone className="h-4 w-4" />,
  talk: <IconPresentation className="h-4 w-4" />,
  event: <IconCalendar className="h-4 w-4" />,
} as const

export default function WorkGrid({ items }: WorkGridProps) {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={<WorkBanner src={item.imageUrl} alt={item.title} type={item.type} />}
          className={item.className}
          type={item.type}
          href={item.href}
          eventName={item.eventName}
          date={item.date}
        />
      ))}
    </BentoGrid>
  )
}

const WorkBanner = ({ src, alt, type }: { src: string; alt: string; type: WorkItemType }) => (
  <div className="flex flex-1 w-full h-full rounded-xl border border-white relative">
    <Image
      alt={alt}
      width="100"
      height="100"
      src={src || "/placeholder.svg"}
      className="object-cover object-center w-full h-full rounded-xl"
    />
    {/* Icon overlay positioned on top-right of image */}
    <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm rounded-lg p-2 text-white">
      {workItemTypeIcons[type]}
    </div>
  </div>
)
