import clsx from "clsx";

export default function ComputerSvg({ focus = false }: { focus?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <path
        d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z"
        strokeWidth="2"
        strokeLinejoin="round"
        className={clsx("dark:fill-sky-400/20 fill-slate-400/20", {
          "stroke-slate-400": !focus,
          "stroke-sky-500": focus,
        })}
      ></path>
      <path
        d="M14 15c0 3 2 5 2 5H8s2-2 2-5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={clsx({
          "stroke-slate-400": !focus,
          "stroke-sky-500": focus,
        })}
      ></path>
    </svg>
  );
}
