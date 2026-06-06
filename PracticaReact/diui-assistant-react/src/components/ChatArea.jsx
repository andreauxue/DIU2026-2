import Message from "./Message";

function ChatArea({ mensajes, escribiendo }) {
  return (
    <section className="chat-panel">

      <div className="chat-messages">

        {mensajes.map((mensaje) => (
          <Message
            key={mensaje.id}
            tipo={mensaje.tipo}
            texto={mensaje.texto}
            hora={mensaje.hora}
          />
        ))}

        {escribiendo && (
          <p className="typing-indicator">
            DIUI Assistant está escribiendo...
          </p>
        )}

      </div>

    </section>
  );
}

export default ChatArea;