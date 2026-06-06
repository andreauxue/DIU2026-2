import React from "react";
import OnixLogo from '../assests/OnixLogo.png';
import IconChat from "./icons/IconChat";
import IconHelp from "./icons/IconHelp";
import IconSettings from "./icons/IconSettings";
import IconPlus from "./icons/IconPlus";

export default function Sidebar({ onNewChat, chatTime }) {
    const chatHistory = [
        {id: 1, title: 'Nuevo Chat', time: `Hoy, ${chatTime}`, active: true},
        {id: 2, title: 'Diferencia entre UI y UX', time: 'Ayer', active: false},
        {id: 3, title: 'Colores en interfaces', time: 'Ayer', active: false},
        {id: 4, title: 'Buenas prácticas de UI', time: '2 días atrás', active: false},
        {id: 5, title: 'Jeraquía visual', time: '3 días atrás', active: false},
    ]

    return (
        <aside className="h-full flex flex-col w-full bg-onix-sidebarBg">
            {/*Header del Sidebar donde esta el logo, nombre y el subtitulo.*/}
            <div className="p-4 flex flex-col gap-4">
                
                <div className="flex items-center gap-3">
                    <img src={OnixLogo} alt="Icono Ónix" className="w-12 h-12 rounded-lg object-cover shadow-sm"/>
                    <div>
                        <h1 className="font-montserrat font-bold text-xl text-onix-textDark leading-tight">Ónix</h1>
                        <p className="font-hind text-sm text-onix-inactive">Tu asistente de UI</p>
                    </div>
                </div>

                {/*Botón de Nueva Conversación*/}
                <button 
                    onClick={onNewChat}
                    className="bg-onix-primary hover:bg-onix-primaryDark text-onix-textLight font-montserrat font-semibold py-2 px-4 rounded-lg transition-colors w-full flex items-center justify-center gap-2 shadow-sm">
                    <IconPlus className="w-5 h-5"/>
                    <span>Nueva Conversación</span>
                </button>
            </div>

            {/* Lista del Historial de Conversaciones */}
            <div className="flex-1 overflow-y-auto p-4 pt-2">
                <h2 className="font-hind text-sm text-onix-inactive mb-3">Historial de conversaciones</h2>
                <ul className="space-y-1">
                    {chatHistory.map((chat) =>(
                        <li
                            key={chat.id}
                            className={`p-3 rounded-lg cursor-pointer transition-colors flex flex-col gap-1
                                ${chat.active
                                    ? 'bg-onix-primaryDark text-onix-textLight shadow-sm'
                                    : 'hover:bg-blue-200 text-onix-textDark'
                                }`}
                        >
                            <div className="font-hind font-medium truncate flex items-center gap-2">
                                <IconChat className="w-5 h-5 flex-shrink-0"/>
                                <span className="text-sm truncate">{chat.title}</span>
                            </div>
                            <div className={`text-xs ml-7 ${chat.active ? 'text-gray-200' : 'text-onix-textMuted'}`}>
                                {chat.time}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Footer del sidebar */}
            <div className="p-4 border-t border-blue-200/50 text-onix-inactive font-hind text-sm flex flex-col gap-3">
                <button className="flex items-center gap-2 hover:text-onix-textDark transition-colors w-full text-left">
                    <IconSettings className="w-5 h-5" /> 
                    <span>Configuración</span>
                </button>
                <button className="flex items-center gap-2 hover:text-onix-textDark transition-colors w-full text-left">
                    <IconHelp className="w-5 h-5" /> 
                    <span>Ayuda</span>
                </button>
            </div>

        </aside>
    );
}