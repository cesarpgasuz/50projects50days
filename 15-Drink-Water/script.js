const restante = document.querySelector('#restante');
const litros = document.querySelector('.litros');
const porcentaje = document.querySelector('#porcentaje');
const vasos = document.querySelectorAll('.vaso');


actualizarBotella();

vasos.forEach((vaso, index) => {
    vaso.addEventListener('click', () => {
        masVasos(index);
        console.log(vaso)
        console.log(index)
    })
});

function masVasos(index){
    if(index === vasos.length - 1 && vasos[index].classList.contains('active')){
        index--;
        
    }else if(vasos[index].classList.contains('active') && !vasos[index].nextElementSibling.classList.contains('active')){
        index--;
    }

    vasos.forEach((vaso, index2) => {
        if(index2 <= index){
            vaso.classList.add('active');
        }else{
            vaso.classList.remove('active');
        }
    })

    actualizarBotella();
}

function actualizarBotella(){
    const vasosLlenos = document.querySelectorAll('.vaso.active').length;
    const totalVasos = vasos.length;

    if(vasosLlenos === 0){
        porcentaje.style.visibility = 'hidden';
        porcentaje.style.height = '0';
    }else{
        porcentaje.style.visibility = 'visible';
        porcentaje.style.height = `${(vasosLlenos / totalVasos) * 300}px`;
        porcentaje.textContent = `${(vasosLlenos / totalVasos) * 100}%`;
    }

    if(vasosLlenos === totalVasos){
        restante.style.visibility = 'hidden';
        restante.style.height = '0';
    }else{
        restante.style.visibility = 'visible';
        restante.style.height = `${((totalVasos - vasosLlenos) / totalVasos) * 300}px`;
        litros.textContent = `${((totalVasos - vasosLlenos) / totalVasos) * 2}L`;
    }

}