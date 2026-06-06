function Message({ tipo, texto, hora }) {
    return (
        <article className={`mensaje ${tipo}`}>
            <p>{texto}</p>
            <small className="hora-mensaje">{hora}</small>
        </article>
    );
}

export default Message;