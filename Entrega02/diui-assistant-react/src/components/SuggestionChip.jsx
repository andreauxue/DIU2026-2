function SuggestionChip({ texto, onClick }) {
  return (
    <button
      onClick={() => onClick(texto)}
      className="border border-[#223125]/30 text-[#223125] text-sm px-5 py-2 rounded-full bg-transparent hover:bg-[#223125]/5 transition-colors duration-200 font-mono"
    >
      {texto}
    </button>
  );
}

export default SuggestionChip;