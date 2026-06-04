const formulario = document.getElementById("formulario-chat")
const inputMensaje = document.getElementById("mensaje")
const areaMensajes = document.getElementById("area-mensajes")
const contadorMensajes = document.getElementById("contador")
const botonLimpiar = document.getElementById("limpiar-chat")

function obtenerHoraActual() {
    const ahora = new Date();
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();

    if (minutos < 10) {
        minutos = "0" + minutos;
    }

    return `${horas}:${minutos}`;
}

class Mensaje {
    constructor(tipo, texto, hora = obtenerHoraActual()) {
        this.tipo = tipo;
        this.texto = texto;
        this.hora = hora;
    }

    render() {
        const article = document.createElement("article");
        article.classList.add("mensaje");
        article.classList.add(this.tipo);

        const parrafo = document.createElement("p");
        parrafo.textContent = this.texto

        const small = document.createElement("small");
        small.textContent = this.hora;

        article.appendChild(parrafo);
        article.appendChild(small);

        return article;
    }
}

class Chat {
    constructor(mensajes = []) {
        this.historialDeMensajes = mensajes;
        this.asistenteEscribiendo = false;
    }

    agregarMensaje(mensaje) {
        this.historialDeMensajes.push(mensaje);
    }

    limpiarConversacion() {
        this.historialDeMensajes = [];
        this.asistenteEscribiendo = false;
    }

    get contador() {
        return this.historialDeMensajes.length;
    }

}

const chat = new Chat([
    new Mensaje("usuario", "Estoy diseñando una pagina de inicio y no se por donde empezar."),
    new Mensaje("asistente", "Empieza por definir objetivo, publico y accion principal que quieres lograr."),
    new Mensaje("usuario", "Como organizo mejor la informacion en pantalla?"),
    new Mensaje("asistente", "Usa jerarquia visual: titulo claro, secciones cortas y un CTA visible."),
    new Mensaje("usuario", "Que tipografia me recomiendas para una app educativa?")
]);

const respuestasAsistente = [
    "Elige una fuente legible, buen interlineado y maximo dos familias tipograficas.",
    "Sobrecargar la pantalla. Prioriza contenido y deja suficiente espacio tactil.",
    "Buena observacion. Piensa primero en la tarea principal del usuario.",
    "Prueba con menos elementos por pantalla y una jerarquia mas clara.",
    "Verifica contraste, tamano de fuente y estados de foco para accesibilidad.",
    "Recuerda mantener consistencia en botones, colores y espaciados.",
    "Haz una prueba rapida con usuarios para validar si el flujo se entiende.",
    "Un buen diseño no solo se ve bien: tambien se entiende rapido.",
    "Si dudas entre dos opciones, elige la que reduzca pasos al usuario.",
    "Empieza simple, mide resultados y luego itera con mejoras pequeñas."
];

function obtenerRespuestaAleatoria() {
    const indice = Math.floor(Math.random() * respuestasAsistente.length);
    return respuestasAsistente[indice];
}

function render() {
    // Inserta mensaje
    const footer = areaMensajes.querySelector("footer");
    areaMensajes.querySelectorAll(".mensaje").forEach((nodo) => nodo.remove());

    chat.historialDeMensajes.forEach((mensaje) => {
        const nodoMensaje = mensaje.render();
        if (footer) {
            areaMensajes.insertBefore(nodoMensaje, footer);
        } else {
            areaMensajes.appendChild(nodoMensaje);
        }
    });

    if (chat.asistenteEscribiendo) {
        const indicador = document.createElement("article");
        indicador.classList.add("mensaje", "asistente");

        const texto = document.createElement("p");
        texto.textContent = "El asistente esta escribiendo...";

        indicador.appendChild(texto);

        if (footer) {
            areaMensajes.insertBefore(indicador, footer);
        } else {
            areaMensajes.appendChild(indicador);
        }
    }
    // Actualiza el contador
    contadorMensajes.textContent = `Mensajes en la conversación: ${chat.contador}`;
    areaMensajes.scrollTop = areaMensajes.scrollHeight;
}

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    
    const textoUsuario = inputMensaje.value.trim();
    if (textoUsuario == "") {
        return;
    }

    chat.agregarMensaje(new Mensaje("usuario", textoUsuario))
    chat.asistenteEscribiendo = true;
    render();

    inputMensaje.value = "";
    inputMensaje.focus();

    setTimeout(() => {
        chat.asistenteEscribiendo = false;
        chat.agregarMensaje(new Mensaje("asistente", obtenerRespuestaAleatoria()));
        render();
    }, 1500);
});


botonLimpiar.addEventListener("click", () => {
    chat.limpiarConversacion();
    render();
});

render();