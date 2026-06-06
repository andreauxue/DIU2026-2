function ChatForm({ texto, setTexto, onEnviar }) {
    return (
        <form id="formulario-chat" onSubmit={onEnviar}>
            <label htmlFor="mensaje"></label>
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
            <button id="boton-enviar" type="submit" aria-label="Enviar mensaje">
                <span className="material-symbols-outlined">send</span>
            </button>
        </form>
    );
}
export default ChatForm;
