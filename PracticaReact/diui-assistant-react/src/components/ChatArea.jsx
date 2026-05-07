import { useEffect, useRef } from "react";
import Message from "./Message";

function ChatArea({ mensajes }) {

    const chatRef = useRef(null);

    // bajar automáticamente

    useEffect(() => {

        chatRef.current.scrollTop =
            chatRef.current.scrollHeight;

    }, [mensajes]);

    return (

        <section className="chat" ref={chatRef}>

            {
                mensajes.map((msg) => (

                    <Message
                        key={msg.id}
                        tipo={msg.tipo}
                        texto={msg.texto}
                        hora={msg.hora}
                    />

                ))
            }

        </section>
    );
}

export default ChatArea;