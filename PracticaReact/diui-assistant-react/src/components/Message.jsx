function Message({ tipo, texto, hora }) {
    return (
        <div className={`mensaje ${tipo}`}>
            <p className="mensaje-contenido">{texto}</p>
            <p className="mensaje-hora">{hora}</p>
        </div>
    );
}

export default Message;