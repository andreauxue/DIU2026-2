//referencias 
const inputTarea = document.getElementById('input-tarea'); //el input
const aceptarBatalla = document.getElementById('Aceptar-batalla'); //el boton
const listaTareas = document.getElementById('lista-tareas'); //la lista
const contador = document.getElementById('contador');
let totalTareas = 0; // para el contador use let porque va a estar cambiando

//ahora la parte donde se quedará pendiente a el clic de aceptar batalla
aceptarBatalla.addEventListener('click', function(){
    const entrada = inputTarea.value.trim(); //el metodo trim es para quitar los espacios al inicio y al final de la entrada c:
    if (entrada == ""){ //si nuestro texto es vacio
        return; //no hacemos nada 
    }

    const nuevaBatalla = document.createElement('li'); //aqui creamos el elemento 
    nuevaBatalla.innerText = entrada; //metemos el texto
    nuevaBatalla.classList.add('batalla-item'); //aqui el classlist nos sirve para darle una etiqueta para que sea reconocido por el archivo css
    listaTareas.appendChild(nuevaBatalla); //el appendchild nos sirve para mandarlo al html
    totalTareas++; 
    contador.innerText = totalTareas;

    const quitarBatalla = document.createElement('button');
    quitarBatalla.innerText = 'Eliminar';
    quitarBatalla.classList.add('btn-borrar');

    //funcion para borrar 
    quitarBatalla.addEventListener('click', function(){ //funcion para borrar nuestra batalla realizada (tarea)
        nuevaBatalla.remove();
        totalTareas--; 
        contador.innerText = totalTareas;
    });
    nuevaBatalla.appendChild(quitarBatalla); //metemos el boton 

    nuevaBatalla.addEventListener('click', function(e) {
        // Usamos if para que solo se tache si tocas el texto, no el botón de eliminar
        if (e.target !== quitarBatalla) {
            nuevaBatalla.classList.toggle('completado');
        }

    });
    inputTarea.value=""; //limpiamos el input
    inputTarea.focus();  //para volver a la cajita de input y no tener que estarla clickeando cada vez
    console.log("clic detectado")
}); 
