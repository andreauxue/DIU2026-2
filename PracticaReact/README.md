# DIUI Assistant - React

Aplicación de chat construida con React y Vite para la práctica de Diseño de Interfaces de Usuario.

## 🚀 Características

- ✅ Interfaz de chat interactiva
- ✅ Componentes React modulares
- ✅ Estado manejado con useState
- ✅ Respuestas automáticas del asistente
- ✅ Indicador de escritura animado
- ✅ Contador de mensajes en tiempo real
- ✅ Función para limpiar el chat
- ✅ Timestamps en cada mensaje
- ✅ Diseño personalizado con CSS (tema oscuro con acentos púrpura/teal)
- ✅ Diseño responsive

## 📁 Estructura del Proyecto

```
diui-assistant-react/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Encabezado con contador de mensajes
│   │   ├── Sidebar.jsx         # Barra lateral con conversaciones
│   │   ├── Message.jsx         # Componente de mensaje individual
│   │   ├── ChatArea.jsx        # Área de chat con lista de mensajes
│   │   └── ChatForm.jsx        # Formulario de entrada de mensajes
│   ├── App.jsx                 # Componente principal con lógica
│   ├── App.css                 # Estilos personalizados
│   └── main.jsx                # Punto de entrada de React
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Instalación

1. Asegúrate de tener Node.js instalado (versión 16 o superior)

2. Navega al directorio del proyecto:
```bash
cd diui-assistant-react
```

3. Instala las dependencias:
```bash
npm install
```

## 🎮 Uso

### Modo Desarrollo
```bash
npm run dev
```
Abre tu navegador en `http://localhost:5173`

### Compilar para Producción
```bash
npm run build
```

### Vista Previa de Producción
```bash
npm run preview
```

## 🎨 Características del Diseño

### Diferencias con el diseño original:
- **Tema oscuro** con gradientes púrpura y teal (vs. tema claro azul)
- **Layout de altura completa** (vs. contenedor centrado)
- **Bordes redondeados más pronunciados** (20px vs. 12px)
- **Efectos de sombra más dramáticos**
- **Animaciones en mensajes y botones**
- **Indicador de escritura animado con puntos**
- **Contador de mensajes con badge destacado**
- **Scrollbar personalizado**
- **Estados hover con transformaciones**

### Paleta de Colores:
- Fondo principal: `#1a1a2e` y `#16213e`
- Acento primario: `#5ef3f3` (teal)
- Acento secundario: `#7b2cbf` (púrpura)
- Mensajes usuario: Gradiente púrpura
- Mensajes asistente: Fondo oscuro con borde teal

## 📋 Funcionalidades Implementadas

### Estado (useState):
- `texto`: Contenido del input
- `escribiendo`: Estado de escritura del asistente
- `mensajes`: Array de mensajes

### Funciones:
- `obtenerHoraActual()`: Retorna hora actual en formato HH:MM
- `obtenerRespuestaAleatoria()`: Selecciona respuesta aleatoria
- `manejarEnvio()`: Procesa envío de mensajes
- `limpiarChat()`: Limpia todos los mensajes

### Componentes:
- **Header**: Muestra título y contador de mensajes
- **Sidebar**: Lista de conversaciones y botón limpiar
- **Message**: Renderiza mensaje individual con hora
- **ChatArea**: Muestra todos los mensajes usando map()
- **ChatForm**: Input controlado con validación

## ✅ Requisitos Cumplidos

- ✅ React con Vite
- ✅ Solo JavaScript (no TypeScript)
- ✅ CSS personalizado (no Tailwind/Bootstrap)
- ✅ Sin librerías externas de componentes
- ✅ Sin backend ni APIs
- ✅ Estructura de carpetas requerida
- ✅ Todos los componentes obligatorios
- ✅ Estado con useState
- ✅ Sin manipulación directa del DOM
- ✅ Diseño diferente al de clase

## 🎯 Interacciones

1. **Escribir mensaje**: Escribe en el input y presiona Enter o click en "Enviar"
2. **Ver respuesta**: El asistente responde automáticamente después de 1.5 segundos
3. **Indicador de escritura**: Aparece mientras el asistente "escribe"
4. **Contador**: Se actualiza con cada mensaje nuevo
5. **Limpiar chat**: Click en "Limpiar Chat" en el sidebar
6. **Timestamps**: Cada mensaje muestra la hora de envío

## 🔧 Tecnologías

- React 18.2.0
- Vite 5.0.8
- CSS3 (con animaciones y gradientes)
- JavaScript ES6+

## 📝 Notas

- No se permite enviar mensajes vacíos
- El input se limpia automáticamente después de enviar
- Las respuestas son aleatorias de un array predefinido
- El diseño es completamente responsive

## 👨‍💻 Autor

Práctica de Diseño de Interfaces de Usuario - 2026