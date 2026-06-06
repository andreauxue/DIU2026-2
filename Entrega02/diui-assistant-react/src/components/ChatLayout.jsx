import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import Sidebar from "./Sidebar";

function ChatLayout({ mensajes, escribiendo, texto, setTexto, onEnviar, onSugerencia, onNuevoChat }) {
  return (
    <div className="flex flex-col h-full bg-[#F6F6F6] font-mono text-[#223125]">

      {/* Header */}
      <ChatHeader onNuevoChat={onNuevoChat} />

      {/* Cuerpo: área de mensajes + sidebar */}
      <div className="flex flex-1 overflow-hidden">

        {/* Área principal del chat */}
        <div className="flex flex-col flex-1 overflow-hidden">
          <MessageList
            mensajes={mensajes}
            escribiendo={escribiendo}
            onSugerencia={onSugerencia}
          />
          <ChatInput texto={texto} setTexto={setTexto} onEnviar={onEnviar} />
        </div>

        {/* Sidebar a la derecha */}
        <Sidebar onNuevoChat={onNuevoChat} />

      </div>
    </div>
  );
}

export default ChatLayout;