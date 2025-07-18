import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-static";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-8rem)] bg-black text-white font-sans">
      <main className="flex-grow flex items-center justify-center w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12 items-center w-full">
          <div className="md:col-span-1 mb-8 md:mb-0 flex justify-center md:justify-start">
            <Image
              src="https://5cjexcwufz95alg5.public.blob.vercel-storage.com/aph/alex-headshot"
              alt="Alex Hawley - Headshot"
              width={250}
              height={250}
              className="rounded-lg object-cover aspect-square border-2 border-white"
              priority
            />
          </div>
          <div className="md:col-span-2 text-center md:text-left">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
              Hi! I'm Alex.
            </h1>
            <div className="space-y-4 text-neutral-300 text-base sm:text-lg leading-relaxed">
              <p>
                I'm a Senior Manager of Partner Solutions Engineering at{" "}
                <Link href="https://vercel.com" className="font-bold">
                  Vercel
                </Link>
                . I collaborate with our partners to build <em>the best</em>{" "}
                experiences on the web.
              </p>
              <p>
                Before Vercel, I worked as a Web Developer, Software Quality
                Engineer, Tech Lead, Engineering Manager, and Solutions
                Architect at digital agencies in Chicago. For well over a
                decade, I shipped applications for businesses ranging from local
                moving companies to Fortune 500 enterprises.
              </p>
              <p>
                Shipping is great, but what I've valued the most is
                collaborating with teams to solve hard problems - especially
                when the path isn't easy.
              </p>
              <p>
                Similarily, outside of web development, I run long distances and
                have finished more than 35 marathons and ultramarathons. I've
                dabbled in high altitude treks including reaching the summit of
                Mount Kilimanjaro. Closer to home, I constantly walk my high
                energy Boxer/Lab, Kinzie, and take advantage of Chicago's{" "}
                <em>superior</em> food scene. I never enjoy ketchup on a hotdog.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
