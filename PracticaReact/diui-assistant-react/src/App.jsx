import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ChatArea from "./components/ChatArea";
import ChatForm from "./components/ChatForm";
import "./App.css";

function App() {
  // 1. Estados requeridos
  const [texto, setTexto] = useState("");
  const [escribiendo, setEscribiendo] = useState(false);
  const [mensajes, setMensajes] = useState([
    {
      id: 1,
      tipo: "asistente",
      texto: "¡Hola! He sido migrado a React con éxito. ¿En qué te ayudo hoy?",
      hora: obtenerHoraActual(),
    }
  ]);

  const respuestas = [
    "Recuerda que en React no manipulamos el DOM directamente.",
    "El estado (useState) es la fuente de verdad de tu interfaz.",
    "¡Excelente uso de componentes funcionales y props!",
    "Flexbox y React se llevan muy bien para construir layouts.",
    "No olvides agregar tu archivo ia_documentacion.txt en la entrega."
  ];

  function obtenerHoraActual() {
    const ahora = new Date();
    const horas = ahora.getHours().toString().padStart(2, "0");
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
    
    if (textoLimpio === "") return;

    // Agregar mensaje del usuario
    const mensajeUsuario = {
      id: Date.now(),
      tipo: "usuario",
      texto: textoLimpio,
      hora: obtenerHoraActual(),
    };

    setMensajes((actuales) => [...actuales, mensajeUsuario]);
    setTexto("");
    setEscribiendo(true);

    // Simular respuesta del bot
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
    <div className="app-container">
      <Header totalMensajes={mensajes.length} />
      <main className="app-main">
        <Sidebar onLimpiarChat={limpiarChat} />
        <ChatArea mensajes={mensajes} escribiendo={escribiendo} />
      </main>
      <ChatForm texto={texto} setTexto={setTexto} onEnviar={manejarEnvio} />
    </div>
  );
}

export default App;