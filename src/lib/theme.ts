export function applyStoredTheme() {
    const storedTheme = localStorage.getItem("theme");
    const root = document.documentElement;
  
    if (storedTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }
  