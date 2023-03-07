import BackgroundPic from "@/ui/BackgroundPic";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" pt-16 relative book_bg">
      <div>sidebar...</div>
      <main>{children}</main>
    </div>
  );
}
