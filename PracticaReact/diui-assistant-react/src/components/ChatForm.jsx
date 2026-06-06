export default function ChatForm({ texto, setTexto, onEnviar }) {
  return (
    <footer>
      <div className="footer-spacer"></div>
      <div className="footer-content">
        <form onSubmit={onEnviar}>
          <label htmlFor="mensaje">Escribe tu mensaje:</label>
          <input 
            type="text" 
            id="mensaje" 
            placeholder="Escribe tu mensaje..." 
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </footer>
  );
}