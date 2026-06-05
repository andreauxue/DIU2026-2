import React from "react";

function Message({ tipo, texto, hora }) {
  return (
    <article className={`message message--${tipo}`}>
      <div className="message-content">
        <p className="message-text">{texto}</p>
        <small className="message-time">{hora}</small>
      </div>
    </article>
  );
}

export default Message;
