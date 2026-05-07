function ChatForm({ texto, setTexto, onEnviar }) {

    return (

        <footer>

            <form onSubmit={onEnviar}>

                <label htmlFor="mensaje">
                    Mensaje:
                </label>

                <input
                    type="text"
                    id="mensaje"
                    value={texto}
                    onChange={(e) => setTexto(e.target.value)}
                    placeholder="Escribe un mensaje..."
                />

                <button type="submit">
                    Enviar
                </button>

            </form>

        </footer>
    );
}

export default ChatForm;