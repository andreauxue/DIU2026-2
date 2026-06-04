const nuevaTarea = document.getElementById("nueva-tarea");
const agregarTarea = document.getElementById("agregar-tarea");
const listaDeTareas = document.getElementById("lista-tareas");
const contadorTareas = document.getElementById("contador");
let contador = 0;

// Agrega una nueva tarea
agregarTarea.addEventListener("click", () => {
    // Verifica que sea un valor valido
    const texto = nuevaTarea.value.trim();
    nuevaTarea.value = "";
    if (texto == "") {
        return;
    }

    const tarea = document.createElement("li");
    tarea.textContent = texto
    const botonEliminar = document.createElement("button")
    botonEliminar.textContent = "Eliminar";
    tarea.appendChild(botonEliminar)
    listaDeTareas.appendChild(tarea);

    // Aumenta el contador
    contador += 1;
    contadorTareas.textContent = contador;

    // Elimina una tarea
    botonEliminar.addEventListener("click", () => {
        botonEliminar.parentElement.remove();
        contador -= 1;
        contadorTareas.textContent = contador;
    })
})

// Marca una tarea como completada
listaDeTareas.addEventListener("click", (event) => {
    const item = event.target.closest("li");
    if (!item || !listaDeTareas.contains(item)) return;

    item.classList.toggle("completada");
});
