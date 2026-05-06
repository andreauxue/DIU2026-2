import React from 'react';

function ChatForm({ texto, setTexto, onEnviar }) {
  return (
    <form className="chat-form" onSubmit={onEnviar}>
      <input
        type="text"
        placeholder="Escribe un mensaje..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        className="chat-input"
        autoComplete="off"
      />
      <button type="submit" className="btn-submit" disabled={!texto.trim()}>
        Enviar 🚀
      </button>
    </form>
  );
}

export default ChatForm;