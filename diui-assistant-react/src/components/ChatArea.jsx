import Message from "./Message"

function ChatArea({ mensajes, escribiendo }) {
    return (
        <section id="area-mensajes" aria-label="Área de mensajes">
            {/* Itera sobre el arreglo de mensajes */}
            {mensajes.map((mensaje) => (
                <Message 
                    key={mensaje.id} 
                    tipo={mensaje.tipo} 
                    texto={mensaje.texto} 
                    hora={mensaje.hora} 
                />
            ))}

            {/* Muestra el indicador de "escribiendo" */}
            {escribiendo && (
                <div className="indicador-escribiendo">
                    <p>El asistente está escribiendo...</p>
                </div>
            )}
        </section>
    );
}

export default ChatArea;
