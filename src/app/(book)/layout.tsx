import HomeLogoLink from "@/ui/HomeLogoLink";
import LinkGroup from "@/ui/LinkGroup";
import SearchButton from "@/ui/SearchButton";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="h-16 relative text-slate-400 ring-1 ring-slate-200 dark:ring-slate-800">
        <div className=" absolute flex items-center left-6 h-full">
          <HomeLogoLink />
        </div>
        <div className=" absolute flex items-center left-32 h-full">
          <SearchButton />
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
