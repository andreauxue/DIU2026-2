import { useState } from "react"
import MessageList from "./MessageList"
import ChatForm from "./ChatForm"

function Chat() {
    const [messages, setMessages] = useState([]);

    const respuestasAsistente = [
        "Recuerda cuidar la jerarquía visual.",
        "Piensa en accesibilidad y contraste.",
        "Usa HTML semántico para mejorar estructura.",
    ];

    function obtenerHoraActual() {
        // HH:MM
        const ahora = new Date();
        let horas = ahora.getHours();
        let minutos = ahora.getMinutes();
        if (minutos < 10) minutos = "0" + minutos;
        // ejemplo 14:01
        return `${horas}:${minutos}`; 
    }

    function obtenerRespuestaAleatoria() {
        const indice = Math.floor(Math.random() * respuestasAsistente.length);
        return respuestasAsistente[indice];
    }

    function enviarMensaje(textoUsuario) {
        const nuevoMensaje = {
            id: Date.now(),
            tipo: "usuario",
            texto: textoUsuario,
            hora: obtenerHoraActual(),
        };

        setMessages((prev) => [...prev, nuevoMensaje]);

        setTimeout(() => {
            const respuesta = {
                id: Date.now() + 1,
                tipo: "asistente",
                texto: obtenerRespuestaAleatoria(),
                hora: obtenerHoraActual(),
            };
            setMessages((prev) => [...prev, respuesta]);
        }, 1000);
        }
        function limpiarChat() {
            setMessages([]);
        }

        return (
            <section className="mb-4 max-w-md bg-white rounded-2xl shadow-lg p-6">
                <header className="mb-4">
                    <h1 className="text-2xl">DIU Assistant</h1>
                    <p className="text-sm text-slate-500 mt-1">Mensajes en la conversación: {messages.length}</p>
                </header>
                
                <MessageList messages={messages}/>
                <ChatForm onSendMessage={enviarMensaje}/>
                <button className="w-full mt-3 px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 transition" onClick={limpiarChat}>Limpiar Chat</button>
            </section>
        );  
    }
    export default Chat;