import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const SurahPage = async () => {
  const response = await fetch("https://quran-api-seven.vercel.app/surah");
  const surah = await response.json();

  return (
    <div className="container">
      <h1 className="text-3xl font-semibold py-5">Surah</h1>

      <Accordion type="single" collapsible>
        {surah.data.map((item: any, index: any) => (
          <AccordionItem key={index} value={index + 1}>
            <AccordionTrigger>{item.name.transliteration.id}</AccordionTrigger>
            <AccordionContent className="">
              <div className="flex flex-col gap-6 text-justify">
                <h1>
                  {item.name.translation.id} - ({item.revelation.id}{" "}
                  {item.numberOfVerses} Ayat)
                </h1>
                {item.tafsir.id}
                <Link href={"/surah/" + item.number}>
                  <Button className="w-full">Read More</Button>
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default SurahPage;
