const searchButton = document.querySelector('.icon');
const busquedaInput = document.querySelector('.busqueda');
const input = document.querySelector('input');

searchButton.addEventListener('click', () => {
    busquedaInput.classList.toggle('active');
    input.focus();
})
