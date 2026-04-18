
const estado = []; // aqui se guardan los mensajes del chat, cada mensaje es un objeto con tipo (usuario/asistente) y texto :3


class Mensaje {
    constructor(tipo, texto) {
        this.tipo = tipo;       //  puede ser usuario o asistente
        this.texto = texto;  // el contenido del mensaje
        this.hora = new Date().toLocaleTimeString('es-MX', {
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    // construye y devuelve el HTML del mensaje
    render() {
        const div = document.createElement('div');
        div.classList.add('mensaje', this.tipo);
        div.innerHTML = `
            <span>${this.texto}</span>
            <span style="font-size:11px; opacity:0.6; margin-left:10px;">${this.hora}</span>
        `;
        return div;
    }
}


class Chat { // clase para  el estado del chat y las operaciones de los mensajes 
    constructor() {
        this.mensajes = estado;
    }

    agregarMensaje(tipo, texto) { // funcion que agrega un mensaje al estado y redibuja el chat 
        const nuevoMensaje = new Mensaje(tipo, texto);
        this.mensajes.push(nuevoMensaje); // push agrega al final del arreglo
        render(); // redibuja todo desde el estado
    }

    limpiarConversacion() { // funcion para limpia la conversacion y redibuja el chat
        this.mensajes.length = 0; // 
        render();
    }

    contarMensajes() {
        return this.mensajes.length;
    }
}

// ================================
// RENDER GLOBAL - unica funcion que toca el DOM
// ================================
function render() {
    const chat = document.querySelector('.chat');
    const contador = document.getElementById('contador');
    const indicador = document.getElementById('indicador');

    chat.innerHTML = ''; // limpia el area de mensajes

    // recorre el estado y reconstruye cada mensaje
    estado.forEach(mensaje => {
        chat.appendChild(mensaje.render());
    });

    // el indicador siempre va al final, despues de los mensajes
    chat.appendChild(indicador);

    // actualiza el contador
    contador.textContent = `Mensajes: ${miChat.contarMensajes()}`;

    chat.scrollTop = chat.scrollHeight; // scroll al ultimo mensaje
}

// funcion para mostrar u ocultar el indicador "esta escribiendo"
function mostrarIndicador(visible) {
    const indicador = document.getElementById('indicador');
    indicador.style.display = visible ? 'block' : 'none';
    const chat = document.querySelector('.chat');
    chat.scrollTop = chat.scrollHeight;
}

// respuesta automatica del asistente con un pequeño delay
function respuestaAsistente() {
    mostrarIndicador(true); // muestra "escribiendo..."

    setTimeout(() => {
        mostrarIndicador(false); // esconde el indicador
        miChat.agregarMensaje('asistente', '¡Hola! Soy DIUI Assistent, ¿en qué te puedo ayudar?'); //respuesta 
    }, 1500); // espera 1.5 segundos antes de responder
}


const miChat = new Chat(); // referencia global al chat para usar en eventos

const formulario = document.getElementById('formularioDeMensaje'); // referencia al formulario de envio de mensajes
const inputMensaje = document.getElementById('mensaje'); //referencias para el chat
const btnLimpiar = document.getElementById('btnLimpiar'); //la referencia para el boton que limpia la conversacion

formulario.addEventListener('submit', (e) => { //addEventListener para detectar el submit del formulario
    e.preventDefault(); // evita que la pagina se recargue al enviar el formulario
    const texto = inputMensaje.value.trim(); // trim para elininar los espacios al inicio y al final
    if (texto === '') return;

    miChat.agregarMensaje('usuario', texto); // agrega mensaje del usuario
    respuestaAsistente();                    // lanza la respuesta automatica

    inputMensaje.value = ''; // limpia el input
    inputMensaje.focus(); // para volver a la cajita de input y no clickear manualmente 
});

// boton para limpiar toda la conversacion y el contador de mensajes
btnLimpiar.addEventListener('click', () => { // al hacer clic en el boton de limpiar
    miChat.limpiarConversacion(); // limpia el estado y redibuja el chat
});



// render sirve para mostrar el contador con 0 y el indicador oculto al inicio para que no se vea el "esta escribiendo" al cargar la pagina y que solo se muestre cuando el asistente este respondiendo (;
render();