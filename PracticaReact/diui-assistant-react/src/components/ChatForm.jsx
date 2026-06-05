import React from "react";

function ChatForm({ texto, setTexto, onEnviar }) {
  return (
    <footer className="chat-form">
      <form onSubmit={onEnviar} className="form-container">
        <div className="input-wrapper">
          <input
            type="text"
            id="mensaje"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder="Escribe tu mensaje..."
            required
            aria-required="true"
            className="message-input"
          />
          <button type="submit" className="btn-submit" aria-label="Enviar mensaje">
            Enviar
          </button>
        </div>
      </form>
    </footer>
  );
}

export default ChatForm;
