export function getBotResponse(userText) {
  const text = userText.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  if (text.includes("wireframe")) {
    return "Un wireframe es un esquema visual que representa la estructura esquelética de una interfaz. Piensa en él como el plano arquitectónico de tu app; nos ayuda a definir la jerarquía de la información sin distraernos con colores o tipografías.";
  }
  
  if (text.includes("color") || text.includes("paleta")) {
    return "Para elegir colores, te recomiendo la regla 60-30-10: 60% para tu color de fondo dominante (como tu gris claro), 30% para un color secundario (como los tonos azules de Ónix) y 10% para tu color de acento (como el verde primario para tus botones).";
  }
  
  if (text.includes("ui") && text.includes("ux")) {
    return "La UI (Interfaz de Usuario) es todo lo que ves y tocas (botones, colores, tipografía). La UX (Experiencia de Usuario) es cómo te sientes al usarlo (flujo, facilidad, intuición). Como dicen: la UI es la silla, la UX es qué tan cómodo te sientas en ella.";
  }

  if (text.includes("atomic") || text.includes("atomo") || text.includes("molecula")) {
    return "El Atomic Design es clave para interfaces escalables. Empezamos con Átomos (como tu icono SVG o un botón), los unimos en Moléculas (tu ChatInput), formamos Organismos (el Sidebar completo), y terminamos con Plantillas y Páginas. ¡Justo como estructuramos esta aplicación!";
  }

  if (text.includes("spalter") || text.includes("filosofia")) {
    return "Ian Spalter es un gran referente. Su filosofía nos enseña a reducir el ruido visual, centrándonos en el contenido principal y simplificando la navegación. El rediseño que hizo para Instagram es un ejemplo perfecto de cómo quitar elementos innecesarios mejora la experiencia del usuario.";
  }

  if (text.includes("qa") || text.includes("testing") || text.includes("tester") || text.includes("drive")) {
    return "Un diseño hermoso no sirve si la funcionalidad falla. Las pruebas de QA son vitales en UI para asegurar que los componentes no se rompan en diferentes resoluciones, que los flujos de navegación sean correctos y que la plataforma (como un sistema en la nube o un drive) soporte el uso real del usuario sin errores.";
  }

  if (text.includes("tipografia") || text.includes("fuente") || text.includes("letra")) {
    return "Para tipografías, menos es más. Usa máximo dos familias (como Montserrat para encabezados y Hind para párrafos). Asegúrate de que el tamaño mínimo para lectura cómoda sea de 16px y mantén un buen contraste con el fondo.";
  }

  if (text.includes("graficas") || text.includes("3d") || text.includes("simulacion")) {
    return "Integrar simulaciones o gráficos 3D interactivos requiere cuidar mucho el rendimiento. Es vital que el renderizado de los canvas no bloquee el hilo principal de la interfaz para que botones y menús sigan respondiendo al instante.";
  }

  if (text.includes("xbox") || text.includes("juego") || text.includes("consola")) {
    return "Las interfaces de las consolas modernas o retrocompatibles son grandes casos de estudio de UX. Tienen que ser navegables con solo una cruceta y unos cuantos botones, manteniendo la legibilidad a varios metros de distancia en una televisión.";
  }

  if (text.includes("hola") || text.includes("buenos") || text.includes("buenas") || text.includes("que tal")) {
    return "¡Hola! Soy Ónix, tu asistente de diseño. ¿En qué aspecto de tu interfaz te puedo ayudar a iterar hoy?";
  }

  return "Ese es un punto muy interesante sobre el desarrollo de software y el diseño. ¿Podrías darme un poco más de contexto o reformular la pregunta para darte una recomendación más precisa sobre buenas prácticas?";
}