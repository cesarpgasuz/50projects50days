const cards = document.querySelectorAll('.card');


window.addEventListener('scroll', efecto)

function efecto(){
    // calculamos el 80% del la ventana para que el
    // efecto se aplique cuando la card llegue al 80%
    const ventana = window.innerHeight * 0.8;
    
    cards.forEach(card => {
        // console.log(card.getBoundingClientRect())
        if(ventana > card.getBoundingClientRect().top){
            card.classList.add('active');
        }else{
            card.classList.remove('active');
        }
    });

}

