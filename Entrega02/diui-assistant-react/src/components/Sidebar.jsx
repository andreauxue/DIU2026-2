function Sidebar() {
  const conversaciones = [
    "Diseño de formularios accesibles",
    "Paletas de color UI",
    "Introducción a CSS y HTML",
    "Mejorar diseño",
  ];

  return (
    <aside className="w-[220px] bg-[#223125] text-[#E6E7EB] flex-shrink-0 flex flex-col p-6">

      {/* Nombre del chatbot / marca */}
      <h2 className="text-xs font-bold uppercase tracking-widest text-[#729969] mb-4">
        Tus chats
      </h2>

      {/* Lista de conversaciones simuladas */}
      <nav className="flex-1">
        <ul className="flex flex-col gap-1">
          {conversaciones.map((conv, i) => (
            <li
              key={i}
              className="text-sm text-[#E6E7EB]/80 px-2 py-2 rounded-md cursor-pointer hover:bg-[#729969]/20 hover:text-[#E6E7EB] transition-colors duration-150"
            >
              {conv}
            </li>
          ))}
        </ul>
      </nav>

    </aside>
  );
}

export default Sidebar;