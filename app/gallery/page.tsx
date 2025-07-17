import DraggablePhotoGallery from "@/components/draggable-photo-gallery";

export const dynamic = "force-static";

export default function GalleryPage() {
  return (
    <div className="flex-grow flex items-center justify-center w-full p-4">
      <DraggablePhotoGallery />
    </div>
  );
}
