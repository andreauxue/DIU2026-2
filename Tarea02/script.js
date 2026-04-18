
// ───────────────
// CLASE MENSAJE
// ───────────────
class Mensaje {
  constructor(tipo, texto) {
    this.tipo = tipo;
    this.texto = texto;
    this.hora = new Date().toLocaleTimeString();
  }

  render() {
    const clase = this.tipo === "usuario" ? "message--user" : "message--assistant";

    return `
      <div class="message ${clase}">
        <span class="message-time">${this.hora}</span>
        <div class="message-bubble">${this.texto}</div>
      </div>
    `;
  }
}

// ───────────────
// CLASE CHAT
// ───────────────
class Chat {
  constructor() {
    this.mensajes = [];
  }

  agregar(tipo, texto) {
    this.mensajes.push(new Mensaje(tipo, texto));
  }

  limpiar() {
    this.mensajes = [];
  }

  contar() {
    return this.mensajes.length;
  }
}

// Estado global
const chat = new Chat();

// ───────────────
// RENDER GLOBAL
// ───────────────
function render() {
  const contenedor = document.getElementById("chat-messages");
  const contador = document.getElementById("message-counter");

  contenedor.innerHTML = "";

  chat.mensajes.forEach(m => {
    contenedor.innerHTML += m.render();
  });

  contador.textContent = chat.contar() + " mensajes";

  contenedor.scrollTop = contenedor.scrollHeight;
}

// ───────────────
// DATOS
// ───────────────
const datos = [
  // Universo
  "El universo tiene aproximadamente 13,800 millones de años.",
  "Hay más estrellas en el universo observable que granos de arena en todas las playas de la Tierra.",
  "La luz del Sol tarda unos 8 minutos en llegar a la Tierra.",
  "Un año en Mercurio dura solo 88 días terrestres.",
  "El agujero negro M87* tiene una masa equivalente a 6,500 millones de soles.",
  "El espacio es completamente silencioso: no hay medio para que el sonido se propague.",
  "La Vía Láctea y Andrómeda colisionarán en unos 4,500 millones de años.",
  "Plutón es más pequeño que la Luna de la Tierra.",
  "En el espacio, las llamas son esféricas porque no hay gravedad que las dirija hacia arriba.",
  "El 95% del universo está compuesto por energía oscura y materia oscura que aún no comprendemos.",

  // UI
  "Una buena interfaz debe ser intuitiva y fácil de usar.",
  "El contraste de colores mejora la accesibilidad.",
  "Menos es más en diseño de interfaces.",
  "El feedback visual ayuda al usuario a entender acciones.",
  "Los botones deben ser claros y visibles.",
  "La consistencia es clave en una interfaz.",
  "El diseño centrado en el usuario mejora la experiencia.",
  "Las animaciones deben ser sutiles y útiles."
];

// ───────────────
// ENVIAR MENSAJE
// ───────────────
function enviarMensaje() {
  const input = document.getElementById("user-input");
  const texto = input.value.trim();

  if (texto === "") return;

  chat.agregar("usuario", texto);
  render();

  input.value = "";

  // Indicador "está escribiendo"
  const contenedor = document.getElementById("chat-messages");
  const typing = document.createElement("p");
  typing.id = "typing";
  typing.textContent = "DIUI está escribiendo...";
  contenedor.appendChild(typing);
  contenedor.scrollTop = contenedor.scrollHeight;

  setTimeout(() => {
    document.getElementById("typing").remove();
    const idx = Math.floor(Math.random() * datos.length);
    chat.agregar("asistente", datos[idx]);
    render();
  }, 1000);
}

// ───────────────
// EVENTOS
// ───────────────
document.getElementById("send-btn").addEventListener("click", enviarMensaje);

document.getElementById("user-input").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    enviarMensaje();
  }
});

document.getElementById("clear-btn").addEventListener("click", () => {
  chat.limpiar();
  render();
});

// ───────────────
// INICIO
// ───────────────
chat.agregar("asistente", "¡Hola! 👋 Soy DIUI Assistant. Puedo darte datos curiosos del universo 🌌 y de diseño de interfaces 🎨");
render();

