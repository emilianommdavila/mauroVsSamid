const azul = {
    vida: 100,
    fuerza: 10,
    elemento: document.querySelector('#azul'),
    elementoVida: document.querySelector('#vidaAzul'),
    mensaje: "Si se como me llamo",
}

const rojo = {
    vida: 100,
    fuerza: 10,
    elemento: document.querySelector('#rojo'),
    elementoVida: document.querySelector('#vidaRojo'),
    mensaje: "Usted se arrepintio de lo que dijo",
}


function vidaUpdate() {
    azul.elementoVida.textContent = azul.vida;
    rojo.elementoVida.textContent = rojo.vida;
}
//le pasa como parametro el objeto que llama la funcion y el restante
function pelea(golpeado, golpeador) {

    if (golpeado.vida > 0) {
        golpeado.vida = golpeado.vida - golpeador.fuerza;
        vidaUpdate();

    } else {
        alert(golpeador.mensaje)
        golpeado.elemento.removeEventListener('click', pelea);
    }
}
//segun el color que tiene la clase cambia la imagen al momento de tocar en ella
//hay que eliminar repeticion de codigo y no se de que otra forma puedo pasar el nombre de la clase aparte de esa (como un parametro aparte)
function changeIMG(golpeador, color) {
    if (color === "azul") {
        const golpeImg = document.querySelector('#azul');
        golpeImg.classList.add('fondoGolpeMauro');
        setTimeout(function() { golpeImg.classList.remove('fondoGolpeMauro'); }, 200);
    } else {
        const golpeImg = document.querySelector('#rojo');
        golpeImg.classList.add('fondoGolpeSamid');
        setTimeout(function() { golpeImg.classList.remove('fondoGolpeSamid'); }, 200);
    }
}

azul.elemento.addEventListener('click', function() { pelea(rojo, azul), changeIMG(azul, "azul") });
rojo.elemento.addEventListener('click', function() { pelea(azul, rojo), changeIMG(rojo, "rojo") });

vidaUpdate()