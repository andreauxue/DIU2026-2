function MessageBubble({ message }) {
  const esUsuario = message.tipo === "usuario";
  const esError = message.tipo === "error";

  if (esError) {
    return (
      <div className="w-full flex justify-center my-2" aria-live="assertive">
        <div className="w-full max-w-xl bg-red-50 border border-red-300 rounded-xl px-4 py-3 flex items-start gap-3 shadow-sm">
          <span className="text-base flex-shrink-0">⚠️</span>
          <div>
            <h4 className="text-xs font-bold text-red-900 uppercase tracking-wide">Error de Conexión del Sistema</h4>
            <p className="text-xs text-red-800 mt-0.5 leading-relaxed font-medium">{message.texto}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full flex flex-col ${esUsuario ? "items-end" : "items-start"}`}>
      <div className={`max-w-[85%] md:max-w-[75%] px-4 py-3 rounded-2xl shadow-sm text-sm font-medium leading-relaxed border-2 border-[#1D2687] ${
        esUsuario 
          ? "bg-indigo-50 text-slate-950 rounded-br-none" 
          : "bg-white text-slate-950 rounded-bl-none"
      }`}>
        <p>{message.texto}</p>
      </div>
      <small className="text-[10px] text-slate-400 mt-1 px-1 font-mono">{message.hora}</small>
    </div>
  );
}

export default MessageBubble;