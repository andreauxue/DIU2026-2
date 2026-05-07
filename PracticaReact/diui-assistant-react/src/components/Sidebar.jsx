function Sidebar({ onLimpiarChat }) {

    return (

        <nav className="sidebar">

            <h2>Conversaciones</h2>

            <ul>
                <li>🔧 Reparar ponchadura</li>
                <li>🚲 Ajustar frenos</li>
                <li>⚙️ Cambio de cadena</li>
                <li>🛞 Presión de llantas</li>
            </ul>

            <button onClick={onLimpiarChat}>
                Limpiar chat
            </button>

        </nav>
    );
}

export default Sidebar;