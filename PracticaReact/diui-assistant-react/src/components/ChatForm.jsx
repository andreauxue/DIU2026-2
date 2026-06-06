function ChatForm({ texto, setTexto, onEnviar }) {
  return (
    <form className="chat-form" onSubmit={onEnviar}>
      <label htmlFor="mensaje" className="chat-form__label">
        Mensaje
      </label>

      <input
        id="mensaje"
        type="text"
        value={texto}
        onChange={(evento) => setTexto(evento.target.value)}
        placeholder="Escribe tu mensaje para DIUI Assistant..."
      />

      <button type="submit">Enviar</button>
    </form>
  );
}

export default ChatForm;