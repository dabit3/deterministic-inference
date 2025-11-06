"use client";

import { MoonStar, SunMedium } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <SunMedium className="h-5 w-5" aria-hidden="true" />
      ) : (
        <MoonStar className="h-5 w-5" aria-hidden="true" />
      )}
    </Button>
  );
}
