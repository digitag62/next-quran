"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "./ui/button";

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
      <div className="flex justify-between items-center py-5 layout">
        {pathname.includes("surah/") ? (
          <Link
            href="/surah"
            className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
          >
            <ChevronLeft className="w-5 h-5" />
          </Link>
        ) : null}
        <Link className="font-semibold text-xl hover:text-emerald-500" href="/">
          Al-Quran
        </Link>
      </div>
    </div>
  );
};

export default Header;
