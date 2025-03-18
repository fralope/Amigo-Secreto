// declaramos el arreglo
let amigos = [];


function agregarAmigo() {
    // creamos la funcion para el input del nombre eliminando los campos vacios al inicio y al final
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();

    // validamos que el campo no sea un inpput vacio
    if (nombre === "") {
        alert("El campo no puede estar vacío.");
        return;
    }

    // validacion que input no sea numero
    if (!isNaN(nombre)) {
        alert("El nombre no puede ser un número.");
        return;
    }

    // agregamos el nombre al arreglo
    amigos.push(nombre);

    // limpiamos el campo de entrada para luego volver a situarnos en la casilla 
    inputAmigo.value = "";
    inputAmigo.focus();
}

/**
 * transformamos el input que se ingreso para devolver el nombre con la primera 
 * letra mayuscula y las letras siguientes en minuscula
 */
function capitalizarNombre(nombre) {
    return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
}

/**
 * funcion para aplicar a boton sortear amigo
 * 
 */
function sortearAmigo() {
    // validamos para que al menos haya un registro en el arreglo
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // calculamos el indica aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = capitalizarNombre(amigos[indiceAleatorio]);

    // mostramos resultado en pantalla trayendo el id 
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<li>El amigo secreto es: ${amigoSorteado}</li>`;
}
