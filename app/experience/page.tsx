import Image from "next/image";
import type { Metadata } from "next";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://hawley.tech";

  return {
    title: "Experience - Alex Hawley",
    description:
      "Professional experience at Vercel, Rightpoint, One North Interactive, and more.",
    openGraph: {
      type: "website",
      title: "Experience - Alex Hawley",
      description:
        "Professional experience at Vercel, Rightpoint, One North Interactive, and more.",
      url: `${baseUrl}/experience`,
    },
  };
}

interface ExperienceItem {
  companyName: string;
  logoUrl?: string;
  yearRange: string;
  title: string;
  icon?: React.ReactNode;
}

const experiences: ExperienceItem[] = [
  {
    companyName: "Vercel",
    icon: (
      <svg
        aria-label="Vercel logomark"
        height="16"
        role="img"
        viewBox="0 0 74 64"
      >
        <path
          d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
          fill="white"
        ></path>
      </svg>
    ),
    yearRange: "2022 - Present",
    title: "Senior Manager, Partner Solutions Engineering",
  },
  {
    companyName: "Rightpoint",
    yearRange: "2020 - 2022",
    title: "Senior Solutions Architect",
    icon: (
      <svg viewBox="0 75 300 150" width="28" height="28">
        <path
          d="M201.6,40.8l110.8,111.4l-100.5,0L100.7,40.8H201.6z M62.8,201L0,263.6l100.2,0L212,152.2h-32.9 C135.1,152.2,93.7,169.8,62.8,201z"
          fill="#FF555F"
        ></path>
      </svg>
    ),
  },
  {
    companyName: "One North Interactive",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M18.0045 0V5.08959C23.1167 6.03801 26.9815 10.5267 26.9815 15.9348C26.9815 22.0235 22.064 26.9683 16 26.9683C9.93601 26.9683 5.01127 22.0235 5.01127 15.9348C5.01127 10.5339 8.88328 6.03801 13.9883 5.08959V0C6.10725 0.991855 0 7.74661 0 15.9348C0 24.8036 7.15998 32 16 32C24.84 32 32 24.8109 32 15.9348C32 7.74661 25.8927 0.991855 18.0045 0Z"
          fill="white"
        ></path>
      </svg>
    ),
    yearRange: "2016 - 2020",
    title: "Architect",
  },
  {
    companyName: "Americaneagle.com",
    logoUrl: "/americaneagle-com.png",
    yearRange: "2012 - 2016",
    title: "Architect",
  },
  {
    companyName: "Trading Technologies",
    yearRange: "2008 - 2012",
    title: "Software Quality Engineer",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="66 356 75 75"
      >
        <g>
          <polygon
            fill="#91D5E4"
            points="110.5,366.3 105.1,360.9 72.8,393.2 78.2,398.6  "
          />
          <polygon
            fill="#004964"
            points="88.9,409.3 105.1,425.5 111.9,418.7 95.7,402.5  "
          />
          <polygon
            fill="#0095D6"
            points="122.4,408.1 137.3,393.2 113.1,369 98.2,383.9  "
          />
          <polygon
            fill="#38929A"
            points="95.7,386.4 80.8,401.3 86.2,406.7 95.6,397.3 114.4,416.1 119.9,410.7  "
          />
        </g>
      </svg>
    ),
  },
];

export default function ExperiencePage() {
  return (
    <div className="flex-grow flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
      <div className="w-full max-w-3xl">
        <h1 className="sr-only font-heading text-center">Experience</h1>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex justify-between items-center w-full bg-neutral-900/50 p-4 rounded-xl"
            >
              <div className="flex items-center space-x-5">
                {exp.icon && exp.icon}
                {exp.logoUrl && (
                  <Image
                    src={exp.logoUrl.replace(
                      "width=40&height=40",
                      "width=56&height=56"
                    )}
                    alt={`${exp.companyName} logo`}
                    width={32}
                    height={32}
                    className="rounded-full bg-white"
                  />
                )}
                <div>
                  <h2 className="text-md md:text-lg font-medium text-white">
                    {exp.companyName}
                  </h2>
                  <p className="text-sm md:text-base text-neutral-400">
                    {exp.title}
                  </p>
                </div>
              </div>
              <p className="text-base text-neutral-500 text-right min-w-[120px]">
                {exp.yearRange}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
