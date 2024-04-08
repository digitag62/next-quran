import { SurahList } from "@/components/surah-list";

const SurahPage = async () => {
  const response = await fetch("https://quran-api-seven.vercel.app/surah");
  const surah = await response.json();

  return (
    <div className="layout py-10">
      <SurahList surah={surah} />
    </div>
  );
};

export default SurahPage;
