class Mensaje {
    constructor(tipo, texto, hora) {
        this.tipo = tipo;
        this.texto = texto;
        this.hora = hora;
    }

    render() {
        return `
            <article class="mensaje ${this.tipo}">
                <p class="mensaje-contenido">${this.texto}</p>
                <p class="mensaje-hora">${this.hora}</p>
            </article>
        `;
    }
}

class Chat {
    constructor() {
        this.mensajes = [];
    }

    agregarMensaje(mensaje) {
        this.mensajes.push(mensaje);
    }

    limpiarConversacion() {
        this.mensajes = [];
    }

    contarMensajes() {
        return this.mensajes.length;
    }
}

const chat = new Chat();
let escribiendo = false;

const contenedorChat = document.getElementById("chat");
const contadorMensajes = document.getElementById("contador-mensajes");
const formulario = document.getElementById("form-chat");
const inputMensaje = document.getElementById("mensaje");
const botonLimpiar = document.getElementById("btn-limpiar");

function obtenerHoraActual() {
    const ahora = new Date();
    return ahora.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function respuestaAutomatica(textoUsuario) {
    const texto = textoUsuario.toLowerCase();

    if (texto.includes("html")) {
        return "HTML es el lenguaje que se usa para estructurar el contenido de una página web.";
    }

    if (texto.includes("css")) {
        return "CSS se utiliza para darle estilo a la página, por ejemplo colores, tamaños, márgenes y distribución.";
    }

    if (texto.includes("javascript")) {
        return "JavaScript permite agregar interactividad a la interfaz, como eventos, validaciones y cambios dinámicos.";
    }

    if (texto.includes("flexbox")) {
        return "Flexbox ayuda a acomodar elementos dentro de un contenedor de forma flexible y ordenada.";
    }

    if (texto.includes("div")) {
        return "Un div es un contenedor genérico, mientras que etiquetas como header, main o footer sí aportan significado semántico.";
    }

    // Respuesta aleatoria
    const indiceAleatorio = Math.floor(Math.random() * respuestasGenericas.length);
    return respuestasGenericas[indiceAleatorio];
}

const respuestasGenericas = [
    "Interesante 🤔, cuéntame más sobre eso.",
    "Suena bien. ¿En qué parte te gustaría profundizar?",
    "Parece que vas por buen camino 🚀",
    "Esa es una buena pregunta. ¿Qué has intentado hasta ahora?",
    "Podemos verlo paso a paso si quieres 👀",
    "Eso también es importante en DIUI, sigue así 💡",
    "Buena observación. ¿Quieres un ejemplo práctico?",
    "Claro, puedo ayudarte con eso. ¿Qué necesitas exactamente?",
    "Interesante enfoque, vamos a desarrollarlo un poco más.",
    "Perfecto, dime más detalles y lo resolvemos juntos."
];

function render() {
    contenedorChat.innerHTML = "";

    for (const mensaje of chat.mensajes) {
        contenedorChat.innerHTML += mensaje.render();
    }

    if (escribiendo) {
        contenedorChat.innerHTML += `
            <div class="escribiendo">DIUI Assistant está escribiendo...</div>
        `;
    }

    contadorMensajes.textContent = `Mensajes: ${chat.contarMensajes()}`;
    contenedorChat.scrollTop = contenedorChat.scrollHeight;
}

function agregarMensajeInicial(tipo, texto) {
    const mensaje = new Mensaje(tipo, texto, obtenerHoraActual());
    chat.agregarMensaje(mensaje);
}

agregarMensajeInicial("asistente", "Hola, soy DIUI Assistant. Puedo ayudarte con HTML, CSS y JavaScript.");
agregarMensajeInicial("usuario", "Hola, quiero mejorar mi interfaz de chat.");
agregarMensajeInicial("asistente", "Perfecto. Ahora tu chat funciona con estado, renderizado global y programación orientada a objetos.");
render();

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const texto = inputMensaje.value.trim();

    if (texto === "") {
        return;
    }

    const nuevoMensaje = new Mensaje("usuario", texto, obtenerHoraActual());
    chat.agregarMensaje(nuevoMensaje);
    inputMensaje.value = "";

    escribiendo = true;
    render();

    setTimeout(() => {
        escribiendo = false;

        const mensajeAsistente = new Mensaje(
            "asistente",
            respuestaAutomatica(texto),
            obtenerHoraActual()
        );

        chat.agregarMensaje(mensajeAsistente);
        render();
    }, 1200);
});

botonLimpiar.addEventListener("click", function () {
    chat.limpiarConversacion();
    render();
});