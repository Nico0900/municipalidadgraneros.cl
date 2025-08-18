// Toggle off-canvas mobile menu
const bodyEl = document.body;
const hamburgerBtn = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.mobile-menu-panel .close-btn');
const overlay = document.querySelector('.mobile-menu-overlay');

hamburgerBtn.addEventListener('click', () => {
  bodyEl.classList.toggle('menu-open');
});
closeBtn.addEventListener('click', () => {
  bodyEl.classList.remove('menu-open');
});
overlay.addEventListener('click', () => {
  bodyEl.classList.remove('menu-open');
});

// Toggle submenus in mobile panel
document.querySelectorAll('.dropdown-btn-mobile').forEach(btn => {
  btn.addEventListener('click', () => {
    const submenu = btn.nextElementSibling;
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
  });
});
