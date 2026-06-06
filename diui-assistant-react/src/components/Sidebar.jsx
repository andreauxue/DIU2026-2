export default function Sidebar({onLimpiarChat}) {
    return (
        <aside role="navigation">
            <h2>Conversaciones</h2>
            <nav>
                <ul>
                    <li>Mejorar un formulario</li>
                    <li>Buenas prácticas de acc...</li>
                    <li>Dudas sobre HTML semántico</li>
                    <li>Consejos de diseño UX</li>
                    <li>Diseño responsive en CSS</li>
                </ul>
            </nav>
            <button id="limpiar-chat" onClick={onLimpiarChat}>Limpiar chat</button>
        </aside>
    );
}
