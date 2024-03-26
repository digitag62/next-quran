import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="container">
      {/* Header */}
      <div className="w-full flex justify-between gap-4 py-12">
        <div className="text-2xl">
          <Link className="font-bold hover:text-emerald-500" href="/">
            Al-Quran
          </Link>
        </div>
        <div className="flex gap-4 text-lg">
          <Link className="hover:text-emerald-500" href="/surah">
            Surah
          </Link>
          <Link className="hover:text-emerald-500" href="/sign-in">
            Sign in
          </Link>
        </div>
      </div>

      {/* Hero section */}
      <div className="w-full flex items-center">
        {/* Hero text */}
        <div className="w-full md:w-1/2">
          <h1 className="font-bold text-3xl text-slate-800">
            Learn and Recite Quran{" "}
            <span className="font-normal">Once Everyday</span>
          </h1>
          <p className="text-muted-foreground">
            Read and learn Quran from your gadget.
          </p>
          <Button variant="default" className="mt-3">
            Get Started
          </Button>
        </div>

        {/* Hero image */}
        <div className="invisible md:visible md:w-1/2">
          <Image
            src="/book.gif"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
    </section>
  );
}
