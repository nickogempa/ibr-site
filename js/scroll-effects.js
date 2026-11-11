/* Efeitos ligados à rolagem.
   HTML: .progress-bar, header.site-header, .hero__bg, .hero__content */
(() => {
  const progress = document.querySelector('.progress-bar');
  const header = document.querySelector('.site-header');
  const heroBg = document.querySelector('.hero__bg');
  const heroContent = document.querySelector('.hero__content');

  const updateProgress = (y) => {
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = `${(y / max) * 100}%`;
  };

  const updateParallax = (y) => {
    if (y >= innerHeight) return;
    heroBg.style.transform = `translateY(${y * 0.35}px) scale(${1 + y / 3000})`;
    heroContent.style.transform = `translateY(${y * 0.2}px)`;
    heroContent.style.opacity = 1 - y / (innerHeight * 0.9);
  };

  addEventListener('scroll', () => {
    const y = scrollY;
    updateProgress(y);
    header.classList.toggle('is-scrolled', y > 40);
    updateParallax(y);
  }, { passive: true });
})();
