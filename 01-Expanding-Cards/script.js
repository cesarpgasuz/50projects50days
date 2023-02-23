const cards = document.querySelectorAll('.card');

for(const card of cards){
    card.addEventListener('click', function(){

        card.classList.add('active');

        let cardBro = card.parentElement.children;

        for(let i = 0; i < cardBro.length; i++){
            
            if(cardBro[i] !== card){
                cardBro[i].classList.remove('active');
            }
        }


    });
}
