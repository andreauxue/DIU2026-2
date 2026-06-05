import Message from "./Message";

export default function ChatArea({ mensajes, escribiendo }) {
  return (
    <section className="chat-area">
      {mensajes.map((msg) => (
        <Message 
          key={msg.id} 
          tipo={msg.tipo} 
          texto={msg.texto} 
          hora={msg.hora} 
        />
      ))}
      
      {escribiendo && (
        <article className="message bot-msg escribiendo-indicador">
          <p>DIUI Assistant está escribiendo...</p>
        </article>
      )}
    </section>
  );
}