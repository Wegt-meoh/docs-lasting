import TreeNavgation from "@/ui/TreeNavgation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <TreeNavgation />
      <main className="ml-72">{children}</main>
    </div>
  );
}
