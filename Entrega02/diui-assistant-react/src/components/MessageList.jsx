import { useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';
import SuggestionChip from './SuggestionChip';
import TypingIndicator from './TypingIndicator';
import botImg from '../assets/wall-e.jpeg';   

export default function MessageList({
    messages = [],
    isTyping = false,
    suggestions = [],
    onSuggestionClick = () => {},
    emptyMessage = null,
}) {
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, [messages.length, isTyping, suggestions.length]);

    let content;

    if (emptyMessage) {
        // CASO 1: No hay chat seleccionado
        content = (
            <div className="flex-1 flex items-center justify-center px-4 animate-[messageListFadeIn_0.5s_ease-out]">
                <div className="text-center text-[#E1DDD5]/80 font-medium drop-shadow max-w-md">
                    {/* Avatar = imagen real de WALL-UI */}
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[#E1DDD5]/40 shadow-xl">
                        <img src={botImg} alt="WALL-UI" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-base sm:text-lg">{emptyMessage}</p>
                </div>
            </div>
        );
    } else if (messages.length === 0) {
        // CASO 2: Welcome screen
        content = (
            <div className="flex-1 flex flex-col items-center justify-center w-full py-8 animate-[messageListFadeIn_0.6s_ease-out]">
                <div className="relative mb-6 group">
                    <div className="absolute inset-0 rounded-full bg-[#A17B58]/40 blur-2xl scale-110 animate-pulse" />
                    {/* Avatar grande = imagen real de WALL-UI */}
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shadow-2xl border-4 border-[#E1DDD5] transition-transform duration-500 group-hover:scale-105 group-hover:rotate-6">
                        <img src={botImg} alt="WALL-UI" className="w-full h-full object-cover" />
                    </div>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-[#000000] tracking-wider mb-2 drop-shadow-sm text-center">
                    Bienvenido a WALL-UI
                </h1>
                <p className="text-base sm:text-lg text-[#E1DDD5] font-medium mb-10 text-center drop-shadow">
                    Estoy para apoyarte
                </p>
                {suggestions.length > 0 && (
                    <div className="w-full max-w-2xl px-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-[#E1DDD5]/80 font-semibold text-center mb-4">
                            Prueba con una de estas
                        </p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            {suggestions.map((sugg, i) => (
                                <div
                                    key={i}
                                    className="animate-[messageListFadeIn_0.5s_ease-out_backwards]"
                                    style={{ animationDelay: `${0.15 + i * 0.08}s` }}
                                >
                                    <SuggestionChip
                                        texto={sugg.text}
                                        onClick={() => onSuggestionClick(sugg.query)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    } else {
        // CASO 3: Mensajes
        content = (
            <div className="flex flex-col gap-4 py-4">
                {messages.map((msg) => (
                    <div key={msg.id} className="animate-[messageSlideIn_0.35s_cubic-bezier(0.16,1,0.3,1)]">
                        <MessageBubble tipo={msg.tipo} texto={msg.texto} hora={msg.hora} />
                    </div>
                ))}

                {isTyping && (
                    <div className="animate-[messageSlideIn_0.3s_ease-out]">
                        <TypingIndicator />
                    </div>
                )}

                {!isTyping && suggestions.length > 0 && (
                    <div className="flex flex-wrap gap-3 mt-6 justify-center">
                        {suggestions.map((sugg, i) => (
                            <div
                                key={i}
                                className="animate-[suggestionsPop_0.4s_ease-out_backwards]"
                                style={{ animationDelay: `${i * 0.08}s` }}
                            >
                                <SuggestionChip
                                    texto={sugg.text}
                                    onClick={() => onSuggestionClick(sugg.query)}
                                />
                            </div>
                        ))}
                    </div>
                )}

                <div ref={bottomRef} aria-hidden="true" className="h-1" />
            </div>
        );
    }

    return (
        <div className="h-full w-full overflow-y-auto overflow-x-hidden px-4 sm:px-6 font-serif scrollbar-thin scrollbar-thumb-[#A17B58] scrollbar-track-transparent">
            <div className="w-full max-w-4xl mx-auto min-h-full flex flex-col">
                {content}
            </div>
            <style>{`
                @keyframes messageListFadeIn {
                    0%   { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                @keyframes messageSlideIn {
                    0%   { opacity: 0; transform: translateY(10px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                @keyframes suggestionsPop {
                    0%   { opacity: 0; transform: translateY(10px) scale(0.95); }
                    100% { opacity: 1; transform: translateY(0) scale(1); }
                }
            `}</style>
        </div>
    );
}
