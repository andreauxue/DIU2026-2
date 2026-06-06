function Header({ totalMensajes }) {
  const etiqueta = totalMensajes === 1 ? "1 mensaje" : `${totalMensajes} mensajes`;

  return (
    <header className="header">
      <div className="header-top">
        <div>
          <h1>DIUI Assistant</h1>
        </div>
        <span id="contador-mensajes" className="contador" aria-live="polite">
          {etiqueta}
        </span>
      </div>
    </header>
  );
}

export default Header;