import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://hawley.tech";

  return {
    title: "Alex Hawley - Web Developer & Partner Solutions Manager",
    description: "Partner Solutions Manager at Vercel. Web developer with 15+ years of experience building applications. Ultrarunner, world traveler, and dinosaur enthusiast.",
    openGraph: {
      type: "website",
      title: "Alex Hawley - Web Developer & Partner Solutions Manager",
      description: "Partner Solutions Manager at Vercel. Web developer with 15+ years of experience building applications. Ultrarunner, world traveler, and dinosaur enthusiast.",
      url: baseUrl,
    },
  };
}

export default function PortfolioPage() {
  return (
    <div className="flex-grow flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
      <div className="w-full max-w-2xl text-left">
        <div className="mb-8">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold mb-4 leading-tight">
            Web developer, ultrarunner, and dinosaur enthusiast.
          </h1>
          <div className="text-lg text-neutral-300 max-w-2xl sm:text-base space-y-2">
            <p>
              I'm Alex — a Chicagoan and Partner Solutions Manager at ▲
              <Link href="https://vercel.com" className="font-bold">
                Vercel
              </Link>
              .
            </p>
            <p>
              I work with engineering teams to build a better web, and I've
              spent 15+ years building applications for businesses of all sizes.
              Beyond the web, I run <em>very</em> long distances, travel across
              the world, and learn about our reptilian ancestors 🦖.
            </p>
          </div>
        </div>

        <div className="flex space-x-5 mt-8">
          <Link
            href="https://github.com/ah100101"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <Github size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ahawley37"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <Linkedin size={24} />
          </Link>
          <Link
            href="https://x.com/hawley_tech"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <svg
              data-testid="geist-icon"
              height="24"
              strokeLinejoin="round"
              style={{ color: "currentColor" }}
              viewBox="0 0 16 16"
              width="24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.60022 2H5.80022L8.78759 6.16842L12.4002 2H14.0002L9.5118 7.17895L14.4002 14H10.2002L7.21285 9.83158L3.60022 14H2.00022L6.48864 8.82105L1.60022 2ZM10.8166 12.8L3.93657 3.2H5.18387L12.0639 12.8H10.8166Z"
                fill="currentColor"
              ></path>
            </svg>
          </Link>
          <Link
            href="mailto:alex@hawley.tech"
            aria-label="Email"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <Mail size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
}
