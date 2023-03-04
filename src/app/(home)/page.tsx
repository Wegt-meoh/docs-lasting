import SearchButton from "@/ui/SearchButton";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className=" absolute flex flex-col items-center left-32 h-full">
        <h1 className=" text-6xl mt-24 font-bold text-slate-800 dark:text-slate-50">
          Hello I am Lasting, this is a site share my note.
        </h1>
        <div className=" mt-12 flex gap-2">
          <Link
            className=" dark:bg-blue-500 hover:dark:bg-blue-400 bg-slate-800 hover:bg-slate-700 text-slate-50 text-lg rounded-lg flex justify-center items-center px-4"
            href={"/book"}
          >
            Get Start
          </Link>
          <SearchButton size="large" />
        </div>
      </div>
    </div>
  );
}
