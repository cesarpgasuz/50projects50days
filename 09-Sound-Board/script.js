const botones = document.querySelectorAll('button');
const audios = document.querySelectorAll('audio');
let ultimoAudio;

for(const boton of botones){
    boton.addEventListener('click', () => {

        const idBoton = boton.dataset.id;
        
        audios.forEach(audio => {

            if(audio.dataset.sound === idBoton){
                // si es el mismo audio se reinicia
                if(audio === ultimoAudio){
              
                    audio.currentTime = 0;
                    audio.play();
                    
                }else{
                // si es un audio diferente, se reinicia el anterior y se reproduce el nuevo    
                    if(ultimoAudio){
                  
                        ultimoAudio.pause();
                        ultimoAudio.currentTime = 0;
                    }
                    
                    audio.play();
                    ultimoAudio = audio;
                }

            }
        });

    });
}
