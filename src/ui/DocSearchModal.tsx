"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import EscapeButton from "./EscapeButton";
import SearchSvg from "./SearchSvg";

export default function DocSearchModal({
  modalOpen = false,
  setModalOpen,
}: {
  modalOpen: boolean;
  setModalOpen: (f: boolean) => void;
}) {
  return (
    <div
      className={clsx(
        "doc-search-container w-screen h-screen backdrop-blur-sm bg-mask absolute flex justify-center",
        { hidden: !modalOpen }
      )}
    >
      <div className="doc-search-modal w-3/5 dark:text-slate-400 bg-white dark:bg-slate-800 dark:ring-slate-900 overflow-hidden h-96 rounded-xl p-6 ring-1 mt-24 ring-slate-200">
        <header className=" flex items-center">
          <SearchSvg />
          <input
            className=" outline-none mx-2 flex-1 dark:bg-slate-800"
            placeholder="Search document..."
          />
          <EscapeButton
            onClick={() => {
              setModalOpen(false);
            }}
          />
        </header>
      </div>
    </div>
  );
}
