
const contador = document.querySelector('#contador');
const imagen = document.querySelector('.imagen');
let cantidad = 0;

// Inicia la animación
const animacion = setInterval(() => {
  cantidad++;
  
  // Detiene la animación cuando el contador alcanza el 100%
  if (cantidad > 100) {
    clearInterval(animacion);
    return;
  }
  
  // Actualiza el contador de progreso y la opacidad del contador
  contador.textContent = `${cantidad}%`;
  contador.style.opacity = 1 - (cantidad / 100);
  
  // Calcula el valor del filtro de desenfoque y lo aplica a la imagen
  let valorDesenfoque = 30 * (1 - (cantidad / 100));
  imagen.style.filter = `blur(${valorDesenfoque}px)`;
}, 30);
