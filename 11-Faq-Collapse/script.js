const botones = document.querySelectorAll('.boton');

for(const boton of botones){
    boton.addEventListener('click', () => {

        const card = boton.parentElement;
        card.classList.toggle('active');
        
    });
}