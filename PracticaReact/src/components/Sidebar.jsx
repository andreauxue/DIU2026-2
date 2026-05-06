function Sidebar({ onClearChat }) {
  const conversaciones = [
    "Proyecto DIUI",
    "Dudas HTML",
    "CSS Layout",
    "Accesibilidad"
  ];

  return (
    <aside className="sidebar">
      <h2>Conversaciones</h2>
      <nav aria-label="Lista de conversaciones">
        <ul className="conversation-list">
          {conversaciones.map((conv, index) => (
            <li key={index}>
              <a href="#" onClick={(e) => e.preventDefault()}>
                {conv}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button className="clear-button" onClick={onClearChat}>
        Limpiar Chat
      </button>
    </aside>
  );
}

export default Sidebar;

// Made with Bob
