const projectDatas = [
  {
    name: 'Global Worming',
    description: "This is the first capstone project from microverse. I chose the theme of an annual tech magazine about the Global Worming in the word and all of its impact on people's lives.",
    description1: "Global warming is the long-term heating of Earth's climate system observed since the pre-industrial period (between 1850 and 1900) due to human activities, primarily fossil fuel burning, which increases heat-trapping greenhouse gas levels in Earth's atmosphere.",
    backgroundImage: 'picture1',
    technologies: ['Css', 'Html', 'js', 'git'],
    live: 'https://joel-kalema.github.io/Global-warming/',
    source: 'https://github.com/joel-kalema/Global-warming',
  },
  {
    name: 'To Do list',
    description: 'A simple todo list app that helps you keep track of the most important tasks of your busy day. Built with Javascript, Sass, Webpack',
    description1: 'A simple todo list app that helps you keep track of the most important tasks of your busy day. Built with Javascript, Css, Webpack. One of the most important reasons you should use a to do list is that it will help you stay organised. When you write all your tasks in a list, they seem more manageable. When you’ve got a clear outline of the tasks you’ve got to do and those you’ve completed, it helps you stay focused. While freeing up space in your mind for other more creative tasks.When you complete a task, you can cross it off your list. This gives you a sense of progress and achievement, something you’ll lack if you’re always rushing from one task to the next. If you feel a sense of achievement, it spurs you on and motivates you to keep moving forward.',
    backgroundImage: 'picture2',
    technologies: ['Css', 'Html', 'Js', 'Webpack'],
    live: 'https://joel-kalema.github.io/To-Do-list/',
    source: 'https://github.com/joel-kalema/To-Do-list',
  },
  {
    name: 'Leaderboard',
    description: 'Leaderboard is a website that displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.',
    description1: 'Leaderboard is a website that displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.',
    backgroundImage: 'picture3',
    technologies: ['JS', 'AJAX', 'WEBPACK', 'API'],
    live: 'https://joel-kalema.github.io/Leaderboard/',
    source: 'https://github.com/joel-kalema/Leaderboard/tree/futur',
  },
  {
    name: 'Math-Magicians',
    description: 'Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.',
    description1: 'Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.',
    backgroundImage: 'picture4',
    technologies: ['Css', 'React', 'Git', 'Githbub'],
    live: '#',
    source: 'https://github.com/joel-kalema/Math-Magicians',
  },
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
mainProjectsContainer.innerHTML += projectDatas.map((project) => (`<div class="projects">
  <div class="img"><div class="${project.backgroundImage}" data-aos="fade-right"
  data-aos-offset="300"
  data-aos-easing="ease-in-sine"></div></div>
    <div class="project-content">
      <h2>${project.name}</h2>
      <p>
      ${project.description}
      </p>
      <div class="langage-used">
        <ul class="langage-list">
          <li>${project.technologies[0]}</li>
          <li class="colum1">${project.technologies[1]}</li>
          <li class="colum2">${project.technologies[2]}</li>
          <li class="colum2">${project.technologies[3]}</li>
        </ul>
      </div>
      <button type="button" class="pop-btn">See Project</button>
    </div>
    </div>`));
const button = document.querySelectorAll('.pop-btn');
const show = document.querySelector('.popup');
button.forEach((btn, index) => {
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
        <div class="pop-img"><div class="${projectDatas[index].backgroundImage}"></div></div>
        <p class="simple-para">${projectDatas[index].description}</p>
        <p class="large-para">
         ${projectDatas[index].description1}
        </p>
        <div class="langage-used">
        <ul>
        <li>${projectDatas[index].technologies[0]}</li>
        <li class="colum1">${projectDatas[index].technologies[1]}</li>
        <li class="colum2">${projectDatas[index].technologies[2]}</li>
        <li class="colum2">${projectDatas[index].technologies[3]}</li>
        </ul>
      </div>
         <div class="pop-link"> 
         <a href="${projectDatas[index].live}" class="see-live">
         see live <i class="fa fa-share-square-o" aria-hidden="true"></i>
         </a>
         <a href="${projectDatas[index].source}" class="git">
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

const form = document.querySelector('.form-valud');
const userName = document.querySelector('.userName');
const mail = document.querySelector('.input-mail');
const errorMessage = document.querySelector('.error-message');

form.addEventListener('submit', (e) => {
  if (mail.value !== userName.value.toLowerCase() && mail.value !== mail.value.toLowerCase()) {
    e.preventDefault();
    errorMessage.innerText = 'Lowercase is required';
    mail.style.border = '3px #c00e0e solid';
    userName.style.border = '3px #c00e0e solid';
  } else if (userName.value !== userName.value.toLowerCase()) {
    e.preventDefault();
    errorMessage.innerText = 'Lowercase is required';
    userName.style.border = '3px #c00e0e solid';
  } else if (mail.value !== mail.value.toLowerCase()) {
    e.preventDefault();
    errorMessage.innerText = 'Lowercase is required';
    mail.style.border = '3px #c00e0e solid';
  }
});