const popupWidow = [
  {
    name: 'Project one',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the   industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    image: 'img/img1.jpg',
    technologies: ' technologies',
    live: 'live',
    source: 'source'
  },
  {
    name: 'Project one',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the   industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    image: 'img/img2.jpg',
    technologies: ' technologies',
    live: 'live',
    source: 'source'
  },
  {
    name: 'Project one',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the   industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    image: 'img/img3.jpg',
    technologies: ' technologies',
    live: 'live',
    source: 'source'
  },
  {
    name: 'Project one',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the   industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    image: 'img/img4.jpg',
    technologies: ' technologies',
    live: 'live',
    source: 'source'
  }
];

const popupTemplet = `<div class="popup4">
<div class="up-container">
  <div class="pop-contaite">
    <a class="close4">
      <i class="fa fa-times close-pop" aria-hidden="true"></i>
    </a>
    <h1>${popupWidow.name}</h1>
    <div class="pop-img"><div class="picture4"></div></div>
    <p>
      ${popupWidow.description}
    </p>
    <div class="langage-used">
      <ul>
        <li>Css</li>
        <li class="colum1">Html</li>
        <li class="colum2">Bootstrap</li>
        <li>Ruby</li>
      </ul>
    </div>
    <button class="see-live">
      see live <i class="fa fa-share-square-o" aria-hidden="true"></i>
    </button>
    <button class="git">
      see source <i class="fa fa-github"></i>
    </button>
  </div>
</div>
</div>`

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('stiky', window.scrollY > 0);
});

const navSlide = () => {
  const button = document.querySelectorAll('.button');
  const activeNav = document.querySelector('.nav-links');
  const remove = document.querySelectorAll('.link');
  button.forEach((btn) => {
    btn.addEventListener('click', () => {
      activeNav.classList.toggle('nav-active');
    });
  });
  remove.forEach((remv) => {
    remv.addEventListener('click', () => {
      activeNav.classList.remove('nav-active');
    });
  });
};

document.querySelector('.pop-btn1').addEventListener('click', function (){
  document.querySelector('.popup1').style.display= 'block';
});
document.querySelector('.close1').addEventListener('click', function (){
  document.querySelector('.popup1').style.display= 'none';
});

document.querySelector('.pop-btn2').addEventListener('click', function (){
  document.querySelector('.popup2').style.display= 'block';
});
document.querySelector('.close2').addEventListener('click', function (){
  document.querySelector('.popup2').style.display= 'none';
});

document.querySelector('.pop-btn3').addEventListener('click', function (){
  document.querySelector('.popup3').style.display= 'block';
});
document.querySelector('.close3').addEventListener('click', function (){
  document.querySelector('.popup3').style.display= 'none';
});

document.querySelector('.pop-btn4').addEventListener('click', function (){
  document.querySelector('.popup4').style.display= 'block';
});
document.querySelector('.close4').addEventListener('click', function (){
  document.querySelector('.popup4').style.display= 'none';
});

navSlide();
