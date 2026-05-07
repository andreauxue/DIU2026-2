function Message({ tipo, texto, hora }) {
  const esUsuario = tipo === "usuario";
  const claseRow = esUsuario ? "user" : "assistant";
  const labelAvatar = esUsuario ? "TÚ" : "AI";

  return (
    <div className={`message-row ${claseRow}`}>
      <div className={`msg-avatar ${claseRow}`}>{labelAvatar}</div>
      <div className="msg-content">
        <div className={`bubble ${claseRow}`}>{texto}</div>
        <span className="msg-time">{hora}</span>
      </div>
    </div>
  );
}

export default Message;
