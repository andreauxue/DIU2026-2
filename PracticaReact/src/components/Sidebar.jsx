function Sidebar({ onLimpiarChat }) {
  const conversaciones = [
    "Diseño de formularios accesibles",
    "Paletas de color UI",
    "Introducción a CSS y HTML",
    "Mejorar diseño",
  ];

  return (
    <aside className="sidebar">
      <nav>
        <h2>Tus chats</h2>
        <ul>
          {conversaciones.map((conv, i) => (
            <li key={i}>{conv}</li>
          ))}
        </ul>
      </nav>
      <div className="sidebar-acciones">
        <button
          className="btn-limpiar"
          onClick={onLimpiarChat}
          aria-label="Limpiar historial del chat"
        >
          Limpiar chat
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;