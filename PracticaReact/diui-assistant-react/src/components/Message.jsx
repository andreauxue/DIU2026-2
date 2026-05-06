import React from 'react';

function Message({ tipo, texto, hora }) {
  const isUser = tipo === 'usuario';
  
  return (
    <div className={`message-wrapper ${isUser ? 'wrapper-user' : 'wrapper-assistant'}`}>
      <div className={`message ${isUser ? 'msg-user' : 'msg-assistant'}`}>
        <p className="msg-text">{texto}</p>
        <span className="msg-time">{hora}</span>
      </div>
    </div>
  );
}

export default Message;