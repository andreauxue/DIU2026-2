function Message({ tipo, texto, hora }) {
  const clase = tipo === "usuario" ? "mensaje-usuario" : "mensaje-asistente";

  return (
    <article className={`mensaje ${clase}`}>
      <p>{texto}</p>
      <time className="mensaje-hora">{hora}</time>
    </article>
  );
}

export default Message;