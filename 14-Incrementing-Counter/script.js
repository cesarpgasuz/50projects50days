const contadores = document.querySelectorAll('.contador');

contadores.forEach(contador => {

    contador.textContent = '0';

    const actualizarContador = () => {
        const conta = parseInt(contador.getAttribute('data-contador'));
        const c = parseInt(contador.textContent);
        const incremento = conta/200;

        if(c < conta){
            console.log(c);
            console.log(conta);
            contador.textContent = `${Math.ceil(c + incremento)}`;
   
            setTimeout(actualizarContador, 10);
        }else{
            contador.textContent = conta;
        }
      
    }

    actualizarContador();

});
