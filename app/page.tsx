import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="layout w-full h-[calc(100vh-80px)] flex items-center">
      {/* Hero text */}
      <div className="w-full">
        <h1 className="font-bold text-3xl text-slate-800">
          Learn and Recite Quran{" "}
          <span className="font-normal">Once Everyday</span>
        </h1>
        <p className="text-muted-foreground">
          Read and learn Quran from your gadget.
        </p>
        <Link href="/surah">
          <Button variant="default" size="sm" className="mt-3">
            Get Started
            <MoveRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>

      {/* Hero image */}
      <div className="invisible w-0 flex justify-end md:visible md:w-1/2">
        {/* <Image src="/book.gif" width={500} height={500} alt="Picture of the author" unoptimized /> */}
      </div>
    </div>
  );
}
