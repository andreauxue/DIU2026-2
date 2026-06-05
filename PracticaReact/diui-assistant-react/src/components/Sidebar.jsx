export default function Sidebar({ onLimpiarChat }) {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li className="active">Conversación Actual</li>
          <li>Historial POO</li>
          <li>Ayuda Flexbox</li>
        </ul>
      </nav>
      <button className="btn-limpiar" onClick={onLimpiarChat}>
        Limpiar Chat
      </button>
    </aside>
  );
}