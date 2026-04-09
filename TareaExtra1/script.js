// contador de ordenes para los id.
var orders = 0
//Arreglo con las ordenes
let ordersArr = []

/**
 * Función que agrega una órden a la lista. 
 * Esta función se encarga de crear un elemento y un botón para eliminar.
 * Se tienen even listeners para activar el estado de completado.
 * 
 * 
 * @returns 
 */
function addOrder() {
    const input = document.getElementById("input");
    const taskText = input.value;

    //Validación
    if (taskText.trim() === "") return;


    const list = document.getElementById("list");
    const id = "task" + orders++;
    ordersArr.push({ id: id, text: taskText.trim(), completed: false })

    const li = document.createElement("li");
    li.id = id

    const span = document.createElement("span");
    span.textContent = taskText;

    span.addEventListener("click", function () {
        complete(id);
    })

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.onclick = function () {
        deleteTask(id);
    };

    li.appendChild(span);
    li.appendChild(deleteBtn);
    list.appendChild(li);

    input.value = "";
    input.focus()
    counters()
}

/**
 * Función que se encarga de cambiar la clase para activar o deactivar una órden
 * @param {*} id id del elemento a completar 
 */
function complete(id) {
    const item = document.getElementById(id);
    item.classList.toggle("completed");
    const task = ordersArr.find(t => t.id === id);
    task.completed = !task.completed;
    counters()

}

/**
 * Se encarga de eliminar un elemento de la lista
 * @param {*} id id del elemento a elminar 
 */
function deleteTask(id) {
    document.getElementById(id)?.remove();
    orders--
    ordersArr = ordersArr.filter(t => t.id !== id);
    counters()
}

/**
 * Función encargada de actualizar los elemento s de la lista. Se utiliza el arreglo ordersArr para realizar las cuentas y actualizar cada contador.
 */
function counters() {
    const total = ordersArr.length;
    const completed = ordersArr.filter(t => t.completed).length;
    const pending = total - completed;

    document.getElementById("pending-count").textContent = "Tareas Pendientes: " + pending;
    document.getElementById("completed-count").textContent = "Tareas Completadas: " + completed;
}
