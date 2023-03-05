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

  function handleButtonFocus() {
    setUlOpen(true);
  }

  function handleButtonBlur() {
    setUlOpen(false);
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
    <button
      type="button"
      className=" relative focus:ring-2 rounded-sm ring-blue-400"
      onFocus={handleButtonFocus}
      onBlur={handleButtonBlur}
    >
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
          "w-36 overflow-hidden absolute z-10 top-8 right-0 ring-1 ring-slate-200 dark:ring-slate-600 bg-white rounded-lg dark:bg-slate-800",
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
                "px-2 py-1 flex items-center hover:bg-slate-200 hover:dark:bg-slate-600",
                {
                  "text-blue-400": focus,
                  "text-slate-700 dark:text-slate-200": !focus,
                }
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
