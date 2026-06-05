export default function Message({ tipo, texto, hora }) {
  return (
    <article className={`mensaje ${tipo}`}>
      <p>{texto}</p>
      <small>{hora}</small>
    </article>
  );
}