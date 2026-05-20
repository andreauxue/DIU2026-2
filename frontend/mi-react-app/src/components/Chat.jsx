import { useState } from "react";
import MessageList from "./MessageList";
import ChatForm from "./ChatForm";

function Chat() {
  const [messages, setMessages] = useState([]);

  function obtenerHoraActual() {
    const ahora = new Date();

    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();

    if (minutos < 10) {
      minutos = "0" + minutos;
    }

    return `${horas}:${minutos}`;
  }

  async function pedirRespuestaIA(textoUsuario) {
    const respuesta = await fetch("http://localhost:3001/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mensaje: textoUsuario,
      }),
    });

    const data = await respuesta.json();

    if (!respuesta.ok) {
      throw new Error(data.error || "Error al obtener respuesta de la IA");
    }

    return data.respuesta;
  }

  async function enviarMensaje(textoUsuario) {
    const nuevoMensaje = {
      id: Date.now(),
      tipo: "usuario",
      texto: textoUsuario,
      hora: obtenerHoraActual(),
    };

    setMessages((prev) => [...prev, nuevoMensaje]);

    const mensajeCargando = {
      id: Date.now() + 1,
      tipo: "asistente",
      texto: "DIU Assistant está escribiendo...",
      hora: obtenerHoraActual(),
    };

    setMessages((prev) => [...prev, mensajeCargando]);

    try {
      const respuestaIA = await pedirRespuestaIA(textoUsuario);

      const mensajeAsistente = {
        id: Date.now() + 2,
        tipo: "asistente",
        texto: respuestaIA,
        hora: obtenerHoraActual(),
      };

      setMessages((prev) =>
        prev
          .filter((mensaje) => mensaje.id !== mensajeCargando.id)
          .concat(mensajeAsistente)
      );
    } catch (error) {
      const mensajeError = {
        id: Date.now() + 3,
        tipo: "asistente",
        texto: "Ocurrió un error al conectar con la IA. Revisa que el backend esté encendido.",
        hora: obtenerHoraActual(),
      };

      setMessages((prev) =>
        prev
          .filter((mensaje) => mensaje.id !== mensajeCargando.id)
          .concat(mensajeError)
      );
    }
  }

  function limpiarChat() {
    setMessages([]);
  }

  return (
    <section className="mb-4 max-w-md bg-white rounded-2xl shadow-lg p-6">
      <header className="mb-4">
        <h1 className="text-2xl font-bold text-slate-900">
          DIU Assistant
        </h1>

        <p className="text-sm text-slate-500 mt-1">
          Mensajes en la conversación: {messages.length}
        </p>
      </header>

      <MessageList messages={messages} />

      <ChatForm onSendMessage={enviarMensaje} />

      <button
        type="button"
        className="w-full mt-3 px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 transition"
        onClick={limpiarChat}
      >
        Limpiar Chat
      </button>
    </section>
  );
}

export default Chat;