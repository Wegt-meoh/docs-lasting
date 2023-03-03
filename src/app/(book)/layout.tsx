import HomeLogoLink from "@/ui/HomeLogoLink";
import LinkGroup from "@/ui/LinkGroup";
import SearchButton from "@/ui/SearchButton";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="h-16 flex items-center text-slate-400 flex-row border-b-slate-200 ring-1 ring-slate-200">
        <HomeLogoLink />
        <SearchButton />
        <LinkGroup />
      </header>
      <h1>book layout</h1>
      <main>{children}</main>
    </div>
  );
}
