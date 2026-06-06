function Header({ totalMensajes }) {
    return (
        <header>
            <h1>Asistente de DIU</h1>
            <p className="header-description">
                Interacción básica con DIU para conocer más sobre ella y su funcionamiento visual e interno
            </p>
            <div className="contador-mensajes">
                Mensajes enviados: {totalMensajes}
            </div>
        </header>
    );
}

export default Header;