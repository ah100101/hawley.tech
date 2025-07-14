import Image from "next/image";
import Footer from "@/components/layout/footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-8rem)] bg-black text-white font-sans">
      <main className="flex-grow flex items-center justify-center w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12 items-center w-full">
          <div className="md:col-span-1 mb-8 md:mb-0 flex justify-center md:justify-start">
            <Image
              src="/placeholder.svg?width=250&height=250"
              alt="Alex Hawley - Headshot"
              width={250}
              height={250}
              className="rounded-full object-cover aspect-square"
              priority
            />
          </div>
          <div className="md:col-span-2 text-center md:text-left">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
              Hello, I'm [Your Name].
            </h1>
            <div className="space-y-4 text-neutral-300 text-base sm:text-lg leading-relaxed">
              <p>
                This is where your longer form summary will go. You can talk
                about your journey into web development, your passions,
                philosophies on design and technology, and what drives you. Keep
                it engaging and authentic.
              </p>
              <p>
                Perhaps mention key skills or areas of expertise you want to
                highlight, or a particular approach you take to your work. This
                space is flexible for you to share more about yourself beyond
                just your work experience and projects.
              </p>
              <p>
                Consider what makes you unique as a developer and a person. What
                are you looking for in your next opportunity or collaboration?
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
