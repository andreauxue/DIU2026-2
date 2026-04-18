class Mensaje {
    constructor(tipo, texto, hora) {
        this.tipo = tipo;
        this.texto = texto;
        this.hora = hora;
    }

    render() {
        const nombre = this.tipo === 'usuario' ? 'Usuario' : 'Asistente';

        return `
            <article class="mensaje ${this.tipo}">
                <div class="mensaje-header">
                    <span class="mensaje-tipo">${nombre}</span>
                    <span class="mensaje-hora">${this.hora}</span>
                </div>
                <p class="mensaje-texto">${this.texto}</p>
            </article>
        `;
    }
}

class Chat {
    constructor(mensajes = []) {
        this.mensajes = mensajes;
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

    obtenerMensajes() {
        return this.mensajes;
    }
}

const respuestasAutomaticas = [
    'Claro, cuéntame más y te ayudo con eso.',
    'Puedo orientarte paso a paso con tu tarea.',
    'Buena idea. También podemos organizarlo por partes.',
    'Entendido. Revisemos juntos la mejor solución.',
    'Perfecto. Sigamos construyendo el chat con JavaScript y POO.'
];

function obtenerHoraActual() {
    return new Date().toLocaleTimeString('es-MX', {
        hour: '2-digit',
        minute: '2-digit'
    });
}

function escaparHTML(texto) {
    return texto
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
}

const estado = {
    chat: new Chat([
        new Mensaje('usuario', 'Hola, ¿puedes ayudarme con mi tarea?', '09:00'),
        new Mensaje('asistente', 'Claro, dime qué necesitas.', '09:01'),
        new Mensaje('usuario', 'Necesito hacer una interfaz de chat en HTML.', '09:02'),
        new Mensaje('asistente', 'Ahora también podemos convertirla en un sistema con estado y renderizado global.', '09:03')
    ]),
    escribiendo: false
};

function render() {
    const areaMensajes = document.getElementById('area-mensajes');
    const contadorMensajes = document.getElementById('contador-mensajes');

    areaMensajes.innerHTML = '';

    let interfaz = '';

    estado.chat.obtenerMensajes().forEach((mensaje) => {
        interfaz += mensaje.render();
    });

    if (estado.escribiendo) {
        interfaz += `
            <article class="mensaje escribiendo">
                <p class="mensaje-texto">El asistente está escribiendo...</p>
            </article>
        `;
    }

    areaMensajes.innerHTML = interfaz;
    contadorMensajes.textContent = estado.chat.contarMensajes();
    areaMensajes.scrollTop = areaMensajes.scrollHeight;
}

function generarRespuestaAutomatica() {
    const indice = Math.floor(Math.random() * respuestasAutomaticas.length);
    return respuestasAutomaticas[indice];
}

function manejarEnvio(evento) {
    evento.preventDefault();

    const input = document.getElementById('mensaje');
    const texto = input.value.trim();

    if (!texto) {
        return;
    }

    const mensajeUsuario = new Mensaje(
        'usuario',
        escaparHTML(texto),
        obtenerHoraActual()
    );

    estado.chat.agregarMensaje(mensajeUsuario);
    estado.escribiendo = true;
    input.value = '';
    render();

    setTimeout(() => {
        estado.escribiendo = false;

        const respuesta = new Mensaje(
            'asistente',
            generarRespuestaAutomatica(),
            obtenerHoraActual()
        );

        estado.chat.agregarMensaje(respuesta);
        render();
    }, 1200);
}

function manejarLimpieza() {
    estado.chat.limpiarConversacion();
    estado.escribiendo = false;
    render();
}

document.getElementById('form-chat').addEventListener('submit', manejarEnvio);
document.getElementById('btn-limpiar').addEventListener('click', manejarLimpieza);

render();
