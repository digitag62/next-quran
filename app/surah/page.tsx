import { SurahList } from "@/components/surah-list";

const SurahPage = async () => {
  const response = await fetch(`${process.env.QURAN_ENDPOINT}`);
  const surah = await response.json();

  return (
    <div className="layout py-10">
      <SurahList surah={surah} />
    </div>
  );
};

export default SurahPage;
