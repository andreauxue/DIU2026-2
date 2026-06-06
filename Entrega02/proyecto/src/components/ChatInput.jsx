import { useState } from "react";

function ChatInput({ onSendMessage, disabled }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim() || disabled) return;
    onSendMessage(text.trim());
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-slate-100 md:px-6">
      {/* Contenedor con borde de degradado de marca */}
      <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-[#9234C9] via-[#1D2687] to-[#D814BE] focus-within:ring-4 focus-within:ring-indigo-100 transition-all shadow-sm">
        <div className="flex bg-white rounded-[10px] items-center overflow-hidden">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            disabled={disabled}
            placeholder="Consulta sobre paletas de colores, contraste o estilos..."
            maxLength={600}
            className="flex-1 px-4 py-3 bg-transparent text-sm font-medium text-slate-900 outline-none placeholder-slate-400 disabled:cursor-not-allowed"
          />
          <button
            type="submit"
            disabled={!text.trim() || disabled}
            // Microinteracción de Feedback en botón (hover, active y disabled)
            className={`px-5 py-3 text-xs font-bold text-white uppercase tracking-wider transition-all active:scale-95 h-full ${
              text.trim() && !disabled
                ? "bg-[#1D2687] hover:bg-indigo-900 cursor-pointer"
                : "bg-slate-300 text-slate-400 cursor-not-allowed"
            }`}
          >
            Enviar
          </button>
        </div>
      </div>
    </form>
  );
}

export default ChatInput;