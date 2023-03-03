"use client";

import SearchSvg from "./SearchSvg";

export default function SearchButton() {
  function onSearchButtonClick() {}

  return (
    <div
      onClick={() => {
        onSearchButtonClick();
      }}
      className=" hover:border-slate-400 hover:cursor-pointer w-52 rounded-lg border-slate-200 h-9 overflow-hidden bg-white border-2 flex items-center"
    >
      <SearchSvg />
      <span className="ml-2 text-sm">Quick search...</span>
      <span className="ml-auto mr-3 pl-3 flex-none text-xs font-semibold">
        ⌘K
      </span>
    </div>
  );
}
