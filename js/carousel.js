/* Carrossel dos cultos.
   HTML: [data-carousel], .gallery__track e os botões .gallery__nav
   Arraste ou use as setas para ver as fotos. */
(() => {
  document.querySelectorAll('[data-carousel]').forEach((root) => {
    const track = root.querySelector('.gallery__track');
    const prev = root.querySelector('.gallery__nav--prev');
    const next = root.querySelector('.gallery__nav--next');
    if (!track) return;

    let dragging = false;
    let startX = 0;
    let startScroll = 0;
    let moved = false;

    const gap = () => parseFloat(getComputedStyle(track).gap) || 0;
    const step = () => {
      const item = track.querySelector('.gallery__item');
      return item ? item.getBoundingClientRect().width + gap() : track.clientWidth;
    };

    const updateNav = () => {
      const max = track.scrollWidth - track.clientWidth - 2;
      if (prev) prev.disabled = track.scrollLeft <= 2;
      if (next) next.disabled = track.scrollLeft >= max;
    };

    const scrollByStep = (direction) => {
      track.scrollBy({ left: direction * step(), behavior: 'smooth' });
    };

    prev?.addEventListener('click', () => scrollByStep(-1));
    next?.addEventListener('click', () => scrollByStep(1));
    track.addEventListener('scroll', updateNav, { passive: true });
    updateNav();

    track.addEventListener('pointerdown', (event) => {
      if (event.pointerType === 'touch' || event.button !== 0) return;
      dragging = true;
      moved = false;
      startX = event.clientX;
      startScroll = track.scrollLeft;
      track.classList.add('is-dragging');
      track.setPointerCapture(event.pointerId);
    });

    track.addEventListener('pointermove', (event) => {
      if (!dragging) return;
      const delta = event.clientX - startX;
      if (Math.abs(delta) > 4) moved = true;
      track.scrollLeft = startScroll - delta;
    });

    const endDrag = () => {
      if (!dragging) return;
      dragging = false;
      track.classList.remove('is-dragging');
      const items = [...track.querySelectorAll('.gallery__item')];
      const nearest = items.reduce((best, item) => (
        Math.abs(item.offsetLeft - track.scrollLeft) < Math.abs(best.offsetLeft - track.scrollLeft) ? item : best
      ));
      track.scrollTo({ left: nearest.offsetLeft, behavior: 'smooth' });
    };

    track.addEventListener('pointerup', endDrag);
    track.addEventListener('pointercancel', endDrag);
    track.addEventListener('dragstart', (event) => event.preventDefault());
    track.addEventListener('click', (event) => {
      if (!moved) return;
      event.preventDefault();
      event.stopPropagation();
      moved = false;
    }, true);
  });
})();
