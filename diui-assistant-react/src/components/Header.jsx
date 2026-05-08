function Header({ totalMensajes }) {
    return (
        <header>
            <h1>--------- DIUI Assistant ---------</h1>
            <p>Asistente virtual para diseño de interfaces de usuario.</p>
            <p id="contador">Mensajes en la conversación: {totalMensajes}</p>
        </header>
    );
}

export default Header;
