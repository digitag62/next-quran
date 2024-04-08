"use client";

import React, { useEffect, useState } from "react";

import { MoveUp } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const ScrollUp = () => {
  const [showScroll, setShowScroll] = useState(false);
  const isBrowser = () => typeof window !== 'undefined'; 

  const scroll = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 200) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);

    return () => {
      window.addEventListener("scroll", checkScrollTop);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed right-0 bottom-0 p-10",
        showScroll ? "visible" : "invisible"
      )}
    >
      <Button size="sm" variant="outline" onClick={scroll}>
        <MoveUp />
      </Button>
    </div>
  );
};

export default ScrollUp;
