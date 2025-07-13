import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function PortfolioPage() {
  return (
    // This div is the root of the page content.
    // It needs to grow to fill its parent (the motion.div from template.tsx)
    // and then center its own child content.
    <div className="flex-grow flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
      {/* This inner div contains the actual content to be centered */}
      <div className="w-full max-w-3xl text-left">
        <div className="mb-8">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold mb-4 leading-tight">
            Web developer, ultrarunner, and dinosaur enthusiast.
          </h1>
          <p className="text-lg text-neutral-300 max-w-2xl sm:text-base">
            {
              "👋 I\'m Alex, a web developer from Chicago and Partner Solutions Manager at ▲ Vercel. I work with engineering teams to build a better web, drawing on 15+ years of experience building apps from small to enterprise businesses. I love crafting great digital experiences, running very long distances, and learning about our reptilian ancestors 🦖"
            }
          </p>
        </div>

        <div className="flex space-x-5 mt-8">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <Twitter size={24} />
          </a>
          <a
            href="mailto:your.email@example.com"
            aria-label="Email"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </div>
  )
}
