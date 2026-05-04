import React from "react";

function Header({totalMensajes}){
    return (
        <header>
            <img src="bot.png" alt="DIUI Logo" className="header-icon" />
            <h1>DIUI Assistant</h1>
            <p>Asistente virtual para el Diseño de Interces de Usuario</p>
        </header>
    );
}

export default Header;