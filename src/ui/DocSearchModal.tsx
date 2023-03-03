"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import EscapeButton from "./EscapeButton";
import SearchSvg from "./SearchSvg";

export default function DocSearchModal() {
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
    <div
      className={clsx(
        "doc-search-container w-screen h-screen backdrop-blur-sm bg-mask absolute flex justify-center",
        { hidden: !modalOpen }
      )}
    >
      <div className="doc-search-modal w-3/5 bg-white overflow-hidden h-96 rounded-xl p-6 ring-1 mt-24 ring-slate-200">
        <header className=" flex items-center">
          <SearchSvg />
          <input
            className=" outline-none mx-2 flex-1"
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
