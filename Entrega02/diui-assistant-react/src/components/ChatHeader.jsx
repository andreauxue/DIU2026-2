function ChatHeader({ onNuevoChat }) {
  return (
    <header className="bg-[#223125] text-[#E6E7EB] px-8 py-5 flex items-center justify-between flex-shrink-0">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">DIUI Assistant</h1>
        <p className="text-sm opacity-75 mt-0.5">
          Chatbot con IA únicamente para explorar acerca de diseño de interfaces.
        </p>
      </div>
      <button
        onClick={onNuevoChat}
        className="bg-[#729969]/25 text-[#729969] border border-[#729969]/40 text-xs px-3 py-1 rounded-full hover:bg-[#729969]/40 transition-colors duration-200 font-mono whitespace-nowrap"
      >
        Nuevo chat
      </button>
    </header>
  );
}

export default ChatHeader;