document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const moonIcon = document.getElementById("moon-icon");
  const sunIcon = document.getElementById("sun-icon");
  const html = document.documentElement;

  // Verificar tema guardado en localStorage
  if (localStorage.theme === "dark") {
    html.classList.add("dark");
    moonIcon.classList.add("hidden");
    sunIcon.classList.remove("hidden");
  } else {
    html.classList.remove("dark");
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
  }

  // Cambiar tema al hacer clic
  themeToggle.addEventListener("click", () => {
    const isDark = html.classList.toggle("dark");

    if (isDark) {
      localStorage.theme = "dark";
      moonIcon.classList.add("hidden");
      sunIcon.classList.remove("hidden");
    } else {
      localStorage.theme = "light";
      sunIcon.classList.add("hidden");
      moonIcon.classList.remove("hidden");
    }
  });
});
