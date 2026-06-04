const formulario = document.getElementById("formulario-chat");
const inputMensaje = document.getElementById("mensaje");
const areaMensajes = document.getElementById("area-mensajes");
const contador = document.getElementById("contador");
const botonLimpiar = document.getElementById("limpiar-chat");

let historialMensajes = [
    { tipo: "usuario", mensaje: "Cómo mejorar un formulario???", hora: obtenerHoraActual() },
    { tipo: "asistente", mensaje: "Te recomiendo usar etiquetas claras y buen contraste ", hora: obtenerHoraActual() },
    { tipo: "usuario", mensaje: "Qué es html semántico?¡?", hora: obtenerHoraActual() },
    { tipo: "asistente", mensaje: "Es el uso de etiquetas HTML que describen el significado del contenido", hora: obtenerHoraActual() },
    { tipo: "usuario", mensaje: "Por qué tengo que usar label en los formularios?????", hora: obtenerHoraActual() },
    { tipo: "asistente", mensaje: "Porque mejora la accesibilidad y permite que lectores de pantalla identifiquen correctamente los campos.", hora: obtenerHoraActual() },
];

const respuestasAsistente = [
    "Hola, ¿En que puedo ayudarte con tu formulario? ",
    "Evita pedir más información de la necesaria en el formulario",
    "Piensa primero en la experiencia de usuario.",
    "Te recomiendo revisar la estructura del formulario.",
    "Asegúrate de mostrar mensajes de error claros y específicos."
]

function obtenerHoraActual() {
    const ahora = new Date();
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    
    if (minutos < 10) {
        minutos = "0" + minutos;
    }
    
    return `${horas}:${minutos}`;
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
    parrafo.textContent = "DIU Assistant está escribiendo..."
    
    article.appendChild(parrafo);
    areaMensajes.appendChild(article);
}

function quitarIndicadorEscribiendo() {
    const indicador = document.getElementById("indicador-escribiendo");
    if (indicador) {
        indicador.remove();
    }
}

class Mensaje {
    constructor(tipo, texto, hora) {
        this.tipo = tipo;
        this.texto = texto;
        this.hora = hora;
    }
    
    render() {
        const article = document.createElement("article");
        article.classList.add("mensaje", this.tipo);
        
        const parrafo = document.createElement("p");
        parrafo.textContent = this.texto;
        
        const small = document.createElement("small");
        small.textContent = this.hora;
        
        article.appendChild(parrafo);
        article.appendChild(small);
        
        return article;
    }
}

class Chat {
    constructor(mensajesIniciales) {
        this.mensajes = [];
        for (let i = 0; i < mensajesIniciales.length; i++) {
            const msg = mensajesIniciales[i];
            this.mensajes.push(new Mensaje(msg.tipo, msg.mensaje, msg.hora));
        }
    }
    
    agregarMensaje(tipo, texto, hora) {
        const nuevoMensaje = new Mensaje(tipo, texto, hora);
        this.mensajes.push(nuevoMensaje);
    }
    
    limpiarConversacion() {
        this.mensajes = [];
    }
    
    contarMensajes() {
        return this.mensajes.length;
    }
}

function render() {
    areaMensajes.innerHTML = "";
    
    for (let i = 0; i < chat.mensajes.length; i++) {
        const mensaje = chat.mensajes[i];
        const elementoHTML = mensaje.render();
        areaMensajes.appendChild(elementoHTML);
    }
    
    contador.textContent = `Mensajes en la conversación: ${chat.contarMensajes()}`;
}


const chat = new Chat(historialMensajes);

function actualizarContador() {
    contador.textContent = `Mensajes en la conversación: ${chat.contarMensajes()}`;
}

function agregarMensajeAlChat(tipo, texto, hora) {
    chat.agregarMensaje(tipo, texto, hora);
    render();
}

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    const textoUsuario = inputMensaje.value.trim();
    if (textoUsuario === "") {
        return;
    }
    
    const hora = obtenerHoraActual();
    
    chat.agregarMensaje("usuario", textoUsuario, hora);
    
    render();
    
    inputMensaje.value = "";
    inputMensaje.focus();
    
    mostrarIndicadorEscribiendo();
    
    setTimeout(function() {
        quitarIndicadorEscribiendo();
        const respuesta = obtenerRespuestaAleatoria();
        const horaRespuesta = obtenerHoraActual();
        
        chat.agregarMensaje("asistente", respuesta, horaRespuesta);
        render();
    }, 1500);
});

botonLimpiar.addEventListener("click", function() {
    chat.limpiarConversacion();
    quitarIndicadorEscribiendo();
    render();
});

render();
