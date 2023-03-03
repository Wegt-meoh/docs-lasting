import HomeLogoLink from "@/ui/HomeLogoLink";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>home header</header>
      <main>{children}</main>
    </div>
  );
}
