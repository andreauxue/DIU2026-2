/**
 * Arreglo global que representa la única fuente de verdad del estado del chat.
 * Contiene instancias de {@link Mensaje}.
 * @type {Mensaje[]}
 */
const mensajes = [];

/**
 * Representa un mensaje dentro del chat.
 * Encapsula tanto los datos como la representación HTML del mismo.
 */
class Mensaje {
  /**
   * Crea una nueva instancia de Mensaje.
   *
   * @param {"usuario"|"asistente"} tipo Tipo de emisor del mensaje.
   * @param {string} texto Contenido del mensaje en texto plano.
   */
  constructor(tipo, texto) {
    /**
     * Tipo de mensaje.
     * @type {"usuario"|"asistente"}
     */
    this.tipo = tipo;

    /**
     * Texto del mensaje (sin procesar).
     * @type {string}
     */
    this.texto = texto;

    /**
     * Hora de creación formateada.
     * @type {string}
     */
    this.hora = new Date().toLocaleTimeString("es-MX", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  /**
   * Genera la representación HTML del mensaje.
   *
   * @returns {string} Cadena HTML para insertarse en el DOM.
   *
   * @example
   * const html = mensaje.render();
   */
  render() {
    const clase =
      this.tipo === "usuario"
        ? "mensaje-usuario"
        : "mensaje-asistente";

    return `
      <article class="mensaje ${clase}" data-nuevo="true">
        <p>${this.texto}</p>
        <time class="mensaje-hora">${this.hora}</time>
      </article>
    `;
  }
}

/**
 * Controlador principal del chat.
 * Gestiona el estado global y coordina la actualización de la UI.
 */
class Chat {
  /**
   * Inicializa el controlador del chat.
   */
  constructor() {
    /**
     * Referencia al estado global de mensajes.
     * @type {Mensaje[]}
     * @private
     */
    this._mensajes = mensajes;

    /**
     * Contador interno de mensajes agregados.
     * @type {number}
     * @private
     */
    this._contador = 0;
  }

  /**
   * Agrega un mensaje al estado y actualiza la interfaz.
   *
   * @param {Mensaje} mensaje Instancia de mensaje a agregar.
   * @returns {void}
   */
  agregarMensaje(mensaje) {
    this._mensajes.push(mensaje);
    this._contador++;
    render();
  }

  /**
   * Elimina todos los mensajes del chat y reinicia el contador.
   *
   * @returns {void}
   */
  limpiarChat() {
    this._mensajes.length = 0;
    this._contador = 0;
    render();
  }

  /**
   * Obtiene el número actual de mensajes.
   *
   * @returns {number} Cantidad de mensajes en el estado.
   */
  contarMensajes() {
    return this._mensajes.length;
  }
}

/**
 * Renderiza completamente la interfaz del chat.
 *
 * @returns {void}
 */
function render() {
  const contenedor = document.getElementById("contenedor-mensajes");
  const contadorEl = document.getElementById("contador-mensajes");
  const tipeoEl = document.getElementById("tipeo");

  contenedor.innerHTML = mensajes.map(m => m.render()).join("");

  const total = chat.contarMensajes();
  contadorEl.textContent =
    total === 1 ? "1 mensaje" : `${total} mensajes`;

  contenedor.scrollTop = contenedor.scrollHeight;

  if (tipeoEl) tipeoEl.remove();
}

/**
 * Inserta un indicador visual de "el asistente está escribiendo".
 *
 * @returns {void}
 */
function mostrarTipeo() {
  const contenedor = document.getElementById("contenedor-mensajes");

  const el = document.createElement("article");
  el.id = "tipeo";
  el.className = "mensaje mensaje-asistente tipeo";
  el.innerHTML = `
    <span class="punto"></span>
    <span class="punto"></span>
    <span class="punto"></span>
  `;

  contenedor.appendChild(el);
  contenedor.scrollTop = contenedor.scrollHeight;
}

/**
 * Base de conocimiento basada en palabras clave.
 * @type {{palabras: string[], texto: string}[]}
 */
const respuestas = [ 
  { 
    palabras: ["tipografía", "fuente", "font", "texto"], texto: "Una buena tipografía mejora la legibilidad y la jerarquía visual. Lo ideal es usar máximo 2-3 familias: una para títulos y otra para cuerpo. El tamaño base recomendado es 16px.", 
  },
  { 
    palabras: ["color", "paleta", "contraste", "tono"], texto: "El color en UI no es solo estética: el contraste adecuado (WCAG AA requiere 4.5:1 en texto) garantiza accesibilidad. Herramientas como Coolors o Adobe Color ayudan a construir paletas coherentes.", 
  }
 ];
 
/**
 * Respuesta por defecto cuando no hay coincidencias.
 * @type {string}
 */
const respuestaDefault =
  "Interesante pregunta sobre diseño de interfaces...";

/**
 * Obtiene una respuesta automática basada en coincidencias de texto.
 *
 * @param {string} texto Entrada del usuario.
 * @returns {string} Respuesta generada.
 */
function obtenerRespuesta(texto) {
  const textoMin = texto.toLowerCase();

  const coincidencia = respuestas.find(r =>
    r.palabras.some(p => textoMin.includes(p))
  );

  return coincidencia ? coincidencia.texto : respuestaDefault;
}

/**
 * Maneja el flujo completo de envío de un mensaje:
 *
 * @returns {void}
 */
function enviarMensaje() {
  // 1. Captura y validación del input
  const input = document.getElementById("mensaje");
  const texto = input.value.trim();

  if (!texto) return;

  input.value = "";

  // 2. Actualiza estado con el nuevo mensaje del usuario
  chat.agregarMensaje(new Mensaje("usuario", texto));

  // 3. Muestra indicador de tipeo del asistente
  mostrarTipeo();

  // 4. Genera respuesta simulada con retraso aleatorio
  setTimeout(() => {
    const respuesta = obtenerRespuesta(texto);
    chat.agregarMensaje(new Mensaje("asistente", respuesta));
  }, 1200 + Math.random() * 600);
}

/**
 * Instancia única del controlador del chat.
 * @type {Chat}
 */
const chat = new Chat();

/**
 * Inicializa eventos del DOM una vez cargado el documento.
 */
document.addEventListener("DOMContentLoaded", () => {
  render();

  document
    .getElementById("btn-enviar")
    .addEventListener("click", enviarMensaje);

  document
    .getElementById("mensaje")
    .addEventListener("keydown", e => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        enviarMensaje();
      }
    });

  document
    .getElementById("btn-limpiar")
    .addEventListener("click", () => {
      chat.limpiarChat();
    });
});