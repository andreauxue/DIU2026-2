import Message from "./Message";

function ChatArea({ mensajes, escribiendo }) {
    return (
        <section className="chat-area" aria-label="Área de mensajes">
            {mensajes.map((mensaje) => (
                <Message
                    key={mensaje.id}
                    tipo={mensaje.tipo}
                    texto={mensaje.texto}
                    hora={mensaje.hora}
                />
            ))}
            
            {escribiendo && (
                <article className="mensaje asistente escribiendo">
                    <p> DIU Assistant está escribiendo...</p>
                </article>
            )}
        </section>
    );
}

export default ChatArea;