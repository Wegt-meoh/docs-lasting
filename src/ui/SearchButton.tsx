"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import DocSearchModal from "./DocSearchModal";
import SearchSvg from "./SearchSvg";

export default function SearchButton({
  size = "middle",
}: {
  size?: "small" | "middle" | "large";
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [commandText, setCommandText] = useState<"⌘ " | "Ctrl ">("Ctrl ");

  // bind key board listener
  useEffect(() => {
    const listener = (ev: KeyboardEvent) => {
      if ((ev.ctrlKey || ev.metaKey) && ev.key.toLowerCase() === "k") {
        setModalOpen((e) => !e);
      } else if (ev.key === "Escape") {
        setModalOpen(false);
      }
    };

    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  // Set button text according to navigator.userAgent.
  // Because of react, this code need to be put in useEffct,
  // or not it will throw navigator is not define error
  useEffect(() => {
    const res = navigator.userAgent.toLowerCase().includes("mac os")
      ? "⌘ "
      : "Ctrl ";
    setCommandText(res);
  }, []);

  // Avoid body scrolling,when modal is open
  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [modalOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setModalOpen(true);
        }}
        className={clsx(
          `outline-none overflow-hidden text-slate-400 flex items-center justify-center`,
          {
            "hover:ring-slate-300 rounded-lg bg-white ring-1 ring-slate-200 dark:ring-transparent dark:bg-slate-800 hover:dark:bg-slate-700":
              size !== "small",
            "w-52 h-9 pl-3": size === "middle",
            "bg-transparent hover:text-slate-600": size === "small",
            "w-72 h-12 pl-4": size === "large",
          }
        )}
      >
        <SearchSvg />
        {size !== "small" && (
          <>
            <span className="ml-2 text-sm">Quick search...</span>
            <span className="ml-auto mr-3 pl-4 flex-none text-xs font-semibold">
              {commandText}K
            </span>
          </>
        )}
      </button>
      {modalOpen &&
        createPortal(
          <DocSearchModal modalOpen={modalOpen} setModalOpen={setModalOpen} />,
          document.body
        )}
    </>
  );
}
