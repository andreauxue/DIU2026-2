// 1. Seleccionar elementos del DOM
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const totalCount = document.getElementById('totalCount');
const completedCount = document.getElementById('completedCount');
const pendingCount = document.getElementById('pendingCount');

// 2. Función para actualizar los contadores
function updateCounters() {
    // Contamos cuántos elementos <li> hay en la lista
    const total = taskList.children.length;
    // Contamos cuántos <li> tienen la clase 'completed'
    const completed = taskList.querySelectorAll('.completed').length;
    const pending = total - completed;

    // Actualizamos el texto en pantalla
    totalCount.textContent = total;
    completedCount.textContent = completed;
    pendingCount.textContent = pending;
}

// 3. Función principal para agregar una tarea
function addTask() {
    const text = taskInput.value.trim();

    // Validación: No permitir tareas vacías
    if (text === '') {
        return; 
    }

    // Crear el elemento <li> (la fila de la tarea)
    const li = document.createElement('li');

    // Crear el <span> que contendrá el texto
    const spanText = document.createElement('span');
    spanText.textContent = text;
    spanText.classList.add('task-text');

    // Evento para marcar como completada al hacer clic en el texto
    spanText.addEventListener('click', function() {
        li.classList.toggle('completed'); // Agrega o quita la clase
        updateCounters(); // Actualizamos contadores porque el estado cambió
    });

    // Crear el botón de eliminar
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.classList.add('delete-btn');

    // Evento para eliminar la tarea del DOM
    deleteBtn.addEventListener('click', function() {
        li.remove(); // Elimina el elemento li por completo
        updateCounters(); // Actualizamos contadores porque hay una tarea menos
    });

    // Ensamblar la tarea: agregar el texto y el botón dentro del <li>
    li.appendChild(spanText);
    li.appendChild(deleteBtn);

    // Agregar el <li> completo a la lista visible <ul>
    taskList.appendChild(li);

    // Limpiar el input para la siguiente tarea
    taskInput.value = '';

    // Actualizar contadores al finalizar
    updateCounters();
}

// 4. Asignar el evento al botón de "Agregar"
addBtn.addEventListener('click', addTask);

// Extra: Permitir que la tarea se agregue al presionar la tecla "Enter"
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});