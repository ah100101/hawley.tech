import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";

export default function WorkGrid() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[26rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
          href={item.href}
        />
      ))}
    </BentoGrid>
  );
}

const WorkBanner = ({ src, alt }: { src: string; alt: string }) => (
  <div className="flex flex-1 w-full h-full rounded-xl border border-white">
    <Image
      alt={alt}
      width="100"
      height="100"
      src={src}
      className="object-cover object-center w-full h-full rounded-xl"
    />
  </div>
);

const items = [
  {
    title: "Guide: How to Optimize Next.js + Sitecore JSS",
    description: "A performance and usage guide for Next.js and Sitecore JSS",
    header: (
      <WorkBanner
        alt="How to optimize Sitecore and Next.js banner"
        src="https://5cjexcwufz95alg5.public.blob.vercel-storage.com/aph/how-to-optimize-sitecore-nextjs.png"
      />
    ),
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    href: "https://vercel.com/guides/how-to-optimize-next.js-sitecore-jss",
  },
  {
    title: "Community Webinar: Next.js + Sitecore JSS",
    description: "Step-by-step optimization walkthrough",
    header: (
      <WorkBanner
        src="https://5cjexcwufz95alg5.public.blob.vercel-storage.com/aph/community-webinar-logo"
        alt="Vercel Community webinar video"
      />
    ),
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    href: "https://www.youtube.com/watch?v=DohTSti7kew&t=4s",
  },
  {
    title: "Workshop: Fast & Safe Experimentation with Next.js + Optimizely",
    description:
      "Workshop and best practice guide on how to integrate Optimizely Feature Experimentation with Next.js",
    header: (
      <WorkBanner
        src="https://5cjexcwufz95alg5.public.blob.vercel-storage.com/aph/community-webinar-logo"
        alt="Next.js + Optimizely workshop banner"
      />
    ),
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    href: "https://vercel.com/resources/workshop-fast-and-safe-experimentation",
  },
  {
    title: "Template: Next.js + Optimizely Experimentation",
    description:
      "A best practice template that integrates Next.js + Optimizely for feature experimentation",
    header: (
      <WorkBanner
        src="https://5cjexcwufz95alg5.public.blob.vercel-storage.com/aph/nextjs-optimizely-experimentation-template"
        alt="Next.js + Optimizely template banner"
      />
    ),
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    href: "https://github.com/vercel/nextjs-optimizely-experimentation",
  },
];
