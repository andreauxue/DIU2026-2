import React from 'react';

function Header({ totalMensajes }) {
  return (
    <header className="chat-header">
      <div className="header-info">
        <h1>DIUI Assistant</h1>
      </div>
      <div className="message-counter">
        Mensajes: <strong>{totalMensajes}</strong>
      </div>
    </header>
  );
}

export default Header;