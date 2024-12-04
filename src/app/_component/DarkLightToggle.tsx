"use client";

import { useCallback, useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "./Icons";

export default function DarkLightToggle({}) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const changeTheme = useCallback(() => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const localStorageTheme = localStorage.getItem("theme");
    if (!localStorageTheme) {
      localStorage.setItem("theme", "light");
    } else {
      if (localStorageTheme === "light") {
        setTheme("light");
      } else if (localStorageTheme === "dark") {
        setTheme("dark");
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  return (
    <div
      className="ld-static absolute bottom-20px left-20px w-50px h-30px p-3px border-2px rounded-15px hover:cursor-pointer"
      onClick={() => changeTheme()}
    >
      <div
        style={{
          transform: theme === "light" ? "translateX(0)" : "translateX(20px)",
        }}
      >
        <div
          className="-ld-interactive absolute size-20px rounded-10px"
          style={{ zIndex: theme === "light" ? 1 : 0 }}
        >
          <SunIcon width={20} height={20} />
        </div>
        <div
          className="-ld-interactive absolute size-20px rounded-10px"
          style={{ zIndex: theme === "dark" ? 1 : 0 }}
        >
          <MoonIcon width={20} height={20} />
        </div>
      </div>
    </div>
  );
}
