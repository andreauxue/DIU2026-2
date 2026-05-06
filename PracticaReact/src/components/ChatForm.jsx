function ChatForm({ texto, onTextoChange, onEnviar }) {
  return (
    <footer className="app-footer">
      <form className="message-form" onSubmit={onEnviar}>
        <label htmlFor="mensaje" className="visually-hidden">
          Mensaje
        </label>
        <input
          id="mensaje"
          type="text"
          value={texto}
          onChange={(e) => onTextoChange(e.target.value)}
          placeholder="Escribe tu mensaje..."
          autoComplete="off"
        />
        <button type="submit" aria-label="Enviar mensaje">
          Enviar
        </button>
      </form>
    </footer>
  );
}

export default ChatForm;

// Made with Bob
