import React, { useState } from 'react';
import IconPaperclip from './icons/IconPaperClip';
import IconSmile from './icons/IconSmile';
import IconSend from './icons/IconSend';

export default function ChatInput({ onSendMessage} ) {
    const [message, setMessage] = useState("");

    const handleSend = () => {
        if (message.trim() !== ""){
            onSendMessage(message);
            setMessage("");
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSend();S
        }
    };

    const hasText = message.trim().length > 0;

    return (
        <div className="w-full flex items-center justify-center gap-3">
            <div className="flex-1 max-w-3xl flex items-center bg-white border border-onix-inactive/30 rounded-xl px-4 py-2 transition-colors focus-within:border-onix-primaryDark focus-within:ring-1 focus-within:ring-onix-primaryDark shadow-sm">
                <button className="text-onix-inactive hover:text-onix-textDark transition-colors flex-shrink-0 cursor-pointer">
                    <IconPaperclip className="w-5 h-5" />
                </button>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Escribe tu mensaje..."
                    className="flex-1 bg-transparent border-none outline-none px-3 text-sm font-hind text-onix-textDark placeholder:text-onix-textMuted"
                />
                <button className="text-onix-inactive hover:text-onix-textDark transition-colors flex-shrink-0 cursor-pointer">
                    <IconSmile className="w-5 h-5" />
                </button>
            </div>

            <button
                onClick={handleSend}
                disabled={!hasText}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-montserrat font-semibold text-white transition-all shadow-sm
                    ${hasText 
                        ? 'bg-onix-primary hover:bg-onix-primaryDark cursor-pointer transform hover:scale-[1.02] active:scale-95' 
                        : 'bg-onix-primary/50 cursor-not-allowed'
                    }
                `}
            >
                <IconSend className="w-4 h-4" />
                <span className="hidden sm:inline">Enviar</span>
            </button>
        </div>
    )
}