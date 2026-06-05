export default function Sidebar({ onLimpiarChat }) {
  return (
    <aside>
      <button className="nuevo-chat">+ Nuevo chat</button>
      <h2>Chats</h2>
      <nav>
        <ul>
          <li>Conversación dudas HTML</li>
          <li>Auxilio con CSS</li>
        </ul>
      </nav>
      <button onClick={onLimpiarChat} className="configuracion">Limpiar Chat</button>
    </aside>
  );
}