import WorkGrid from "@/components/work-grid"

interface WorkItem {
  id: string
  type: "Blog Post" | "Video" | "Article" | "Application"
  title: string
  summary: string
  imageUrl: string
  link: string
}

const workItems: WorkItem[] = [
  {
    id: "app-project-manager",
    type: "Application",
    title: "Minimalist Project Manager",
    summary:
      "A clean and efficient project management tool designed for individuals and small teams, focusing on simplicity and core features.",
    imageUrl: "/placeholder.svg?width=400&height=225",
    link: "#",
  },
  {
    id: "blog-server-components",
    type: "Blog Post",
    title: "Understanding Next.js Server Components",
    summary:
      "A deep dive into how Server Components work in Next.js, their benefits, and best practices for implementation.",
    imageUrl: "/placeholder.svg?width=400&height=225",
    link: "#",
  },
  {
    id: "video-tailwind-tricks",
    type: "Video",
    title: "Advanced Tailwind CSS Tricks",
    summary:
      "A tutorial showcasing lesser-known Tailwind CSS techniques to build complex UIs faster and more efficiently.",
    imageUrl: "/placeholder.svg?width=400&height=225",
    link: "#",
  },
  {
    id: "article-design-systems",
    type: "Article",
    title: "The Importance of Design Systems",
    summary:
      "An article exploring why design systems are crucial for modern development workflows and how to get started.",
    imageUrl: "/placeholder.svg?width=400&height=225",
    link: "#",
  },
  {
    id: "app-portfolio-v2",
    type: "Application",
    title: "Personal Portfolio Website v2",
    summary: "The very portfolio you are looking at, built with Next.js, Tailwind CSS, and a focus on minimalism.",
    imageUrl: "/placeholder.svg?width=400&height=225",
    link: "#",
  },
]

function WorkTypeBadge({ type }: { type: WorkItem["type"] }) {
  let bgColor = "bg-neutral-700"
  if (type === "Application") bgColor = "bg-sky-700"
  else if (type === "Blog Post") bgColor = "bg-emerald-700"
  else if (type === "Video") bgColor = "bg-rose-700"
  else if (type === "Article") bgColor = "bg-amber-700"

  return (
    <span className={`inline-block px-2 py-0.5 text-xs font-medium text-white rounded-full ${bgColor}`}>{type}</span>
  )
}

export default function WorkPage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-8rem)] bg-black text-white font-sans">
      <main className="flex-grow flex flex-col items-center justify-center w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="w-full">
          {/* Hidden H1 for SEO but visually hidden */}
          <h1 className="sr-only font-heading text-3xl sm:text-4xl font-semibold mb-10 sm:mb-12 text-center sm:text-left">
            My Work
          </h1>

          {/* Work Grid Section */}
          <div className="mb-16">
            <WorkGrid />
          </div>
        </div>
      </main>
    </div>
  )
}
