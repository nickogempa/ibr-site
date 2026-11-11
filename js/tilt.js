/* Efeito 3D: inclina elementos [data-tilt] e move as luzes do hero com o mouse */
(() => {
  const MAX_TILT = 16;

  document.querySelectorAll('[data-tilt]').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(800px) rotateY(${x * MAX_TILT}deg) rotateX(${-y * MAX_TILT}deg) translateY(-6px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  });

  const hero = document.querySelector('.hero');
  const orbs = document.querySelectorAll('.hero__orb');
  hero.addEventListener('mousemove', (e) => {
    if (scrollY > 50) return;
    const x = e.clientX / innerWidth - 0.5;
    const y = e.clientY / innerHeight - 0.5;
    orbs.forEach((orb, i) => { orb.style.translate = `${x * (i ? -60 : 60)}px ${y * 40}px`; });
  });
})();
