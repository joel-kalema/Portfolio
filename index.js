window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('stiky',window.scrollY >0);
})