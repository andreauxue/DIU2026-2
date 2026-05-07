import { useState } from "react";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import ChatArea from "./components/ChatArea.jsx";
import ChatForm from "./components/ChatForm.jsx";
import "./App.css";

// ─── Utilidades ─────────────────────────────────
function obtenerHoraActual() {
  const ahora = new Date();
  const horas = ahora.getHours().toString().padStart(2, "0");
  const minutos = ahora.getMinutes().toString().padStart(2, "0");
  return `${horas}:${minutos}`;
}

const RESPUESTAS = [
  "Interesante pregunta sobre diseño de interfaces.",
  "Recuerda cuidar la jerarquía visual.",
  "Piensa primero en la experiencia del usuario.",
  "Revisa la accesibilidad del componente.",
  "Podrías mejorar el diseño con una estructura más clara.",
  "Buen punto, ¿qué objetivo persigue ese componente?",
  "El contraste y el espaciado siempre marcan la diferencia.",
];

function App() {
  // ─── Estado ───────────────────────────────────
  const [texto, setTexto] = useState("");
  const [escribiendo, setEscribiendo] = useState(false);
  const [mensajes, setMensajes] = useState([
    {
      id: 1,
      tipo: "usuario",
      texto: "¿Cómo mejorar un formulario?",
      hora: obtenerHoraActual(),
    },
    {
      id: 2,
      tipo: "asistente",
      texto: "Revisa contraste, jerarquía visual y accesibilidad.",
      hora: obtenerHoraActual(),
    },
  ]);

  // ─── Lógica ───────────────────────────────────
  function obtenerRespuestaAleatoria() {
    const indice = Math.floor(Math.random() * RESPUESTAS.length);
    return RESPUESTAS[indice];
  }

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
        texto: obtenerRespuestaAleatoria(),
        hora: obtenerHoraActual(),
      };
      setMensajes((actuales) => [...actuales, mensajeAsistente]);
      setEscribiendo(false);
    }, 1500);
  }

  function limpiarChat() {
    setMensajes([]);
    setTexto("");
    setEscribiendo(false);
  }

  // ─── Render ───────────────────────────────────
  return (
    <>
      <Header totalMensajes={mensajes.length} />
      <main className="layout">
        <Sidebar onLimpiarChat={limpiarChat} />
        <ChatArea mensajes={mensajes} escribiendo={escribiendo} />
      </main>
      <ChatForm texto={texto} setTexto={setTexto} onEnviar={manejarEnvio} />
    </>
  );
}

export default App;
