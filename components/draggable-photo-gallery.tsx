"use client"; // This component now uses a hook, so it must be a client component

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/components/ui/use-mobile";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

const BLUR_DATA_URL =
  "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";

export default function DraggablePhotoGallery() {
  const isMobile = useIsMobile();

  const items = [
    {
      title: "Antarctica",
      description: "At Port Lockroy on day 7 of the expedition",
      date: "Nov. '24",
      image:
        "https://5cjexcwufz95alg5.public.blob.vercel-storage.com/aph/antarctica-2024",
      className: "absolute top-[35%] left-[30%] rotate-[4deg]",
    },
    {
      title: "Chicago",
      description: "",
      date: "Nov. '18",
      image: "https://5cjexcwufz95alg5.public.blob.vercel-storage.com/aph/home",
      className: "absolute top-[35%] left-[30%] rotate-[4deg]",
    },
    {
      title: "Kinzie",
      description: "50% Boxer / 50% rocket ship",
      date: "Oct. '23",
      image:
        "https://5cjexcwufz95alg5.public.blob.vercel-storage.com/aph/kinzie-2023",
      className: "absolute top-[50%] left-[25%] rotate-[-7deg]",
    },
    {
      title: "Kilimanjaro",
      description: "Early morning at the end of the Lemosho route",
      date: "Feb '20",
      image:
        "https://5cjexcwufz95alg5.public.blob.vercel-storage.com/aph/kilimanjaro-2-2020",
      className: "absolute top-[20%] left-[40%] rotate-[8deg]",
    },
    {
      title: "Chicago Marathon '21",
      description: "My last marathon, it was hot (~3:33:00)",
      date: "Oct. '21",
      image:
        "https://5cjexcwufz95alg5.public.blob.vercel-storage.com/aph/last-marathon",
      className: "absolute top-[45%] left-[55%] rotate-[10deg]",
    },
    {
      title: "Chicago Marathon '09",
      description: "My first, very slow, marathon (~4:45:00)",
      date: "Oct. '09",
      image:
        "https://5cjexcwufz95alg5.public.blob.vercel-storage.com/first-marathon",
      className: "absolute top-[30%] right-[35%] rotate-[2deg]",
    },
    {
      title: "Ireland",
      description: "The Cliffs of Moher",
      date: "Nov. '19",
      image:
        "https://5cjexcwufz95alg5.public.blob.vercel-storage.com/aph/ireland-19",
      className: "absolute top-[55%] left-[45%] rotate-[-7deg]",
    },
    {
      title: "Antarctica",
      description: "Near Cuverville Island",
      date: "Nov. '24",
      image:
        "https://5cjexcwufz95alg5.public.blob.vercel-storage.com/aph/antarctica-cuverville-island",
      className: "absolute top-[35%] left-[30%] rotate-[4deg]",
    },
    {
      title: "Komodo",
      description: "Komodo National Park",
      date: "Nov. '25",
      image:
        "https://5cjexcwufz95alg5.public.blob.vercel-storage.com/aph/komodo-25",
      className: "absolute top-[35%] left-[30%] rotate-[4deg]",
    },
    {
      title: "Indonisha",
      description: "SCUBA trip to Komodo and Raja Ampat",
      date: "Nov. '25",
      image:
        "https://5cjexcwufz95alg5.public.blob.vercel-storage.com/aph/indonisha-25",
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
              src={item.image}
              alt={item.title}
              fill
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              className="object-cover"
            />
          </div>
          <div className="mt-4 flex flex-col w-full justify-between font-handwriting text-neutral-700">
            <div className="flex justify-between">
              <h3 className="text-xl">{item.title}</h3>
              <p className="text-lg font-normal">{item.date}</p>
            </div>
            <p className="text-base font-normal">{item.description}</p>
          </div>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
