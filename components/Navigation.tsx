"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { GlassButton } from "@/components/ui";
import { Moon, Sun } from "lucide-react";
import { BackgroundSelector } from "@/components/BackgroundSelector";

interface NavigationProps {
  setBackground: (bg: string) => void;
}

export default function Navigation({ setBackground }: NavigationProps) {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 p-4  backdrop-blur-xl border-white/20 dark:border-slate-700/20">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 backdrop-blur-md flex items-center justify-center">
            <span className="text-white text-xl font-bold">G</span>
          </div>
          <span className="text-slate-800 dark:text-white text-xl font-bold">
            Glassmorphic UI
          </span>
        </Link>
        <div className="flex items-center space-x-2">
          <Link href="/">
            <GlassButton
              variant={pathname === "/" ? "default" : "ghost"}
              className="text-slate-800 dark:text-white"
            >
              Home
            </GlassButton>
          </Link>
          <Link href="/docs">
            <GlassButton
              variant={pathname === "/docs" ? "default" : "ghost"}
              className="text-slate-800 dark:text-white"
            >
              Components
            </GlassButton>
          </Link>
          <GlassButton
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-slate-800 dark:text-white rounded-full"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </GlassButton>
          <BackgroundSelector setBackground={setBackground} />
        </div>
      </div>
    </nav>
  );
}
