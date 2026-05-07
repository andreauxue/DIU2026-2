function Header({ totalMensajes }) {
  return (
    <header className="site-header">

      <div>
        <h1>DIUI Assistant</h1>
        <p>Tu asistente de conversación personal</p>
      </div>

      <span className="message-counter">
        {totalMensajes} mensajes
      </span>

    </header>
  );
}

export default Header;