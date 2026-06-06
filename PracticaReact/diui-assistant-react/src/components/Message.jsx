function Message({ tipo, texto, hora }) {

  const clase =
    tipo === "usuario"
      ? "message--user"
      : "message--assistant";

  return (
    <div className={`message ${clase}`}>

      <span className="message-time">
        {hora}
      </span>

      <div className="message-bubble">
        {texto}
      </div>

    </div>
  );
}

export default Message;