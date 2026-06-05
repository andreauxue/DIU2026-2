import React from "react";

function Message({ tipo, texto, hora}){
    return(
        <article className= {`mensaje ${tipo}`}>
            <div className="mensaje-contenido">
                <p>{texto}</p>
                <span className="hora-mensaje">{hora}</span>
            </div>
        </article>
    );
}

export default Message;