(() => {
  const button = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#main-navigation');
  if (!button || !nav) return;

  const closeMenu = () => {
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Open menu');
    document.body.classList.remove('menu-open');
  };

  button.addEventListener('click', () => {
    const opening = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(opening));
    button.setAttribute('aria-label', opening ? 'Close menu' : 'Open menu');
    document.body.classList.toggle('menu-open', opening);
  });

  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  window.addEventListener('resize', () => { if (window.innerWidth > 900) closeMenu(); });
})();
