import React from 'react';

function Sidebar({ onLimpiarChat }) {
  const conversaciones = [
    "Diseño de formularios",
    "Accesibilidad web",
    "Jerarquía visual",
    "Pruebas QA en UI"
  ];

  return (
    <aside className="chat-sidebar">
      <h2>Historial</h2>
      <ul className="conversation-list">
        {conversaciones.map((conv, index) => (
          <li key={index} className="conversation-item">
            💬 {conv}
          </li>
        ))}
      </ul>
      <button className="btn-clear" onClick={onLimpiarChat}>
        🗑️ Limpiar Chat
      </button>
    </aside>
  );
}

export default Sidebar;