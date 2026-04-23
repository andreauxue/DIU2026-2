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
            <section className="chat-container">
                <h1>DIU Assistant</h1>
                <p className="contador">Mensajes en la conversación: {messages.length}</p>
                <MessageList messages={messages}/>
                <ChatForm onSendMessage={enviarMensaje}/>
                <button className="boton-limpiar" onClick={limpiarChat}>Limpiar Chat</button>
            </section>
        );  
    }
    export default Chat;