class Mensaje {
    //Clase Mensaje con: Tipo (usuario o asistente), Texto y Hora
    constructor(tipo, mensaje) {
        this.tipo = tipo;
        this.mensaje = mensaje;
        this.hora = this.obtenerHoraActual();
    }

    //Usamos la función vista en clase
    obtenerHoraActual() {
        const ahora = new Date();
        let horas = ahora.getHours();
        let minutos = ahora.getMinutes();

        // Le damos formato a como se vería los minutos y las horas
        if (minutos < 10) {
            minutos = "0" + minutos;
        }

        return `${horas}:${minutos}`;
    }

    //Metodo para renderizar el mensaje en HTML
    render() {
        return `
            <article class="mensaje ${this.tipo}">
                <p>${this.mensaje}</p>
                <small>${this.hora}</small>
            </article>
        `;
    }
}


class Chat {
    //Clase Chat con: Guardar mensajes, agregar mensaje, limpiar chat y contar mensajes
    constructor() {
        this.mensajes = [];
    }

    agregarMensaje(tipo, texto) {
        const nuevo = new Mensaje(tipo, texto);
        this.mensajes.push(nuevo);
        render(); // Llamamos al render si algo cambia 
    }

    limpiar() {
        this.mensajes = [];
        render();
    }

    contarMensajes() {
        return this.mensajes.length;
    }
}

// Variables globales para el DOM
const chat = new Chat();
const areaMensajes = document.querySelector(".chat-container section"); 
const contador = document.getElementById("contador-mensajes");
const formulario = document.querySelector("footer form"); 
const inputMensaje = document.getElementById("mensaje");
const botonLimpiar = document.getElementById("btn-limpiar");

// Simulamos las respuestas del asistente (Akinator)
const respuestasAsistente = [
    "¿Quieres jugar  adivinar el peersonaje?, Perfecto dame una pista sobre el personaje que tienes en mente.",
    "¿Es un personaje de una película, serie o videojuego?",
    "¿Tu personaje es heroe o villano?",
    "¿Conoces a tu peronaje?",
    "¿Tu personaje sabe sobre Diseño de Interfaces de Usuario?"
];
//Variable para saber en que respuesta vamos
let indiceRespuestaActual = 0;


function render() {
    areaMensajes.innerHTML = "";

    chat.mensajes.forEach(mensaje => {
        //Para poder reconstruir toda la interfaz
        areaMensajes.innerHTML += mensaje.render();
    });
    if (contador) {
        contador.textContent = `¿Sabías que llevas ${chat.contarMensajes()} mensajes?`; // [cite: 62]
    }
    
    // Scroll automático para ver el último mensaje
    areaMensajes.scrollTop = areaMensajes.scrollHeight;
}

// Aqui es donde se dedice que responder
function responderAsistente() {
    const escribiendo = new Mensaje("asistente", "Escribiendo...");
    chat.mensajes.push(escribiendo);
    render();

    setTimeout(() => {
        chat.mensajes.pop();
        
        if (indiceRespuestaActual < respuestasAsistente.length) {
            
            // Tomamos la respuesta que sigue en el orden
            const respuestaFinal = respuestasAsistente[indiceRespuestaActual];
            
            chat.agregarMensaje("asistente", respuestaFinal);
            // Para esto creamos el inidice, ya que quiero que salgan el orden y no aleatoreamente
            //Sino no tendría senmtido mi simulacion del juego
            indiceRespuestaActual++;
            
        } else {
            // Cuando se acaben los mensajes solo devolvemos una respuesta con emoji porque es muy chat gpt
            chat.agregarMensaje("asistente", "¿Tu persnaje es Alan Turing? 🤖");
        }
    }, 1500);
}

formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const texto = inputMensaje.value.trim();
    if (texto === "") return;

    chat.agregarMensaje("usuario", texto);
    inputMensaje.value = "";

    responderAsistente();
});

botonLimpiar.addEventListener("click", function () {
    chat.limpiar();
});

// Cargamos los menwsajes iniciales (que ya teniamos en el HTML) para que se vean al cargar la página
chat.agregarMensaje("usuario", "Tengo una duda sobre HTML ya que no logro entender del todo ¿Sabes usar HTML y como se relaciona con CSS?, estoy desesperado");
chat.agregarMensaje("asistente", "Entiendo tu frustracion, sé que a veces puede ser frustrante pero vamos a  revisar juntos lo que necesitas, para conectar HTML con CSS");
chat.agregarMensaje("usuario", "Sí, pero necesito que me ayudes, no quiero solo mensajes motivadores");
chat.agregarMensaje("asistente", "Entiendo tu frustracion, sé que a veces puede ser frustrante ¿Dime en que puedo ayudarte?");
chat.agregarMensaje("usuario", "Te dije que necesito ayuda con HTML y CSS, no quiero mensajes motivadores");
chat.agregarMensaje("asistente", "Lo siento, tienes razón, vamos a revisar juntos tus dudas sobre HTML y CSS, ¿Qué es lo que no entiendes? 🌟");
