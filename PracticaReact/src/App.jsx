import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ChatArea from "./components/ChatArea";
import "./App.css";

function obtenerHoraActual() {
  const ahora = new Date();
  return ahora.toLocaleTimeString("es-MX", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

const respuestas = [
  {
    palabras: ["tipografía", "fuente", "font", "texto"],
    texto:
      "Una buena tipografía mejora la legibilidad y la jerarquía visual. Lo ideal es usar máximo 2-3 familias: una para títulos y otra para cuerpo. El tamaño base recomendado es 16px.",
  },
  {
    palabras: ["color", "paleta", "contraste", "tono"],
    texto:
      "El color en UI no es solo estética: el contraste adecuado (WCAG AA requiere 4.5:1 en texto) garantiza accesibilidad. Herramientas como Coolors o Adobe Color ayudan a construir paletas coherentes.",
  },
  {
    palabras: ["formulario", "form", "input", "campo"],
    texto:
      "Un buen formulario es claro, accesible y con validación útil. Usa labels visibles, mensajes de error descriptivos y agrupa campos relacionados. Nunca dependas solo del color para indicar errores.",
  },
  {
    palabras: ["espaciado", "espacio", "padding", "margin", "grid"],
    texto:
      "El espaciado es uno de los pilares del diseño. Un sistema de espaciado consistente (4px, 8px, 16px, 32px...) crea ritmo visual y facilita la lectura. El espacio negativo también comunica.",
  },
  {
    palabras: ["accesibilidad", "a11y", "aria", "screen reader"],
    texto:
      "La accesibilidad no es opcional: asegura que tu interfaz funcione con lectores de pantalla, teclado y distintos tamaños de texto. Usa HTML semántico, atributos ARIA y ratio de contraste suficiente.",
  },
];

const respuestaDefault =
  "Interesante pregunta sobre diseño de interfaces. ¿Puedes darme más contexto sobre lo que estás buscando?";

function obtenerRespuesta(texto) {
  const textoMin = texto.toLowerCase();
  const coincidencia = respuestas.find((r) =>
    r.palabras.some((p) => textoMin.includes(p))
  );
  return coincidencia ? coincidencia.texto : respuestaDefault;
}

function App() {
  const [texto, setTexto] = useState("");
  const [escribiendo, setEscribiendo] = useState(false);
  const [mensajes, setMensajes] = useState([]);

  function manejarEnvio(evento) {
    evento.preventDefault();

    const textoLimpio = texto.trim();
    if (textoLimpio === "") return;

    const mensajeUsuario = {
      id: Date.now(),
      tipo: "usuario",
      texto: textoLimpio,
      hora: obtenerHoraActual(),
    };

    setMensajes((actuales) => [...actuales, mensajeUsuario]);
    setTexto("");
    setEscribiendo(true);

    setTimeout(() => {
      const mensajeAsistente = {
        id: Date.now() + 1,
        tipo: "asistente",
        texto: obtenerRespuesta(textoLimpio),
        hora: obtenerHoraActual(),
      };
      setMensajes((actuales) => [...actuales, mensajeAsistente]);
      setEscribiendo(false);
    }, 1200 + Math.random() * 600);
  }

  function limpiarChat() {
    setMensajes([]);
    setTexto("");
    setEscribiendo(false);
  }

  return (
  <>
    <Header totalMensajes={mensajes.length} />

    <main className="layout">
      <ChatArea
        mensajes={mensajes}
        escribiendo={escribiendo}
        texto={texto}
        setTexto={setTexto}
        onEnviar={manejarEnvio}
      />
      <Sidebar onLimpiarChat={limpiarChat} />
    </main>
  </>
);
}

export default App;