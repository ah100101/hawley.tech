import type React from "react"
import { cn } from "@/lib/utils"
import {
  IconExternalLink,
  IconClipboardCopy,
  IconTableColumn,
  IconBulb,
  IconMicrophone,
  IconPresentation,
  IconCalendar,
} from "@tabler/icons-react"

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return <div className={cn("mx-auto grid max-w-8xl grid-cols-1 gap-4 md:grid-cols-3", className)}>{children}</div>
}

const workItemTypes = {
  guide: { icon: <IconClipboardCopy className="h-4 w-4" />, label: "Guide" },
  template: { icon: <IconTableColumn className="h-4 w-4" />, label: "Template" },
  solution: { icon: <IconBulb className="h-4 w-4" />, label: "Solution" },
  webinar: { icon: <IconMicrophone className="h-4 w-4" />, label: "Webinar" },
  talk: { icon: <IconPresentation className="h-4 w-4" />, label: "Talk" },
  event: { icon: <IconCalendar className="h-4 w-4" />, label: "Event" },
} as const

export type WorkItemType = keyof typeof workItemTypes

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  type,
  href,
  eventName,
  date,
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  type: WorkItemType
  href?: string
  eventName?: string
  date?: string
}) => {
  const typeInfo = workItemTypes[type]
  const label = eventName || typeInfo.label

  // Wrap content in a link if href is provided
  const content = (
    <>
      {header}
      {/* Consolidate all text content into a single div for better layout control */}
      <div>
        {/* Meta row with event info and external link icon - removed icon from here */}
        <div className="flex justify-between items-center mb-2 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <span>{label}</span>
            {date && (
              <>
                <span>•</span>
                <span>{date}</span>
              </>
            )}
          </div>
          {href && <IconExternalLink className="h-4 w-4" />}
        </div>
        {/* Title */}
        <div className="font-sans font-bold text-neutral-200 mb-2">{title}</div>
        {/* Description */}
        <div className="font-sans text-xs font-normal text-neutral-300">{description}</div>
      </div>
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "group/bento shadow-input flex flex-col justify-between space-y-4 rounded-xl bg-white p-4 transition duration-200 hover:shadow-xl dark:bg-black dark:shadow-none cursor-pointer hover:scale-[1.02] min-h-[250px]",
          className,
        )}
      >
        {content}
      </a>
    )
  }

  // Non-linked items have different styling
  return (
    <div
      className={cn(
        "group/bento shadow-input flex flex-col justify-between space-y-4 rounded-xl bg-white p-4 transition duration-200 dark:bg-black dark:shadow-none cursor-default opacity-90 min-h-[250px]",
        className,
      )}
    >
      {content}
    </div>
  )
}
