"use client";

import clsx from "clsx";
import { MouseEventHandler, useEffect, useRef } from "react";
import EscapeButton from "./EscapeButton";
import SearchSvg from "./SearchSvg";

export default function DocSearchModal({
  modalOpen = false,
  setModalOpen,
}: {
  modalOpen: boolean;
  setModalOpen: (f: boolean) => void;
}) {
  const handleMaskClick: MouseEventHandler<HTMLDivElement> = (ev) => {
    ev.stopPropagation();
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (modalOpen) {
      inputRef.current?.focus();
    }
  }, [modalOpen]);

  return (
    <div
      className={clsx(
        "w-screen h-screen backdrop-blur-sm bg-mask fixed top-0 left-0 flex justify-center z-20",
        { hidden: !modalOpen }
      )}
      onClick={handleMaskClick}
    >
      <div className="doc-search-modal w-3/5 dark:text-slate-400 bg-white dark:bg-slate-800 dark:ring-slate-900 overflow-hidden h-96 rounded-xl p-6 ring-1 mt-24 ring-slate-200">
        <header className=" flex items-center">
          <SearchSvg />
          <input
            ref={inputRef}
            maxLength={48}
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
