import { getAllBooksList } from "@/lib/posts";
import { BooklistDataType } from "@/types/booklist";
import BookBlock from "@/ui/BookBlock";
import SearchButton from "@/ui/SearchButton";
import Link from "next/link";

export default async function Page() {
  const booklistData: BooklistDataType[] = getAllBooksList();

  return (
    <div>
      <div className="flex flex-col items-center left-32 h-full">
        <h1 className=" text-center text-6xl mt-24 font-bold text-slate-800 dark:text-slate-50">
          Hello I am Lasting, this is a site share my note.
        </h1>
        <div className="mt-12">
          <Link
            className=" dark:bg-blue-500 hover:dark:bg-blue-400 bg-slate-800 
            hover:bg-slate-700 text-slate-50 rounded-lg px-4 py-3 mr-3 text-base float-left"
            href={"/book"}
          >
            Get started
          </Link>
          <SearchButton size="large" />
        </div>
      </div>
      <div className=" grid grid-cols-4 gap-2 p-16 flex-wrap">
        <BookList booklistData={booklistData} />
      </div>
    </div>
  );
}

function BookList({ booklistData }: { booklistData: BooklistDataType[] }) {
  return (
    <>
      {booklistData.map((book) => {
        return (
          <div key={book.id}>
            <BookBlock {...book} />
          </div>
        );
      })}
    </>
  );
}
