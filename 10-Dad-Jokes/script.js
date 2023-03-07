const chisteParrafo = document.querySelector('.chiste');
const nuevoChisteButton = document.querySelector('#nuevoChiste');


document.addEventListener('DOMContentLoaded', cargarChiste);


async function cargarChiste(){
    
    const url = 'https://icanhazdadjoke.com';
    
    try{
        
        const config = {
        headers: {
            Accept: "application/json"
        },
    }
        const respuesta = await fetch(url, config);
        const resultado = await respuesta.json();
        mostrarChiste(resultado.joke)
        // mostrarChiste(resultado.attachments[0].text);
    }catch(error){
        console.log(error);
    }
}


function mostrarChiste(chiste){

    chisteParrafo.textContent = chiste;
}

nuevoChisteButton.addEventListener('click', cargarChiste);

