import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ChatArea from './components/ChatArea';
import ChatForm from './components/ChatForm';
import './App.css';

function App() {
  
  const [mensajes, setMensajes] = useState([]); // El arreglo de mensajes
  const [textoInput, setTextoInput] = useState(""); // Lo que el usuario escribe
  const [escribiendo, setEscribiendo] = useState(false); // Estado del indicador "Escribiendo..."
  const manejarEnvio = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    if (textoInput.trim() === "") return;

    // Crea el mensaje del usuario
    const nuevoMensaje = {
      id: Date.now(), // ID único para React
      tipo: 'usuario',
      texto: textoInput,
      hora: new Date().toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' })
    };

    // Actualiza la lista de mensajes
    setMensajes([...mensajes, nuevoMensaje]);
    setTextoInput(""); // Limpiar el input

    // Simula respuesta del asistente
    lanzarRespuestaAsistente();
  };

  const lanzarRespuestaAsistente = () => {
    setEscribiendo(true);
    setTimeout(() => {
      const respuesta = {
        id: Date.now() + 1,
        tipo: 'asistente',
        texto: '¡Hola! Soy DIUI Assistent, ¿en qué te puedo ayudar?',
        hora: new Date().toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' })
      };
      setMensajes((prev) => [...prev, respuesta]);
      setEscribiendo(false);
    }, 1500);
  };

  const limpiarChat = () => {
    setMensajes([]);
  };

  return (
    <div className="app-wrapper">
      <Header totalMensajes={mensajes.length} />
      <main>
        <Sidebar onLimpiarChat={limpiarChat} />
        <ChatArea mensajes={mensajes} escribiendo={escribiendo} />
      </main>
      <ChatForm 
        texto={textoInput} 
        setTexto={setTextoInput} 
        onEnviar={manejarEnvio} 
      />
    </div>
  );
}

export default App;