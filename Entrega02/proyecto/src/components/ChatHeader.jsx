function ChatHeader({ toggleSidebar }) {
  return (
    <header className="w-full bg-white border-b border-slate-100 px-4 py-4 flex items-center justify-between shadow-sm md:px-6">
      <div className="flex items-center gap-3">
        {/* Botón Responsive/Mobile */}
        <button 
          onClick={toggleSidebar}
          className="p-2 text-slate-700 hover:bg-slate-50 rounded-lg md:hidden transition-colors"
          aria-label="Abrir menú de navegación"
        >
          ☰
        </button>
        <div>
          <h1 className="font-hind text-2xl font-bold text-fluxy-gradient tracking-tight">
            Fluxy
          </h1>
          <p className="text-xs font-semibold text-slate-400 mt-0.5">
            Asistente Experto en UI/UX
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
        <span className="text-xs font-medium text-slate-500 hidden sm:inline">Sistema Activo</span>
      </div>
    </header>
  );
}

export default ChatHeader;