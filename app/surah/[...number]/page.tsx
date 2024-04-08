interface SurahDetailProps {
  params: {
    number: Number | string;
  };
}

const SurahDetail = ({ params }: SurahDetailProps) => {
  return <div>Surah Detail {params.number}</div>;
};

export default SurahDetail;
