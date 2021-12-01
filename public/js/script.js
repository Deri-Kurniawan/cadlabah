const navbar = document.querySelector('#navbar');
const buttonLogInToggler = document.querySelector('#buttonLogInToggler');

window.addEventListener('scroll', () => {
  console.log(window.scrollY);
  if (window.scrollY > 20) {
    navbar.classList.replace('navbar-dark', 'navbar-light');
    navbar.classList.replace('bg-primary', 'bg-light');
    navbar.classList.add('shadow');
    buttonLogInToggler.classList.replace('btn-primary', 'btn-outline-primary');
  } else {
    navbar.classList.replace('navbar-light', 'navbar-dark');
    navbar.classList.replace('bg-light', 'bg-primary');
    navbar.classList.remove('shadow');
    buttonLogInToggler.classList.replace('btn-outline-primary', 'btn-primary');
  }
});
