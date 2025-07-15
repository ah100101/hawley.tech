"use client"; // This component now uses a hook, so it must be a client component

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/components/ui/use-mobile";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

// A tiny, transparent GIF for blurring
const BLUR_DATA_URL =
  "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";

export default function DraggablePhotoGallery() {
  const isMobile = useIsMobile();

  const items = [
    {
      title: "Antarctica",
      date: "November 2024",
      image:
        "https://5cjexcwufz95alg5.public.blob.vercel-storage.com/aph/antarctica-2024",
      className: "absolute top-[35%] left-[30%] rotate-[4deg]",
    },
    {
      title: "Kinzie",
      date: "October 2023",
      image:
        "https://5cjexcwufz95alg5.public.blob.vercel-storage.com/aph/kinzie-2023",
      className: "absolute top-[50%] left-[25%] rotate-[-7deg]",
    },
    {
      title: "Kilimanjaro",
      date: "February 2020",
      image:
        "https://5cjexcwufz95alg5.public.blob.vercel-storage.com/aph/kilimanjaro-2-2020",
      className: "absolute top-[20%] left-[40%] rotate-[8deg]",
    },
    {
      title: "Japan",
      date: "April 2018",
      image:
        "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-[45%] left-[55%] rotate-[10deg]",
    },
    {
      title: "Norway",
      date: "August 2019",
      image:
        "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-[30%] right-[35%] rotate-[2deg]",
    },
    {
      title: "New Zealand",
      date: "February 2020",
      image:
        "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-[55%] left-[45%] rotate-[-7deg]",
    },
    {
      title: "Canada",
      date: "September 2021",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-[35%] left-[30%] rotate-[4deg]",
    },
  ];

  return (
    <DraggableCardContainer
      className={cn(
        "relative flex items-center justify-center rounded-lg",
        isMobile ? "flex-col space-y-8 py-8" : "h-[75vh] w-full max-w-5xl"
      )}
    >
      {items.map((item, index) => (
        <DraggableCardBody
          key={index}
          className={isMobile ? "" : item.className}
          drag={!isMobile}
        >
          <div className="pointer-events-none relative z-10 h-80 w-full">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              fill
              style={{ objectFit: "cover" }}
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
          </div>
          <div className="mt-4 flex w-full justify-between font-handwriting text-neutral-700">
            <h3 className="text-xl">{item.title}</h3>
            <p className="text-lg font-normal">{item.date}</p>
          </div>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
