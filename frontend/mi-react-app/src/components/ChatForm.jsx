import { useState } from "react";

function ChatForm({ onSendMessage }) {
    const [inputValue, setInputValue] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const textoLimpio = inputValue.trim();
        if (!textoLimpio) return;
        onSendMessage(textoLimpio);
        setInputValue("");
    }
    
    return (
        <form onSubmit={handleSubmit} className="chat-form">
            <input 
             
             type="text"
             value={inputValue}
             onChange={(e) => setInputValue(e.target.value)}
             placeholder="Escribe tu mensaje" 
            />
            <button type="submit">Enviar</button>
        </form>
    );
}

export default ChatForm;