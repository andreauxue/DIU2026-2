// =======================
// Clase Mensaje
// =======================
class Mensaje {
    constructor(tipo, texto) {
        this.tipo = tipo; // "user" o "assistant"
        this.texto = texto;
        this.hora = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    }

    render() {
        return `
        <article class="message ${this.tipo}">
            <div class="bubble">
                <p>${this.texto}</p>
                <span class="hora">${this.hora}</span>
            </div>
        </article>
        `;
    }
}

// =======================
// Clase Chat (estado)
// =======================
class Chat {
    constructor() {
        this.mensajes = [];
    }

    agregarMensaje(mensaje) {
        this.mensajes.push(mensaje);
    }

    limpiarChat() {
        this.mensajes = [];
    }

    contarMensajes() {
        return this.mensajes.length;
    }
}

// =======================
// Estado global
// =======================
const chat = new Chat();

// =======================
// Render global
// =======================
function render() {
    const chatContainer = document.getElementById("chat");
    const contador = document.getElementById("contador");

    // limpiar interfaz
    chatContainer.innerHTML = "";

    // reconstruir mensajes
    chat.mensajes.forEach(m => {
        chatContainer.innerHTML += m.render();
    });

    // actualizar contador
    contador.textContent = chat.contarMensajes();

    // scroll automático
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// =======================
// Elementos
// =======================
const form = document.getElementById("form");
const input = document.getElementById("input");
const limpiarBtn = document.getElementById("limpiar");

// =======================
// Respuestas del asistente (ORIGINAL)
// =======================
function generarRespuesta(texto) {

    const respuestas = [
        "Interesante 👀, podrías mejorar eso con mejor jerarquía visual.",
        "Eso suena bien, intenta usar Flexbox o Grid.",
        "Podrías revisar accesibilidad y contraste.",
        "Buen punto, piensa en la experiencia del usuario.",
        "Tal vez puedes simplificar el diseño.",
        "Eso se puede optimizar con mejores componentes UI."
    ];

    return respuestas[Math.floor(Math.random() * respuestas.length)];
}

// =======================
// Enviar mensaje
// =======================
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const texto = input.value.trim();

    if (texto === "") return;

    // mensaje usuario
    const msgUser = new Mensaje("user", texto);
    chat.agregarMensaje(msgUser);

    input.value = "";
    render();

    // mensaje "escribiendo..."
    const typingMsg = new Mensaje("assistant", "Escribiendo...");
    chat.agregarMensaje(typingMsg);
    render();

    // respuesta automática
    setTimeout(() => {
        // quitar "escribiendo"
        chat.mensajes.pop();

        const respuesta = new Mensaje("assistant", generarRespuesta(texto));
        chat.agregarMensaje(respuesta);

        render();
    }, 1200);
});

// =======================
// Limpiar chat
// =======================
limpiarBtn.addEventListener("click", () => {
    chat.limpiarChat();
    render();
});

// =======================
// Mensajes iniciales (para que no esté vacío)
// =======================
chat.agregarMensaje(new Mensaje("assistant", "Hola, soy tu asistente de interfaces 👋"));
chat.agregarMensaje(new Mensaje("assistant", "Puedes preguntarme sobre diseño, HTML o CSS."));

render();