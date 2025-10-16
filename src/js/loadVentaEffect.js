let vantaEffect;

window.addEventListener('load', function () {
  if (window.lucide) lucide.createIcons();

  const root = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");

  // Función para inicializar o actualizar el fondo según el tema
  function initVanta() {
    if (vantaEffect) vantaEffect.destroy(); // Destruye el fondo anterior

    const isDark = root.classList.contains("dark");

    vantaEffect = VANTA.WAVES({
      el: "#bg",
      mouseControls: true,
      touchControls: true,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: isDark ? 0x0f172a : 0xb7c9d9, // azul claro para el modo claro
      shininess: isDark ? 20 : 50,
      waveHeight: isDark ? 10 : 15,
      shininess: 20,
      waveHeight: 10,
      waveSpeed: 0.3,
      zoom: 1.00
    });
  }

  // Lógica del modo oscuro
  function updateThemeIcon() {
    const moon = themeToggle.querySelector("[data-lucide='moon']");
    const sun = themeToggle.querySelector("[data-lucide='sun']");
    if (root.classList.contains("dark")) {
      moon.classList.add("hidden");
      sun.classList.remove("hidden");
    } else {
      sun.classList.add("hidden");
      moon.classList.remove("hidden");
    }
  }

  // Inicializa tema y fondo
  if (localStorage.getItem("theme") === "dark") root.classList.add("dark");
  updateThemeIcon();
  initVanta();

  // Al cambiar tema
  themeToggle.addEventListener("click", () => {
    root.classList.toggle("dark");
    localStorage.setItem("theme", root.classList.contains("dark") ? "dark" : "light");
    updateThemeIcon();
    initVanta(); 
  });

  AOS.init({ duration: 900, once: true });
});
