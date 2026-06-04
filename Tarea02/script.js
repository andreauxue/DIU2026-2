
class Mensaje {
    constructor(tipo, texto) {
        this.tipo = tipo; // usuario o asistente
        this.texto = texto;
        
        // Generar hora actual
        const fecha = new Date();
        this.hora = fecha.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); 
    }

    // Método render individual que devuelve el HTML
    render() {
        return `
            <div class="mensaje-wrapper ${this.tipo}">
                <div class="burbuja">${this.texto}</div>
                <span class="hora">${this.hora}</span>
            </div>
        `;
    }
}

class Chat {
    constructor() {
        // La fuente de verdad del sistema
        this.estado = {
            mensajes: [],
            asistenteEscribiendo: false // Para manejar el indicador dinámico
        };
        
        // Referencias al DOM
        this.DOM = {
            area: document.getElementById('area-mensajes'),
            contador: document.getElementById('contador-ui')
        };
    }

    agregarMensaje(mensaje) { 
        this.estado.mensajes.push(mensaje);
        this.renderGlobal(); // Siempre re-renderizamos al cambiar el estado
    }

    limpiarConversacion() {
        this.estado.mensajes = [];
        this.renderGlobal();
    }

    contarMensajes() {
        return this.estado.mensajes.length;
    }

    setEscribiendo(isTyping) {
        this.estado.asistenteEscribiendo = isTyping;
        this.renderGlobal();
    }

    // Función global de renderizado
    renderGlobal() {
        // 1. Limpiar el área de mensajes
        this.DOM.area.innerHTML = '';

        // 2. Recorrer el estado e inyectar el HTML
        let htmlAcumulado = '';
        this.estado.mensajes.forEach(msg => {
            htmlAcumulado += msg.render();
        });

        // 3. Reconstruir toda la interfaz incluyendo indicador de escribiendo
        if (this.estado.asistenteEscribiendo) {
            htmlAcumulado += `
                <div class="mensaje-wrapper asistente">
                    <div class="burbuja indicador-escribiendo">El asistente está escribiendo...</div>
                </div>
            `;
        }

        this.DOM.area.innerHTML = htmlAcumulado;

        // Actualizar contador
        this.DOM.contador.innerText = `Mensajes: ${this.contarMensajes()}`;

        // Auto-scroll hacia abajo
        this.DOM.area.scrollTop = this.DOM.area.scrollHeight;
    }
}

// Inicialización e interactividad del DOM
const miChat = new Chat();
const inputMensaje = document.getElementById('input-mensaje');
const btnEnviar = document.getElementById('btn-enviar');
const btnLimpiar = document.getElementById('btn-limpiar');

// Evento: Envío de mensaje
const manejarEnvio = () => {
    const texto = inputMensaje.value.trim();
    if (texto === '') return;

    // Crear y agregar mensaje del usuario
    const msgUsuario = new Mensaje('usuario', texto);
    miChat.agregarMensaje(msgUsuario);
    inputMensaje.value = '';

    // Simular respuesta automática
    miChat.setEscribiendo(true); // Muestra indicador está escribiendo
    
    setTimeout(() => {
        miChat.setEscribiendo(false); // Ocultar indicador
        const msgAsistente = new Mensaje('asistente', `He recibido tu mensaje: "${texto}". ¿En qué más puedo ayudarte?`);
        miChat.agregarMensaje(msgAsistente);
    }, 1500); // 1.5 segundos de retraso
};

// Listeners
btnEnviar.addEventListener('click', manejarEnvio);
inputMensaje.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') manejarEnvio();
});

btnLimpiar.addEventListener('click', () => {
    miChat.limpiarConversacion();
});

// Render inicial
miChat.renderGlobal();