function Message({ tipo, texto, hora }) {
    const claseMensaje = tipo === "usuario" ? "usuario" : "asistente";

    return (
        <div className={`mensaje ${claseMensaje}`}>
            <p>{texto}</p>
            <span className="hora">{hora}</span>
        </div>
    );
}

export default Message;