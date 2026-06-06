function ChatForm({ texto, setTexto, onEnviar, onLimpiarChat }) {
    return (
        <footer>
            <form onSubmit={onEnviar}>

                <button
                    type="button"
                    onClick={onLimpiarChat}
                >
                    Limpiar chat
                </button>

                <label htmlFor="mensaje">📝</label>

                <input
                    type="text"
                    id="mensaje"
                    name="mensaje"
                    placeholder="Escribe tu pregunta..."
                    value={texto}
                    onChange={(evento) => setTexto(evento.target.value)}
                    required
                    aria-required="true"
                />

                <button type="submit" aria-label="Enviar mensaje">
                    Enviar
                </button>

            </form>
        </footer>
    );
}

export default ChatForm;