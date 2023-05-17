import Link from "next/link";
import React from "react";

export default function TreeNavgation() {
  return (
    <nav
      className=" w-72 fixed left-0 h-full overflow-auto 
    backdrop-blur border-r dark:border-r-primary-dark
    pt-8 pb-24 dark:bg-primary-dark bg-white "
    >
      <ul>
        <li className="ml-4 dark:text-text-primary-dark">
          <details>
            <summary>aaa</summary>
            <Link
              className=" m-2 hover:text-blue-600 text-slate-600"
              href={`/book`}
            >
              title
            </Link>
            <Link
              className=" m-2 hover:text-blue-600 text-slate-600"
              href={`/book`}
            >
              title
            </Link>
          </details>
        </li>
      </ul>
    </nav>
  );
}

// type TemplateProps = {
//     title: string,

// }

// function Template({}:TemplateProps) {
//     return (

//     )
// }
