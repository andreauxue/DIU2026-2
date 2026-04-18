// estado global (fuente de verdad)
let mensajes = [];

// clase Mensaje
class Mensaje {
    constructor(tipo, texto) {
        this.tipo = tipo;
        this.texto = texto;
        this.hora = new Date().toLocaleTimeString();
    }

    render() {
        return `
        <article class="mensaje ${this.tipo}">
            <p>${this.texto}</p>
            <small>${this.hora}</small>
        </article>
        `;
    }
}

// clase Chat
class Chat {
    agregarMensaje(tipo, texto) {
        mensajes.push(new Mensaje(tipo, texto));
        render();
    }

    limpiar() {
        mensajes = [];
        render();
    }

    contar() {
        return mensajes.length;
    }
}

const chat = new Chat();

// render global
function render() {
    const chatContainer = document.getElementById("chat");
    const contador = document.getElementById("contador");

    // limpiar
    chatContainer.innerHTML = "";

    // reconstruir
    mensajes.forEach(msg => {
        chatContainer.innerHTML += msg.render();
    });

    contador.textContent = "Mensajes: " + chat.contar();
}

// formulario
document.getElementById("formulario").addEventListener("submit", (e) => {
    e.preventDefault();

    const input = document.getElementById("mensaje");
    const texto = input.value;

    chat.agregarMensaje("usuario", texto);
    input.value = "";

    // indicador escribiendo
    setTimeout(() => {
        chat.agregarMensaje("asistente", "Déjame pensar...");
    }, 500);

    setTimeout(() => {
        chat.agregarMensaje("asistente", generarRespuesta());
    }, 1500);
});

// botón limpiar
document.getElementById("limpiar").addEventListener("click", () => {
    chat.limpiar();
});

// respuestas simples
function generarRespuesta() {
    const respuestas = [
        "Revisa si la cámara tiene otro agujero.",
        "Asegúrate de inflar bien la llanta.",
        "Podrías necesitar cambiar la cámara.",
        "Usa parches adecuados para bicicleta."
    ];

    return respuestas[Math.floor(Math.random() * respuestas.length)];
}