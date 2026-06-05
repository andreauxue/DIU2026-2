import React from "react";

function Header({ totalMensajes }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-area">
          <div>
            <h1>DIUI Assistant</h1>
            <p className="subtitle">Diseño de Interfaces de Usuario</p>
          </div>
        </div>
        <div className="counter-badge">
          <span className="counter-number">{totalMensajes}</span>
          <span className="counter-label">mensajes</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
