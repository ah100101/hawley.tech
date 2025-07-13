import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { IconClipboardCopy, IconFileBroken, IconSignature, IconTableColumn } from "@tabler/icons-react"

export default function WorkGrid() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
          href={item.href} // Added href prop to make items clickable
        />
      ))}
    </BentoGrid>
  )
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dot-black/[0.2] border border-transparent bg-neutral-100"></div>
)

const items = [
  {
    title: "Next.js Portfolio Template",
    description: "A modern, minimal portfolio template built with Next.js and Tailwind CSS.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    href: "https://github.com/vercel/next.js/tree/canary/examples/portfolio", // Updated with real GitHub link
  },
  {
    title: "Vercel AI SDK",
    description: "Build AI-powered applications with React, Next.js, Vue, and Svelte.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    href: "https://sdk.vercel.ai", // Updated with real AI SDK link
  },
  {
    title: "Tailwind CSS Components",
    description: "Beautiful UI components built with Tailwind CSS and Headless UI.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    href: "https://tailwindui.com/components", // Updated with real Tailwind UI link
  },
  {
    title: "React Server Components Guide",
    description: "Learn how to build modern React applications with Server Components.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    href: "https://nextjs.org/docs/app/building-your-application/rendering/server-components", // Updated with real Next.js docs link
  },
]
