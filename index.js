window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('stiky',window.scrollY >0);
})

const navSlide= () => {
    const button = document.querySelectorAll('.button');
const activeNav = document.querySelector('.nav-links')
const remouve = document.querySelectorAll('.link');

button.forEach(btn => {
    btn.addEventListener('click', () => {
        activeNav.classList.toggle('nav-active');
      });
});

remouve.forEach(remv =>{
    remv.addEventListener('click', () =>{
        activeNav.classList.remove('nav-active');
    });
});

}

navSlide();
