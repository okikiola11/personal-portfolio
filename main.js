window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

const navBrand = document.querySelector('.navbar-brand');
const header = document.getElementsByTagName('body')[0];

navBrand.textContent = '<She\'Coder/>';
header.appendChild('navbar-nav'); 