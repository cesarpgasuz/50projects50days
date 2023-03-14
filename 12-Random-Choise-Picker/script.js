const textos = document.querySelector('#textos');
const resultado = document.querySelector('#resultado');

textos.focus();

textos.addEventListener('keyup', mostrarTextos);
textos.addEventListener('keyup', colorear);


function mostrarTextos(e){

    const parrafo = e.target.value.split(',');
    const parrafoFiltrado = parrafo.filter(tag => tag.trim() !== '');
    const nuevoParrafo = parrafoFiltrado.map(tag => tag.trim());

    mostrarParrafo(nuevoParrafo);
    
}

function mostrarParrafo(parrafo){

    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }

    parrafo.forEach(parr => {
        
        const span = document.createElement('SPAN');
        span.classList.add('letters');
        span.textContent = parr;
        resultado.appendChild(span);

    });


}

function colorear(e){

    if(e.key === 'Enter'){
        textos.value = '';

          seleccionarRandom();

          // const aleatorio = arreglo[Math.floor(Math.random() * arreglo.length)];
        
  
    }
}


function seleccionarRandom(){

    const intervalo = setInterval(() => {
     
      const randomLetter = randomSeleccionado();
      letraActivada(randomLetter);

      setTimeout(() => {
          letraDesactivada(randomLetter);
          console.log('yyyyyy')
      },100);
    },100);


    

    setTimeout(() => {
      
      clearInterval(intervalo);
      
      setTimeout(() => {
      
        const randomLetter = randomSeleccionado();
        letraActivada(randomLetter);
        console.log('termino')

      },100)

    },3000)

 


}



function randomSeleccionado(){

    const letras = document.querySelectorAll('.letters');
    const letraRandom = letras[Math.floor(Math.random() * letras.length)];
    return letraRandom;

}


function letraActivada(letra){
  letra.classList.add('active');
}

function letraDesactivada(letra){
  letra.classList.remove('active');
}



