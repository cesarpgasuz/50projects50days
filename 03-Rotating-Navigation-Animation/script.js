const openButton = document.querySelector('#openCircle');
const closeButton = document.querySelector('#closeCircle');
const circle = document.querySelector('.circle')
const container = document.querySelector('.container');
const navegacion = document.querySelector('nav')


openButton.addEventListener('click', () => {
    circle.classList.toggle('active');
    container.classList.toggle('active');
    navegacion.classList.toggle('show');
    comprobar();

})
closeButton.addEventListener('click', () => {
    circle.classList.toggle('active');
    container.classList.toggle('active');
    navegacion.classList.toggle('show');
    comprobar();
})

function comprobar(){
    if(container.classList.contains('active')){
        document.body.style.overflowY = 'hidden';
    }else{
        document.body.style.overflowY = 'auto';
    }
}



