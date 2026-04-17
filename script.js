class Mensaje {
    constructor(tipo, texto) {
        this.tipo = tipo;
        this.texto = texto;
        const ahora = new Date();
        this.hora = ahora.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    render() {
        const claseTipo = this.tipo === 'usuario' ? 'msg-user' : 'msg-ai';
        return `
            <article class="mensaje ${claseTipo}">
                <p>${this.texto}</p>
                <span class="hora-msg">${this.hora}</span>
            </article>
        `;
    }
}

class SistemaChat {
    constructor() {
        this.estadoMensajes = [];
    }

    agregarMensaje(mensaje) {
        this.estadoMensajes.push(mensaje);
        renderInterfazGlobal();
    }

    limpiarConversacion() {
        this.estadoMensajes = [];
        renderInterfazGlobal();
    }

    contarMensajes() {
        return this.estadoMensajes.length;
    }
}

const miChat = new SistemaChat();

function renderInterfazGlobal() {
    const areaChat = document.getElementById('area-chat');
    const contadorHTML = document.getElementById('contador-msg');

    areaChat.innerHTML = '';
    let htmlConstruido = '';
    
    miChat.estadoMensajes.forEach(msg => {
        htmlConstruido += msg.render();
    });

    areaChat.innerHTML = htmlConstruido;
    contadorHTML.textContent = miChat.contarMensajes();
    areaChat.scrollTop = areaChat.scrollHeight;
}

document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario-chat');
    const inputTexto = document.getElementById('chat-input');
    const btnLimpiar = document.getElementById('btn-limpiar');
    const indicador = document.getElementById('indicador-escribiendo');

    miChat.agregarMensaje(new Mensaje('asistente', 'Sistema inicializado. Esperando comandos...'));

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        const texto = inputTexto.value.trim();
        
        if (texto !== '') {
            miChat.agregarMensaje(new Mensaje('usuario', texto));
            inputTexto.value = '';
            indicador.classList.remove('oculto');
            
            setTimeout(() => {
                // Arreglo con frases estilo tech/hacker
                const respuestasTech = [
                    'Comando recibido. Procesando solicitud en el servidor...',
                    'Analizando la sintaxis de tu petición. Todo en orden.',
                    'Conexión segura establecida. Esperando nueva instrucción.',
                    'Ejecutando script de respuesta automática...',
                    'Ping exitoso. Sincronización de datos completada.'
                ];
                
                // Selecciona una frase al azar
                const respuestaAleatoria = respuestasTech[Math.floor(Math.random() * respuestasTech.length)];
                
                miChat.agregarMensaje(new Mensaje('asistente', respuestaAleatoria));
                indicador.classList.add('oculto');
            }, 1500);
        }
    });

    btnLimpiar.addEventListener('click', () => {
        miChat.limpiarConversacion();
    });
});