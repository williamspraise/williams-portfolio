"use client";

import { SunMoon } from "lucide-react";

export default function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;
    const isDark =
      root.dataset.theme === "dark" ||
      (!root.dataset.theme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    const nextTheme = isDark ? "light" : "dark";

    root.dataset.theme = nextTheme;
    window.localStorage.setItem("wp-theme", nextTheme);
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label="Switch color theme"
    >
      <SunMoon size={17} />
    </button>
  );
}
