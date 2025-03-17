import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-1 rounded-full bg-muted hover:bg-accent transition"
      aria-label="Toggle Theme"
    >
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-background text-foreground">
        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </div>
    </button>
  );
}
