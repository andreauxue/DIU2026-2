function ChatForm({ texto, setTexto, onEnviar, onLimpiar }) {
    return (
        <footer>
            <form onSubmit={onEnviar}>
                <label htmlFor="mensaje" className="sr-only">Mensaje</label>
                <input
                    type="text"
                    id="mensaje"
                    name="mensaje"
                    placeholder="Escribe tu mensaje..."
                    value={texto}
                    onChange={(e) => setTexto(e.target.value)}
                    required
                    aria-required="true"
                />
                <button type="submit" aria-label="Enviar mensaje">
                     Enviar
                </button>
                <button 
                    type="button" 
                    className="boton-limpiar-chat"
                    onClick={onLimpiar}
                    aria-label="Limpiar conversación"
                >
                     Limpiar chat
                </button>
            </form>
        </footer>
    );
}

export default ChatForm;