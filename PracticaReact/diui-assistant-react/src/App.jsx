import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ChatArea from "./components/ChatArea";
import ChatForm from "./components/ChatForm";
import "./App.css";

//Respuestas (mismas que la tarea 2.)
const respuestas = {
  espresso:
    "Un gran espresso requiere pasos precisos: muele 18–20 g de café fresco finamente, prénsalo uniformemente en el portafiltros y extrae usando ~9 bares de presión para obtener ~36–40 g de líquido en 25–30 segundos. Busca una crema color avellana y un flujo lento como miel.",
  capuchino:
    "Un cappuccino tradicional se hace con partes iguales de espresso, leche vaporizada y microespuma (típicamente 60 ml de cada uno). Prepara un shot doble de espresso, vaporiza la leche para crear ~2–3 cm de espuma densa y brillante, y vierte con cuidado.",
  flatwhite:
    "Se prepara vertiendo ~120–150 ml de leche aterciopelada sobre un shot doble de espresso. Vaporiza la leche a 60 °C con mínima aireación, enfocándote en una textura líquida con solo 0.5–1 cm de espuma.",
  americano:
    "Para un Americano clásico, vierte 60–120 ml de agua caliente en una taza y luego añade 1 o 2 shots de espresso recién hechos. Una proporción estándar es 1:2, lo que ayuda a preservar la crema en la superficie.",
  latte:
    "Vierte el shot de espresso y luego añade leche vaporizada. Usa una cuchara para retener la espuma mientras viertes la leche líquida, y luego coloca la espuma encima. Un toque de canela o cacao es el acabado ideal.",
  cafelait:
    "Se elabora combinando partes iguales de café de filtro fuerte (no espresso) con leche caliente. Usa un tueste oscuro en prensa francesa o goteo, y mezcla 50/50 con la leche — suele llevar poca o nada de espuma.",
  lungo:
    "Un lungo se extrae en una proporción 1:3 (17 g de café por 51 g de agua). Usa un molido ligeramente más grueso y deja que la extracción dure 50–60 segundos; prefiere tuestes claros para evitar el amargor excesivo.",
  chokomil:
    "Para la mejor bebida del mundo: toma leche fría y cacao en polvo, vierte el polvo en la leche y mezcla hasta combinar. Simple, perfecto e imbatible.",
  genmaicha:
    "Usa 1 cucharadita de hojas por 240 ml de agua a 80–90 °C y deja reposar 30–60 segundos.",
  macchiato:
    "Un espresso 'manchado'. Prepara un shot de espresso corto y coloca encima una pequeña cucharada de microespuma de leche densa para suavizar la intensidad del café.",
  mocha:
    "La mezcla perfecta de café y chocolate. Combina un shot de espresso con una cucharada de jarabe de chocolate o cacao, añade leche vaporizada y termina con un poco de crema batida.",
  affogato:
    "Más que una bebida, es un postre: coloca una bola generosa de helado de vainilla en una copa pequeña y vierte un shot de espresso caliente directamente sobre ella.",
  coldbrew:
    "Café extraído en frío durante 12 a 24 horas. Produce una bebida de baja acidez y alta cafeína. Sírvelo con hielo y, si gustas, un toque de leche cremosa.",
  caramelfrappe:
    "Bebida licuada con hielo, café, leche y jarabe de caramelo. Sirve con una montaña de crema batida y un hilo de caramelo extra por encima.",
  matchalatte:
    "Disuelve 1-2 g de té matcha ceremonial en agua caliente usando un batidor de bambú, luego añade leche vaporizada (o de avena) para un sabor terroso y dulce.",
  croissant:
    "El acompañante clásico de hojaldre. Hornéalo hasta que esté dorado y crujiente por fuera, pero aireado y con un intenso sabor a mantequilla por dentro.",
  cheesecake:
    "Tarta de queso cremosa sobre una base crujiente de galleta. Se puede servir natural o con un coulis de frutos rojos para contrastar la densidad del queso.",
  brownie:
    "Un bizcocho de chocolate denso y húmedo, preferiblemente con nueces. Sírvelo ligeramente tibio para que el chocolate se derrita un poco al morderlo.",
  muffinarandanos:
    "Panquecito esponjoso cargado de arándanos frescos. El truco es no batir de más la masa para que mantenga una textura ligera y aireada.",
  tiramisu:
    "Postre italiano montado en capas de bizcochos soletilla empapados en café espresso, crema de mascarpone y un espolvoreado final de cacao amargo.",
  galleta_chispas:
    "Galleta de estilo artesanal, crujiente en los bordes y suave en el centro, con trozos grandes de chocolate oscuro y una pizca de sal marina.",
};

/**
 * Regresa la hora.
 * @returns La hora con dos digitos
 */
function obtenerHora() {
  return new Date().toLocaleTimeString("es-MX", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

/**
 * Funcion encargada de decidir en una respuesta dependiendo de el input/mensaje del usuario. En caso de que no haya match, se define de manera aleatoria.
 * @param {*} texto Mensaje del usuario.
 * @returns Respuesta del asistente
 */
function decidirRespuesta(texto) {
  const lower = texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "");

  const clavesOrdenadas = Object.keys(respuestas).sort(
    (a, b) => b.length - a.length
  );

  for (const clave of clavesOrdenadas) {
    if (lower.includes(clave)) {
      return respuestas[clave];
    }
  }
  const todasLasClaves = Object.keys(respuestas);
  const claveAleatoria =
    todasLasClaves[Math.floor(Math.random() * todasLasClaves.length)];
  return `No tengo información sobre esa bebida, ¡pero puedo contarte cómo preparar un delicioso ${claveAleatoria}! ${respuestas[claveAleatoria]}`;
}

// App

function App() {
  const [texto, setTexto] = useState("");
  const [escribiendo, setEscribiendo] = useState(false);
  const [mensajes, setMensajes] = useState([]);

  // Función encargada de la lógica al enviae un mensaje. Manejamos las banderas e escribir y las respuestas aqui.
  function enviarMensaje(evento) {
    evento.preventDefault();
    const textoLimpio = texto.trim();
    if (!textoLimpio) return;

    const mensajeUsuario = {
      id: Date.now(),
      tipo: "usuario",
      texto: textoLimpio,
      hora: obtenerHora(),
    };

    setMensajes((actuales) => [...actuales, mensajeUsuario]);
    setTexto("");
    setEscribiendo(true);

    setTimeout(() => {
      const mensajeAsistente = {
        id: Date.now() + 1,
        tipo: "asistente",
        texto: decidirRespuesta(textoLimpio),
        hora: obtenerHora(),
      };
      setMensajes((actuales) => [...actuales, mensajeAsistente]);
      setEscribiendo(false);
    }, 1200);
  }

  // limpia los mensajes.
  function clear() {
    setMensajes([]);
    setTexto("");
    setEscribiendo(false);
  }

  return (
    <>
      <Header totalMensajes={mensajes.length} />
      <main>
        <Sidebar limpiarChat={clear} />
        <div className="chat-container">
          <ChatArea mensajes={mensajes} escribiendo={escribiendo} />
          <ChatForm texto={texto} setTexto={setTexto} onEnviar={enviarMensaje} />
        </div>
      </main>
    </>
  );

}

export default App;