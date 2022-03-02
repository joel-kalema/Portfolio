const popupWidow = [
  {
    id: '1',
    name: 'Project one',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the   industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    description1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.",
    image: 'picture1',
    technologies: ' technologies',
    live: 'live',
    source: 'source',
  },
  {
    id: '2',
    name: 'Project one',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the   industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    description1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.",
    image: 'picture2',
    technologies: ' technologies',
    live: 'live',
    source: 'source',
  },
  {
    id: '3',
    name: 'Project one',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the   industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    description1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.",
    image: 'picture3',
    technologies: ' technologies',
    live: 'live',
    source: 'source',
  },
  {
    id: '4',
    name: 'Project one',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the   industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    description1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.",
    image: 'picture4',
    technologies: ' technologies',
    live: 'live',
    source: 'source',
  },
];

const btn1 = document.querySelector('.pop-btn1');
const btn2 = document.querySelector('.pop-btn2');
const btn3 = document.querySelector('.pop-btn3');
const btn4 = document.querySelector('.pop-btn4');
const show1 = document.querySelector('.popup');
const show2 = document.querySelector('.popup');
const show3 = document.querySelector('.popup');
const show4 = document.querySelector('.popup');

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

navSlide();

function popupShow(btn, show, popupWidow, nbr) {
  btn.addEventListener('click', () => {
    show.classList.add('popup-active');
    show.style.display = 'block';
    show.innerHTML = `<div>
      <div class="up-container">
        <div class="pop-contaite">
          <a class="close4">
             <i class="fa fa-times close-pop" aria-hidden="true"></i>
         </a>
       <h1>Multi - Post stories</h1>
        <div class="pop-img"><div class="${popupWidow[nbr].image}"></div></div>
        <p class="simple-para">
         ${popupWidow[nbr].description}
        </p>
        <p class="large-para">
         ${popupWidow[nbr].description1}
        </p>
          <div class="langage-used">
           <ul>
             <li>Css</li>
              <li class="colum1">Html</li>
            <li class="colum2">Bootstrap</li>
            <li>Ruby</li>
           </ul>
         </div>
         <div class="pop-btn"> 
         <button class="see-live">
         see live <i class="fa fa-share-square-o" aria-hidden="true"></i>
         </button>
         <button class="git">
          see source <i class="fa fa-github"></i>
        </button></div>
        </div>
      </div>
     </div>`;
    document.querySelector('.close-pop').addEventListener('click', () => {
      document.querySelector('.popup-active').style.display = 'none';
      show.classList.remove('popup-active');
    });
  });
}

popupShow(btn1, show1, popupWidow, 0);
popupShow(btn2, show2, popupWidow, 1);
popupShow(btn3, show3, popupWidow, 2);
popupShow(btn4, show4, popupWidow, 3);