import WorkGrid from "@/components/work-grid";
import { getOGImage } from "@/lib/og-image";
import type { WorkItemType } from "@/components/ui/bento-grid";
import type { Metadata } from "next";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://hawley.tech";

  return {
    title: "Work - Alex Hawley",
    description:
      "Guides, templates, talks, and webinars on Next.js, Vercel, and modern web development best practices.",
    openGraph: {
      type: "website",
      title: "Work - Alex Hawley",
      description:
        "Guides, templates, talks, and webinars on Next.js, Vercel, and modern web development best practices.",
      url: `${baseUrl}/work`,
    },
  };
}

interface WorkItemData {
  title: string;
  description?: string;
  className: string;
  type: WorkItemType;
  href: string;
  imageOverride?: string;
  eventName?: string;
  date?: string;
}

const workItems: WorkItemData[] = [
  {
    title: "How to Optimize Next.js + Sitecore JSS",
    description: "A performance and usage guide for Next.js and Sitecore JSS",
    className: "md:col-span-2",
    type: "guide",
    href: "https://vercel.com/guides/how-to-optimize-next.js-sitecore-jss",
  },
  {
    title: "Step-by-Step Optimization for Next.js + Sitecore JSS",
    imageOverride:
      "https://5cjexcwufz95alg5.public.blob.vercel-storage.com/aph/community-webinar-logo",
    className: "md:col-span-1",
    type: "webinar",
    href: "https://www.youtube.com/watch?v=DohTSti7kew&t=4s",
    eventName: "Community Webinar",
    date: "Apr. 2024",
  },
  {
    title: "Fast and Safe Experimentation with Next.js + Optimizely",
    description: "Webinar recording of the presentation from Vercel Ship",
    className: "md:col-span-1",
    type: "talk",
    href: "https://vercel.com/resources/workshop-fast-and-safe-experimentation",
    imageOverride:
      "https://5cjexcwufz95alg5.public.blob.vercel-storage.com/aph/vercel-ship-24-headshot",
    eventName: "Vercel Ship",
    date: "Oct. 2024",
  },
  {
    title: "Build a better storefront: Next.js Commerce for SFCC",
    description:
      "Online workshop for teams building with Salesforce Commerce Cloud (SFCC)",
    className: "md:col-span-2",
    type: "webinar",
    href: "https://vercel.com/go/sfcc-next-js-template-workshop",
    eventName: "Webinar",
    date: "Jun. 2024",
  },
  {
    title: "Next.js + Optimizely Experimentation",
    description:
      "A best practice template that integrates Next.js + Optimizely for feature experimentation",
    className: "md:col-span-3",
    type: "template",
    href: "https://github.com/vercel/nextjs-optimizely-experimentation",
  },
  {
    title: "Improve Core Web Vitals with Vercel & XM Cloud",
    description:
      "Partner talk with Avanade on improving CWV with Next.js & Vercel",
    className: "md:col-span-1",
    type: "talk",
    href: "https://vercel.com/resources/partner-talk-improve-core-web-vitals",
    imageOverride:
      "https://5cjexcwufz95alg5.public.blob.vercel-storage.com/aph/vercel-logo",
    eventName: "Sitecore Symposium",
    date: "Oct. 2024",
  },
  {
    title: "How to Integrate Contentful and Next.js App Router",
    description: "A beginner's guide on integrating Contentful with Next.js 13",
    className: "md:col-span-2",
    type: "guide",
    href: "https://www.contentful.com/blog/integrate-contentful-next-js-app-router/",
  },
];

export default async function WorkPage() {
  const itemsWithOGImages = await Promise.all(
    workItems.map(async (item) => {
      let imageUrl = item.imageOverride || "";

      if (item.href && !item.imageOverride) {
        const ogImage = await getOGImage(item.href);
        imageUrl = ogImage || "";
      }

      return {
        ...item,
        imageUrl,
      };
    })
  );

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
  );
}
