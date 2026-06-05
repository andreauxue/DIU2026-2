
/**
 * Representa un solo mensaje
 * @param {*} tipo el tipo de mensaje (usuario o asistente), con esto definimos el estilo
 * @param {*} texto el texto a desplegar en el mensaje.
 * @param {*} hora la hora que corresponde al mensaje.
 */
function Message({ tipo, texto, hora }) {
    return (
        <article className={`msg ${tipo}`}>
            <p>{texto}</p>
            <span className="msg-time">{hora}</span>
        </article>
    );
}

export default Message;