function Header({ totalMensajes }) {
  return (
    <header className="header">
      <div className="header-brand">
        <span className="header-mark">◈</span>
        <div className="header-titles">
          <h1 className="header-title">DIUI ASSISTANT</h1>
          <p className="header-sub">Sistema de chat · React Edition</p>
        </div>
      </div>

      <div className="header-counter">
        <span className="counter-label">Mensajes</span>
        <span className="counter-value">{totalMensajes}</span>
      </div>
    </header>
  );
}

export default Header;
