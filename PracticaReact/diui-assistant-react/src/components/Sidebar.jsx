function Sidebar() {
    const conversaciones = [
        " Chat acerca de DIU",
        " Chat sobre el manejo del código",
        " Chat de personalización de CSS",
        " Chat de códigos básicos",
        " Otros ..."
    ];

    return (
        <div className="barra-conversaciones">
            <span className="titulo-conversaciones">Conversaciones</span>
            
            <nav className="lista-chats">
                {conversaciones.map((chat, index) => (
                    <button key={index} className="chat-button">
                        {chat}
                    </button>
                ))}
            </nav>
        </div>
    );
}

export default Sidebar;