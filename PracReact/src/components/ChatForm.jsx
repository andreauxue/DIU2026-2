function ChatForm({ texto, setTexto, onEnviar }) {
  return (
    <form className="chat-form" onSubmit={onEnviar}>
      <div className="input-wrapper">
        <input
          type="text"
          className="message-input"
          placeholder="Escribe un mensaje..."
          value={texto}
          onChange={(evento) => setTexto(evento.target.value)}
          autoFocus
        />
        <button
          type="submit"
          className="send-btn"
          disabled={texto.trim() === ""}
          aria-label="Enviar mensaje"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </div>
    </form>
  );
}

export default ChatForm;
