export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>sidebar...</div>
      <main>{children}</main>
    </div>
  );
}
