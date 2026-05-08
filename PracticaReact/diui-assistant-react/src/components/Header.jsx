function Header({ totalMensajes }) {
  return (
    <header className="header">
      <div>
        <p className="header__label">Sistema de apoyo para diseño de interfaces</p>
        <h1>DIUI Assistant</h1>
      </div>

      <div className="header__counter">
        <span>{totalMensajes}</span>
        <p>mensajes</p>
      </div>
    </header>
  );
}

export default Header;