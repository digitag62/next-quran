"use client";

import React, { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export const SurahList = ({ surah }: any) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value.toLowerCase());

  const filterSurah = (data: any) =>
    data.filter((el: any) =>
      el.name.transliteration.id.toLowerCase().includes(query)
    );

  const filteredSurah = filterSurah(surah.data);

  return (
    <div className="flex flex-col gap-2 space-y-4">
      <div className="flex flex-col md:flex-row justify-between">
        <h1 className="font-semibold py-2 text-lg">Surah</h1>
        <Input
          type="text"
          placeholder="Search..."
          className="md:w-1/3"
          onChange={handleChange}
        />
      </div>
      <div className="pb-20 rounded-md">
        <div className="flex flex-col gap-2">
          {filteredSurah?.map((item: any) => (
            <Link
              key={item.number}
              href={`/surah/${item.number}`}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "flex justify-between py-5"
              )}
            >
              {item.number}. {item.name.transliteration.id}
              <MoveRight className="text-muted-foreground h-5 w-5" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
