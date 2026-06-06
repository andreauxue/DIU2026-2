function Message({ tipo, texto, hora }) {
  const esUsuario = tipo === "usuario";

  return (
    <article className={`message ${esUsuario ? "message--user" : "message--bot"}`}>
      <div className="message__top">
        <strong>{esUsuario ? "Tú" : "DIUI Assistant"}</strong>
        <span>{hora}</span>
      </div>

      <p>{texto}</p>
    </article>
  );
}

export default Message;