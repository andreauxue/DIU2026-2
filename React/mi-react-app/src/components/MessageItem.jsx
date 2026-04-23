function MessageItem({ message }) {
    return (
        
        <article className={`mensaje ${message.tipo}`}> {/* class="mensaje usuario" */}
            <p>{message.texto}</p>
            <small>{message.hora}</small>
        </article>
    );
}

export default MessageItem;