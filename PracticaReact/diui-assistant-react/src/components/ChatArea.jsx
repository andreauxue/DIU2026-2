import React, { useEffect, useRef } from 'react';
import Message from './Message';

function ChatArea({ mensajes, escribiendo }) {
  const finalChatRef = useRef(null);

  useEffect(() => {
    finalChatRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [mensajes, escribiendo]);

  return (
    <div className="chat-area">
      <div className="messages-container">
        {mensajes.map((msg) => (
          <Message 
            key={msg.id} 
            tipo={msg.tipo} 
            texto={msg.texto} 
            hora={msg.hora} 
          />
        ))}
        
        {escribiendo && (
          <div className="typing-indicator">
            DIUI Assistant está escribiendo...
          </div>
        )}
        <div ref={finalChatRef} />
      </div>
    </div>
  );
}

export default ChatArea;