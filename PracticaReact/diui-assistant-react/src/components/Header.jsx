/**
 * Header de nuestra app
 * @param {*} totalMensajes recibe el número de mensajes para desplegarlo 
 */

function Header({ totalMensajes }) {
    return (
        <header>
            <h1>DIUI Assistant</h1>
            <p>
                Un asistente que te apoya en cualquier pregunta que se te ocurra
                mientras cursas Diseño de Interfaces. Utiliza distintos tonos de verde.
            </p>
            <span id="msg-count">Mensajes: {totalMensajes}</span>
        </header>
    );
}

export default Header;