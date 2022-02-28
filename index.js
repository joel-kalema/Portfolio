window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('stiky',window.scrollY >0);
})

const button = document.querySelector('.button');
const activeNav = document.querySelector('.nav-links')

button.addEventListener('click', () => {
    activeNav.classList.toggle('nav-active');
  });