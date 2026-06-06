import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ChatArea from "./components/ChatArea";
import ChatForm from "./components/ChatForm";
import "./App.css";

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
      texto: `¡Hola! 👋 Soy DIUI Assistant. Puedo darte datos curiosos del universo 🌌 y de diseño de interfaces 🎨`,
      hora: obtenerHoraActual(),
    },
  ]);

  function manejarEnvio(e) {
    e.preventDefault();
    const textoLimpio = texto.trim();
    if (textoLimpio === "") return;

    const mensajeUsuario = {
      id: Date.now(),
      tipo: "usuario",
      texto: textoLimpio,
      hora: obtenerHoraActual(),
    };
    setMensajes((previos) => [...previos, mensajeUsuario]);
    setTexto("");
    setEscribiendo(true);

    setTimeout(() => {
      const indice = Math.floor(Math.random() * datos.length);
      const mensajeAsistente = {
        id: Date.now() + 1,
        tipo: "asistente",
        texto: datos[indice],
        hora: obtenerHoraActual(),
      };
      setMensajes((previos) => [...previos, mensajeAsistente]);
      setEscribiendo(false);
    }, 1000);
  }

  function limpiarChat() {
    setMensajes([]);
    setTexto("");
    setEscribiendo(false);
  }

  return (
    <>
      <Header totalMensajes={mensajes.length} />
      <main className="main-layout">
        <Sidebar onLimpiarChat={limpiarChat} />
        <ChatArea mensajes={mensajes} escribiendo={escribiendo} />
      </main>
      <ChatForm texto={texto} setTexto={setTexto} onEnviar={manejarEnvio} />
    </>
  );
}

export default App;