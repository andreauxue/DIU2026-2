import { useEffect, useRef } from "react";
import Message from "./Message";

export default function ChatArea({ mensajes, escribiendo }) {
  //Referecia para el final del chat
  const finMensajes = useRef(null);

  //Cada que se agrega un mensaje, se hace scroll hacia el final del chat
  useEffect(() => {
    finMensajes.current?.scrollIntoView({ behavior: "smooth" });
  }, [mensajes, escribiendo]);

  return (
    <section className="chat-container">
      {mensajes.map((m) => (
        <Message 
          key={m.id} 
          tipo={m.tipo} 
          texto={m.texto} 
          hora={m.hora} 
        />
      ))}

      {/* Indicador de que el asistente está escribiendo */}
      {escribiendo && (
        <article className="mensaje asistente">
          <p>DIUI Assistant está escribiendo...</p>
        </article>
      )}

      {/* Elemento invisible para hacer scroll al final */}
      <div ref={finMensajes} />
    </section>
  );
}