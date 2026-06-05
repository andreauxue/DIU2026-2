import { useEffect, useRef } from "react";
import Message from "./Message";

/**
 * Area donde aparecen los mensajes del usuario y asistente.
 * @param {*} mensajes lista de los mensajes del chat actual.
 * @param {*} escribiendo bandera que indica si es necesario desplegar el mensaje de escribiendo del asistente.
 */
function ChatArea({ mensajes, escribiendo }) {
    const seccionRef = useRef(null);

    useEffect(() => {
        if (seccionRef.current) {
            seccionRef.current.scrollTop = seccionRef.current.scrollHeight;
        }
    }, [mensajes, escribiendo]);

    return (
        <section ref={seccionRef}>
            {mensajes.map((msg) => (
                <Message key={msg.id} tipo={msg.tipo} texto={msg.texto} hora={msg.hora} />
            ))}
            {escribiendo ? <p className="escribiendo">El asistente está escribiendo…</p> : null}
        </section>
    );

}

export default ChatArea;