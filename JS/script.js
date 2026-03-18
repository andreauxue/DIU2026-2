const formulario = document.getElementById("formulario-chat");
const inputMensaje = document.getElementById("mensaje");
const areaMensajes = document.getElementById("area-mensajes");
const contador = document.getElementById("contador");
const botonLimpiar = document.getElementById("limpiar-chat");

let historialMensajes = [
    { tipo: "usuario", mensaje: "Cómo mejorar un formulario???", hora: obtenerHoraActual() },
    { tipo: "asistente", mensaje: "Te recomiendo revisar contraste y jerarquía visual. 🌟", hora: obtenerHoraActual() },
    { tipo: "usuario", mensaje: "Qué es html semántico?¡?", hora: obtenerHoraActual() },
    { tipo: "asistente", mensaje: "Es HTML que tiene significado estructural. 😊", hora: obtenerHoraActual() },
    { tipo: "usuario", mensaje: "Por qué tengo que usar label en los formularios?????", hora: obtenerHoraActual() },
];

const respuestasAsistente = [
    "Interesante pregunta sobre diseño de interfaces.",
    "Recuerda cuidar la jerarquía visual y el contraste.",
    "Piensa primero en la experiencia de usuario.",
    "Te recomiendo revisar la accesibilidad del formulario.",
    "Podrías mejorar el diseño usando HTML semántico."
]

// HH:MM

function obtenerHoraActual () {
    const ahora = new Date();

    let horas = ahora.getHours();

    let minutos = ahora.getMinutes();

    // 05 minutos
    if (minutos < 10) {
        minutos = "0" + minutos;
    }

    return `${horas}:${minutos}`;
}

function actualizarContador() {
    contador.textContent = `Mensajes en la conversación: ${historialMensajes.length}`;
}

function agregarMensajeAlChat(tipo, texto, hora) {
    const article = document.createElement("article");

    article.classList.add("mensaje");
    article.classList.add("tipo");

    const parrafo = document.createElement("p");
    parrafo.textContent = texto;
    
    const small = document.createElement("small");
    small.textContent = hora;

    article.appendChild(parrafo);
    
    article.appendChild(small);

    areaMensajes.appendChild(article);

    areaMensajes.scrollTop = areaMensajes.scrollHeight;

}

function obtenerRespuestaAleatoria() {
    const indice = Math.floor(Math.random() * respuestasAsistente.length);

    return respuestasAsistente[indice];
}

function mostrarIndicadorEscribiendo () {
    const article = document.createElement("article");
    article.classList.add("mensaje", "asistente");

    article.setAttribute("id", "indicador-escribiendo");

    const parrafo = document.createElement("p");
    parrafo.textContent = "DIU Assistant está escribiendo..."

    article.appendChild(parrafo);
    areaMensajes.appendChild(article);

    areaMensajes.scrollTop = areaMensajes.scrollHeight;
}

function quitarIndicadorEscribiendo() {
    const indicador = document.getElementById("indicador-escribiendo");
    if (indicador) {
        indicador.remove();
    }
}

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    const textoUsuario = inputMensaje.value.trim();
    if (textoUsuario === "") {
        return;
    }

    const hora = obtenerHoraActual();

    historialMensajes.push({
        tipo: "usuario",
        mensaje: textoUsuario,
        hora: hora
    });

    agregarMensajeAlChat("usuario", textoUsuario, hora);

    actualizarContador();

    inputMensaje.value = "";

    inputMensaje.focus();

    mostrarIndicadorEscribiendo();

    setTimeout(function () {
        quitarIndicadorEscribiendo();
        const respuesta = obtenerRespuestaAleatoria();
        const horaRespuesta = obtenerHoraActual();

        historialMensajes.push({
            tipo: "asistente",
            mensaje: respuesta,
            hora: horaRespuesta
        });
        
        agregarMensajeAlChat("asistente", respuesta, horaRespuesta);
        actualizarContador();
    }, 1500);
});

botonLimpiar.addEventListener("click", function () {
    areaMensajes.innerHTML = "";
    historialMensajes = [];
    actualizarContador();
});