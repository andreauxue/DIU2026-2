/** @type {import('tailwindcss').Config} */
export default {
  content:[
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        onix:{
          primary: '#26a69a', //Fondo de mensajes de usuario y botón enviar
          primaryDark: '#1a746b', //Estado focus, hover y "escribiendo"

          assistantBg: '#90caf9', //Fondo mensajes del asistente.
          textDark: '#111827', // Texto principal
          textLight: '#ffffff', // Texto usuario y botones
          generalBg: '#d1d1d1', //Fondo de Onix

          sidebarBg: '#a6d4fa', // Fondo historial y panel lateral 
          textMuted: '#4b5563', // Metadatos, horas, fechas
          inactive: '#648dae', // Iconos inactivos, bordes suaves
        }
      },
      fontFamily: { 
        montserrat:['Montserrat', 'sans-serif'], // Para encabezados y botones
        hind: ['Hind', 'sans-serif'],
      },
      borderRadius: {
        'chat': '16px', //Bordes redondeados específicos para los mensajes
      }
    },
  },
  plugins: [],
}

