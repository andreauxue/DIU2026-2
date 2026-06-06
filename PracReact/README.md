# DIUI Assistant — React

Migración de la tarea 02 (HTML + CSS + JS) a una arquitectura basada en componentes con React + Vite.

---

# Cómo correrlo

1. Crear el proyecto con Vite (si aún no lo hiciste):

   ```bash
   npm create vite@latest diui-assistant-react
   ```

   Seleccionar:
   - **React**
   - **JavaScript**


3. Instalar dependencias y arrancar:

   ```bash
   cd diui-assistant-react
   npm install
   npm run dev
   ```

---

##  Estructura

```
src/
├── App.jsx              → estado global + lógica del chat
├── App.css              → estilos propios (tema oscuro + acento lima)
├── main.jsx             → punto de entrada
└── components/
    ├── Header.jsx       → nombre del sistema + contador de mensajes
    ├── Sidebar.jsx      → lista de conversaciones simuladas + botón limpiar
    ├── Message.jsx      → un mensaje (props: tipo, texto, hora)
    ├── ChatArea.jsx     → map() de mensajes + indicador "escribiendo..."
    └── ChatForm.jsx     → input controlado + botón enviar (onSubmit)
```

## 🎨 Notas de diseño

- Layout vertical: **Header (top) → [Sidebar | ChatArea] → ChatForm (bottom)**.
- Paleta oscura con acento lima `#c8f55a`, tipografías **Syne** (display) y **DM Mono** (mono).
- Burbujas diferenciadas: usuario en verde oliva, asistente en gris-violeta.
- Animaciones suaves al entrar mensajes y en los puntos del indicador "escribiendo".
- Estados `:hover` y `:focus-within` en botones e input.
- Responsive: el sidebar se oculta en pantallas < 720px.
