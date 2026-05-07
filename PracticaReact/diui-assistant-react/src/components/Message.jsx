function Message({ tipo, texto, hora }) {

    return (

        <article className={`mensaje ${tipo}`}>

            <p className={texto === "..." ? "puntos" : ""}>
                {texto}
            </p>

            <small>{hora}</small>

        </article>
    );
}

export default Message;