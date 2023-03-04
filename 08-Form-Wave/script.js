
// seleccionamos todos los labels
const labels = document.querySelectorAll('.form-control label')

// iteramos sobre los labels
labels.forEach(label => {

    // obtenemos los textos de cada label y lo dividimos por letras con split
    const letraDivida = label.textContent.split('');
    // console.log(letraDivida);
    // creamos un arreglo nuevo con map y retornamos un span con cada letra y agregamos la transicion apoyandonos del indice
    const resultado = letraDivida.map((letra, index) => `<span style="transition-delay:${index * 50}ms">${letra}</span>`);
    // console.log(resultado)
    //como resultado es un arreglo contatemos con join para eliminar las comas
    label.innerHTML = resultado.join('');

})