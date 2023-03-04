"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import DocSearchModal from "./DocSearchModal";
import SearchSvg from "./SearchSvg";

export default function SearchButton() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", (ev) => {
      if ((ev.ctrlKey || ev.metaKey) && ev.key.toLowerCase() === "k") {
        setModalOpen(true);
      } else if (ev.key === "Escape") {
        setModalOpen(false);
      }
    });

    return () => {
      document.removeEventListener("keydown", (ev) => {
        if ((ev.ctrlKey || ev.metaKey) && ev.key.toLowerCase() === "k") {
          setModalOpen(true);
        } else if (ev.key === "Escape") {
          setModalOpen(false);
        }
      });
    };
  }, []);

  return (
    <>
      <button
        onClick={() => {
          setModalOpen(true);
        }}
        className=" hover:ring-slate-400 hover:dark:bg-slate-600 outline-none overflow-hidden w-52 rounded-lg h-9 bg-white ring-1 ring-slate-200 dark:ring-slate-900 dark:bg-slate-800 flex items-center"
      >
        <SearchSvg />
        <span className="ml-2 text-sm">Quick search...</span>
        <span className="ml-auto mr-3 pl-3 flex-none text-xs font-semibold">
          ⌘K
        </span>
      </button>
      {modalOpen &&
        createPortal(
          <DocSearchModal modalOpen={modalOpen} setModalOpen={setModalOpen} />,
          document.body
        )}
    </>
  );
}
