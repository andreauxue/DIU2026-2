export default function SuggestionChip({ texto, onClick }) {
    return (
        <button
            onClick={onClick}
            className="group relative overflow-hidden flex items-center justify-center bg-[#E1DDD5] hover:bg-[#D1C1D0] text-[#000000] border border-transparent hover:border-[#A17B58] px-7 py-3.5 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.12)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 active:scale-95 cursor-pointer"
        >
            <span className="text-sm font-medium z-10 transition-all duration-300 group-hover:-translate-x-3">{texto}</span>
            <svg
                className="w-4 h-4 absolute right-4 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#76B82A] z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>

            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[wallShine_1s_ease-in-out_infinite]" />

            <style>{`
                @keyframes wallShine {
                    100% { transform: translateX(100%); }
                }
            `}</style>
        </button>
    );
}