"use client";

import clsx from "clsx";

export default function DocSearchModal({ open }: { open: boolean }) {
  return (
    <div
      className={clsx(
        "doc-search-container w-screen h-screen backdrop-blur-sm bg-mask",
        { hidden: open }
      )}
    >
      <div className="doc-search-modal">
        <input />
      </div>
    </div>
  );
}
