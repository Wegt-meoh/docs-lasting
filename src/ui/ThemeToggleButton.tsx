"use client";

import { ThemeType } from "@/types/theme";
import clsx from "clsx";
import { useEffect, useState } from "react";
import ComputerSvg from "./ComputerSvg";
import DarkSvg from "./DarkSvg";
import LightSvg from "./LightSvg";

const themeList: {
  element: (focus: boolean) => React.ReactNode;
  label: ThemeType;
}[] = [
  { element: (focus) => <LightSvg focus={focus} />, label: "Light" },
  { element: (focus) => <DarkSvg focus={focus} />, label: "Dark" },
  { element: (focus) => <ComputerSvg focus={focus} />, label: "System" },
];

export default function ThemeToggleButton() {
  const [theme, setTheme] = useState<ThemeType>("Light");
  const [ulOpen, setUlOpen] = useState<boolean>(false);

  function handleButtonClick() {
    setUlOpen((f) => !f);
  }

  function chooseTheme(theme: ThemeType) {
    setTheme(theme);
    switch (theme) {
      case "Light":
        document.documentElement.classList.remove("dark");
        break;
      case "Dark":
        document.documentElement.classList.add("dark");
        break;
      default:
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
    }
  }

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (ev) => {
        if (theme !== "System") {
          return;
        }
        if (ev.matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      });
  }, [theme]);

  return (
    <button className=" relative" onClick={handleButtonClick}>
      {theme === "Light" ? (
        <LightSvg />
      ) : theme === "Dark" ? (
        <DarkSvg />
      ) : theme === "System" ? (
        <ComputerSvg />
      ) : (
        <LightSvg />
      )}
      <ul
        className={clsx(
          "w-36 overflow-hidden absolute top-8 right-0 ring-1 ring-slate-200 bg-white rounded-lg",
          {
            hidden: !ulOpen,
          }
        )}
      >
        {themeList.map((item) => {
          const focus = theme === item.label;
          return (
            <li
              key={item.label}
              onClick={() => {
                chooseTheme(item.label);
              }}
              className={clsx(
                "px-2 py-1 flex items-center hover:bg-slate-200 text-slate-700 dark:text-slate-200",
                { "text-blue-400": focus }
              )}
            >
              {item.element(focus)}
              {item.label}
            </li>
          );
        })}
      </ul>
    </button>
  );
}