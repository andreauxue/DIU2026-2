function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="bg-[#A1C0C2] text-[#223125] px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm flex items-center gap-2">
        <span className="text-xs text-[#223125]/70">
          DIUI Assistant está escribiendo
        </span>
        <span className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-[#223125]/50 animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </span>
      </div>
    </div>
  );
}

export default TypingIndicator;