import { useEffect, useState } from 'react';
import botImg from '../assets/wall-e.jpeg';

export default function ChatHeader({
    name = "WALL-UI",
    description = "Asistente especializado en diseño de interfaces",
    status = "online",
}) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    const statusConfig = {
        online: { color: '#76B82A', label: 'En línea', pulse: true },
        typing: { color: '#A17B58', label: 'Escribiendo...', pulse: true },
        offline: { color: '#7C7A7A', label: 'Desconectado', pulse: false },
    };
    const currentStatus = statusConfig[status] || statusConfig.online;

    return (
        <header
            className={`w-full bg-[#E1DDD5]/80 backdrop-blur-md border-b border-[#A17B58]/30 shadow-md font-serif sticky top-0 z-20 transition-all duration-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'
                }`}
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-3 sm:gap-4">

                {/* === Avatar de WALL-UI con indicador de estado === */}
                <div className="relative flex-shrink-0 group">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.15)] border-2 border-[#E1DDD5] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <img src={botImg} alt="WALL-UI" className="w-full h-full object-cover" />
                    </div>

                    {/* Puntito de estado en la esquina del avatar */}
                    <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5">
                        {currentStatus.pulse && (
                            <span
                                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                                style={{ backgroundColor: currentStatus.color }}
                            />
                        )}
                        <span
                            className="relative inline-flex rounded-full h-3.5 w-3.5 border-2 border-[#E1DDD5]"
                            style={{ backgroundColor: currentStatus.color }}
                        />
                    </span>
                </div>

                {/* === Nombre + descripción === */}
                <div className="flex-1 min-w-0">
                    <h2 className="text-lg sm:text-xl font-bold text-[#000000] tracking-wider leading-tight drop-shadow-sm">
                        {name}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#4B5557] truncate font-medium">
                        {description}
                    </p>
                </div>

                {/* === Pastilla de estado (desktop) === */}
                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7C7A7A]/25 border border-[#A17B58]/30 backdrop-blur-sm hover:bg-[#7C7A7A]/40 hover:border-[#A17B58]/50 transition-all duration-300 cursor-default">
                    <span className="relative flex h-2 w-2">
                        {currentStatus.pulse && (
                            <span
                                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                                style={{ backgroundColor: currentStatus.color }}
                            />
                        )}
                        <span
                            className="relative inline-flex rounded-full h-2 w-2"
                            style={{ backgroundColor: currentStatus.color }}
                        />
                    </span>
                    <span className="text-xs font-semibold text-[#000000] tracking-wide uppercase">
                        {currentStatus.label}
                    </span>
                </div>
            </div>
        </header>
    );
}