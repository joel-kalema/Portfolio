const projectDatas = [ 
  { 
  name: 'Project 01',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the   industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text",
  description1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.",
    image: 'picture1',
    technologies: ['Css', 'Html', 'Bootstrap', 'Ruby'],
    live: '#',
    source: '#'
  },
  {
    name: 'Project 02',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the   industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    description1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.",
    image: 'picture2',
    technologies: ['Css', 'Html', 'Bootstrap', 'Ruby'],
    live: '#',
    source: '#'
  },
  {
    name: 'Project 03',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the   industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    description1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.",
    image: 'picture3',
    technologies: ['Css', 'Html', 'Bootstrap', 'Ruby'],
    live: '#',
    source: '#'
  },
  {
    name: 'Project 03',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the   industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    description1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.",
    image: 'picture4',
    technologies: ['Css', 'Html', 'Bootstrap', 'Ruby'],
    live: '#',
    source: '#'
  }
];

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

const mainProjectsContainer = document.querySelector('.project');
mainProjectsContainer.innerHTML += projectDatas.map(function(project) {
return ( `<div class="projects">
    <div class="img"><div class="${project.image}"></div></div>
    <div class="project-content">
      <h2>${project.name}</h2>
      <p>
      ${project.description}
      </p>
      <div class="langage-used">
        <ul class="langage-list">
          <li>Css</li>
          <li class="colum1">Html</li>
          <li class="colum2">Bootstrap</li>
          <li>Ruby</li>
        </ul>
      </div>
      <button type="button" class="pop-btn">See Project</button>
    </div>
    </div>`);
  }
);

const button = document.querySelectorAll('.pop-btn');
const show = document.querySelector('.popup');
button.forEach((btn ,index) => {
  btn.addEventListener('click', () => {
    show.classList.add('popup-active');
    show.style.display = 'block';
    show.innerHTML = `<div>
      <div class="up-container">
        <div class="pop-contaite">
          <a class="close4">
             <i class="fa fa-times close-pop" aria-hidden="true"></i>
         </a>
       <h1>${projectDatas[index].name}</h1>
        <div class="pop-img"><div class="${projectDatas[index].image}"></div></div>
        <p class="simple-para">${projectDatas[index].description}</p>
        <p class="large-para">
         ${projectDatas[index].description1}
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
         <a src="${projectDatas[index].source}" class="see-live">
         see live <i class="fa fa-share-square-o" aria-hidden="true"></i>
         </a>
         <a src="${projectDatas[index].live}" class="git">
          see source <i class="fa fa-github"></i>
        </a></div>
        </div>
      </div>
     </div>`;
    document.querySelector('.close-pop').addEventListener('click', () => {
      document.querySelector('.popup-active').style.display = 'none';
      show.classList.remove('popup-active');
    });
  });
});
