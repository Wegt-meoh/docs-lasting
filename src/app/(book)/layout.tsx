import HomeLogoLink from "@/ui/HomeLogoLink";
import LinkGroup from "@/ui/LinkGroup";
import SearchButton from "@/ui/SearchButton";
import clsx from "clsx";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-primary-dark">
      <header
        className={clsx(`h-16 text-slate-400 ring-1 z-10 ring-slate-200 dark:ring-slate-800          
              fixed flex w-full bg-white/60 dark:bg-primary-dark/60 backdrop-blur items-center justify-start`)}
      >
        <div className=" ml-4">
          <HomeLogoLink />
        </div>
        <div className=" ml-12">
          <SearchButton />
        </div>
        <div className=" absolute right-4">
          <LinkGroup />
        </div>
      </header>
      <main className="pt-16">{children}</main>
    </div>
  );
}
