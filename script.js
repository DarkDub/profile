document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".slider-image");

  // Agrupamos por contenedor (cada card tiene su set de imágenes)
  const containers = [...new Set([...sliders].map(img => img.parentElement))];

  containers.forEach(container => {
    const images = container.querySelectorAll(".slider-image");
    let index = 0;

    setInterval(() => {
      images[index].classList.remove("opacity-100");
      images[index].classList.add("opacity-0");

      index = (index + 1) % images.length;

      images[index].classList.remove("opacity-0");
      images[index].classList.add("opacity-100");
    }, 3000); // cambia cada 2 segundos
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".slider-image, .game-slider");
  const containers = [...new Set([...sliders].map(img => img.parentElement))];

  containers.forEach(container => {
    const images = container.querySelectorAll(".slider-image, .game-slider");
    let index = 0;
    setInterval(() => {
      images[index].classList.remove("opacity-100");
      images[index].classList.add("opacity-0");
      index = (index + 1) % images.length;
      images[index].classList.remove("opacity-0");
      images[index].classList.add("opacity-100");
    }, 3000);
  });
});

