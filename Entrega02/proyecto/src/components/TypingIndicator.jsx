function TypingIndicator() {
  return (
    <div className="flex items-start gap-3 justify-start max-w-[85%] md:max-w-[75%]" aria-live="polite">
      <div className="border-2 border-[#1D2687] text-slate-900 rounded-2xl rounded-bl-none px-4 py-3 bg-slate-50 flex items-center gap-2 shadow-sm">
        <p className="text-xs font-medium text-slate-500 italic">Fluxy está analizando tu propuesta...</p>
        <div className="flex gap-1">
          <span className="w-1.5 h-1.5 bg-[#1D2687] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
          <span className="w-1.5 h-1.5 bg-[#1D2687] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
          <span className="w-1.5 h-1.5 bg-[#1D2687] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
        </div>
      </div>
    </div>
  );
}

export default TypingIndicator;