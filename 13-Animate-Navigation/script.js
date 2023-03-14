const boton = document.querySelector('span');
const navbar = document.querySelector('.nav');

boton.addEventListener('click', () => {
   if(navbar.classList.contains('active')){
        navbar.classList.remove('active');
        boton.innerHTML = `<i class="bi bi-x-lg"></i>`;
   }else{
        navbar.classList.add('active');
        boton.innerHTML = `<i class="bi bi-list"></i>`;
   }
})
