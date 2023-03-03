"use client";

import SearchSvg from "./SearchSvg";

export default function SearchButton({
  onClick,
}: {
  onClick: React.DOMAttributes<HTMLButtonElement>["onClick"];
}) {
  return (
    <button
      onClick={onClick}
      className=" hover:ring-slate-400 hover:dark:bg-slate-600 outline-none overflow-hidden w-52 rounded-lg h-9 bg-white ring-1 ring-slate-200 dark:ring-slate-900 dark:bg-slate-800 flex items-center"
    >
      <SearchSvg />
      <span className="ml-2 text-sm">Quick search...</span>
      <span className="ml-auto mr-3 pl-3 flex-none text-xs font-semibold">
        ⌘K
      </span>
    </button>
  );
}
