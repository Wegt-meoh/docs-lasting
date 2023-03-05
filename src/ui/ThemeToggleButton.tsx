"use client";

import { ThemeType } from "@/types/theme";
import clsx from "clsx";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
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
  const [ulOpen, setUlOpen] = useState<boolean>(false);

  const [theme, setTheme] = useState<ThemeType>("Light");

  useEffect(() => {
    if (localStorage && "theme" in localStorage) {
      setTheme(localStorage.theme);
    } else {
      setTheme("Light");
    }

    document.documentElement.classList.add("js");
  }, []);

  function handleButtonFocus() {
    setUlOpen(true);
  }

  function handleButtonBlur() {
    setUlOpen(false);
  }

  function chooseTheme(theme: ThemeType) {
    localStorage.theme = theme;
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case "Light":
        document.documentElement.classList.remove("dark");
        break;
      case "Dark":
        document.documentElement.classList.add("dark");
        break;
    }
  }, [theme]);

  useEffect(() => {
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

    const task = (isMatchDark: boolean) => {
      if (isMatchDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    const callBack = (ev: MediaQueryListEvent) => {
      console.log("listener callback");
      if (theme === "System") {
        task(ev.matches);
      }
    };

    if (theme === "System") {
      task(mediaQueryList.matches);
      mediaQueryList.addEventListener("change", callBack);
    }

    return () => {
      if (theme === "System") {
        mediaQueryList.removeEventListener("change", callBack);
      }
    };
  }, [theme]);

  return (
    <>
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
            "w-36 overflow-hidden absolute z-10 top-8 right-0 ring-1 ring-slate-200 border-0 outline-none dark:ring-slate-600 bg-white rounded-lg dark:bg-slate-800",
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
    </>
  );
}
