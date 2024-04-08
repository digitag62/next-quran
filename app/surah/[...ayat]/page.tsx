interface SurahDetailProps {
  params: {
    ayat: number | string;
  };
}

const SurahDetail = async ({ params }: SurahDetailProps) => {
  const response = await fetch(`${process.env.QURAN_ENDPOINT}/${params.ayat}`);
  const { data } = await response.json();

  return (
    <div className="layout">
      <div className="flex flex-col gap-4 py-6">
        <h1 className="text-lg font-semibold">
          {data.name.transliteration.id} - {data.numberOfVerses} Ayat
        </h1>
        <p className="text-muted-foreground">{data.tafsir.id}</p>
      </div>

      <div className="flex flex-col pb-6">
        {data.verses.map((ayat: any) => (
          <div className="w-full border-b px-3" key={ayat.number.inSurah}>
            <div className="flex items-center justify-between pb-6 pt-2">
              <h2 className="border rounded-full px-4 text-center">
                {ayat.number.inSurah}
              </h2>
            </div>
            <div className="flex flex-col mb-4">
              <p className="text-right text-2xl mb-5 md:text-3xl">
                {ayat.text.arab}
              </p>
              <p className="text-left text-sm italic mb-2 text-muted-foreground">
                {ayat.text.transliteration.en}
              </p>
              <p className="text-left text-sm">{ayat.translation.id}</p>
            </div>
          </div>
        ))}
        <div className=""></div>
      </div>
    </div>
  );
};

export default SurahDetail;
