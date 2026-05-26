import { useState } from 'react'
import ChatLayout from './components/ChatLayout'
import ChatInput from './components/ChatInput'
import MessageBubble from './components/MessageBubble'
import Sidebar from './components/Sidebar'
import SuggestionChip from './components/SuggestionChip'
import TypingIndicator from './components/TypingIndicator'
import ChatHeader from './components/ChatHeader'
import MessageList from './components/MessageList'
import './App.css'

// Catálogo de sugerencias posibles
const SUGGESTION_POOL = [
  { text: "Diseño minimalista", query: "¿Cómo puedo hacer un diseño minimalista?" },
  { text: "Paleta de colores", query: "Sugiere una paleta de colores profesional" },
  { text: "Mejorar accesibilidad", query: "¿Cómo mejoro la accesibilidad de mi web?" },
  { text: "Jerarquía visual", query: "Dame consejos de jerarquía visual" },
  { text: "Evalúa mi formulario", query: "Evalúa mi formulario" },
  { text: "Fuentes legibles", query: "¿Qué tipografía recomiendas para texto largo?" },
  { text: "Botones atractivos", query: "¿Cómo diseño botones que llamen la atención?" },
  { text: "Modo oscuro", query: "¿Cuáles son las mejores prácticas para modo oscuro?" },
];

// Función para obtener sugerencias aleatorias distintas
const getRandomSuggestions = (count = 3) => {
  const shuffled = [...SUGGESTION_POOL].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

function App() {
  const [chats, setChats] = useState([
    {
      id: 1,
      title: 'Chat 1',
      messages: [],
      suggestions: getRandomSuggestions(3)
    }
  ]);
  const [activeChatId, setActiveChatId] = useState(1);
  const [isTyping, setIsTyping] = useState(false);

  const activeChat = chats.find(c => c.id === activeChatId);
  const currentMessages = activeChat ? activeChat.messages : [];

  // Sugerencias estables para cuando NO hay ningún chat
  const [fallbackSuggestions] = useState(() => getRandomSuggestions(3));

  const currentSuggestions = activeChat ? activeChat.suggestions : fallbackSuggestions;
  const handleEnviar = (text) => {
    if (text.trim() === '' || isTyping) return;

    // Si no hay chat activo, crear uno automáticamente
    let chatIdActual = activeChatId;
    let chatsActualizados = chats;

    if (!chatIdActual) {
      const newId = chats.length > 0 ? Math.max(...chats.map(c => c.id)) + 1 : 1;
      const nuevoChat = {
        id: newId,
        title: `Chat ${newId}`,
        messages: [],
        suggestions: getRandomSuggestions(3),
      };
      chatsActualizados = [nuevoChat, ...chats];
      setChats(chatsActualizados);
      setActiveChatId(newId);
      chatIdActual = newId;
    }

    const userMsg = {
      id: Date.now(),
      tipo: "user",
      hora: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      texto: text,
    };

    setChats(prevChats => prevChats.map(chat =>
      chat.id === chatIdActual
        ? { ...chat, messages: [...chat.messages, userMsg], suggestions: [] }
        : chat
    ).concat(
      chatsActualizados.find(c => c.id === chatIdActual && !prevChats.find(p => p.id === chatIdActual))
        ? [chatsActualizados.find(c => c.id === chatIdActual)]
        : []
    ));

    setIsTyping(true);

    setTimeout(() => {
      let respuestaBot = "Lo siento, por el momento no tengo esa información en mi base de datos de UI/UX. ¿Podrías intentar preguntarlo de otra forma? 🛠️";
      const textoLower = text.toLowerCase();

      const opcionesAleatorias = getRandomSuggestions(3);
      const listaPreguntasText = opcionesAleatorias.map(opc => `• ${opc.query}`).join('\n');

      if (textoLower === "hola" || textoLower === "hola!") {
        const saludos = [
          "¡Hola! Soy WALL-UI, tu asistente especializado en diseño de interfaces. ¿En qué te ayudo hoy? 🤖",
          "¡Hola! Qué gusto verte por aquí. ¿Qué estructura o pantalla vamos a perfeccionar hoy? ✨",
          "¡Hola, desarrollador! Listo para optimizar layouts y código. Dime, ¿en qué te puedo asistir? 🎨"
        ];
        respuestaBot = saludos[Math.floor(Math.random() * saludos.length)];
      } else if (textoLower.includes("como estas") || textoLower.includes("cómo estás")) {
        const estados = [
          "¡Funcionando al 100% y procesando pixeles! ✨ ¿Qué interfaz vamos a mejorar hoy?",
          "¡Excelente! Con los servidores optimizados y listo para diseñar. 🤖",
          "¡Muy bien! Analizando las leyes de la Gestalt para ayudarte a estructurar tus ideas. 📐"
        ];
        respuestaBot = estados[Math.floor(Math.random() * estados.length)];
      } else if (
        textoLower.includes("qué haces") || textoLower.includes("que haces") ||
        textoLower.includes("quién eres") || textoLower.includes("quien eres")
      ) {
        respuestaBot = "Soy WALL-UI, un asistente especializado en el diseño de experiencias e interfaces de usuario (UI/UX)...";
      } else if (
        textoLower.includes("qué puedes hacer") || textoLower.includes("que puedes hacer") ||
        textoLower.includes("ayudar") || textoLower.includes("funciones") ||
        textoLower.includes("preguntas") || textoLower.includes("recomiendas preguntar")
      ) {
        respuestaBot = `Puedo brindarte apoyo en la organización de componentes... 🛠️\n\nAquí tienes algunas preguntas:\n\n${listaPreguntasText}`;
      } else if (textoLower.includes("minimalista")) {
        respuestaBot = "Para un diseño minimalista, concéntrate en el espacio en blanco (whitespace)... 🎨";
      } else if (textoLower.includes("paleta") || textoLower.includes("colores")) {
        respuestaBot = "Te sugiero usar un tono neutro y oscuro (#4B5557), un color claro (#E1DDD5) y un acento (#76B82A). 🖌️";
      } else if (textoLower.includes("accesibilidad") || textoLower.includes("accesible")) {
        respuestaBot = "Buen contraste (mínimo 4.5:1), etiquetas 'alt' en imágenes, y navegación por teclado. ♿";
      } else if (textoLower.includes("jerarquía") || textoLower.includes("jerarquia")) {
        respuestaBot = "Usá tamaño y peso de fuente para destacar títulos + ley de proximidad de Gestalt. 📏";
      } else if (textoLower.includes("formulario")) {
        respuestaBot = "Etiquetas fuera del input, marcar campos obligatorios, feedback inmediato de errores. 📋";
      } else if (textoLower.includes("fuentes") || textoLower.includes("tipografía") || textoLower.includes("tipografia")) {
        respuestaBot = "Sans-Serif (Inter, Roboto) facilita lectura en pantalla. Mínimo 16px. 🔤";
      } else if (textoLower.includes("botones") || textoLower.includes("botón") || textoLower.includes("boton")) {
        respuestaBot = "Padding amplio, bordes consistentes, hover contrastante. 🖱️";
      } else if (textoLower.includes("modo oscuro") || textoLower.includes("dark mode")) {
        respuestaBot = "Evitá negro puro. Usá grises oscuros (#121212) y desaturá los acentos. 🌙";
      }

      const walluiMsg = {
        id: Date.now() + 1,
        tipo: "wallui",
        hora: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        texto: respuestaBot,
      };

      setChats(currentChats => currentChats.map(chat =>
        chat.id === chatIdActual
          ? { ...chat, messages: [...chat.messages, walluiMsg], suggestions: getRandomSuggestions(3) }
          : chat
      ));

      setIsTyping(false);
    }, 1500);
  };

  const handleNewChat = () => {
    const newId = chats.length > 0 ? Math.max(...chats.map(c => c.id)) + 1 : 1;
    const newChat = {
      id: newId,
      title: `Chat ${newId}`,
      messages: [{
        id: Date.now(),
        tipo: "wallui",
        hora: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        texto: "Hola, soy WALL-UI. ¡Nueva conversación iniciada! 🤖"
      }],
      suggestions: getRandomSuggestions(3)
    };
    setChats([newChat, ...chats]);
    setActiveChatId(newId);
  };

  const handleDeleteChat = (id) => {
    const updatedChats = chats.filter(chat => chat.id !== id);
    setChats(updatedChats);
    if (id === activeChatId) {
      setActiveChatId(updatedChats.length > 0 ? updatedChats[0].id : null);
    }
  };

  return (
    <ChatLayout
      sidebar={
        <Sidebar
          chats={chats}
          activeChatId={activeChatId}
          onNewChat={handleNewChat}
          onSelectChat={setActiveChatId}
          onDeleteChat={handleDeleteChat}
        />
      }
      chatHeader={<ChatHeader status="online"></ChatHeader>}
      messageList={
        <MessageList
          messages={currentMessages}
          isTyping={isTyping}
          suggestions={currentSuggestions}
          onSuggestionClick={handleEnviar}
        />
      }
      chatInput={<ChatInput onEnviar={handleEnviar} />}
    />
  )
}

export default App