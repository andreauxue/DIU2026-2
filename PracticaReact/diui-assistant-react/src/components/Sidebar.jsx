/**
 * Despliega las conversaciones simuladas y permite crear un nuevo chat. (limpiando el actual)
 * @param {*} limpiarChat función que limpia el chat.
 */

function Sidebar({ limpiarChat }) {
    return (
        <nav>
            <button className="btn" onClick={limpiarChat}>
                Nuevo chat
            </button>
            <ul>
                <li>&lt;&gt; Chat 1</li>
                <li>&lt;&gt; Chat 2</li>
                <li>&lt;&gt; Chat 3</li>
                <li>&lt;&gt; Chat 4</li>
            </ul>
        </nav>
    );
}

export default Sidebar;
