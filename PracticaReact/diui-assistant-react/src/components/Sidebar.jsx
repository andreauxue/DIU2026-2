function Sidebar({ onLimpiarChat }) {
  return (
    <aside className="sidebar">

      <h2>Conversaciones</h2>

      <nav aria-label="Lista de conversaciones">

        <ul className="conversation-list">
          <li className="active">Sesión actual</li>
          <li>Consulta anterior</li>
          <li>Soporte técnico</li>
          <li>Revisión de tarea</li>
          <li>Otra consulta</li>
        </ul>

      </nav>

      <button
        className="clear-btn"
        onClick={onLimpiarChat}
      >
        Limpiar chat
      </button>

    </aside>
  );
}

export default Sidebar;