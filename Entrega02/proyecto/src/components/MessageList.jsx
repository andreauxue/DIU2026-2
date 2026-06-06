import MessageBubble from "./MessageBubble";
import SuggestionChip from "./SuggestionChip";
import TypingIndicator from "./TypingIndicator";

function MessageList({ messages, isTyping, onSelectSuggestion }) {
  // Datos para los 3 recuadros 
  const sugerencias = [
    {
      titulo: "Combinaciones de color",
      pregunta: "¿Cómo puedo elegir una buena paleta de colores para mi aplicación?"
    },
    {
      titulo: "Jerarquía",
      pregunta: "¿Qué espaciados debo usar para crear una buena jerarquía visual?"
    },
    {
      titulo: "Tipografía",
      pregunta: "¿Cómo puedo combinar diferentes tamaños y pesos de fuente?"
    }
  ];

  // Pantalla de inicio 
  if (messages.length === 0) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-6 text-center max-w-4xl mx-auto my-auto">
        
        {/* FLUXY */}
        <h1 className="text-5xl font-bold bg-gradient-to-r from-[#9234C9] via-[#1D2687] to-[#D814BE] bg-clip-text text-transparent mb-3">
          Fluxy
        </h1>
        
        {/* Descripción debajo del nombre */}
        <p className="text-sm text-gray-500 max-w-xs mx-auto">
          Tu compañero amigable para crear interfaces hermosas y funcionales
        </p>
        
        {/* Tres recuadros que indican la parte de preguntas usuales */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {sugerencias.map((chip, idx) => (
            <SuggestionChip 
              key={idx} 
              titulo={chip.titulo}
              pregunta={chip.pregunta}
              onClick={onSelectSuggestion} 
            />
          ))}
        </div>
      </div>
    );
  }

  // Si ya hay mensajes, muestra el flujo normal
  return (
    <div className="flex-1 overflow-y-auto px-4 py-4 md:px-6 space-y-5 bg-slate-50/40">
      {messages.map((msg) => (
        <MessageBubble key={msg.id} message={msg} />
      ))}
      {isTyping && <TypingIndicator />}
    </div>
  );
}

export default MessageList;