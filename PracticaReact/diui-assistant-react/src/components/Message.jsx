export default function Message({ tipo, texto, hora }) { //por requisito la hora es necesaria
  return (
    <div className={`mensaje ${tipo}`}>
      <span>{texto}</span>
      <span className="hora-estilo" style={{fontSize: "11px", opacity: 0.6, marginLeft: "10px"}}>
        {hora}
      </span>
    </div>
  );
}