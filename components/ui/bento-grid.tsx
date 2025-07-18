import type React from "react"
import { cn } from "@/lib/utils"
import { IconExternalLink, IconCalendar } from "@tabler/icons-react"

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div className={cn("mx-auto grid max-w-8xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3", className)}>
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  href,
  event,
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
  href?: string
  event?: {
    name: string
    date: string
  }
}) => {
  // Wrap content in a link if href is provided
  const content = (
    <>
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {/* Added flex container for icon and external link indicator */}
        <div className="flex items-center justify-between mb-2">
          {icon}
          {/* Show external link icon only for linked items */}
          {href && (
            <IconExternalLink className="h-4 w-4 text-neutral-400 opacity-60 group-hover/bento:opacity-100 transition-opacity" />
          )}
        </div>
        <div className="mt-2 mb-2 font-sans font-bold text-neutral-200">{title}</div>
        {/* Added event information display */}
        {event && (
          <div className="flex items-center gap-1 mb-2 text-xs text-neutral-400">
            <IconCalendar className="h-3 w-3" />
            <span>
              {event.name} • {event.date}
            </span>
          </div>
        )}
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
          "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl bg-white p-4 transition duration-200 hover:shadow-xl dark:bg-black dark:shadow-none cursor-pointer hover:scale-[1.02]",
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
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl bg-white p-4 transition duration-200 dark:bg-black dark:shadow-none cursor-default opacity-90",
        className,
      )}
    >
      {content}
    </div>
  )
}
