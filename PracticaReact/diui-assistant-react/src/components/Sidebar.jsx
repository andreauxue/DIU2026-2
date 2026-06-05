import React from "react";

function Sidebar({ onLimpiarChat }) {
  const conversaciones = [
    { id: 1, nombre: "Chat sobre formularios", fecha: "Hoy" },
    { id: 2, nombre: "Chat sobre accesibilidad", fecha: "Ayer" },
    { id: 3, nombre: "Chat sobre UX", fecha: "Esta semana" },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Conversaciones</h2>
        <span className="chat-count">{conversaciones.length}</span>
      </div>
      <nav className="sidebar-nav">
        <ul className="conversations-list">
          {conversaciones.map((conv) => (
            <li key={conv.id} className="conversation-item">
              <div className="conv-info">
                <span className="conv-name">{conv.nombre}</span>
                <span className="conv-date">{conv.fecha}</span>
              </div>
            </li>
          ))}
        </ul>
      </nav>
      <div className="sidebar-footer">
        <button 
          className="btn-clear-chat" 
          onClick={onLimpiarChat}
          aria-label="Limpiar chat"
        >
          Limpiar conversación
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
