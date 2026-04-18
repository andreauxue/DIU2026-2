/**
 * Representa un mensaje individual dentro de la conversación en el chat.
 * @class
 */
class Mensaje{

    /**
     * Crea una instancia de un nuevo mensaje.
     * @param {string} tipo - El que emite el mensaje. ['usuario','asistente']. 
     * @param {string} contenido - El contenido del mensanje. 
     */
    constructor(tipo, contenido){
        this.tipo = tipo;
        this.contenido = contenido;

        const ahora = new Date();
        this.hora = ahora.toLocaleTimeString('es-MX', {hour: '2-digit', minute: '2-digit'});
    }

    /**
     * Genera la estructura HTML correspondiente a un mensaje.
     * @returns {string} Una cadena de texto que contiene el HTML de un mensaje formateado.
     */
    render(){
        return `
            <article class="mensaje ${this.tipo}">
                <div class = "mensaje-contenido">
                    <p>${this.contenido}</p>
                    <span class = "hora-mensaje">${this.hora}</span>
                </div>
            </article>
        `;
    }
}


/**
 * Gestiona el estado global de la conversación y sincronica los datos con el DOM.
 * @class
 */
class Chat {

    /**
     * Inicializa el estado del chat con un historial vacío.
     * @constructor
     */
    constructor(){
        this.mensajes = [];
        this.asistenteEscribiendo = false;
    }

    /**
     * Añade un nuevo mensaje al historial y se actualiza la interfaz.
     * @param {Mensaje} mensaje - La instancia del mensaje a agregar.
     */
    agregarMensaje(mensaje){
        this.mensajes.push(mensaje);
        this.renderGlobal();
    }

    /**
     * Elimina todos los mensajes del historia y actualiza la interfaz.
     */
    limpiarConversacion(){
        this.mensajes = [];
        this.renderGlobal();
    }

    /**
     * Obtiene el número total de mensajes en la conversación actual.
     * @returns {number} La cantidad de mensajes en el array.
     */
    contarMensajes(){
        return this.mensajes.length;
    }

    /**
     * Cambia el estado de escritura del asistente.
     * @param {boolean} estado - true si el asistente está procesando, false en caso contrario.
     */
    setEscribiendo(estado){
        this.asistenteEscribiendo = estado;
        this.renderGlobal();
    }

    /**
     * Renderiza todo el estado actual del chat en el DOM.
     * Este método reconstruye el área de mensajes basada en el array `this.mensajes`.
     */
    renderGlobal(){
        const areaMensajes = document.getElementById('chat-area');
        const contador = document.getElementById('message-counter');

        areaMensajes.innerHTML = '';
        let htmlAcumulado = '';

        this.mensajes.forEach(msg => {
            htmlAcumulado += msg.render();
        })

        if (this.asistenteEscribiendo) {
            htmlAcumulado += `
                <article class="mensaje asistente escribiendo">
                    <div class="mensaje-contenido">
                        <p>El asistente está escribiendo...</p>
                    </div>
                </article>
            `;
        }

        areaMensajes.innerHTML = htmlAcumulado;
        
        if (contador) {
            contador.innerText = `Mensajes: ${this.contarMensajes()}`; 
        }

        areaMensajes.scrollTop = areaMensajes.scrollHeight;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const miChat = new Chat();
    const formulario = document.getElementById('chat-form');
    const inputMensaje = document.getElementById('message-input');
    const btnLimpiar = document.getElementById('clear-chat-btn');

    miChat.agregarMensaje(new Mensaje('asistente', '¡Hola! Soy tu asistente de DIUI.'));

    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        const texto = inputMensaje.value.trim();
        
        if (!texto) return;

        const nuevoMensaje = new Mensaje('usuario', texto);
        miChat.agregarMensaje(nuevoMensaje);
        inputMensaje.value = '';

        miChat.setEscribiendo(true);

        setTimeout(() => {
            miChat.setEscribiendo(false);
            
            const respuestasBot = [
                "¡Entiendo! ¿Hay algo más en lo que pueda ayudarte con este tema?",
                "Claro, dame un momento para procesar esa información.",
                "Esa es una excelente pregunta. Aquí estoy para resolver cualquier duda que tengas.",
                "No estoy seguro de entender completamente. ¿Podrías darme un poco más de contexto?",
                "¡Anotado! Si necesitas más detalles, no dudes en decírmelo.",
                "Me parece bien. Sigamos avanzando, ¿qué más necesitas saber?"
            ];
            const respuestaAleatoria = respuestasBot[Math.floor(Math.random() * respuestasBot.length)];
            
            const mensajeAsistente = new Mensaje('asistente', respuestaAleatoria);
            miChat.agregarMensaje(mensajeAsistente);

        }, 1800); 
    });

    btnLimpiar.addEventListener('click', () => {
        miChat.limpiarConversacion();
    });
});