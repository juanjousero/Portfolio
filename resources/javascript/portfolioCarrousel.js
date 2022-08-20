// Definimos las variables del DOM

const listText = document.querySelectorAll('.list');
const images = document.querySelectorAll('.portfolio-card');

// Definimos la función que ejecuta el carrusel

function handleClickPortfolio(i) {
    images[i].classList.add('portfolio-photos-animation');
    for (let j = 0; j < images.length; j++) {
        if(j !== i) {
            images[j].style.visibility = 'hidden';
            listText[j].style.color = 'gray';
            listText[j].style.fontWeight = '300';
            images[j].classList.remove('portfolio-photos-animation');
        } else {
            images[j].style.visibility = 'visible';
            listText[j].style.color = 'rgba(95, 15, 39, 1)';
            listText[j].style.fontWeight = '500';
        }
    }
}

// Añadimos escuchadores de eventos a la lista de nombres

for (let i = 0; i < listText.length; i++) {
    listText[i].addEventListener('click', function() { handleClickPortfolio(i); });
}