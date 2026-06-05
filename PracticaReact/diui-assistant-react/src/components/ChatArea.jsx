import React from "react";
import Message from "./Message";

function ChatArea({ mensajes, escribiendo }) {
  return (
    <section aria-label="ÁreaDeMensajes" className="chat-area" id="chat-area">
        {mensajes.map((msg) => (
            <Message 
                key={msg.id} 
                tipo={msg.tipo} 
                texto={msg.texto} 
                hora={msg.hora} 
            />
        ))}

        {escribiendo && (
            <article className="mensaje asistente escribiendo">
                <div className="mensaje-contenido">
                    <p>DIUI Assistant está escribiendo...</p>
                </div>
            </article>
        )}
    </section>
  );
}

export default ChatArea;