function Sidebar({ isOpen, toggleSidebar, onClearChat }) {
  return (
    <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-slate-900 text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col justify-between border-r border-slate-800`}>
      <div className="p-4">
        {/* Botón Nuevo Chat con microinteracción de Feedback */}
        <button 
          onClick={() => { onClearChat(); toggleSidebar(); }}
          className="w-full py-3 px-4 bg-transparent border border-white rounded-xl font-medium text-sm flex items-center justify-center gap-2 hover:bg-white hover:text-slate-950 active:scale-95 transition-all"
          aria-label="Iniciar un nuevo chat"
        >
          <span>+</span> Nuevo Chat
        </button>

        <nav className="mt-8">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2">Historial Reciente</p>
          <ul className="mt-4 space-y-2">
            <li className="px-3 py-2.5 bg-slate-800/60 rounded-xl text-xs cursor-pointer text-slate-300 font-medium hover:bg-slate-800 transition-colors">
              💬 Paletas de color Minimalistas
            </li>
            <li className="px-3 py-2.5 rounded-xl text-xs cursor-pointer text-slate-400 font-medium hover:bg-slate-800/40 hover:text-slate-300 transition-colors">
              💬 Dudas sobre Contraste WCAG
            </li>
          </ul>
        </nav>
      </div>

      <div className="p-4 border-t border-slate-800 text-center">
        <p className="text-[10px] text-slate-500 font-medium">Diseño de Interfaces de Usuario • 2026</p>
      </div>
    </aside>
  );
}

export default Sidebar;