export default function Message({ tipo, texto, hora }) {
  const isUser = tipo === "usuario";
  return (
    <article className={`message ${isUser ? "user-msg" : "bot-msg"}`}>
      <p>{texto}</p>
      <span className="hora">{hora}</span>
    </article>
  );
}