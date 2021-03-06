// Definimos las variables iniciales

const height = document.body.scrollHeight;

const description = document.getElementById('description');
const experience = document.getElementById('experience-container');
const academic = document.getElementById('academic-container');
const experienceBody = document.getElementById('experience-body');
const academicBody = document.getElementById('academic-body');
const proyects = document.getElementById('proyects');

const solidworksIcon = document.getElementById('solidworks');
const inventorIcon = document.getElementById('inventor');
const wordIcon = document.getElementById('word');
const excelIcon = document.getElementById('excel');
const powerpointIcon = document.getElementById('powerpoint');
const htmlIcon = document.getElementById('html5');
const cssIcon = document.getElementById('css3');
const jsIcon = document.getElementById('javascript');
const reactIcon = document.getElementById('react');
const githubIcon = document.getElementById('github');

// Programamos la función de la transición general

function transitionFunc(event) {
    let scrollY = this.scrollY;
    let percentage = height/scrollY;
    if(scrollY >= 300 && scrollY <= 500) {
      firstTransitionFunc();
    } else if (scrollY >= 601 && scrollY <= 800) {
      secondTransitionFunc();
    } else if (scrollY >= 1501 && scrollY <= 1900) {
      thirdTransitionFunc();
    } else {
      //window.removeEventListener('scroll', transitionFunc());
      return;
    }
}

// Programamos la transición para el cuerpo de la experiencia

function firstTransitionFunc () {
    experienceBody.classList.add('firstTransition');
    //description.removeEventListener('scroll', firstTransitionFunc);
    //console.log('First transition');
}

//description.addEventListener('click', firstTransitionFunc);

// Programamos la transición para el cuerpo de la formación

function secondTransitionFunc (event) {
    academicBody.classList.add('secondTransition');
    //experience.removeEventListener('scroll', secondTransitionFunc);
}

//experience.addEventListener('scroll', secondTransitionFunc);


// Programamos la transición para los iconos del software

function thirdTransitionFunc (event) {
    solidworksIcon.classList.add('thirdTransition');
    inventorIcon.classList.add('thirdTransition');
    wordIcon.classList.add('thirdTransition');
    excelIcon.classList.add('thirdTransition');
    powerpointIcon.classList.add('thirdTransition');
    htmlIcon.classList.add('thirdTransition');
    cssIcon.classList.add('thirdTransition');
    jsIcon.classList.add('thirdTransition');
    reactIcon.classList.add('thirdTransition');
    githubIcon.classList.add('thirdTransition');

    //proyects.removeEventListener('scroll', thirdTransitionFunc);
}

//proyects.addEventListener('scroll', thirdTransitionFunc);

window.addEventListener('scroll', transitionFunc);

// Programamos la transición para los proyectos

const state = {};
const carouselList = document.getElementById('proyect-cards');
const carouselItems = document.querySelectorAll('.card');
const elems = Array.from(carouselItems);

carouselList.addEventListener('click', function (event) {
  var newActive = event.target;
  var isItem = newActive.closest('.card');

  if (!isItem || newActive.classList.contains('card_active')) {
    return;
  };
  
  update(newActive);
});

const update = function(newActive) {
  const newActivePos = newActive.dataset.pos;

  const current = elems.find((elem) => elem.dataset.pos == 0);
  const prev = elems.find((elem) => elem.dataset.pos == -1);
  const next = elems.find((elem) => elem.dataset.pos == 1);
  const first = elems.find((elem) => elem.dataset.pos == -2);
  const last = elems.find((elem) => elem.dataset.pos == 2);
  
  current.classList.remove('card_active');
  
  [current, prev, next, first, last].forEach(item => {
    var itemPos = item.dataset.pos;

    item.dataset.pos = getPos(itemPos, newActivePos)
  });
};

const getPos = function (current, active) {
  const diff = current - active;

  if (Math.abs(current - active) > 2) {
    return -current
  }

  return diff;
}