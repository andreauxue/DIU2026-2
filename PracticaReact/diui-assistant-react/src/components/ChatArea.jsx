import React from "react";
import Message from "./Message";

function ChatArea({ mensajes, escribiendo }) {
  return (
    <section className="chat-area">
      <div className="messages-container">
        {mensajes.map((mensaje) => (
          <Message
            key={mensaje.id}
            tipo={mensaje.tipo}
            texto={mensaje.texto}
            hora={mensaje.hora}
          />
        ))}
        
        {escribiendo && (
          <article className="message message--asistente">
            <div className="message-content">
              <p>DIUI Assistant está escribiendo...</p>
            </div>
          </article>
        )}
      </div>
    </section>
  );
}

export default ChatArea;