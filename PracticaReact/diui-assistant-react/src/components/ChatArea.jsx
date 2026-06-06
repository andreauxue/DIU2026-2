import Message from "./Message";

function ChatArea({ mensajes, escribiendo }) {
  return (
    <section className="chat-area">
      {mensajes.length === 0 ? (
        <div className="chat-area__empty">
          <h2>No hay mensajes</h2>
          <p>Escribe una pregunta para iniciar la conversación.</p>
        </div>
      ) : (
        mensajes.map((mensaje) => (
          <Message
            key={mensaje.id}
            tipo={mensaje.tipo}
            texto={mensaje.texto}
            hora={mensaje.hora}
          />
        ))
      )}

      {escribiendo && (
        <div className="typing">
          <span></span>
          <span></span>
          <span></span>
          DIUI Assistant está escribiendo...
        </div>
      )}
    </section>
  );
}

export default ChatArea;