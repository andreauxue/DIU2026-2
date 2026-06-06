import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import SuggestionChip from "./SuggestionChip";

const sugerencias = [
  "¿Qué fuente uso en un dashboard?",
  "¿Cuándo usar cards vs listas?",
];

function MessageList({ mensajes, escribiendo, onSugerencia }) {
  const ref = useRef(null);
  const vacio = mensajes.length === 0 && !escribiendo;

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [mensajes, escribiendo]);

  return (
    <section
      id="contenedor-mensajes"
      ref={ref}
      className="flex-1 overflow-y-auto bg-[#F0F0F0]"
      aria-label="Conversación con el asistente"
      aria-live="polite"
    >
      {vacio ? (
        /* Estado vacío */
        <div className="flex flex-col items-center justify-center h-full gap-5 px-8 text-center">
          {/* Ícono */}
          <div className="w-20 h-20 rounded-2xl bg-[#223125] flex items-center justify-center">
            <div className="w-5 h-5 rounded-full bg-[#729969]" />
          </div>

          {/* Saludo */}
          <h2 className="text-2xl font-bold text-[#223125]">¡Hola! Soy DIUIA</h2>

          {/* Descripción */}
          <p className="text-sm text-[#223125]/70 max-w-sm leading-relaxed">
            Tu asistente especializado en diseño de interfaces. Puedes preguntarme sobre
            tipografía, color, accesibilidad, layout y más.
          </p>

          {/* Suggestion chips */}
          <div className="flex flex-col items-center gap-2 mt-1">
            {sugerencias.map((s, i) => (
              <SuggestionChip key={i} texto={s} onClick={onSugerencia} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 p-8">
          {mensajes.map((m) => (
            <MessageBubble key={m.id} tipo={m.tipo} texto={m.texto} hora={m.hora} />
          ))}
          {escribiendo && <TypingIndicator />}
        </div>
      )}
    </section>
  );
}

export default MessageList;