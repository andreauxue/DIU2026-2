function MessageItem({ message }) {
    const esUsuario = message.tipo === "usuario";
    return (
        
        <article className={`flex ${esUsuario ? "justify-end" : "justify-start"}`}> {/* class="mensaje usuario" */}
        <div className={`max-w-[80%] rounded-xl px-4 py-2 ${
            esUsuario
            ? "bg-blue-600 text-white rounded rounded-br-sm"
            : "bg-slate-200 text-slate-900 rpunded-bl-sm"
        }`}
        >
            <p className="text-sm leading-relaxed">
                {message.texto}</p>
        </div>
            
            <small
            className={`block mt-1 text-xs ${
                esUsuario ? "text-blue-100" : "text-slate-500"
            }`}
            >
                {message.hora}
            </small>
        </article>
    );
}

export default MessageItem;