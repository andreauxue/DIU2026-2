function Sidebar({ onLimpiarChat }) {
  const conversaciones = [
    "Diseño de formularios",
    "Accesibilidad web",
    "Colores y contraste",
    "Experiencia de usuario",
  ];

  return (
    <aside className="sidebar">
      <h2>Conversaciones</h2>

      <ul className="sidebar__list">
        {conversaciones.map((conversacion, indice) => (
          <li key={indice}>
            <button type="button" className="sidebar__item">
              {conversacion}
            </button>
          </li>
        ))}
      </ul>

      <button type="button" className="sidebar__clean" onClick={onLimpiarChat}>
        Limpiar conversación
      </button>
    </aside>
  );
}

export default Sidebar;