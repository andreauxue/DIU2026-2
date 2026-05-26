import botImg from "../assets/wall-e.jpeg";

export default function TypingIndicator() {
    return (
        <div className="flex items-end gap-2 sm:gap-3 w-full px-3 sm:px-6 justify-start animate-[wallFadeInUp_0.4s_ease-out]">
            {/* Avatar de WALL-UI con ligera animación de pulso (respiración) */}
            <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-[#A17B58]/40 animate-[wallPulse_2s_ease-in-out_infinite]">
                <img src={botImg} alt="Wall-UI" className="w-full h-full object-cover opacity-90" />
            </div>

            <div className="relative max-w-[75%] sm:max-w-[60%]">
                {/* Colita de la burbuja más pequeña y opaca */}
                <div className="absolute bottom-0 w-2.5 h-2.5 rounded-full translate-y-[calc(100%+1px)] left-0 bg-[#A17B58]/70" />
                
                {/* Burbuja con color opaco, tipografía más pequeña y en negritas */}
                <div className="rounded-2xl px-3 py-2 sm:px-4 sm:py-2.5 bg-[#A17B58]/70 text-[#E1DDD5] rounded-bl-sm flex items-baseline gap-1 shadow-sm backdrop-blur-sm">
                    <p className="text-xs tracking-wide m-0 font-bold italic opacity-95">
                        WALL-UI está escribiendo
                    </p>
                    
                    {/* Los 3 puntos suspensivos convertidos en animación tipo ola suave */}
                    <div className="flex gap-0.5 items-center ml-0.5">
                        <span className="w-1 h-1 bg-[#E1DDD5] rounded-full animate-[wallWave_1.2s_ease-in-out_infinite_0s]"></span>
                        <span className="w-1 h-1 bg-[#E1DDD5] rounded-full animate-[wallWave_1.2s_ease-in-out_infinite_0.2s]"></span>
                        <span className="w-1 h-1 bg-[#E1DDD5] rounded-full animate-[wallWave_1.2s_ease-in-out_infinite_0.4s]"></span>
                    </div>
                </div>
            </div>

            {/* Definición de las nuevas animaciones fluidas */}
            <style>{`
                @keyframes wallFadeInUp {
                    from { opacity: 0; transform: translateY(15px) scale(0.95); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
                @keyframes wallPulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.7; transform: scale(0.95); }
                }
                @keyframes wallWave {
                    0%, 60%, 100% { transform: translateY(0); opacity: 0.3; }
                    30% { transform: translateY(-3px); opacity: 1; }
                }
            `}</style>
        </div>
    );
}