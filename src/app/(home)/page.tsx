"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className=" text-sky-400">
      <Link aria-label="link to home page" href={"/book"}>
        home
      </Link>
    </div>
  );
}
