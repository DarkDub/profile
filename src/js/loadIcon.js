    document.addEventListener("DOMContentLoaded", () => {
      const themeToggle = document.getElementById("theme-toggle");
      const moonIcon = document.getElementById("moon-icon");
      const sunIcon = document.getElementById("sun-icon");
      const html = document.documentElement;

      if (localStorage.theme === "dark") {
        html.classList.add("dark");
        moonIcon.classList.add("hidden");
        sunIcon.classList.remove("hidden");
      }

      themeToggle.addEventListener("click", () => {
        html.classList.toggle("dark");
        const isDark = html.classList.contains("dark");
        localStorage.theme = isDark ? "dark" : "light";
        moonIcon.classList.toggle("hidden", isDark);
        sunIcon.classList.toggle("hidden", !isDark);
      });
    });

    function updateThemeIcon() {
  const moon = themeToggle.querySelector("[data-lucide='moon']");
  const sun = themeToggle.querySelector("[data-lucide='sun']");

  if (root.classList.contains("dark")) {
    moon.classList.add("opacity-0");
    moon.classList.remove("opacity-100");
    sun.classList.add("opacity-100");
    sun.classList.remove("opacity-0");
  } else {
    sun.classList.add("opacity-0");
    sun.classList.remove("opacity-100");
    moon.classList.add("opacity-100");
    moon.classList.remove("opacity-0");
  }
}
