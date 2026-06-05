export default function ChatForm({ texto, setTexto, onEnviar }) {
  return (
    <footer>
      <form onSubmit={onEnviar}>
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Escribe un mensaje..."
        />
        <button type="submit">Enviar</button>
      </form>
    </footer>
  );
}