import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";

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
              <Link
                href="https://vercel.com"
                className="font-bold"
                target="_blank"
              >
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
          <a
            href="https://github.com/ah100101"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ahawley37"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://x.com/hawley_tech"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <Twitter size={24} />
          </a>
          <a
            href="mailto:alex@hawley.tech"
            aria-label="Email"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}
