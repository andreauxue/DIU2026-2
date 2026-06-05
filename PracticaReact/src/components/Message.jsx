function Message({ tipo, texto, hora }) {
  return (
    <article className={`message ${tipo}-message`}>
      <div className="message-content">
        <p>{texto}</p>
      </div>
      <span className="message-time">{hora}</span>
    </article>
  );
}

export default Message;

// Made with Bob
