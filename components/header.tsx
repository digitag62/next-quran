
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full flex justify-between gap-4 py-12">
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
  );
};

export default Header;
