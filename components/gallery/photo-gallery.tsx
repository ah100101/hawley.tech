"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PhotoGalleryProps {
  allImages: { src: string; alt: string }[]
}

const IMAGES_PER_PAGE = 4 // Fixed 2x2 grid

export default function PhotoGallery({ allImages }: PhotoGalleryProps) {
  const [currentPage, setCurrentPage] = useState(0)

  if (!allImages || allImages.length === 0) {
    return <p className="text-neutral-400 text-center">No images in the gallery yet.</p>
  }

  const totalPages = Math.ceil(allImages.length / IMAGES_PER_PAGE)

  const handlePrevious = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages)
  }

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages)
  }

  const startIndex = currentPage * IMAGES_PER_PAGE
  const endIndex = startIndex + IMAGES_PER_PAGE
  const currentImages = allImages.slice(startIndex, endIndex)

  return (
    <div className="w-full max-w-lg mx-auto">
      {" "}
      {/* Max width for the gallery content */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-6">
        {currentImages.map((image, index) => (
          <div key={index} className="relative aspect-square bg-neutral-800 rounded overflow-hidden group">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
        {/* Fill empty slots if currentImages.length < IMAGES_PER_PAGE to maintain 2x2 grid structure */}
        {Array.from({ length: Math.max(0, IMAGES_PER_PAGE - currentImages.length) }).map((_, i) => (
          <div key={`placeholder-${i}`} className="relative aspect-square bg-neutral-900 rounded"></div>
        ))}
      </div>
      {totalPages > 1 && ( // Only show buttons if there's more than one page
        <div className="flex justify-center space-x-3">
          <button
            onClick={handlePrevious}
            aria-label="Previous page of images"
            className="p-2 text-neutral-500 hover:text-neutral-300 transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-600"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next page of images"
            className="p-2 text-neutral-500 hover:text-neutral-300 transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-600"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  )
}
