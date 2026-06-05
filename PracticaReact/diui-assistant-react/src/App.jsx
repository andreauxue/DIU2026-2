import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ChatArea from "./components/ChatArea";
import ChatForm from "./components/ChatForm";
import "./App.css";

function App() {
  const [texto, setTexto] = useState("");
  const [escribiendo, setEscribiendo] = useState(false);
  const [indiceRespuesta, setIndiceRespuesta] = useState(0);

  //Uso lo ya proporcionado en la tarea y lo adapto a los mensajes que yo tenia en tareas pasadas
  const [mensajes, setMensajes] = useState([
    // Los mensajes quedan largos pero use exactamente los mismos que hice desde el HTML 
    {
      id: 1,
      tipo: "usuario",
      texto: "Tengo una duda sobre HTML ya que no logro entender del todo, ¿Sabes usar HTML y como se relaciona con CSS?, estoy desesperado",
      hora: obtenerHoraActual(),
    },
    {
      id: 2,
      tipo: "asistente",
      texto: "Entiendo tu frustracion, sé que a veces puede ser frustrante pero vamos a  revisar juntos lo que necesitas, para conectar HTML con CSS",
      hora: obtenerHoraActual(),
    },
    {
      id: 3,
      tipo: "usuario",
      texto: "Sí, pero necesito que me ayudes, no quiero solo mensajes motivadores",
      hora: obtenerHoraActual(),
    },
    {
      id: 4,
      tipo: "asistente",
      texto: "Entiendo tu frustracion, sé que a veces puede ser frustrante ¿Dime en que puedo ayudarte?",
      hora: obtenerHoraActual(),
    },
    {
      id: 5,
      tipo: "usuario",
      texto: "Necesito ayuda con HTML y CSS, no quiero mensajes motivadores",
      hora: obtenerHoraActual(),
    },
    {
      id: 6,
      tipo: "asistente",
      // Sin perder el brillito (emoji) para que se vea fiel a las respuestas de la IA
      texto: "Lo siento, tienes razón, vamos a revisar juntos tus dudas sobre HTML y CSS, ¿Qué es lo que no entiendes? 🌟 ",
      hora: obtenerHoraActual(),
    },
  ]);

  const respuestas = [
    "¿Quieres jugar  adivinar el peersonaje?, Dame una pista sobre el personaje que tienes en mente",
    "¿Es un personaje de una película, serie o videojuego?",
    "¿Tu personaje es heroe o villano?",
    "¿Conoces a tu peronaje?",
    "¿Tu personaje sabe sobre Diseño de Interfaces de Usuario?",
  ];

  function obtenerHoraActual() {
    const ahora = new Date();
    const horas = ahora.getHours();
    const minutos = ahora.getMinutes().toString().padStart(2, "0");
    // Corregido: Usar backticks para template literals
    return `${horas}:${minutos}`;
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
      // Usamos el indice para las respuestas del chat bot
      const textoAsistente = indiceRespuesta < respuestas.length
        ? respuestas[indiceRespuesta]
        : "¿Tu persnaje es Alan Turing? 🤖";

      const mensajeAsistente = {
        id: Date.now() + 1,
        tipo: "asistente",
        texto: textoAsistente,
        hora: obtenerHoraActual(),
      };

      setMensajes((actuales) => [...actuales, mensajeAsistente]);
      // Aumentamos el índice para la siguiente respuesta
      setIndiceRespuesta((prev) => prev + 1);
      setEscribiendo(false);
    }, 1500);
  }

  function limpiarChat() {
    setMensajes([]);
    setTexto("");
    setEscribiendo(false);
    setIndiceRespuesta(0); // Reiniciamos el índice para las respuestas del chat bot
  }

  return (
    <div className="app-container"> {/* Contenedor raíz para el Flexbox */}
      <Header totalMensajes={mensajes.length} />
      
      <main className="layout"> {/* Esta clase debe tener display: flex en el CSS */}
        <Sidebar onLimpiarChat={limpiarChat} />

      {/*Contenedor para agrupar CharArea y ChatForm */}
        <div className = "chat-area-container">  
          <ChatArea mensajes={mensajes} escribiendo={escribiendo} />
          <ChatForm texto={texto} setTexto={setTexto} onEnviar={manejarEnvio} />
        </div>
      </main>
    </div>
  );
}

export default App;