(function setActiveNav() {
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-links a').forEach(function (link) {
    const linkFile = link.getAttribute('href').split('/').pop();
    if (linkFile === currentFile) {
      link.classList.add('active');
    }
  });
}());


const menuBtn   = document.querySelector('.nav-menu-btn');
const navLinks  = document.querySelector('.nav-links');

if (menuBtn && navLinks) {

  menuBtn.addEventListener('click', function () {
    const isOpen = menuBtn.classList.toggle('is-open');
    navLinks.classList.toggle('is-open', isOpen);
    menuBtn.setAttribute('aria-expanded', isOpen);
  });

  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      menuBtn.classList.remove('is-open');
      navLinks.classList.remove('is-open');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });

}

const yearSpan = document.getElementById('footer-year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
