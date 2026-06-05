export default function Header({ totalMensajes }) {
  return (
    <header className="app-header">
      <div className="header-info">
        <h1>DIUI Assistant</h1>
        <p>Tu asistente virtual en React</p>
      </div>
      <div className="contador-ui">
        Mensajes: {totalMensajes}
      </div>
    </header>
  );
}