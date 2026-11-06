const mobileMenu = document.getElementById('menu-toggle')

const navlinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click',()=> {
  navlinks.classList.toggle('active');
});