import { useState } from "react";
import Sidebar from "./Sidebar";
import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";

function ChatLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [indiceRespuesta, setIndiceRespuesta] = useState(0);

  // Respuestas personalizadas de Fluxy
  const respuestasPredeterminadas = [
    "¡Hola! Qué buen proyecto. El minimalismo es perfecto para una app de notas porque ayuda a que el usuario se concentre solo en escribir. Para empezar, recuerda la regla de oro: 'Menos es más'. Te sugiero usar mucho espacio en blanco (o espacio negativo) y solo los elementos indispensables. ¿Tienes pensada alguna paleta de colores o prefieres algo clásico en blanco y negro?",
    "Es un miedo muy común, ¡no te preocupes! El secreto para que no se vea 'aburrido' está en la tipografía y los acentos. Puedes usar una fuente Sans Serif moderna con distintos grosores (negritas para títulos, delgadas para el cuerpo). Además, ¿qué tal si usamos un solo color de acento, como un azul suave o un gris grafito, solo para los botones importantes? Así mantienes la limpieza sin perder la personalidad.",
    "Mmm, te doy mi opinión sincera: 10 categorías con iconos de colores podrían saturar visualmente al usuario y romper esa paz del minimalismo. ¿Qué te parece si ocultamos las categorías en un menú lateral o usamos solo texto simple para las 3 más importantes? En el minimalismo, priorizamos la jerarquía visual. Menos distracciones harán que tu app se sienta mucho más profesional.",
    "¡Exacto! Para esos botones, te sugiero usar iconos lineales (solo el contorno, sin relleno sólido) o simplemente etiquetas de texto con mucho espacio alrededor. No necesitan sombras pesadas ni bordes gruesos. Si el fondo es blanco, un texto gris oscuro para 'Guardar' y quizás un rojo muy tenue para 'Eliminar' funcionará perfecto. ¿Quieres que veamos cómo organizar el buscador ahora?",
    "Para mantener la interfaz limpia, un icono de lupa elegante en la esquina superior derecha es ideal. Solo se expande cuando el usuario realmente lo necesita. Así, la pantalla principal se queda solo con lo que importa: las notas del usuario. ¡Va a quedar genial, estás captando la esencia del minimalismo muy rápido!"
  ];

  function toggleSidebar() {
    setSidebarOpen(!sidebarOpen);
  }

  function obtenerHora() {
    const ahora = new Date();
    let h = ahora.getHours();
    let m = ahora.getMinutes();
    if (m < 10) m = "0" + m;
    return `${h}:${m}`;
  }

  async function procesarEnvio(texto) {
    // 1. Agregar mensaje del usuario inmediatamente
    const userMsg = { id: Date.now(), tipo: "usuario", texto, hora: obtenerHora() };
    setMessages((prev) => [...prev, userMsg]);
    
    // Activa el estado "Escribiendo" 
    setIsTyping(true);

    setTimeout(() => {
       
      // Si el número es menor a 0.20 (20% de probabilidad), simula el Error de Conexión.
      const simularErrorAlAzar = Math.random() < 0.20;

      if (simularErrorAlAzar) {
        // ESTADO DE ERROR DE CONEXIÓN
        setMessages((prev) => [...prev, {
          id: Date.now() + 2,
          tipo: "error",
          texto: "Error de comunicación: No se pudo establecer contacto con el asistente de DIU. Asegúrate de que el servidor local de Fluxy esté encendido en el puerto oficial de la materia."
        }]);
      } else {
        // ESTADO DE ÉXITO CON RESPUESTA OFICIAL
        const respuestaTexto = respuestasPredeterminadas[indiceRespuesta];
        
        setMessages((prev) => [...prev, {
          id: Date.now() + 1,
          tipo: "asistente",
          texto: respuestaTexto,
          hora: obtenerHora()
        }]);

        setIndiceRespuesta((prevIndice) => (prevIndice + 1) % respuestasPredeterminadas.length);
      }

      // Apaga el indicador de carga
      setIsTyping(false);
    }, 1500);
  }

  return (
    <div className="w-full h-screen flex bg-white overflow-hidden text-slate-900 antialiased">
      <Sidebar 
        isOpen={sidebarOpen} 
        toggleSidebar={toggleSidebar} 
        onClearChat={() => { setMessages([]); setIndiceRespuesta(0); }} 
      />
      
      {/* Fondo oscuro responsivo para móvil al abrir menú */}
      {sidebarOpen && (
        <div onClick={toggleSidebar} className="fixed inset-0 z-30 bg-slate-950/40 md:hidden transition-opacity" />
      )}

      <div className="flex-1 flex flex-col min-w-0 h-full">
        <ChatHeader toggleSidebar={toggleSidebar} />
        <MessageList 
          messages={messages} 
          isTyping={isTyping} 
          onSelectSuggestion={procesarEnvio} 
        />
        <ChatInput onSendMessage={procesarEnvio} disabled={isTyping} />
      </div>
    </div>
  );
}

export default ChatLayout;