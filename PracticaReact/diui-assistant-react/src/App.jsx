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
      texto: "Te recomiendo usar etiquetas claras y buen contraste visual.",
      hora: obtenerHoraActual(),
    },
    {
      id: 3,
      tipo: "usuario",
      texto: "¿Qué es HTML semántico?",
      hora: obtenerHoraActual(),
    },
    {
      id: 4,
      tipo: "asistente",
      texto: "Es el uso de etiquetas HTML que describen el significado del contenido.",
      hora: obtenerHoraActual(),
    },
    {
      id: 5,
      tipo: "usuario",
      texto: "¿Por qué tengo que usar label en los formularios?",
      hora: obtenerHoraActual(),
    },
    {
      id: 6,
      tipo: "asistente",
      texto: "Porque mejora la accesibilidad y permite que lectores de pantalla identifiquen correctamente los campos.",
      hora: obtenerHoraActual(),
    },
  ]);

  const respuestas = [
    "¡Hola! ¿En qué puedo ayudarte con tu formulario?",
    "Evita pedir más información de la necesaria en el formulario.",
    "Piensa primero en la experiencia del usuario.",
    "Te recomiendo revisar la estructura del formulario.",
    "Asegúrate de mostrar mensajes de error claros y específicos.",
    "El contraste adecuado mejora la legibilidad del texto.",
    "Los botones deben tener un tamaño mínimo de 44x44px para ser accesibles.",
    "La retroalimentación visual es clave para una buena experiencia.",
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
      <Header totalMensajes={mensajes.length} />
      <div className="main-container">
        <Sidebar onLimpiarChat={limpiarChat} />
        <ChatArea mensajes={mensajes} escribiendo={escribiendo} />
      </div>
      <ChatForm
        texto={texto}
        setTexto={setTexto}
        onEnviar={manejarEnvio}
      />
    </div>
  );
}

export default App;
