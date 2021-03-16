const hamburgerMenu = document.querySelector(".hamburger-menu");
const navBar = document.querySelector('.navbar');

hamburgerMenu.addEventListener('click', () => {
  navBar.classList.toggle('change')
});

