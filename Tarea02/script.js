const formulario = document.getElementById("formulario-chat")
const inputMensaje = document.getElementById("mensaje")
const areaMensajes = document.getElementById("area-mensajes")
const contadorMensajes = document.getElementById("contador")
const botonLimpiar = document.getElementById("limpiar-chat")


class Mensaje {
    constructor(tipo, texto, hora) {
        this.tipo = tipo;
        this.texto = texto;
        this.hora = hora;
    }

    render() {
        // TODO: Construye y devuelve el HTML del mensaje
    }
}

class Chat {
    constructor() {
        this.mensajes = [];
        this.contador = 0
    }

    agregarMensaje(mensaje) {
        this.mensajes.push(mensaje);
        this.contador += 1
    }

    limpiaConversacion() {
        this.mensajes = [];
        this.contador = 0
    }


}

function render() {
    // TODO: 1. Limpia e area de mensajes.
    // 2. Recorre el estado.
    // 3. Reconstruye toda la interfaz.
}


let historialMensajes = [
    { tipo: "usuario", mensaje: "Como mejorar un formulario???", hora: obtenerHoraActual() },
    { tipo: "asistente", mensaje: "Te recomiendo revisar contraste y jerarquia", hora: obtenerHoraActual() },
    { tipo: "usuario", mensaje: "Que es html semantico?!?", hora: obtenerHoraActual() },
    { tipo: "asistente", mensaje: "Es HTML que tiene significado estructural. :)", hora: obtenerHoraActual() },
    { tipo: "usuario", mensaje: "Por que tengo que usar label en los formularios!!1???", hora: obtenerHoraActual() },
];

const respuestasAsistente = [
    "Interesante pregunta sobre diseño de interfaces!",
    "Recuerda cuidar la jerarquia visual y el contraste.",
    "Piensa primero en la experiencia de usuario.",
    "Te recomiendo revisar la accesibilidad del formulario.",
    "Podrias mejorar el diseño usando HTML semantico."
];


function obtenerHoraActual() {
    const ahora = new Date();
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();

    if (minutos < 10) {
        minutos = "0" + minutos;
    }

    return `${horas}:${minutos}`;
}

function actualizarContador() {
    contadorMensajes.textContent = `Mensajes en la conversación: ${historialMensajes.length}`;
}

function agregarMensajeAlChat(tipo, texto, hora) {
    const article = document.createElement("article");
    article.classList.add("mensaje");
    article.classList.add(tipo);

    const parrafo = document.createElement("p");
    parrafo.textContent = texto

    const small = document.createElement("small");
    small.textContent = hora;

    article.appendChild(parrafo);
    article.appendChild(small);

    insertarMensaje(article);

    areaMensajes.scrollTop = areaMensajes.scrollHeight;
}

function insertarMensaje(nodo) {
    const footer = areaMensajes.querySelector("footer");
    if (footer) {
        areaMensajes.insertBefore(nodo, footer);
    } else {
        areaMensajes.appendChild(nodo);
    }
}

function obtenerRespuestaAleatoria() {
    const indice = Math.floor(Math.random() * respuestasAsistente.length);

    return respuestasAsistente[indice];
}

function mostrarIndicadorEscribiendo() {
    const article = document.createElement("article");
    article.classList.add("mensaje", "asistente");
    article.setAttribute("id", "indicador-escribiendo");

    const parrafo = document.createElement("p");
    parrafo.textContent = "Asistente esta escribiendo...";

    article.appendChild(parrafo);
    insertarMensaje(article);

    areaMensajes.scrollTop = areaMensajes.scrollHeight;
}

function quitarIndicadorEscribiendo() {
    const indicador = document.getElementById("indicador-escribiendo");
    if (indicador) {
        indicador.remove();
    }
}

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const textoUsuario = inputMensaje.value.trim();
    if (textoUsuario == "") {
        return;
    }
    const hora = obtenerHoraActual();
    historialMensajes.push({ tipo: "usuario", texto: textoUsuario, hora: hora });

    agregarMensajeAlChat("usuario", textoUsuario, hora);

    actualizarContador();

    inputMensaje.value = "";

    inputMensaje.focus();

    mostrarIndicadorEscribiendo();

    setTimeout(() => {
        quitarIndicadorEscribiendo();
        const respuesta = obtenerRespuestaAleatoria();
        const horaRespuesta = obtenerHoraActual();

        historialMensajes.push({ tipo: "asistente", texto: respuesta, hora: horaRespuesta });

        agregarMensajeAlChat("asistente", respuesta, horaRespuesta);
        actualizarContador();
    }, 1500);
});


botonLimpiar.addEventListener("click", () => {
    areaMensajes.querySelectorAll(".mensaje").forEach((n) => n.remove());
    historialMensajes = []
    actualizarContador();
});