"use client";

import DocSearchModal from "@/ui/DocSearchModal";
import HomeLogoLink from "@/ui/HomeLogoLink";
import LinkGroup from "@/ui/LinkGroup";
import SearchButton from "@/ui/SearchButton";
import { useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
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
    <div>
      <DocSearchModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <header className="h-16 relative text-slate-400 ring-1 ring-slate-200 dark:ring-slate-800">
        <div className=" absolute flex items-center left-6 h-full">
          <HomeLogoLink />
        </div>
        <div className=" absolute flex items-center left-32 h-full">
          <SearchButton
            onClick={() => {
              setModalOpen(true);
            }}
          />
        </div>
        <div className=" absolute flex items-center right-4 h-full ">
          <LinkGroup />
        </div>
      </header>
      <h1>book layout</h1>
      <main>{children}</main>
    </div>
  );
}
