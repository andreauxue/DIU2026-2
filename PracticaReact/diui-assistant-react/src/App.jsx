import { useState } from 'react';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ChatArea from "./components/ChatArea";
import ChatForm from "./components/ChatForm";
import './App.css';


function App() {
    const [texto , setTexto] = useState("");
    const [escribiendo, setEscribiendo] = useState(false);

    const [mensajes, setMensajes] = useState([
        {
            id: 1,
            tipo: "asistente",
            texto: "¡Hola! Soy tu asistente de DIUI.",
            hora: obtenerHoraActual(),
        }
    ]);

    const respuestas = [
        "¡Entiendo! ¿Hay algo más en lo que pueda ayudarte con este tema?",
        "Claro, dame un momento para procesar esa información.",
        "Esa es una excelente pregunta. Aquí estoy para resolver cualquier duda que tengas.",
        "No estoy seguro de entender completamente. ¿Podrías darme un poco más de contexto?",
        "¡Anotado! Si necesitas más detalles, no dudes en decírmelo.",
        "Me parece bien. Sigamos avanzando, ¿qué más necesitas saber?"
    ];

    function obtenerHoraActual() {
        const ahora = new Date();
        
        return ahora.toLocaleTimeString('es-MX', {hour: '2-digit', minute: '2-digit'});
    }

    function obtenerRespuestaAleatoria(){
        const indice = Math.floor(Math.random() * respuestas.length);
        return respuestas[indice];
    }

    function manejarEnvio(evento) {
        evento.preventDefault();
        const textoLimpio = texto.trim();
        
        if (!textoLimpio) return;

        const mensajeUsuario = {
            id: Date.now(),
            tipo: "usuario",
            texto: textoLimpio,
            hora: obtenerHoraActual(),
        };

        setMensajes((actuales) => [...actuales, mensajeUsuario]);
        setTexto("");
        setEscribiendo(true);

        setTimeout(() => {
            const mensajeAsistente = {
                id: Date.now() + 1,
                tipo: "asistente",
                texto: obtenerRespuestaAleatoria(),
                hora: obtenerHoraActual(),
            };
        setMensajes((actuales) => [...actuales, mensajeAsistente]);
        setEscribiendo(false);
        }, 1800);
    }

    function limpiarChat(){
        setMensajes([]);
        setTexto("");
        setEscribiendo(false);
    }

    return (
        <>
            <Header />
            <main role="main">
                <Sidebar onLimpiarChat={limpiarChat} totalMensajes={mensajes.length} />
                <div className="chat-container">
                    <ChatArea mensajes={mensajes} escribiendo={escribiendo}/>
                    <ChatForm 
                        texto={texto} 
                        setTexto={setTexto} 
                        onEnviar={manejarEnvio} 
                    />
                </div>
            </main>
        </>
    );
}

export default App;