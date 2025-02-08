// Variables que contendran la lista de amigos a sortear y los sorteados
let reglas = (
    alert(`¡LEA LAS REGLAS ANTES DE INICIAR! \n
        1. Debe iniciar el juego por lo menos con tres nombres\n
        2. Si alguno de los nombre se repite, agregue la inicial del apellido\n
        3. Diviertase`)
);

const listaAmigos = [];
const listaResultado = document.getElementById("resultado"); // Obtener la lista de resultados
const amigosSorteados = [] 

function agregarAmigo() {
    const nombreInput = document.getElementById("amigo");
    const nombre = nombreInput.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    listaAmigos.push(nombre);
    actualizarLista();
    nombreInput.value = "";
}

function actualizarLista() {
    const listaAmigosElement = document.getElementById("listaAmigos");
    listaAmigosElement.innerHTML = ""; // Limpiar la lista

    // crea un li para cada uno de los amigos, se vera mas ordenado 
    listaAmigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigosElement.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length < 2) { // Debe haber al menos 2 amigos para el sorteo
        alert("Debes ingresar al menos dos amigos para realizar el sorteo.");
        return;
    }

    let amigoSecreto;
    do {
        const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
        amigoSecreto = listaAmigos[indiceAleatorio];
        
        // Pide que si el nombre ya fue sorteado se agregue a la lista para que no aparezca de nuevo 
    } while(amigosSorteados.includes(amigoSecreto));
    amigosSorteados.push(amigoSecreto);


    
    // Mostrar el resultado en la lista "resultado"
    listaResultado.innerHTML = ""; // Limpiar resultados anteriores
    const resultadoLi = document.createElement("li");
    resultadoLi.textContent = "¡El amigo secreto es: " + amigoSecreto + "!";
    listaResultado.appendChild(resultadoLi);

    //Limpiar la lista de amigos sorteados para una nueva ronda 

    if (amigosSorteados.length === listaAmigos.length){ // Si todos fueron sorteados reinicia la lista
        amigosSorteados.length = 0; // Limpia la lista
        alert('¡Todos los amigos fueron asignados!. La lista se ha reiniciado');
    }

    
    // Eliminara del li a cada uno de los sorteados
    const indiceAmigo = listaAmigos.indexOf(amigoSecreto);
    listaAmigos.splice(indiceAmigo, 1);
    actualizarLista();
}