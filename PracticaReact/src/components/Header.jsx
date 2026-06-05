function Header({ messageCount }) {
  return (
    <header className="app-header">
      <div className="header-content">
        <h1>DIUI Assistant</h1>
        <p className="header-subtitle">Asistente de conversación para diseño de interfaces</p>
      </div>
      <div className="message-counter">
        <span className="counter-label">Mensajes:</span>
        <span className="counter-value">{messageCount}</span>
      </div>
    </header>
  );
}

export default Header;

// Made with Bob
