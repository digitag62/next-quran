import Link from "next/link";

const Header = () => {
  return (
    <div className="sticky top-0 z-40 backdrop-blur bg-white/70">
      <div className="container w-full flex justify-between gap-4 py-5">
        <div className="text-2xl">
          <Link className="font-bold hover:text-emerald-500" href="/">
            Al-Quran
          </Link>
        </div>
        <div className="flex gap-4 text-lg">
          <Link className="hover:text-emerald-500" href="/surah">
            Surah
          </Link>
          <Link className="hover:text-emerald-500" href="/sign-in">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
