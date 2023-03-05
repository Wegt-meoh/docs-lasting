import HomeLogoLink from "@/ui/HomeLogoLink";
import LinkGroup from "@/ui/LinkGroup";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="h-16 relative text-slate-400 dark:ring-slate-800 ring-1 ring-slate-200">
        <div className=" absolute flex items-center left-6 h-full">
          <HomeLogoLink />
        </div>
        <div className=" absolute flex items-center right-4 h-full ">
          <LinkGroup />
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
