import Link from "next/link";

export default function HomeLogoLink() {
  return (
    <Link
      href={"/"}
      role={"logo"}
      className="text-4xl text-slate-50 
      no-underline hover:text-slate-100 
      hover:bg-blue-600 w-10 h-10 block bg-blue-700 dark:bg-purple-900 
      hover:dark:bg-purple-800 dark:text-purple-200 hover:dark:text-blue-600
        text-center rounded-lg"
    >
      L
    </Link>
  );
}
