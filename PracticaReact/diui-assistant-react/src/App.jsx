import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ChatArea from "./components/ChatArea";
import ChatForm from "./components/ChatForm";
import "./App.css";

function App() {

    const [texto, setTexto] = useState("");


    const [mensajes, setMensajes] = useState([
        {
            id: 1,
            tipo: "usuario",
            texto: "Se me ponchó la llanta de mi bicicleta.",
            hora: obtenerHoraActual(),
        },

        {
            id: 2,
            tipo: "asistente",
            texto: "Primero debes retirar la rueda y revisar la cámara.",
            hora: obtenerHoraActual(),
        },
    ]);

    const respuestas = [
        "Revisa si la cámara tiene otro agujero.",
        "Asegúrate de inflar correctamente la llanta.",
        "Podrías necesitar cambiar la cámara.",
        "Usa parches especiales para bicicleta.",
        "También revisa el estado del neumático."
    ];

    function obtenerHoraActual() {

        const ahora = new Date();

        const horas = ahora.getHours();

        const minutos = ahora.getMinutes().toString().padStart(2, "0");

        return `${horas}:${minutos}`;
    }

    function obtenerRespuestaAleatoria() {

        const indice = Math.floor(Math.random() * respuestas.length);

        return respuestas[indice];
    }

    function manejarEnvio(evento) {

    evento.preventDefault();

    const textoLimpio = texto.trim();

    if (textoLimpio === "") {
        return;
    }

    // mensaje usuario

    const mensajeUsuario = {
        id: Date.now(),
        tipo: "usuario",
        texto: textoLimpio,
        hora: obtenerHoraActual(),
    };

    setMensajes((actuales) => [...actuales, mensajeUsuario]);

    setTexto("");


    // mensaje temporal del asistente

    const idAsistente = Date.now() + 1;

    const mensajeTemporal = {
        id: idAsistente,
        tipo: "asistente",
        texto: "...",
        hora: obtenerHoraActual(),
    };

    setMensajes((actuales) => [...actuales, mensajeTemporal]);

    // reemplazar mensaje temporal

    setTimeout(() => {

        setMensajes((actuales) =>
            actuales.map((msg) =>

                msg.id === idAsistente

                    ? {
                        ...msg,
                        texto: obtenerRespuestaAleatoria(),
                    }

                    : msg
            )
        );

    }, 1500);
}

    function limpiarChat() {

        setMensajes([]);

        setTexto("");
    }

    return (
        <>
            <Header totalMensajes={mensajes.length} />

            <main className="layout">

                <Sidebar onLimpiarChat={limpiarChat} />

                <ChatArea
                    mensajes={mensajes}
                />

            </main>

            <ChatForm
                texto={texto}
                setTexto={setTexto}
                onEnviar={manejarEnvio}
            />
        </>
    );
}

export default App;