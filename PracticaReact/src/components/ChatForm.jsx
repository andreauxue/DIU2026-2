function ChatForm({ texto, setTexto, onEnviar }) {
  function manejarKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onEnviar(e);
    }
  }

  return (
    <footer className="footer">
      <form className="formulario" onSubmit={onEnviar}>
        <div className="input-area">
          <input
            type="text"
            id="mensaje"
            name="mensaje"
            placeholder="Pregunta algo al asistente..."
            autoComplete="off"
            aria-label="Escribe tu mensaje"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            onKeyDown={manejarKeyDown}
          />
          <button type="submit" id="btn-enviar" aria-label="Enviar mensaje">
            Enviar
          </button>
        </div>
      </form>
    </footer>
  );
}

export default ChatForm;