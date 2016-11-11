document.querySelector('h1').onclick = function () {
    alert(':) X');
}

var imgOscuro = 'Images/oscuro.png';
var imgLuz = 'Images/luz.jpg';

var miImage = document.querySelector('img');

miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    if (miSrc === imgOscuro) {
        miImage.setAttribute('src', imgLuz);
    } else {
        miImage.setAttribute('src', imgOscuro);
    }
}

var miBoton = document.querySelector('button');
var miTitulo = document.querySelector('h1');

function seleccionnombre() {
    var miNombre = prompt('por favor ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.innerHTML = 'Hola , ' + miNombre;
}

task = {
    title: "Read a orm's book",
    pageQuantity: 12,
    athor: { name: "juan", lastName: "pere" }
}

console.log(task.title);