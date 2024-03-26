import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SurahPage = async () => {
  const response = await fetch("https://quran-api-seven.vercel.app/surah");
  const surah = await response.json();

  return (
    <div>
      <h1 className="text-3xl font-semibold py-5">Surah</h1>

      <Accordion type="single" collapsible>
        {surah.data.map((item: any, index: any) => (
          <AccordionItem value={index + 1}>
            <AccordionTrigger>{item.name.transliteration.id}</AccordionTrigger>
            <AccordionContent className="">{item.tafsir.id}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default SurahPage;
