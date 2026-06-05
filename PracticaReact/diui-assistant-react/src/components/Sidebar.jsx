import React from "react";

function Sidebar({ onLimpiarChat, totalMensajes }){
    return(
        <nav className="sidebar" aria-label="Conversaciones">
            <h2>Conversaciones</h2>
            <ul>
                <li>Dudas sobre HTML</li>
                <li>Dudas sobre SQL</li>
                <li>Dudas sobre Álgebra</li>
            </ul>
            <div className="chat-controls">
                <p id="message-counter">Mensajes: {totalMensajes}</p>
                <button id="clear-chat-btn" onClick={onLimpiarChat}>Limpiar Chat</button>
            </div>
        </nav>
    );
}

export default Sidebar;