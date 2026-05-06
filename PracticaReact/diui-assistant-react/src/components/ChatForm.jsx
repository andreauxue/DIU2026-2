/**
 * Footer que contiene al input y boton de enviar.
 * @param {*} texto el texto a desplegar (mensaje) del asistente y usuario.
 * @param {*} setTexto función para modificar el estado del texto.
 * @param {*} onEnviar función encargada de la lógica de envio de mensajes.
 */

function ChatForm({ texto, setTexto, onEnviar }) {
    return (
        <footer>
            <form onSubmit={onEnviar}>
                <label htmlFor="msg">::</label>
                <input
                    type="text"
                    id="msg"
                    name="msg"
                    placeholder="¿Qué deseas conocer?"
                    required
                    aria-required="true"
                    value={texto}
                    onChange={(e) => setTexto(e.target.value)}
                />
                <button type="submit" aria-label="Enviar mensaje">
                    Enviar
                </button>
            </form>
        </footer>
    );
}

export default ChatForm;
