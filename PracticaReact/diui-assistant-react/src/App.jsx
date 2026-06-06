import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ChatArea from "./components/ChatArea";
import ChatForm from "./components/ChatForm";
import "./App.css";

function obtenerHoraActual() {
  const ahora = new Date();
  const horas = ahora.getHours();
  const minutos = ahora.getMinutes().toString().padStart(2, "0");

  return `${horas}:${minutos}`;
}

function App() {
  const [texto, setTexto] = useState("");
  const [escribiendo, setEscribiendo] = useState(false);
  const [mensajes, setMensajes] = useState([
    {
      id: 1,
      tipo: "asistente",
      texto: "Hola, soy DIUI Assistant. Puedo ayudarte con diseño de interfaces, accesibilidad y experiencia de usuario.",
      hora: obtenerHoraActual(),
    },
    {
      id: 2,
      tipo: "usuario",
      texto: "¿Cómo puedo mejorar un formulario?",
      hora: obtenerHoraActual(),
    },
    {
      id: 3,
      tipo: "asistente",
      texto: "Puedes mejorar el formulario usando etiquetas claras, buen contraste, validaciones visibles y una estructura ordenada.",
      hora: obtenerHoraActual(),
    },
  ]);

  const respuestas = [
    "Una buena interfaz debe ser clara, accesible y fácil de usar.",
    "Recuerda cuidar el contraste, la jerarquía visual y el tamaño de los botones.",
    "Piensa primero en la experiencia del usuario antes de agregar elementos visuales.",
    "Puedes mejorar el diseño agrupando la información de forma más ordenada.",
    "La accesibilidad ayuda a que más personas puedan usar correctamente el sistema.",
    "Un diseño sencillo, consistente y bien alineado suele ser más fácil de entender.",
  ];

  function obtenerRespuestaAleatoria() {
    const indice = Math.floor(Math.random() * respuestas.length);
    return respuestas[indice];
  }

  function manejarEnvio(evento) {
    evento.preventDefault();

    const textoLimpio = texto.trim();

    if (textoLimpio === "") {
      return;
    }

    const mensajeUsuario = {
      id: Date.now(),
      tipo: "usuario",
      texto: textoLimpio,
      hora: obtenerHoraActual(),
    };

    setMensajes((mensajesActuales) => [...mensajesActuales, mensajeUsuario]);
    setTexto("");
    setEscribiendo(true);

    setTimeout(() => {
      const mensajeAsistente = {
        id: Date.now() + 1,
        tipo: "asistente",
        texto: obtenerRespuestaAleatoria(),
        hora: obtenerHoraActual(),
      };

      setMensajes((mensajesActuales) => [
        ...mensajesActuales,
        mensajeAsistente,
      ]);

      setEscribiendo(false);
    }, 1500);
  }

  function limpiarChat() {
    setMensajes([]);
    setTexto("");
    setEscribiendo(false);
  }

  return (
    <div className="app-shell">
      <Header totalMensajes={mensajes.length} />

      <main className="layout">
        <Sidebar onLimpiarChat={limpiarChat} />
        <ChatArea mensajes={mensajes} escribiendo={escribiendo} />
      </main>

      <ChatForm texto={texto} setTexto={setTexto} onEnviar={manejarEnvio} />
    </div>
  );
}

export default App;