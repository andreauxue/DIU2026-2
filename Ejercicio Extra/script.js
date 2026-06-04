const inputTarea = document.getElementById("inputTarea");
const btnAgregar = document.getElementById("btnAgregar");
const listaTareas = document.getElementById("listaTareas");
const totalTareas = document.getElementById("totalTareas");
const tareasCompletadas = document.getElementById("tareasCompletadas");
const tareasPendientes = document.getElementById("tareasPendientes");
const mensajeError = document.getElementById("mensajeError");

function actualizarContadores() {
  const tareas = document.querySelectorAll(".tarea");
  const completadas = document.querySelectorAll(".texto-tarea.completada");

  totalTareas.textContent = tareas.length;
  tareasCompletadas.textContent = completadas.length;
  tareasPendientes.textContent = tareas.length - completadas.length;
}

function agregarTarea() {
  const texto = inputTarea.value.trim();

  if (texto === "") {
    mensajeError.textContent = "Por favor escribe una tarea válida.";
    return;
  }

  mensajeError.textContent = "";

  const elementoTarea = document.createElement("li");
  elementoTarea.classList.add("tarea");

  const textoTarea = document.createElement("span");
  textoTarea.classList.add("texto-tarea");
  textoTarea.textContent = texto;

  textoTarea.addEventListener("click", function () {
    textoTarea.classList.toggle("completada");
    actualizarContadores();
  });

  const btnEliminar = document.createElement("button");
  btnEliminar.classList.add("btn-eliminar");
  btnEliminar.textContent = "Eliminar";

  btnEliminar.addEventListener("click", function () {
    listaTareas.removeChild(elementoTarea);
    actualizarContadores();
  });

  elementoTarea.appendChild(textoTarea);
  elementoTarea.appendChild(btnEliminar);
  listaTareas.appendChild(elementoTarea);

  inputTarea.value = "";
  inputTarea.focus();

  actualizarContadores();
}

btnAgregar.addEventListener("click", agregarTarea);

inputTarea.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    agregarTarea();
  }
});