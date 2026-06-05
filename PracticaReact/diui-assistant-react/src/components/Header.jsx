export default function Header({ totalMensajes }) {
  return (
    <header>
      <span className="system-name">DIU Assistant</span>  
      <h1>Conversación dudas HTML</h1>
      <div id="contador-mensajes">¿Sabías que llevas {totalMensajes} mensajes?</div>
    </header>
  );
}