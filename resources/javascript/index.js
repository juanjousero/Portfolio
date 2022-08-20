// Definimos las variables con los elementos del DOM que necesitamos

const hardSkills = document.getElementById('hard-skills');
const softSkills = document.getElementById('soft-skills');
const hardSkillsText = document.getElementById('hard-skills-text');
const softSkillsText = document.getElementById('soft-skills-text');
const graphBars = document.getElementsByClassName('graph-bar');

// Asignamos las clases de los keyframes a las barras

function addingClassListHard () {
    for(let i = 0; i < graphBars.length - 5; i++) {
            graphBars[i].classList.add('bars-animation');
            graphBars[i].classList.add('moveText');
    }
    hardSkills.classList.add('activateSkills');
    setTimeout(() => {
        hardSkills.style.visibility = 'visible';
    }, 3000);
}

function addingClassListSoft () {
    for(let j = 5; j < graphBars.length; j++) {
        graphBars[j].classList.add('bars-animation');
        graphBars[j].classList.add('moveText');
    }
    softSkills.classList.add('activateSkills');
    setTimeout(() => {
        softSkills.style.visibility = 'visible';
    }, 3000);
}

// Definimos el observer que nos indica si se ve el elemento

let observerHard = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting === true) {
        addingClassListHard();
    }
});

let observerSoft = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting === true) {
        addingClassListSoft();
    }
})

// Indicamos que el observer vea cuando intersecta el elemento

observerHard.observe(hardSkillsText);
observerSoft.observe(softSkillsText);