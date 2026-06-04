//  Tarea 02 · Diseño de Interfaces de Usuario

// ─── Respuestas automáticas del asistente ─────
const RESPUESTAS = [
  "Entiendo tu mensaje, te ayudo con algo más específico?",
  "Interesante punto. cuentame más",
  "Buen punto, hay algo más en lo que pueda asistirte?",
  "Eso es una muy buena pregunta. Necesito más contexto para responder",
];

//  CLASE: Mensaje
class Mensaje {
  /**
   * @param {'usuario'|'asistente'} tipo
   * @param {string} texto
   */
  constructor(tipo, texto) {
    this.tipo  = tipo;
    this.texto = texto;
    this.hora  = this._formatearHora(new Date());
  }

  /** Devuelve la hora actual formateada HH:MM */
  _formatearHora(fecha) {
    return fecha.toLocaleTimeString('es-MX', {
      hour:   '2-digit',
      minute: '2-digit',
    });
  }

  /**
   * Construye y devuelve el HTML del mensaje.
   * @returns {string} HTML string
   */
  render() {
    const esUsuario  = this.tipo === 'usuario';
    const claseRow   = esUsuario ? 'user' : 'assistant';
    const labelAvatar = esUsuario ? 'TÚ' : 'AI';

    return `
      <div class="message-row ${claseRow}">
        <div class="msg-avatar ${claseRow}">${labelAvatar}</div>
        <div class="msg-content">
          <div class="bubble ${claseRow}">${this._escaparHTML(this.texto)}</div>
          <span class="msg-time">${this.hora}</span>
        </div>
      </div>
    `;
  }

  /** Escapa caracteres HTML para evitar XSS */
  _escaparHTML(texto) {
    return texto
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/\n/g, '<br>');
  }
}

//  CLASE: Chat

class Chat {
  constructor() {
    this.mensajes = [];
  }

  agregar(mensaje) {
    this.mensajes.push(mensaje);
  }

  /** Limpia todos los mensajes del estado. */
  limpiar() {
    this.mensajes = [];
  }

  contarMensajes() {
    return this.mensajes.length;
  }
}

const chat = new Chat();


const $mensajesArea    = document.getElementById('messages-area');
const $typingIndicator = document.getElementById('typing-indicator');
const $msgCount        = document.getElementById('msg-count');
const $userInput       = document.getElementById('user-input');
const $sendBtn         = document.getElementById('send-btn');
const $clearBtn        = document.getElementById('clear-btn');

//  RENDER GLOBAL
function render() {
  // 1. Limpiar el área de mensajes
  $mensajesArea.innerHTML = '';

  // 2. Recorrer el estado y reconstruir la interfaz
  if (chat.contarMensajes() === 0) {
    $mensajesArea.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">◈</div>
        <span class="empty-text">Escribe un mensaje para comenzar</span>
      </div>
    `;
  } else {
    chat.mensajes.forEach((mensaje) => {
      $mensajesArea.insertAdjacentHTML('beforeend', mensaje.render());
    });
  }

  // 3. Actualizar contador de mensajes en sidebar
  $msgCount.textContent = chat.contarMensajes();

  // 4. Scroll al último mensaje
  $mensajesArea.scrollTop = $mensajesArea.scrollHeight;
}

//Detalles
/** Selecciona una respuesta aleatoria del asistente */
function obtenerRespuestaAsistente() {
  const idx = Math.floor(Math.random() * RESPUESTAS.length);
  return RESPUESTAS[idx];
}

/** Muestra u oculta el indicador "está escribiendo" */
function mostrarTyping(visible) {
  $typingIndicator.style.display = visible ? 'flex' : 'none';
  if (visible) $mensajesArea.scrollTop = $mensajesArea.scrollHeight;
}

/** Procesa el envío de un mensaje de usuario */
function enviarMensaje() {
  const texto = $userInput.value.trim();
  if (!texto) return;

  // Agregar mensaje del usuario al estado
  chat.agregar(new Mensaje('usuario', texto));

  // Limpiar input
  $userInput.value = '';
  $userInput.style.height = 'auto';

  // Renderizar con el nuevo mensaje del usuario
  render();

  // Deshabilitar input mientras el asistente "escribe"
  $userInput.disabled = true;
  $sendBtn.disabled   = true;

  // Simular respuesta del asistente con delay
  mostrarTyping(true);
  const delay = 1200 + Math.random() * 1000;

  setTimeout(() => {
    mostrarTyping(false);

    // Agregar respuesta del asistente al estado
    chat.agregar(new Mensaje('asistente', obtenerRespuestaAsistente()));

    // Renderizar con la respuesta
    render();

    // Re-habilitar input
    $userInput.disabled = false;
    $sendBtn.disabled   = false;
    $userInput.focus();
  }, delay);
}

/** Limpia todo el chat */
function limpiarChat() {
  chat.limpiar();
  render();
}

// Enviar con botón
$sendBtn.addEventListener('click', enviarMensaje);


// Auto-resize del textarea
$userInput.addEventListener('input', () => {
  $userInput.style.height = 'auto';
  $userInput.style.height = $userInput.scrollHeight + 'px';
});

// Limpiar chat
$clearBtn.addEventListener('click', limpiarChat);

render();
