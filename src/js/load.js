window.addEventListener('load', function () {
      if (window.lucide) lucide.createIcons();
      if (window.VANTA && VANTA.WAVES) {
        VANTA.WAVES({
          el: "#bg",
          mouseControls: true,
          touchControls: true,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x0f172a,
          shininess: 20,
          waveHeight: 10,
          waveSpeed: 0.3,
          zoom: 1.00
        });
      }
      const themeToggle = document.getElementById("theme-toggle");
      const root = document.documentElement;
      themeToggle.addEventListener("click", () => {
        root.classList.toggle("dark");
        localStorage.setItem("theme", root.classList.contains("dark") ? "dark" : "light");
        updateThemeIcon();
      });
      function updateThemeIcon() {
        const moon = themeToggle.querySelector("[data-lucide='moon']");
        const sun = themeToggle.querySelector("[data-lucide='sun']");
        if (root.classList.contains("dark")) { moon.classList.add("hidden"); sun.classList.remove("hidden"); }
        else { sun.classList.add("hidden"); moon.classList.remove("hidden"); }
      }
      if (localStorage.getItem("theme") === "light") root.classList.remove("dark");
      updateThemeIcon();
      AOS.init({ duration: 900, once: true });
    });