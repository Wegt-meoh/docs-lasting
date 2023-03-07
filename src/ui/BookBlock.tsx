import Link from "next/link";

export default function BookBlock({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={`/book/${id}`}
      title="book link"
      className="border-2 border-transparent rounded-lg shadow-lg bg-white dark:bg-slate-800 
      hover:dark:bg-slate-900 hover:bg-slate-200 transition block overflow-hidden py-2 px-4
    hover:dark:border-dashed hover:dark:border-slate-400 h-full"
    >
      <h1 className=" text-2xl text-red-600 dark:text-red-500 font-bold">
        {title}
      </h1>
      <p className=" text-base text-slate-400 dark:text-slate-600">
        {description}
      </p>
    </Link>
  );
}
