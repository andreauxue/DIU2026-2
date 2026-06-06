import { useEffect, useRef } from "react";
import Message from "./Message";
import ChatForm from "./ChatForm";

function ChatArea({ mensajes, escribiendo, texto, setTexto, onEnviar }) {
  const contenedorRef = useRef(null);

  useEffect(() => {
    if (contenedorRef.current) {
      contenedorRef.current.scrollTop = contenedorRef.current.scrollHeight;
    }
  }, [mensajes, escribiendo]);

  return (
    <div className="chat">
      <section
        id="contenedor-mensajes"
        className="mensajes"
        aria-label="Conversación con el asistente"
        aria-live="polite"
        ref={contenedorRef}
      >
        {mensajes.map((m) => (
          <Message key={m.id} tipo={m.tipo} texto={m.texto} hora={m.hora} />
        ))}

        {escribiendo && (
          <article className="mensaje mensaje-asistente">
            <p>DIUI Assistant está escribiendo...</p>
          </article>
        )}
      </section>

      <ChatForm texto={texto} setTexto={setTexto} onEnviar={onEnviar} />
      
    </div>
  );
}

export default ChatArea;