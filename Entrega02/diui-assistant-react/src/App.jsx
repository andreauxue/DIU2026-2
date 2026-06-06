import React, { useState } from 'react';
import ChatLayout from './components/ChatLayout';
import SuggestionChip from './components/SuggestionChip';
import ChatInput from './components/ChatInput';
import MessageList from './components/MessageList';
import TypingIndicator from './components/TypingIndicator';
import { getBotResponse } from './utils/getBotResponse';

import IconLayout from './components/icons/IconLayout';
import IconPalette from './components/icons/IconPalette';
import IconLayers from './components/icons/IconLayers';

function App() {
    const [messages, setMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);

    const getFormattedTime = () => {
        return new Date().toLocaleTimeString('es-MX', { hour: 'numeric', minute: '2-digit' });
    };

    const [chatTime, setChatTime] = useState(getFormattedTime());

    const handleSendMessage = (text) => {
        if (!text.trim()) return;

        const newMessage = {
            id: Date.now(),
            text: text,
            sender: 'user',
            time: getFormattedTime()
        };

        setMessages((prev) => [...prev, newMessage]);
        
        setIsTyping(true);

        setTimeout(() => {
            const determinatedResponse = getBotResponse(text); 
            const botResponse = {
                id: Date.now() + 1,
                text: determinatedResponse,
                sender: 'assistant',
                time: new Date().toLocaleTimeString('es-MX', { hour: 'numeric', minute: '2-digit' })
            };
            
            setMessages((prev) => [...prev, botResponse]);
            
            setIsTyping(false);
        }, 1500);
    };

    const handleNewChat = () => {
        setMessages([]);
        setChatTime(getFormattedTime()); 
    };

    const isEmpty = messages.length === 0;

    return (
        <ChatLayout isEmpty={isEmpty} onSendMessage={handleSendMessage} onNewChat={handleNewChat} chatTime={chatTime}>
            {isEmpty ? (
                <div className="max-w-4xl w-full mx-auto flex flex-col items-center justify-center text-center px-6 md:px-12 py-10 animate-fade-in">
                    <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-onix-textDark mb-6 tracking-tight">
                        Bienvenido a Ónix
                    </h1>
                    
                    <p className="font-hind text-lg md:text-xl text-onix-textMuted max-w-2xl mb-3 leading-relaxed">
                        Tu asistente para aprender y mejorar en diseño de interfaces.
                    </p>
                
                    <p className="font-hind text-sm md:text-base text-onix-inactive max-w-xl mb-8 leading-relaxed">
                        Puedes preguntarme sobre colores, tipografía, wireframes o buenas prácticas.<br/>Para empezar, escribe tu primera pregunta en el campo inferior.

                    </p>

                    <div className="w-full max-w-3xl mb-10 shadow-sm rounded-xl">
                        <ChatInput onSendMessage={handleSendMessage} />
                    </div>

                    <div className="w-full max-w-3xl flex flex-col gap-3">
                        <span className="text-xs font-montserrat font-semibold text-onix-inactive uppercase tracking-wider mb-1 block">
                            Sugerencias iniciales
                        </span>
                        <div className="flex flex-wrap justify-center gap-3">
                            <SuggestionChip 
                                icon={IconLayout} 
                                text="¿Qué es un wireframe?" 
                                onClick={() => handleSendMessage("¿Qué es un wireframe?")} 
                            />
                            <SuggestionChip 
                                icon={IconPalette} 
                                text="¿Cómo elijo colores para una interfaz?" 
                                onClick={() => handleSendMessage("¿Cómo elijo colores para una interfaz?")} 
                            />
                            <SuggestionChip 
                                icon={IconLayers} 
                                text="¿Cuál es la diferencia entre UI y UX?" 
                                onClick={() => handleSendMessage("¿Cuál es la diferencia entre UI y UX?")} 
                            />
                        </div>
                    </div>  
                </div>
            ):(
                <div className="w-full h-full flex flex-col justify-between">
                    <div className="flex-1">
                       
                        <MessageList messages={messages} />
                        
                        {isTyping && <TypingIndicator />}
                    </div>
                </div>
            )}
        </ChatLayout>
    )

}

export default App;