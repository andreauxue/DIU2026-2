// Clase Mensaje

class Mensaje {
    constructor(tipo, texto) {
        this.tipo = tipo; // "user" o "assistant"
        this.texto = texto;
        this.hora = new Date().toLocaleTimeString();
    }

    render() {
        return `
        <article class="message ${this.tipo}">
            <p>${this.texto}</p>
            <small>${this.hora}</small>
        </article>
        `;
    }
}

// Clase Chat
class Chat {
    constructor() {
        this.mensajes = [];
    }

    agregarMensaje(tipo, texto) {
        const nuevoMensaje = new Mensaje(tipo, texto);
        this.mensajes.push(nuevoMensaje);
    }

    limpiarChat() {
        this.mensajes = [];
    }

    contarMensajes() {
        return this.mensajes.length;
    }
}

// Estado global
const chat = new Chat();
let estaEscribiendo = false;

// Render global
function render() {
    const contenedor = document.getElementById("messages");
    contenedor.innerHTML = "";

    // reconstruir mensajes
    chat.mensajes.forEach(mensaje => {
        contenedor.innerHTML += mensaje.render();
    });

    // indicador de escribiendo
    if (estaEscribiendo) {
        contenedor.innerHTML += `
        <div class="message assistant typing">
            <em>El asistente está escribiendo...</em>
        </div>
        `;
    }

    // contador
    document.getElementById("contador").textContent =
        "Mensajes: " + chat.contarMensajes();

    // scroll automático
    contenedor.scrollTop = contenedor.scrollHeight;
}

// Generador de respuestas
function generarRespuesta() {
    const respuestas = [
        "Interesante pregunta, podrías explorar más sobre eso.",
        "Te recomiendo usar Flexbox para organizar layouts.",
        "Eso depende del contexto del diseño que quieras lograr.",
        "Buena práctica seguir experimentando con interfaces.",
        "Podrías investigar principios de UI/UX para mejorar.",
        "Es una buena duda, intenta dividir el problema en partes."
    ];

    const indice = Math.floor(Math.random() * respuestas.length);
    return respuestas[indice];
}

// Simular respuesta del asistente
function responderAsistente() {
    estaEscribiendo = true;
    render();

    setTimeout(() => {
        estaEscribiendo = false;
        chat.agregarMensaje("assistant", generarRespuesta());
        render();
    }, 1200);
}

// Eventos
document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("formChat");
    const input = document.getElementById("inputMensaje");
    const botonLimpiar = document.getElementById("limpiarChat");

    // enviar mensaje
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const texto = input.value.trim();
        if (texto === "") return;

        chat.agregarMensaje("user", texto);
        input.value = "";

        render();
        responderAsistente();
    });

    // limpiar chat
    botonLimpiar.addEventListener("click", () => {
        chat.limpiarChat();
        render();
    });

    // mensaje inicial (opcional pero recomendable)
    chat.agregarMensaje("assistant", "Hola, ¿en qué puedo ayudarte hoy?");
    render();
});