export function updateGradient() {
  const container = document.getElementById("container");
  const heroSection = document.getElementById("heroSection");
  const menu = document.getElementById("menu");

  if (!container || !heroSection) return;

  const heroHeight = heroSection.offsetHeight;
  const containerHeight = container.offsetHeight;
  const menuHeight = menu ? menu.offsetHeight : 0;
  const scaleFactor = 6; // Ajusta este valor para controlar la extensión del halo
  const offset = 0; // píxeles extra debajo del hero para el corte
  const gradientHeightPercent =
    ((heroHeight + offset) / containerHeight) * 100 * scaleFactor;
  const radialOriginal =
    "radial-gradient(120% 50% at 50% 0%, #000 40%, #5C2ED6 100%)";

  container.style.background = `
      ${radialOriginal},
      linear-gradient(to bottom, transparent calc(${heroHeight}px + ${offset}px), #000 calc(${heroHeight}px + ${offset}px))
    `;

  // Fijamos tamaño y posición del radial para que no se deforme
  container.style.backgroundSize = `130% ${gradientHeightPercent}%`; // Ajusta ancho x alto del halo
  container.style.backgroundRepeat = `no-repeat`;
  container.style.backgroundPosition = `50% ${menuHeight}px`;
}
