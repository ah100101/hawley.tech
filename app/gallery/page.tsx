import DraggablePhotoGallery from "@/components/draggable-photo-gallery";
import type { Metadata } from "next";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://hawley.tech";

  return {
    title: "Gallery - Alex Hawley",
    description: "Photo gallery showcasing travel, running, and adventure photography from around the world.",
    openGraph: {
      type: "website",
      title: "Gallery - Alex Hawley",
      description: "Photo gallery showcasing travel, running, and adventure photography from around the world.",
      url: `${baseUrl}/gallery`,
    },
  };
}

export default function GalleryPage() {
  return (
    <div className="flex-grow flex items-center justify-center w-full p-4">
      <DraggablePhotoGallery />
    </div>
  );
}
