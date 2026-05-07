import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ChatArea from "./components/ChatArea";
import ChatForm from "./components/ChatForm";
import "./App.css";

// Función para obtener la hora actual
function obtenerHoraActual() {
    const ahora = new Date();
    const horas = ahora.getHours();
    const minutos = ahora.getMinutes().toString().padStart(2, "0");
    return `${horas}:${minutos}`;
}

// Respuestas aleatorias del asistente 
const respuestasAsistente = [
    "Es una duda de suma importancia. Puedes agregar más detalles.",
    "Sigue tu desarrollo creativo, es importante que conforme avances logres adaptarlo a tu idea principal.",
    "La experiencia de usuario es crítica para el éxito web, ya que determina la retención, conversión y lealtad del cliente.",
    "Los usuarios prefieren sitios fáciles de usar, lo que fomenta su regreso y fidelidad a la marca.",
    "HTML debe estructurarse pensando primero en dispositivos móviles, asegurando que el contenido se adapte a cualquier tamaño de pantalla.",
    "Mejora la reputación del sitio y ayuda a diferenciarlo de la competencia.",
    "Crear formularios con etiquetas claras y asociadas correctamente a sus campos para facilitar la entrada de datos."
];

function obtenerRespuestaAleatoria() {
    const indice = Math.floor(Math.random() * respuestasAsistente.length);
    return respuestasAsistente[indice];
}

// Mensajes iniciales 
const mensajesIniciales = [
    { id: 1, tipo: "usuario", texto: "¿Qué significa HTML?", hora: obtenerHoraActual() },
    { id: 2, tipo: "asistente", texto: "HyperText Markup Language - Lenguaje de Marcado de Hipertexto, es el estándar fundamental para crear y estructurar páginas web", hora: obtenerHoraActual() },
    { id: 3, tipo: "usuario", texto: "¿Quién lo creó?", hora: obtenerHoraActual() },
    { id: 4, tipo: "asistente", texto: "Fue creado por Tim Berners-Lee en el CERN en 1989-1991", hora: obtenerHoraActual() },
    { id: 5, tipo: "usuario", texto: "¿Cuál es la versión más actual?", hora: obtenerHoraActual() },
    { id: 6, tipo: "asistente", texto: "HTML 5.2/5.3: Actualizaciones centradas en la accesibilidad, rendimiento y mejoras en los formularios.", hora: obtenerHoraActual() }
];

function App() {
    const [texto, setTexto] = useState("");
    const [escribiendo, setEscribiendo] = useState(false);
    const [mensajes, setMensajes] = useState(mensajesIniciales);

    function manejarEnvio(evento) {
        evento.preventDefault();
        
        const textoLimpio = texto.trim();
        if (textoLimpio === "") return;
        
        // Agregar mensaje del usuario
        const mensajeUsuario = {
            id: Date.now(),
            tipo: "usuario",
            texto: textoLimpio,
            hora: obtenerHoraActual(),
        };
        
        setMensajes((actuales) => [...actuales, mensajeUsuario]);
        setTexto("");
        setEscribiendo(true);
        
        // Simular respuesta del asistente después de 1.5 segundos
        setTimeout(() => {
            const mensajeAsistente = {
                id: Date.now() + 1,
                tipo: "asistente",
                texto: obtenerRespuestaAleatoria(),
                hora: obtenerHoraActual(),
            };
            setMensajes((actuales) => [...actuales, mensajeAsistente]);
            setEscribiendo(false);
        }, 1500);
    }
    
    function limpiarChat() {
        setMensajes([]);
        setTexto("");
        setEscribiendo(false);
    }
    
    return (
        <>
            <Header totalMensajes={mensajes.length} />
            <Sidebar onLimpiarChat={limpiarChat} />
            <main className="layout">
                <ChatArea mensajes={mensajes} escribiendo={escribiendo} />
            </main>
            <ChatForm
                texto={texto}
                setTexto={setTexto}
                onEnviar={manejarEnvio}
                onLimpiar={limpiarChat}
            />
        </>
    );
}

export default App;