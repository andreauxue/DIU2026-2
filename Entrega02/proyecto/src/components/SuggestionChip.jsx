function SuggestionChip({ titulo, pregunta, onClick }) {
  return (
    <div 
      onClick={() => onClick(pregunta)}
      className="bg-white border border-purple-100 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-purple-300 transition-all cursor-pointer text-left h-full flex flex-col"
    >
      <h3 className="font-semibold text-[#9234C9] text-center">
        {titulo}
      </h3>
      <p className="text-sm text-gray-500 mt-2">
        {pregunta}
      </p>
    </div>
  );
}

export default SuggestionChip;