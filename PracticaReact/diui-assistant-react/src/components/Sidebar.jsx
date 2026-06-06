function Sidebar() {
    return (
        <aside aria-label="Barra lateral">
            <section className="menu">
                <h2>📂Proyectos</h2>
                <nav>
                    <ul>
                        <li>📁+ Nuevo Proyecto</li>
                        <li>📁 Página Web</li>
                        <li>📁 Tarea 1</li>
                        <li>📁 CSS</li>
                    </ul>
                </nav>
            </section>

            <section className="menu">
                <h2>⌛Recientes</h2>
                <nav>
                    <ul>
                        <li className="chat-activo">Estructura página web</li>
                        <li>📁 CSS</li>
                        <li>Conectar CSS con HTML</li>
                    </ul>
                </nav>
            </section>

            <section className="menu">
                <h2>🖊Chats</h2>
                <nav>
                    <ul>
                        <li>🖋+ Nuevo Chat</li>
                        <li>Estructura página web</li>
                        <li>Conectar CSS con HTML</li>
                        <li>Etiquetas semánticas</li>
                        <li>Flexbox</li>
                        <li>Diseño de mensajes de chat</li>
                        <li>Uso de formularios en HTML</li>
                    </ul>
                </nav>
            </section>
        </aside>
    );
}

export default Sidebar;