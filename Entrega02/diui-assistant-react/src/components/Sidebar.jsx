import { useState } from 'react';
import evaImg from '../assets/eva.jpeg';

const PLANETS = [
    // Saturn-like with ring
    (active) => (
        <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
            <ellipse cx="14" cy="14" rx="8" ry="8" fill={active ? '#A17B58' : '#4B5557'} />
            <ellipse cx="14" cy="14" rx="8" ry="3" fill="none" stroke={active ? '#D1C1D0' : '#76B82A'} strokeWidth="1.2" />
            <ellipse cx="14" cy="12" rx="4" ry="2" fill={active ? '#D1C1D0' : '#D1C1D0'} opacity="0.3" />
        </svg>
    ),
    // Striped Jupiter-like
    (active) => (
        <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
            <circle cx="14" cy="14" r="8" fill={active ? '#A17B58' : '#4B5557'} />
            <path d="M6.2 11.5 Q14 10 21.8 11.5" stroke={active ? '#E1DDD5' : '#76B82A'} strokeWidth="1.5" fill="none" />
            <path d="M6.2 14.5 Q14 16 21.8 14.5" stroke={active ? '#E1DDD5' : '#76B82A'} strokeWidth="1.2" fill="none" />
            <path d="M6.8 17.5 Q14 18.5 21.2 17.5" stroke={active ? '#E1DDD5' : '#76B82A'} strokeWidth="1" fill="none" opacity="0.6" />
            <circle cx="14" cy="14" r="8" fill="none" stroke={active ? '#E1DDD5' : '#7C7A7A'} strokeWidth="0.5" opacity="0.4" />
        </svg>
    ),
    // Small planet with moon
    (active) => (
        <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
            <circle cx="13" cy="15" r="7" fill={active ? '#A17B58' : '#4B5557'} />
            <circle cx="13" cy="13" r="3" fill={active ? '#E1DDD5' : '#7C7A7A'} opacity="0.25" />
            <circle cx="22" cy="8" r="3" fill={active ? '#E1DDD5' : '#76B82A'} opacity="0.8" />
            <circle cx="13" cy="15" r="7" fill="none" stroke={active ? '#E1DDD5' : '#7C7A7A'} strokeWidth="0.5" opacity="0.4" />
        </svg>
    ),
    // Cracked/rocky planet
    (active) => (
        <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
            <circle cx="14" cy="14" r="8" fill={active ? '#A17B58' : '#4B5557'} />
            <path d="M10 8 L12 13 L9 16 L13 20" stroke={active ? '#E1DDD5' : '#76B82A'} strokeWidth="1" fill="none" opacity="0.7" />
            <path d="M16 9 L15 14 L18 17" stroke={active ? '#E1DDD5' : '#76B82A'} strokeWidth="1" fill="none" opacity="0.5" />
            <circle cx="14" cy="14" r="8" fill="none" stroke={active ? '#E1DDD5' : '#7C7A7A'} strokeWidth="0.5" opacity="0.4" />
        </svg>
    ),
    // Ice planet with diagonal bands
    (active) => (
        <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
            <circle cx="14" cy="14" r="8" fill={active ? '#A17B58' : '#4B5557'} />
            <line x1="8" y1="9" x2="20" y2="19" stroke={active ? '#E1DDD5' : '#76B82A'} strokeWidth="2" opacity="0.3" />
            <line x1="6" y1="13" x2="18" y2="20" stroke={active ? '#E1DDD5' : '#76B82A'} strokeWidth="1.5" opacity="0.2" />
            <circle cx="14" cy="14" r="4" fill={active ? '#E1DDD5' : '#7C7A7A'} opacity="0.15" />
            <circle cx="14" cy="14" r="8" fill="none" stroke={active ? '#E1DDD5' : '#76B82A'} strokeWidth="1" opacity="0.4" />
        </svg>
    ),
];

export default function Sidebar({ chats, activeChatId, onNewChat, onSelectChat, onDeleteChat }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [isConfigOpen, setIsConfigOpen] = useState(false);

    const filteredChats = chats.filter(chat =>
        chat.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex flex-col h-full bg-gradient-to-b from-[#D1C1D0] via-[#7C7A7A] to-[#7C7A7A] font-serif text-[#000000] rounded-l-none relative shadow-2xl">

            <div className="p-5 pb-3">
                <h1 className="text-3xl font-bold tracking-wider mb-6 text-[#000000] drop-shadow-sm">
                    WALL-UI
                </h1>

                <button
                    onClick={onNewChat}
                    className="w-full flex items-center justify-center gap-2 bg-[#E1DDD5] hover:bg-[#D1C1D0] text-[#000000] py-2.5 px-4 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:scale-[1.03] active:scale-95 mt-14 mb-4 font-medium group border border-transparent hover:border-[#A17B58]/30"
                >
                    <svg className="w-5 h-5 text-[#76B82A] group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                    Nueva conversación
                </button>

                <div className="relative group">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4B5557] transition-colors group-focus-within:text-[#A17B58]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Buscar chat"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-[#E1DDD5] text-[#000000] placeholder-[#4B5557] rounded-xl py-2 pl-9 pr-4 outline-none focus:ring-2 focus:ring-[#A17B58] transition-all duration-300 shadow-inner"
                    />
                </div>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-2 mt-2 space-y-2 scrollbar-thin scrollbar-thumb-[#4B5557] scrollbar-track-transparent">
                <h2 className="text-xs font-bold uppercase tracking-wider ml-1 mb-3 text-[#000000]/70">
                    Chats recientes
                </h2>

                {filteredChats.length === 0 ? (
                    <p className="text-sm text-[#000000]/60 ml-1 animate-pulse font-medium">
                        {chats.length === 0 ? "No hay chats recientes" : "No se encontraron resultados"}
                    </p>
                ) : (
                    filteredChats.map((chat, index) => {
                        const isActive = chat.id === activeChatId;
                        const Planet = PLANETS[index % PLANETS.length];
                        return (
                            <div
                                key={chat.id}
                                onClick={() => onSelectChat(chat.id)}
                                className={`group flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md animate-[wallSlideIn_0.4s_cubic-bezier(0.16,1,0.3,1)] ${isActive
                                    ? 'bg-[#A17B58] text-[#E1DDD5]'
                                    : 'bg-[#E1DDD5] hover:bg-[#D1C1D0] text-[#000000]'
                                    }`}
                            >
                                <div className="flex items-center gap-3 overflow-hidden">
                                    <div className="flex-shrink-0 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                                        <Planet active={isActive} />
                                    </div>
                                    <span className={`text-sm font-medium truncate ${isActive ? 'text-[#E1DDD5]' : 'text-[#000000]'}`}>
                                        {chat.title}
                                    </span>
                                </div>
                                <button
                                    onClick={(e) => { e.stopPropagation(); onDeleteChat(chat.id); }}
                                    className={`opacity-0 group-hover:opacity-100 p-1.5 hover:bg-red-500 hover:text-white rounded-lg transition-all duration-200 transform scale-90 hover:scale-110 ${isActive ? 'text-[#E1DDD5]' : 'text-[#4B5557]'
                                        }`}
                                    title="Eliminar chat"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        );
                    })
                )}
            </div>

            {isConfigOpen && (
                <div className="absolute bottom-16 left-4 right-4 bg-[#E1DDD5] rounded-xl shadow-xl border border-[#4B5557]/20 p-4 z-20 animate-[wallSlideUp_0.3s_ease-out]">
                    <div className="flex justify-between items-center border-b border-[#7C7A7A]/30 pb-2 mb-3">
                        <h3 className="font-bold text-[#000000]">Configuración</h3>
                        <button onClick={() => setIsConfigOpen(false)} className="text-[#4B5557] hover:text-red-500 transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                    <div className="space-y-4 text-sm text-[#000000]">
                        <div className="space-y-2">
                            <p className="font-semibold text-[#4B5557] text-xs uppercase">Chat</p>
                            <div className="flex justify-between items-center">
                                <span>Apariencia</span>
                                <span className="bg-[#D1C1D0] px-2 py-1 rounded text-xs">Oscuro</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Efectos</span>
                                <span className="bg-[#D1C1D0] px-2 py-1 rounded text-xs">Sí</span>
                            </div>
                        </div>
                        <div className="space-y-2 pt-2 border-t border-[#7C7A7A]/20">
                            <p className="font-semibold text-[#4B5557] text-xs uppercase">Cuenta</p>
                            <div className="flex justify-between items-center">
                                <span>Correo</span>
                                <span className="text-xs opacity-70 truncate max-w-[120px]">user@ejemplo.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div
                onClick={() => setIsConfigOpen(!isConfigOpen)}
                className="bg-[#4B5557] p-4 flex items-center gap-3 mt-auto cursor-pointer hover:bg-[#A17B58] transition-colors duration-300 group relative z-10"
            >
                <div className="w-9 h-9 rounded-full bg-[#E1DDD5] flex items-center justify-center flex-shrink-0 shadow-inner group-hover:scale-105 transition-transform duration-300">
                    <img src={evaImg} alt="User avatar" className="w-full h-full rounded-full object-cover" />
                </div>
                <span className="text-[#E1DDD5] font-semibold tracking-wide">User</span>
                <svg className={`w-4 h-4 text-[#E1DDD5] ml-auto transition-transform duration-300 ${isConfigOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                </svg>
            </div>

            <style>{`
                @keyframes wallSlideIn {
                    0% { opacity: 0; transform: translateX(-15px) scale(0.98); }
                    100% { opacity: 1; transform: translateX(0) scale(1); }
                }
                @keyframes wallSlideUp {
                    0% { opacity: 0; transform: translateY(10px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}