import { getBooklistData } from "@/lib/booklist";
import { getAllBooksList } from "@/lib/posts";
import Link from "next/link";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const booklistData = getAllBooksList();

  return (
    <div className=" pt-16 relative book_bg">
      <nav
        className=" w-80 fixed top-16 left-0 h-full overflow-auto 
      bg-white/60 backdrop-blur ring-1 ring-slate-200
       pt-8 pb-24"
      >
        <ul>
          {booklistData.map((data) => {
            return (
              <li key={data.id}>
                <Link
                  className=" m-2 hover:text-blue-600 text-slate-600"
                  href={`/book/${data.id}`}
                >
                  {data.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <main className=" ml-80 min-h-screen">{children}</main>
    </div>
  );
}
