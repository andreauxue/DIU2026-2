function ChatForm({ texto, setTexto, onEnviar }) {
  return (
    <footer className="site-footer">

      <form
        className="message-form"
        onSubmit={onEnviar}
      >

        <input
          type="text"
          className="message-input"
          placeholder="Escribe tu mensaje aquí..."
          autoComplete="off"
          value={texto}
          onChange={(e) =>
            setTexto(e.target.value)
          }
        />

        <button
          type="submit"
          className="send-btn"
        >
          Enviar
        </button>

      </form>

    </footer>
  );
}

export default ChatForm;