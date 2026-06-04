
class Mensaje {
    constructor(tipo, texto, hora) {
        this.tipo = tipo;      
        this.texto = texto;
        this.hora = hora || this.obtenerHoraActual();
    }

    obtenerHoraActual() {
        const ahora = new Date();
        let horas = ahora.getHours();
        let minutos = ahora.getMinutes();
        if (minutos < 10) minutos = "0" + minutos;
        return `${horas}:${minutos}`;
    }

    render() {
        const article = document.createElement("article");
        article.classList.add("mensaje", this.tipo);
        
        const parrafo = document.createElement("p");
        parrafo.textContent = this.texto;
        
        const small = document.createElement("small");
        small.textContent = this.hora;
        small.style.display = "block";
        small.style.fontSize = "0.7rem";
        small.style.marginTop = "5px";
        small.style.opacity = "0.7";
        
        article.appendChild(parrafo);
        article.appendChild(small);
        
        return article;
    }
}


class Chat {
    constructor() {
        this.mensajes = [];
    }

    agregarMensaje(tipo, texto, hora) {
        const nuevoMensaje = new Mensaje(tipo, texto, hora);
        this.mensajes.push(nuevoMensaje);
        return nuevoMensaje;
    }

    limpiar() {
        this.mensajes = [];
    }

    contar() {
        return this.mensajes.length;
    }
}


const chat = new Chat();

const formulario = document.querySelector("form");  
const inputMensaje = document.getElementById("mensaje");
const areaMensajes = document.querySelector(".chat-area");  
const botonLimpiar = document.getElementById("limpiar-chat");


const respuestasAsistente = [
    "Es una duda de suma importancia.Puedes agregar mas detalles",
    "Sigue tu desarrollo creativo, es importaante conforme avances logres adaptarlo a tu idea princiap.",
    "La experencia de usuraio es crítica para el éxito web, ya que determina la retención, conversión y lealtad del cliente",
    "Los usuarios prefieren sitios fáciles de usar, lo que fomenta su regreso y fidelidad a la marca.",
    "HTML debe estructurarse pensando primero en dispositivos móviles, asegurando que el contenido se adapte a cualquier tamaño de pantalla.",
    "Mejora la reputación del sitio y ayuda a diferenciarlo de la competencia.",
    " Crear formularios con etiquetas claras y asociadas correctamente a sus campos para facilitar la entrada de datos."
];


function render() {
    // Limpiar el área de mensajes
    areaMensajes.innerHTML = "";
    
    // Recorrer el estado y agregar cada mensaje
    for (let mensaje of chat.mensajes) {
        areaMensajes.appendChild(mensaje.render());
    }
    
    // Scroll al final
    areaMensajes.scrollTop = areaMensajes.scrollHeight;
}


function obtenerHoraActual() {
    const ahora = new Date();
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    if (minutos < 10) minutos = "0" + minutos;
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
    parrafo.textContent = "✍️ DIU Assistant está escribiendo...";
    article.appendChild(parrafo);
    areaMensajes.appendChild(article);
    areaMensajes.scrollTop = areaMensajes.scrollHeight;
}

function quitarIndicadorEscribiendo() {
    const indicador = document.getElementById("indicador-escribiendo");
    if (indicador) indicador.remove();
}


function responderComoAsistente() {
    mostrarIndicadorEscribiendo();
    
    setTimeout(() => {
        quitarIndicadorEscribiendo();
        const respuesta = obtenerRespuestaAleatoria();
        const horaRespuesta = obtenerHoraActual();
        
        chat.agregarMensaje("asistente", respuesta, horaRespuesta);
        render();
    }, 1500);
}


function enviarMensaje(evento) {
    evento.preventDefault();
    
    const textoUsuario = inputMensaje.value.trim();
    if (textoUsuario === "") return;
    
    const hora = obtenerHoraActual();
    
    chat.agregarMensaje("usuario", textoUsuario, hora);
    render();
    
    inputMensaje.value = "";
    inputMensaje.focus();
    
    responderComoAsistente();
}


function limpiarChat() {
    chat.limpiar();
    render();
}


function cargarMensajesIniciales() {
    const historialInicial = [
        { tipo: "usuario", mensaje: "¿Qué significa HTML?", hora: obtenerHoraActual() },
        { tipo: "asistente", mensaje: "HyperText Markup Language - Lenguaje de Marcado de Hipertexto, es el estándar fundamental para crear y estructurar páginas web", hora: obtenerHoraActual() },
        { tipo: "usuario", mensaje: "¿Quién lo creó?", hora: obtenerHoraActual() },
        { tipo: "asistente", mensaje: "Fue creado por Tim Berners-Lee en el CERN en 1989-1991", hora: obtenerHoraActual() },
        { tipo: "usuario", mensaje: "¿Cuál es la versión más actual?", hora: obtenerHoraActual() },
        { tipo: "asistente", mensaje: "HTML 5.2/5.3: Actualizaciones centradas en la accesibilidad, rendimiento y mejoras en los formularios.", hora: obtenerHoraActual() }
    ];
    
    for (let msg of historialInicial) {
        chat.agregarMensaje(msg.tipo, msg.mensaje, msg.hora);
    }
    
    render();
}


if (formulario) {
    formulario.addEventListener("submit", enviarMensaje);
}
if (botonLimpiar) {
    botonLimpiar.addEventListener("click", limpiarChat);
}


cargarMensajesIniciales();

console.log("✅ Chat con POO funcionando correctamente");