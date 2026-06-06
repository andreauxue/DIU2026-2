import React from 'react';
import IconBot from './icons/IconBot';

export default function MessageBubble({ type, text, time}){
    const isUser = type === 'user';

    return (
        <div className={`flex w-full mb-6 ${isUser ? 'justify-end' : 'justify-start'}`}>
            {!isUser && (
                <div className="flex-shrink-0 mr-3 mt-1">
                    <div className="w-8 h-8 bg-onix-sidebarBg rounded-full flex items-center justify-center text-onix-textDark shadow-sm">
                        <IconBot className="w-5 h-5" />
                    </div>
                </div>
            )}

            <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} max-w-[80%] md:max-w-[70%]`}>
                <div 
                    className={`px-5 py-3 shadow-sm font-hind text-base leading-relaxed ${
                        isUser 
                        ? 'bg-onix-primary text-onix-textLight rounded-chat rounded-br-sm' 
                        : 'bg-onix-assistantBg text-onix-textDark rounded-chat rounded-bl-sm'
                    }`}
                >
                    {text}
                </div>
                {time && (
                    <span className="text-xs text-onix-textMuted mt-1 px-1 font-hind">
                        {time}
                    </span>
                )}
            </div>
        </div>
    );
}