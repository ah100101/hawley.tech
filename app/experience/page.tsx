import Image from "next/image"

interface ExperienceItem {
  companyName: string
  logoUrl: string
  yearRange: string
  title: string
}

const experiences: ExperienceItem[] = [
  {
    companyName: "Vercel",
    logoUrl: "/placeholder.svg?width=40&height=40",
    yearRange: "2022 - Present",
    title: "Team Lead, Partner Solutions",
  },
  {
    companyName: "Rightpoint",
    logoUrl: "/placeholder.svg?width=40&height=40",
    yearRange: "2020 - 2022",
    title: "Senior Solutions Architect",
  },
  {
    companyName: "One North Interactive",
    logoUrl: "/placeholder.svg?width=40&height=40",
    yearRange: "2016 - 2020",
    title: "Architect",
  },
  {
    companyName: "Americaneagle.com",
    logoUrl: "/placeholder.svg?width=40&height=40",
    yearRange: "2012 - 2016",
    title: "Architect",
  },
  {
    companyName: "Trading Technologies",
    logoUrl: "/placeholder.svg?width=40&height=40",
    yearRange: "2008 - 2012",
    title: "Software Quality Engineer",
  },
]

export default function ExperiencePage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-8rem)] bg-black text-white font-sans">
      <main className="flex-grow flex flex-col items-center justify-center w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="w-full">
          {/* Hidden H1 for SEO but visually hidden */}
          <h1 className="sr-only font-heading text-3xl sm:text-4xl font-semibold mb-6 sm:mb-8 text-center sm:text-left">
            Experience
          </h1>
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div key={index} className="flex justify-between items-center w-full bg-neutral-900/50 p-4 rounded-xl">
                <div className="flex items-center space-x-5">
                  <Image
                    src={exp.logoUrl.replace("width=40&height=40", "width=56&height=56") || "/placeholder.svg"}
                    alt={`${exp.companyName} logo`}
                    width={56}
                    height={56}
                    className="rounded-full bg-neutral-800"
                  />
                  <div>
                    <h2 className="text-lg font-medium text-white">{exp.companyName}</h2>
                    <p className="text-base text-neutral-400">{exp.title}</p>
                  </div>
                </div>
                <p className="text-base text-neutral-500 text-right min-w-[120px]">{exp.yearRange}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
