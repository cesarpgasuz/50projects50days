const circles = document.querySelectorAll('.circle');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
const progress = document.querySelector('#progress');

let actual = 1;

nextButton.addEventListener('click', () => {
    // aumentamos en uno el actual
    actual++;
    // comprobamos si el acutal es mayor a la cantidad de circulos
    if(actual > circles.length){
        actual = circles.length;
    }
    actualizar();

})

prevButton.addEventListener('click', () => {
    actual--;
    if(actual < 1){
        actual = 1;
    }
    actualizar();
})

function actualizar(){

    circles.forEach((circle, index) => {

        if(index < actual){
            circle.classList.add('active');
        }else{
            circle.classList.remove('active');
        }


    });

    const actives = document.querySelectorAll('.active');
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
    

    if(actual === 1){
        prevButton.disabled = true;
    }else if(actual === circles.length){
        nextButton.disabled = true;
    }else{
        prevButton.disabled = false;
        nextButton.disabled = false;
    }


}