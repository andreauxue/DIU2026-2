class Mensaje {
  constructor(tipo, texto, hora) {
    this.tipo = tipo;
    this.texto = texto;
    this.hora = hora;
  }

  render() {
    return `
      <article class="mensaje ${this.tipo}">
        <p class="mensaje-texto">${this.texto}</p>
        <span class="mensaje-hora">${this.hora}</span>
      </article>
    `;
  }
}

class Chat {
  constructor() {
    this.mensajes = [];
    this.escribiendo = false;
  }

  agregarMensaje(tipo, texto) {
    const hora = this.obtenerHoraActual();
    const mensaje = new Mensaje(tipo, texto, hora);
    this.mensajes.push(mensaje);
  }

  limpiarConversacion() {
    this.mensajes = [];
    this.escribiendo = false;
  }

  contarMensajes() {
    return this.mensajes.length;
  }

  obtenerHoraActual() {
    const ahora = new Date();
    return ahora.toLocaleTimeString("es-MX", {
      hour: "2-digit",
      minute: "2-digit"
    });
  }

  generarRespuestaAutomatica(textoUsuario) {
  const texto = textoUsuario.toLowerCase().trim();

  if (texto.includes("hola") || texto.includes("buenas") || texto.includes("qué tal") || texto.includes("que tal")) {
    return "¡Hola! ¿En qué puedo ayudarte hoy?";
  }

  if (texto.includes("como estas") || texto.includes("cómo estás")) {
    return "Estoy muy bien, gracias por preguntar. ¿Y tú?";
  }

  if (texto.includes("tarea") || texto.includes("trabajo")) {
    return "Recuerda organizar tu trabajo por pasos y validar cada funcionalidad.";
  }

  if (texto.includes("javascript") || texto.includes("js")) {
    return "JavaScript permite agregar interactividad a la interfaz y manipular el comportamiento del sistema.";
  }

  if (texto.includes("html")) {
    return "HTML se encarga de la estructura del contenido en la página.";
  }

  if (texto.includes("css")) {
    return "CSS se usa para dar estilo, color y distribución visual a los elementos.";
  }

  if (texto.includes("dom")) {
    return "El DOM representa la estructura de la página y permite modificarla con JavaScript.";
  }

  if (texto.includes("render")) {
    return "Renderizar significa reconstruir la interfaz a partir del estado actual del sistema.";
  }

  if (texto.includes("mensaje") || texto.includes("mensajes")) {
    return "Cada mensaje debe guardarse en el arreglo principal para que el estado sea la fuente de verdad.";
  }

  if (texto.includes("contador")) {
    return "El contador debe actualizarse dinámicamente cada vez que cambia el estado del chat.";
  }

  if (texto.includes("limpiar")) {
    return "El botón limpiar debe vaciar el arreglo de mensajes y volver a renderizar la interfaz.";
  }

  if (texto.includes("poo") || texto.includes("objetos") || texto.includes("clase")) {
    return "La programación orientada a objetos ayuda a organizar mejor el código mediante clases y métodos.";
  }

  if (texto.includes("error") || texto.includes("problema")) {
    return "Si algo falla, conviene revisar primero la conexión entre HTML, CSS y JavaScript.";
  }

  if (texto.includes("ayuda")) {
    return "Claro, dime qué parte necesitas resolver y te apoyo paso a paso.";
  }

  if (texto.includes("gracias")) {
    return "¡De nada! Estoy para ayudarte.";
  }

  if (texto.includes("adiós") || texto.includes("adios") || texto.includes("bye")) {
    return "¡Hasta luego! Éxito con tu tarea.";
  }

  return "Mensaje guardado. El asistente ha recibido tu texto.";
}
}

const chat = new Chat();

const areaMensajes = document.getElementById("areaMensajes");
const contadorMensajes = document.getElementById("contadorMensajes");
const formChat = document.getElementById("formChat");
const inputMensaje = document.getElementById("inputMensaje");
const mensajeError = document.getElementById("mensajeError");
const btnLimpiar = document.getElementById("btnLimpiar");

function render() {
  areaMensajes.innerHTML = "";

  if (chat.mensajes.length === 0) {
    areaMensajes.innerHTML = `<p class="estado-vacio"> Aun no hay mensajes.</p>`;
  } else {
    let htmlMensajes = "";

    chat.mensajes.forEach((mensaje) => {
      htmlMensajes += mensaje.render();
    });

    if (chat.escribiendo) {
      htmlMensajes += `<div class="indicador-escritura">El asistente esta escribiendo...</div>`;
    }

    areaMensajes.innerHTML = htmlMensajes;
  }

  contadorMensajes.textContent = chat.contarMensajes();
  areaMensajes.scrollTop = areaMensajes.scrollHeight;
}

function mostrarError(texto) {
  mensajeError.textContent = texto;
}

function limpiarError() {
  mensajeError.textContent = "";
}

formChat.addEventListener("submit", function (event) {
  event.preventDefault();

  const texto = inputMensaje.value.trim();

  if (texto === "") {
    mostrarError("Debes escribir un mensaje.");
    return;
  }

  limpiarError();

  chat.agregarMensaje("usuario", texto);
  inputMensaje.value = "";
  render();

  chat.escribiendo = true;
  render();

  setTimeout(() => {
    chat.escribiendo = false;

    const respuesta = chat.generarRespuestaAutomatica(texto);
    chat.agregarMensaje("asistente", respuesta);

    render();
  }, 1200);
});

btnLimpiar.addEventListener("click", function () {
  chat.limpiarConversacion();
  limpiarError();
  render();
});

inputMensaje.addEventListener("input", limpiarError);

render();