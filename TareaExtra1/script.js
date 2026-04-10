const inputTarea = document.getElementById("inputTarea");
const btnAgregar = document.getElementById("btnAgregar");
const listaTareas = document.getElementById("listaTareas");
const totalTareas = document.getElementById("totalTareas");
const mensajeError = document.getElementById("mensajeError");

function actualizarContador() {
  const tareas = listaTareas.querySelectorAll(".tarea-item");
  totalTareas.textContent = tareas.length;
}

function mostrarError(mensaje) {
  mensajeError.textContent = mensaje;
}

function limpiarError() {
  mensajeError.textContent = "";
}

function agregarTarea() {
  const texto = inputTarea.value.trim();

  if (texto === "") {
    mostrarError("No puedes agregar una tarea vacia");
    return;
  }

  limpiarError();

  const item = document.createElement("li");
  item.classList.add("tarea-item");

  const infoTarea = document.createElement("div");
  infoTarea.classList.add("info-tarea");

  const textoTarea = document.createElement("span");
  textoTarea.classList.add("texto-tarea");
  textoTarea.textContent = texto;

  const estadoTarea = document.createElement("span");
  estadoTarea.classList.add("estado-tarea");
  textoTarea.style.color = "gray";
  estadoTarea.style.color = "gray";
  estadoTarea.textContent = " No completada";

  const btnEliminar = document.createElement("button");
  btnEliminar.classList.add("btn-eliminar");
  btnEliminar.textContent = "Eliminar";
  btnEliminar.type = "button";

  infoTarea.addEventListener("click", function () {
    textoTarea.classList.toggle("completada");
    estadoTarea.classList.toggle("completada");

    if (textoTarea.classList.contains("completada")) {
      textoTarea.style.color = "green";
      estadoTarea.style.color = "green";
      estadoTarea.textContent = " Completada";
    } else {
      textoTarea.style.color = "gray";
      estadoTarea.style.color = "gray";
      estadoTarea.textContent = " No completada";
    }
  });

  btnEliminar.addEventListener("click", function (event) {
    event.stopPropagation();
    listaTareas.removeChild(item);
    actualizarContador();
  });

  infoTarea.appendChild(textoTarea);
  infoTarea.appendChild(estadoTarea);

  item.appendChild(infoTarea);
  item.appendChild(btnEliminar);

  listaTareas.appendChild(item);

  inputTarea.value = "";
  inputTarea.focus();

  actualizarContador();
}

btnAgregar.addEventListener("click", agregarTarea);

inputTarea.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    agregarTarea();
  }
});

inputTarea.addEventListener("input", limpiarError);