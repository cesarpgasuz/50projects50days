const contenedor = document.querySelector('.container');
const formulario = document.querySelector('#form');
const termino = document.querySelector('#termino');
const home = document.querySelector('#home');

const apiKey = '9fc883f0708080bebcd0bec4cf6504d6';
const urlDB = 'https://api.themoviedb.org/3/movie/popular';
const url = `${urlDB}?api_key=${apiKey}&language=es-Es&page=1`;

let peliculasArray = [];
let generosArray = [];


document.addEventListener('DOMContentLoaded', function(){
    consultarGeneros();
    consultarMovies(url);
    formulario.addEventListener('submit', buscarPelicula);
})

home.addEventListener('click', () => {
    consultarMovies(url);
})



async function consultarGeneros(){

    try{
    const url = ` https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=es-Es`;
    
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    generosArray = resultado.genres;

    }catch(error){
        console.log(error);
    }
    

}


function buscarPelicula(e){
    e.preventDefault();

    if(termino.value === ''){
        mostrarError('Escribe un titulo');
        return;
    }


    consultarPelicula(termino.value.trim().toLowerCase());

}

function consultarPelicula(terminoBusqueda){

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=es-Es&query=${terminoBusqueda}&page=1&include_adult=false`;
    consultarMovies(url);

}

function mostrarError(mensaje){

    const alerta = document.querySelector('.error');
    alerta.querySelector('p').textContent = mensaje
    alerta.classList.add('show');

    setTimeout(() => {
        alerta.classList.remove('show');
    }, 4000)

    // if(!alerta){
    //     const mensajeError = document.createElement('P');
    //     mensajeError.style.color = 'red';
    //     mensajeError.classList.add('alerta');
    //     mensajeError.textContent = mensaje;

    //     document.querySelector('p').appendChild(mensajeError);

    //     setTimeout(() => {
    //         mensajeError.remove();
    //     }, 3500);
    // }


}


async function consultarMovies(url){

    mostrarSpinner();

    try{
        const respuesta = await fetch(url);
        const resultado = await(respuesta.json());
        peliculasArray = resultado.results;
        mostrar(peliculasArray);

    }catch(error){
        console.log(error);
    }

}


function mostrar(resultados){


     console.log(resultados)
    
    if(resultados.length > 0){
        limpiarHTML();
        resultados.forEach(resultado => {
                
                const {vote_average, poster_path, title, overview, genre_ids} = resultado;
                const imagen = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : './noimage.jpg';
                const descripcion = overview ? overview : 'Descripcion no disponible';
                const card = document.createElement('DIV');
                card.classList.add('card');
                card.innerHTML = `
                    <figure>
                        <img src="${imagen}" class="imagen-portada" alt="image de la pelicula ${title}">
                     </figure>
                    <div class="body">
                        <h3>${title}</h3>
                        <ul class="information">
                            <li><span class="${rateClass(vote_average)}">${vote_average}</span></li>
                            <li><strong>Genero:</strong> ${generos(genre_ids)}</li>
                        </ul>
                    </div>
                    <div class="descripcion">
                        <h4>Sinopsis</h4>
                        <p>${descripcion}</p>
                    </div>
                `;


                contenedor.appendChild(card);


            });
           
    }else{
        mostrarError('No se encontraron peliculas con ese titulo, intenta con otro');
    }
    

}


function generos(generos){

        if(generos.length){

            // en este arreglo se almacenaran los generos que coincidan del forEach con el generosArray
            let genre = []; 

        // iteramos sobre los generos obtenidos en el primer forEach 
        for(let i = 0; i < generos.length; i++){
                     
            let generoId = generos[i];
            // en el segundo for iteramos sobre el arreglo de generos
            // obtenidos por la api para comparar con los generos obtenidos por el forEach
            // se utiliza el break para salir del for una vez encontrado el genero e iterar
            // sobre el siguiente genero, si no colocamos el break, solo imprime el primer
            // genero. // utilizamos push para llenar el arreglo genre cuando se ecuentra un genero que coincida con el
            // arreglo de generos.

            for(let j = 0; j < generosArray.length; j++){
                if(generosArray[j].id === generoId){
                    genre.push(generosArray[j].name);
                    break;
                }
            }
           
        }
        // retornamos los generos para mostrarlos en el html;
        return genre.join(", ");

        }else{
            return 'No Disponible';
        }

        
   

    
}

const rateClass = (voto) => {
    if(voto >= 8){
        return 'green';
    }else if(voto >= 5){
        return 'orange';
    }else{
        return 'red'
    }
}

function limpiarHTML(){
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}

function mostrarSpinner(){

   limpiarHTML();

   const spinner = document.createElement('DIV');
   spinner.classList.add('spinner');
   spinner.innerHTML = `
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
   `;

    contenedor.appendChild(spinner);


}