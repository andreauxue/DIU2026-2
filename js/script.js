
/**
 * Objeto mensaje, contiene el tipo, el texto y el tiempo del mensaje
 */
class Mensaje {
    /**
     * Constructor para el objeto mensaje
     * @param {*} tipo Tipo del mensaje(asistente o usuario)
     * @param {*} texto El mensaje
     */
    constructor(tipo, texto) {
        this.tipo = tipo;
        this.texto = texto;
        this.hora = getTime();
    }

    /**
     * Función que crea un mensaje, (crea un articulo)
     * @returns 
     */
    render() {
        const article = document.createElement("article");
        article.classList.add("msg", this.tipo);

        const p = document.createElement("p");
        p.textContent = this.texto;

        const time = document.createElement("span");
        time.classList.add("msg-time");
        time.textContent = this.hora;

        article.appendChild(p);
        article.appendChild(time);
        return article;
    }
}

/**
 * Obbjeto para chat, este guarda los mensajes en un arreglo.
 */
class Chat {
    /**
     * Constructor para char
     */
    constructor() {
        this.mensajes = [];
    }

    /**
     * Agrega un mensaje al chat
     * @param {*} mensaje el mensaje a agregar
     */
    agregar(mensaje) {
        this.mensajes.push(mensaje);
    }

    /**
     * ELimina los chats
     */
    limpiar() {
        this.mensajes = [];
    }
}


const chat = new Chat();

/**
 * FUnción que limpia el chat y vuelve a cargar la interfaz
 */
function limpiarChat() {
    chat.limpiar();
    render();
}

/**
 * Función que regresa el tiempo formateado a dos dígitos (GEMINI GENERATED)
 * @returns El tiempo con dos dígitos
 */
function getTime() {
    return new Date().toLocaleTimeString("es-MX", {
        hour: "2-digit",
        minute: "2-digit",
    });
}


// Hashmap con llaves y mensajes correspondientes. MODIFICADO con Gemini.
const respuestas = {
    // --- Cafés Clásicos ---
    espresso: "Un gran espresso requiere pasos precisos: muele 18–20 g de café fresco finamente, prénsalo uniformemente en el portafiltros y extrae usando ~9 bares de presión para obtener ~36–40 g de líquido en 25–30 segundos. Busca una crema color avellana y un flujo lento como miel.",
    capuchino: "Un cappuccino tradicional se hace con partes iguales de espresso, leche vaporizada y microespuma (típicamente 60 ml de cada uno). Prepara un shot doble de espresso, vaporiza la leche para crear ~2–3 cm de espuma densa y brillante, y vierte con cuidado.",
    flatwhite: "Se prepara vertiendo ~120–150 ml de leche aterciopelada sobre un shot doble de espresso. Vaporiza la leche a 60 °C con mínima aireación, enfocándote en una textura líquida con solo 0.5–1 cm de espuma.",
    americano: "Para un Americano clásico, vierte 60–120 ml de agua caliente en una taza y luego añade 1 o 2 shots de espresso recién hechos. Una proporción estándar es 1:2, lo que ayuda a preservar la crema en la superficie.",
    latte: "Vierte el shot de espresso y luego añade leche vaporizada. Usa una cuchara para retener la espuma mientras viertes la leche líquida, y luego coloca la espuma encima. Un toque de canela o cacao es el acabado ideal.",
    cafelait: "Se elabora combinando partes iguales de café de filtro fuerte (no espresso) con leche caliente. Usa un tueste oscuro en prensa francesa o goteo, y mezcla 50/50 con la leche — suele llevar poca o nada de espuma.",
    lungo: "Un lungo se extrae en una proporción 1:3 (17 g de café por 51 g de agua). Usa un molido ligeramente más grueso y deja que la extracción dure 50–60 segundos; prefiere tuestes claros para evitar el amargor excesivo.",
    chokomil: "Para la mejor bebida del mundo: toma leche fría y cacao en polvo, vierte el polvo en la leche y mezcla hasta combinar. Simple, perfecto e imbatible.",
    genmaicha: "Usa 1 cucharadita de hojas por 240 ml de agua a 80–90 °C y deja reposar 30–60 segundos.",

    // --- Variaciones y Bebidas Frías ---
    macchiato: "Un espresso 'manchado'. Prepara un shot de espresso corto y coloca encima una pequeña cucharada de microespuma de leche densa para suavizar la intensidad del café.",
    mocha: "La mezcla perfecta de café y chocolate. Combina un shot de espresso con una cucharada de jarabe de chocolate o cacao, añade leche vaporizada y termina con un poco de crema batida.",
    affogato: "Más que una bebida, es un postre: coloca una bola generosa de helado de vainilla en una copa pequeña y vierte un shot de espresso caliente directamente sobre ella.",
    coldbrew: "Café extraído en frío durante 12 a 24 horas. Produce una bebida de baja acidez y alta cafeína. Sírvelo con hielo y, si gustas, un toque de leche cremosa.",
    caramelfrappe: "Bebida licuada con hielo, café, leche y jarabe de caramelo. Sirve con una montaña de crema batida y un hilo de caramelo extra por encima.",
    matchalatte: "Disuelve 1-2 g de té matcha ceremonial en agua caliente usando un batidor de bambú, luego añade leche vaporizada (o de avena) para un sabor terroso y dulce.",

    // --- Postres y Acompañamientos ---
    croissant: "El acompañante clásico de hojaldre. Hornéalo hasta que esté dorado y crujiente por fuera, pero aireado y con un intenso sabor a mantequilla por dentro.",
    cheesecake: "Tarta de queso cremosa sobre una base crujiente de galleta. Se puede servir natural o con un coulis de frutos rojos para contrastar la densidad del queso.",
    brownie: "Un bizcocho de chocolate denso y húmedo, preferiblemente con nueces. Sírvelo ligeramente tibio para que el chocolate se derrita un poco al morderlo.",
    muffinarandanos: "Panquecito esponjoso cargado de arándanos frescos. El truco es no batir de más la masa para que mantenga una textura ligera y aireada.",
    tiramisu: "Postre italiano montado en capas de bizcochos soletilla empapados en café espresso, crema de mascarpone y un espolvoreado final de cacao amargo.",
    galleta_chispas: "Galleta de estilo artesanal, crujiente en los bordes y suave en el centro, con trozos grandes de chocolate oscuro y una pizca de sal marina."
};

/**
 * Función ecargada de parsear y buscar la palabra clave.
 * @param {*} texto Entrada del usuario (mensaje)
 * @returns El mensaje de respuesta orrespondiente
 */
function decidirRespuesta(texto) {
    // GEMINI :
    const lower = texto.toLowerCase() // 1. Converts everything to lower case
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // 2. Removes accents (e.g., "té" becomes "te")
        .replace(/\s+/g, ""); // 3. Removes ALL spaces

    const clavesOrdenadas = Object.keys(respuestas).sort((a, b) => b.length - a.length); //GEMINI

    for (const clave of clavesOrdenadas) {
        if (lower.includes(clave)) {
            return respuestas[clave];
        }
    }

    // 1. Get an array of all available keys (drinks/desserts)
    const todasLasClaves = Object.keys(respuestas);

    // 2. Generate a random number between 0 and the total number of keys
    const indiceAleatorio = Math.floor(Math.random() * todasLasClaves.length);

    // 3. Select the random key and its corresponding instructions
    const claveAleatoria = todasLasClaves[indiceAleatorio];
    const instrucciones = respuestas[claveAleatoria];

    // 4. Return the dynamic template string
    return `No tengo información sobre esa bebida, ¡pero puedo contarte cómo preparar un delicioso ${claveAleatoria}! ${instrucciones}`;
}

/**
 * Función encargada de modificar el DOM, esta crea las pantallas y actualiza el número de mensajes.
 */
function render() {
    const seccion = document.querySelector("section");
    const contador = document.getElementById("msg-count");
    seccion.innerHTML = "";
    chat.mensajes.forEach((msg) => {
        seccion.appendChild(msg.render());
    });
    contador.textContent = `Mensajes: ${chat.mensajes.length}`;
    seccion.scrollTop = seccion.scrollHeight;
}

/**
 * Función que carga un mensaje temporal para simular el pensamiento de la ia.
 */
function mostrarEscribiendo() {
    const seccion = document.querySelector("section");
    const indicador = document.createElement("p");
    indicador.id = "escribiendo";
    indicador.classList.add("escribiendo");
    indicador.textContent = "El asistente está escribiendo…";
    seccion.appendChild(indicador);
}

/**
 * Función que quita el mensaje temporal.
 */
function ocultarEscribiendo() {
    const indicador = document.getElementById("escribiendo");
    indicador.remove();
}

/**
 * Función encargada de enviar los mensajes y mandarlo a sus respectivas funciones para manejarlos. 
 * @param {*} e Elemento(boton)
 * @returns 
 */
function enviarMensaje(e) {
    e.preventDefault();

    const input = document.getElementById("msg");
    const texto = input.value.trim();
    if (!texto) return;

    chat.agregar(new Mensaje("usuario", texto));
    input.value = "";
    render();

    mostrarEscribiendo();

    setTimeout(() => {
        ocultarEscribiendo();
        chat.agregar(new Mensaje("asistente", decidirRespuesta(texto)));
        render();
    }, 1200);
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("footer form").addEventListener("submit", enviarMensaje);
    document.querySelector("nav button").addEventListener("click", limpiarChat);
    render();
});