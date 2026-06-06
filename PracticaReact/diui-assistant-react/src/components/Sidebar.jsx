export default function Sidebar({ onLimpiarChat }) {
  const conversacionesMock = [
    "Diseño de Login",
    "Prototipo App de Tareas",
    "Paleta de colores Cyberpunk"
  ];

  return (
    <nav>
        {/* Usamos el ID para darle estilo específico en el CSS */}
        <button id="btnLimpiar" onClick={onLimpiarChat}>Limpiar chat</button>
        
        <div className="lista-conversaciones">
          <h3>CHATS PREVIOS</h3>
          <ul>
            {conversacionesMock.map((conv, index) => (
              <li key={index} className="item-conversacion">
                <span className="icon">💬</span> {conv}
              </li>
            ))}
          </ul>
        </div>
    </nav>
  );
}