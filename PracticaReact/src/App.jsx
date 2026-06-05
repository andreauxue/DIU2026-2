import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ChatArea from "./components/ChatArea";
import ChatForm from "./components/ChatForm";
import "./App.css";

function App() {
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

  const respuestas = [
    "Interesante pregunta sobre diseño de interfaces.",
    "Recuerda cuidar la jerarquía visual.",
    "Piensa primero en la experiencia del usuario.",
    "Revisa la accesibilidad del componente.",
    "Podrías mejorar el diseño con una estructura más clara.",
  ];

  function obtenerHoraActual() {
    const ahora = new Date();
    const horas = ahora.getHours();
    const minutos = ahora.getMinutes().toString().padStart(2, "0");
    return `${horas}:${minutos}`;
  }

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

  return (
    <div className="app">
      <Header messageCount={mensajes.length} />
      
      <main className="app-main">
        <Sidebar onClearChat={limpiarChat} />
        <ChatArea mensajes={mensajes} escribiendo={escribiendo} />
      </main>

      <ChatForm
        texto={texto}
        onTextoChange={setTexto}
        onEnviar={manejarEnvio}
      />
    </div>
  );
}

export default App;

// Made with Bob
