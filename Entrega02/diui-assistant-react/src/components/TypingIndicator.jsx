import React from "react";
import IconBot from "./icons/IconBot";

export default function TypingIndicator(){
    return (
        <div className="flex w-full mb-6 justify-start animate-fade-in">
            <div className="flex-shrink-0 mr-3 mt-1">
                <div className="w-8 h-8 bg-onix-sidebarBg rounded-full flex items-center justify-center text-onix-textDark shadow-sm">
                <IconBot className="w-5 h-5" />
                </div>
            </div>
            <div className="flex flex-col items-start max-w-[80%] md:max-w-[70%]">
                <div className="px-5 py-3 shadow-sm font-hind text-base leading-relaxed bg-onix-assistantBg text-onix-textDark rounded-chat rounded-bl-sm flex items-center gap-2">
                <span className="font-medium">Ónix está escribiendo</span>
                <span className="flex gap-1 mt-1">
                    <span className="w-1.5 h-1.5 bg-onix-textDark rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-1.5 h-1.5 bg-onix-textDark rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-1.5 h-1.5 bg-onix-textDark rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </span>
                </div>
            </div> 
        </div>
    );
}