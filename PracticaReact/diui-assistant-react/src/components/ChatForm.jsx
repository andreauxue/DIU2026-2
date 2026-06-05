export default function ChatForm({ texto, setTexto, onEnviar }) {
  return (
    <footer className="app-footer">
      <form className="chat-form" onSubmit={onEnviar}>
        <label htmlFor="chat-input" className="visually-hidden">Escribe tu mensaje</label>
        <input 
          type="text" 
          id="chat-input" 
          placeholder="Escribe un mensaje..." 
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          autoComplete="off"
        />
        <button type="submit" aria-label="Enviar mensaje">Enviar</button>
      </form>
    </footer>
  );
}