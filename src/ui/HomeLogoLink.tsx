import Link from "next/link";

export default function HomeLogoLink() {
  return (
    <Link
      href={"/"}
      role={"logo"}
      className="text-4xl text-slate-50 no-underline hover:text-slate-100 hover:bg-slate-600 w-10 h-10 block bg-slate-700 text-center rounded-lg"
    >
      L
    </Link>
  );
}
