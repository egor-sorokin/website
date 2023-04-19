export default function scrollToSection(section: string) {
  const element = document.getElementById(section);

  if (element) {
    const startY = window.pageYOffset;
    const endY = element.offsetTop;
    const distance = endY - startY;
    const duration = 500;
    const easing = (t: number) =>
      t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, startY + easing(progress) * distance);
      if (progress < 1) window.requestAnimationFrame(step);
    };

    window.requestAnimationFrame(step);
  }
}
