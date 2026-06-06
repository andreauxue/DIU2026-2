import Message from './Message'; 

export default function ChatArea({ mensajes, escribiendo }) {
  return (
    <section className="chat">
      {/* sino hay mensajes, se muestra un marcador de posición */}
      {mensajes.length === 0 && !escribiendo && (
        <div className="placeholder-chat">
          Hola! ^-^ Escribe tu primer mensaje
        </div>
      )}

      {mensajes.map((m) => (
        <Message 
          key={m.id} 
          tipo={m.tipo} 
          texto={m.texto} 
          hora={m.hora} 
        />
      ))}

      {escribiendo && (
        <div className="mensaje asistente">
          DIUI Assistant está escribiendo...
        </div>
      )}
    </section>
  );
}