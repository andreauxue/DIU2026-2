export default function Header({ totalMensajes }) {
  return (
    <header> 
        <h1>DIUI Assistent</h1>
        <p>Asistente virtual para diseño de interfaces</p>
        {/* contador de mensajes */}
        <div className="contador-badge">
          Mensajes: {totalMensajes}
        </div>
    </header>
  );
}