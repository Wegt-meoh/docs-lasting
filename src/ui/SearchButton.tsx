"use client";

export default function SearchButton() {
  function onSearchButtonClick() {
    console.log("search bar click");
  }

  return (
    <div
      onClick={() => {
        onSearchButtonClick();
      }}
      className=" hover:border-slate-400 hover:cursor-pointer w-52 rounded-lg border-slate-200 h-9 overflow-hidden bg-white border-2 flex items-center"
    >
      <svg
        className="ml-3 w-5 h-5 overflow-hidden "
        aria-hidden="true"
        data-icon="search"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
        ></path>
      </svg>

      <span className="ml-2 text-sm">Quick search...</span>
      <span className="ml-auto mr-3 pl-3 flex-none text-xs font-semibold">
        ⌘K
      </span>
    </div>
  );
}
