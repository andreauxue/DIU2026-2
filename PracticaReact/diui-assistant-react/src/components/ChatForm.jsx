import React from "react";

function ChatForm({ texto, setTexto, onEnviar }){
    return (
    <footer>
        <form onSubmit={onEnviar} className="chat-form" id="chat-form">
            <label htmlFor="message-input" className="sr-only">Escribe tu mensaje: </label>
            <input 
                type="text" 
                id="message-input" 
                name="message" 
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                placeholder="Escribe tu mensaje..." 
                required 
                autoComplete="off"
            />
            <button type="submit" aria-label="Enviar mensaje">Enviar</button>
        </form>
    </footer>
  );
}

export default ChatForm;