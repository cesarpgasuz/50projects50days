const searchButton = document.querySelector('.icon');
const busquedaInput = document.querySelector('.busqueda');

searchButton.addEventListener('click', () => {
    busquedaInput.classList.toggle('active');
})
