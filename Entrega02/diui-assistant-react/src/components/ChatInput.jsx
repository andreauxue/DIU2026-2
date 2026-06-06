function ChatInput({ texto, setTexto, onEnviar }) {
  function manejarKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onEnviar(e);
    }
  }

  return (
    <footer className="bg-[#E6E7EB] border-t border-[#E6E7EB] px-6 py-4 flex-shrink-0">
      <form onSubmit={onEnviar} className="flex gap-3 items-center">
        <label htmlFor="mensaje" className="sr-only">Escribe tu mensaje</label>
        <input
          id="mensaje"
          type="text"
          name="mensaje"
          placeholder="Pregunta algo al asistente..."
          autoComplete="off"
          aria-label="Escribe tu mensaje"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          onKeyDown={manejarKeyDown}
          className="
            flex-1 px-4 py-3 rounded-lg text-sm font-mono
            bg-white text-[#223125] border border-[#E6E7EB]
            outline-none placeholder:text-[#223125]/40
            focus:border-[#729969] focus:ring-2 focus:ring-[#729969]/20
            transition-all duration-150
          "
        />
        <button
          type="submit"
          aria-label="Enviar mensaje"
          className="
            px-6 py-3 rounded-lg text-sm font-mono font-medium
            bg-[#729969] text-white
            hover:bg-[#5d8055] transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-[#729969]/40
          "
        >
          Enviar
        </button>
      </form>
    </footer>
  );
}

export default ChatInput;