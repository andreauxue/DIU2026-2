import Message from './Message';

function ChatArea({ mensajes, escribiendo }) {
  return (
    <section className="chat-section">
      <div className="messages">
        {mensajes.map((msg) => (
          <Message
            key={msg.id}
            tipo={msg.tipo}
            texto={msg.texto}
            hora={msg.hora}
          />
        ))}
        {escribiendo && (
          <div className="typing-indicator">
            <span className="typing-dots">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <span className="typing-text">DIUI Assistant está escribiendo...</span>
          </div>
        )}
      </div>
    </section>
  );
}

export default ChatArea;

// Made with Bob
