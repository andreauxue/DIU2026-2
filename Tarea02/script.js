class Mensaje {
  constructor(tipo, texto, hora, esIndicador = false) {
    this.tipo = tipo;
    this.texto = texto;
    this.hora = hora;
    this.esIndicador = esIndicador;
  }

  render() {
    const claseExtra = this.esIndicador ? "typing" : "";
    return `
      <article class="message ${this.tipo} ${claseExtra}">
        <div>${this.texto}</div>
        <span class="message-meta">${this.hora}</span>
      </article>
    `;
  }
}

class Chat {
  constructor() {
    this.mensajes = [];
  }

  agregarMensaje(mensaje) {
    this.mensajes.push(mensaje);
  }

  limpiarConversacion() {
    this.mensajes = [];
  }

  contarMensajes() {
    return this.mensajes.filter((mensaje) => !mensaje.esIndicador).length;
  }

  obtenerMensajes() {
    return this.mensajes;
  }

  activarIndicadorEscritura() {
    this.removerIndicadorEscritura();
    const indicador = new Mensaje("assistant", "El asistente está escribiendo...", obtenerHoraActual(), true);
    this.agregarMensaje(indicador);
  }

  removerIndicadorEscritura() {
    this.mensajes = this.mensajes.filter((mensaje) => !mensaje.esIndicador);
  }
}

const chat = new Chat();

const form = document.getElementById("chat-form");
const input = document.getElementById("message-input");
const messagesContainer = document.getElementById("messages");
const countElement = document.getElementById("message-count");
const clearButton = document.getElementById("clear-btn");

function obtenerHoraActual() {
  return new Date().toLocaleTimeString("es-MX", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function escaparHTML(texto) {
  const reemplazos = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };

  return texto.replace(/[&<>"']/g, (caracter) => reemplazos[caracter]);
}

function generarRespuestaAutomatica(textoUsuario) {
  const respuestasBase = [
    "Entiendo. Cuéntame un poco más para ayudarte mejor.",
    "Gracias por tu mensaje. Estoy procesando lo que escribiste.",
    "Puedo ayudarte con eso. ¿Quieres que lo resumamos paso a paso?",
    "Suena interesante. Dame más contexto y continuamos.",
  ];

  const texto = textoUsuario.toLowerCase();

  if (texto.includes("hola")) {
    return "¡Hola! Soy el asistente del chat. ¿En qué te ayudo?";
  }

  if (texto.includes("tarea")) {
    return "Claro. Podemos revisar tu tarea paso a paso y mantener todo organizado.";
  }

  if (texto.includes("gracias")) {
    return "¡Con gusto! Si necesitas algo más, aquí sigo.";
  }

  const indice = Math.floor(Math.random() * respuestasBase.length);
  return respuestasBase[indice];
}

function render() {
  messagesContainer.innerHTML = "";

  const mensajes = chat.obtenerMensajes();

  if (mensajes.length === 0) {
    messagesContainer.innerHTML = `
      <div class="empty-state">
        <p>No hay mensajes todavía. Escribe el primero.</p>
      </div>
    `;
  } else {
    messagesContainer.innerHTML = mensajes.map((mensaje) => mensaje.render()).join("");
  }

  countElement.textContent = chat.contarMensajes();
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function manejarEnvioMensaje(evento) {
  evento.preventDefault();

  const texto = input.value.trim();

  if (!texto) {
    return;
  }

  const mensajeUsuario = new Mensaje("user", escaparHTML(texto), obtenerHoraActual());
  chat.agregarMensaje(mensajeUsuario);
  input.value = "";
  render();

  chat.activarIndicadorEscritura();
  render();

  setTimeout(() => {
    chat.removerIndicadorEscritura();
    const respuesta = new Mensaje(
      "assistant",
      escaparHTML(generarRespuestaAutomatica(texto)),
      obtenerHoraActual()
    );
    chat.agregarMensaje(respuesta);
    render();
  }, 1200);
}

function manejarLimpieza() {
  chat.limpiarConversacion();
  render();
}

form.addEventListener("submit", manejarEnvioMensaje);
clearButton.addEventListener("click", manejarLimpieza);

chat.agregarMensaje(
  new Mensaje("assistant", "Bienvenido. Este chat funciona con estado + render + POO.", obtenerHoraActual())
);

render();
