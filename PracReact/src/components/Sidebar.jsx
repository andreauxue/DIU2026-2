const CONVERSACIONES = [
  { id: 1, titulo: "Mejora de formularios", fecha: "Hoy" },
  { id: 2, titulo: "Paleta de colores", fecha: "Hoy" },
  { id: 3, titulo: "Tipografía web", fecha: "Ayer" },
  { id: 4, titulo: "Accesibilidad WCAG", fecha: "Ayer" },
  { id: 5, titulo: "Diseño responsivo", fecha: "Lun" },
  { id: 6, titulo: "Microinteracciones", fecha: "Sáb" },
];

function Sidebar({ onLimpiarChat }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <span className="sidebar-label">Conversaciones</span>
        <ul className="conv-list">
          {CONVERSACIONES.map((conv, index) => (
            <li
              key={conv.id}
              className={`conv-item ${index === 0 ? "active" : ""}`}
            >
              <span className="conv-dot"></span>
              <div className="conv-text">
                <span className="conv-title">{conv.titulo}</span>
                <span className="conv-date">{conv.fecha}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <button className="clear-btn" onClick={onLimpiarChat}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6l-1 14H6L5 6" />
          <path d="M10 11v6M14 11v6" />
          <path d="M9 6V4h6v2" />
        </svg>
        <span>Limpiar chat</span>
      </button>
    </aside>
  );
}

export default Sidebar;
