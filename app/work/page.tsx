import WorkGrid from "@/components/work-grid"
import { getOGImage } from "@/lib/og-image"
import { IconClipboardCopy, IconFileBroken, IconSignature, IconTableColumn, IconMicrophone } from "@tabler/icons-react"

export const dynamic = "force-static"

const workItems = [
  {
    title: "Guide: How to Optimize Next.js + Sitecore JSS",
    description: "A performance and usage guide for Next.js and Sitecore JSS",
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    href: "https://vercel.com/guides/how-to-optimize-next.js-sitecore-jss",
  },
  {
    title: "Community Webinar: Next.js + Sitecore JSS",
    description: "Step-by-step optimization walkthrough",
    imageOverride: "https://5cjexcwufz95alg5.public.blob.vercel-storage.com/aph/community-webinar-logo",
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    href: "https://www.youtube.com/watch?v=DohTSti7kew&t=4s",
  },
  {
    title: "Workshop: Next.js + Optimizely Feature Experimentation",
    description: "Recording of the presentation from Vercel Ship '24",
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    href: "https://vercel.com/resources/workshop-fast-and-safe-experimentation",
    imageOverride: "https://5cjexcwufz95alg5.public.blob.vercel-storage.com/aph/vercel-ship-24-headshot",
    event: {
      name: "Vercel Ship",
      date: "October 2024",
    },
  },
  {
    title: "Build a better storefront: Next.js Commerce for SFCC",
    description: "Online workshop for teams building with Salesforce Commerce Cloud (SFCC)",
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    href: "https://vercel.com/go/sfcc-next-js-template-workshop",
  },
  {
    title: "Template: Next.js + Optimizely Experimentation",
    description: "A best practice template that integrates Next.js + Optimizely for feature experimentation",
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    href: "https://github.com/vercel/nextjs-optimizely-experimentation",
  },
  {
    title: "Sitecore Symposium: How to achieve 90+ CWV with XM Cloud and Vercel",
    description: "Sitecore Symposium talk on how Avanade improved Core Web Vitals with Next.js & Vercel",
    className: "md:col-span-1",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    imageOverride: "https://5cjexcwufz95alg5.public.blob.vercel-storage.com/aph/vercel-logo",
    event: {
      name: "Sitecore Symposium",
      date: "September 2024",
    },
  },
  {
    title: "How to Integrate Contentful and Next.js App Router",
    description: "A how to get started guide on integrating Contentful with Next.js 13",
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    href: "https://www.contentful.com/blog/integrate-contentful-next-js-app-router/",
  },
  // New test item with event
  {
    title: "Modern React Patterns for Enterprise Applications",
    description:
      "Deep dive into advanced React patterns, performance optimization, and scalable architecture for large-scale applications",
    className: "md:col-span-1",
    icon: <IconMicrophone className="h-4 w-4 text-neutral-500" />,
    imageOverride: "/placeholder.svg?width=400&height=225",
    event: {
      name: "React Miami Conference",
      date: "April 2024",
    },
    // No href - this was an in-person talk
  },
]

export default async function WorkPage() {
  const itemsWithOGImages = await Promise.all(
    workItems.map(async (item) => {
      let imageUrl = item.imageOverride || ""

      if (item.href && !item.imageOverride) {
        const ogImage = await getOGImage(item.href)
        imageUrl = ogImage || ""
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
