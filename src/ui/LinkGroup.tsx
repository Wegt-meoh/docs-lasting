import GithubSvg from "./GithubSvg";
import ThemeToggleButton from "./ThemeToggleButton";

export default function LinkGroup() {
  return (
    <div className=" flex items-center gap-2 pl-2 border-l-slate-300">
      <ThemeToggleButton />
      <a
        title="github link"
        href="https://github.com/Wegt-meoh/docs-lasting"
        className="text-inherit block hover:text-slate-600"
      >
        <GithubSvg />
      </a>
    </div>
  );
}
