function MessageBubble({ tipo, texto, hora }) {
  const esUsuario = tipo === "usuario";

  return (
    <article
      className={`
        max-w-[60%] px-4 py-3 rounded-xl leading-relaxed text-sm
        [animation:msgEntrada_0.28s_ease-out_both]
        ${esUsuario
          ? "self-end bg-[#729969] text-white rounded-br-[2px]"
          : "self-start bg-white text-[#223125] rounded-bl-[2px] shadow-sm"
        }
      `}
    >
      <p>{texto}</p>
      <time className="block text-[0.65rem] mt-1 opacity-60">{hora}</time>
    </article>
  );
}

export default MessageBubble;