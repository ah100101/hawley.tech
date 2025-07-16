import WorkGrid from "@/components/work-grid"
import { getOGImage } from "@/lib/og-image"
import { IconClipboardCopy, IconFileBroken, IconSignature, IconTableColumn, IconMicrophone } from "@tabler/icons-react"

// Define the base items with fallback images
const baseItems = [
  {
    title: "Guide: How to Optimize Next.js + Sitecore JSS",
    description: "A performance and usage guide for Next.js and Sitecore JSS",
    fallbackImage: "https://5cjexcwufz95alg5.public.blob.vercel-storage.com/aph/how-to-optimize-sitecore-nextjs.png",
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    href: "https://vercel.com/guides/how-to-optimize-next.js-sitecore-jss",
  },
  {
    title: "Community Webinar: Next.js + Sitecore JSS",
    description: "Step-by-step optimization walkthrough",
    fallbackImage: "https://5cjexcwufz95alg5.public.blob.vercel-storage.com/aph/community-webinar-logo",
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    href: "https://www.youtube.com/watch?v=DohTSti7kew&t=4s",
  },
  {
    title: "Workshop: Next.js + Optimizely Feature Experimentation",
    description: "Optimizely best practices with Next.js",
    fallbackImage: "https://5cjexcwufz95alg5.public.blob.vercel-storage.com/aph/community-webinar-logo",
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    href: "https://vercel.com/resources/workshop-fast-and-safe-experimentation",
  },
  {
    title: "Template: Next.js + Optimizely Experimentation",
    description: "A best practice template that integrates Next.js + Optimizely for feature experimentation",
    fallbackImage:
      "https://5cjexcwufz95alg5.public.blob.vercel-storage.com/aph/nextjs-optimizely-experimentation-template",
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    href: "https://github.com/vercel/nextjs-optimizely-experimentation",
  },
  // Example of non-linked work item
  {
    title: "React Miami Conference Talk",
    description: "Presented on modern React patterns and performance optimization techniques to 500+ developers",
    fallbackImage: "/placeholder.svg?width=400&height=225",
    className: "md:col-span-1",
    icon: <IconMicrophone className="h-4 w-4 text-neutral-500" />,
    // No href - this was an in-person talk that wasn't recorded
  },
]

export default async function WorkPage() {
  // Fetch OG images only for items that have URLs
  const itemsWithOGImages = await Promise.all(
    baseItems.map(async (item) => {
      let imageUrl = item.fallbackImage

      // Only fetch OG image if item has a URL
      if (item.href) {
        const ogImage = await getOGImage(item.href)
        imageUrl = ogImage || item.fallbackImage
      }

      return {
        ...item,
        imageUrl,
      }
    }),
  )

  return (
    <div className="flex flex-col min-h-[calc(100vh-8rem)] bg-black text-white font-sans">
      <main className="flex-grow flex flex-col items-center justify-center w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="w-full">
          <h1 className="sr-only">My Work</h1>
          <div className="mb-16">
            <WorkGrid items={itemsWithOGImages} />
          </div>
        </div>
      </main>
    </div>
  )
}
