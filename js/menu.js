/* Menu do celular.
   HTML: button.nav__toggle e ul#menu
   Abre, fecha e atualiza aria-expanded. */
(() => {
  const toggle = document.querySelector('.nav__toggle');
  const list = document.querySelector('.nav__list');
  if (!toggle || !list) return;

  const setOpen = (open) => {
    list.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  };

  toggle.addEventListener('click', () => setOpen(!list.classList.contains('is-open')));
  list.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setOpen(false)));
})();
