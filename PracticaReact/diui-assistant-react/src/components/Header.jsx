function Header({ totalMensajes }) {

    return (

        <header>

            <h1>DIUI Assistant</h1>

            <p>
                Asistente virtual para dudas sobre bicicletas y mantenimiento.
            </p>

            <p>
                Mensajes: {totalMensajes}
            </p>

        </header>
    );
}

export default Header;