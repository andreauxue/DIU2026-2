import { useEffect, useRef } from "react";
import Message from "./Message";

function ChatArea({ mensajes, escribiendo }) {
  const finRef = useRef(null);

  // Scroll automático al último mensaje (forma idiomática de React: useRef)
  useEffect(() => {
    finRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [mensajes, escribiendo]);

  const sinMensajes = mensajes.length === 0 && !escribiendo;

  return (
    <section className="chat-area">
      {sinMensajes ? (
        <div className="empty-state">
          <div className="empty-icon">◈</div>
          <span className="empty-text">Escribe un mensaje para comenzar</span>
        </div>
      ) : (
        <div className="messages-list">
          {mensajes.map((mensaje) => (
            <Message
              key={mensaje.id}
              tipo={mensaje.tipo}
              texto={mensaje.texto}
              hora={mensaje.hora}
            />
          ))}

          {escribiendo && (
            <div className="typing-indicator">
              <div className="typing-avatar">AI</div>
              <div className="typing-bubble">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="typing-text">
                DIUI Assistant está escribiendo...
              </span>
            </div>
          )}

          <div ref={finRef} />
        </div>
      )}
    </section>
  );
}

export default ChatArea;
