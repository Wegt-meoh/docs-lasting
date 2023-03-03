export default function EscapeButton({
  onClick,
}: {
  onClick: React.DOMAttributes<HTMLButtonElement>["onClick"];
}) {
  return (
    <button
      onClick={onClick}
      className=" w-8 h-6 text-sm rounded ring-1 ring-slate-400 bg-white 
      dark:bg-slate-600 dark:text-slate-100 
      text-slate-500 text-center"
    >
      Esc
    </button>
  );
}
