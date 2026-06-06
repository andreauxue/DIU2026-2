import Message from "./Message";

function ChatArea({ mensajes, escribiendo }) {
    return (
        <section className="chat-panel" aria-label="Conversación">
            <div className="chat-toolbar">
                <p>Mensajes: {mensajes.length}</p>
            </div>

            <div className="chat-mensajes">
                {mensajes.map((mensaje) => (
                    <Message
                        key={mensaje.id}
                        tipo={mensaje.tipo}
                        texto={mensaje.texto}
                        hora={mensaje.hora}
                    />
                ))}

                {escribiendo && (
                    <div className="escribiendo">
                        DIUI Assistant está escribiendo...
                    </div>
                )}
            </div>
        </section>
    );
}

export default ChatArea;