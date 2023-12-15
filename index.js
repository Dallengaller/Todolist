const listaDeTareas = document.querySelector("#tareas");
const tareaInput = document.querySelector("#nuevaTarea");
const btnAgregar = document.querySelector("#agregarTarea");
const resumenTareas = document.querySelector("#resumenTareas"); // Nuevo elemento en el DOM
const tareas = [];
let tareasRealizadas = 0;
let tareasTotales = 0;

/* Actualizamos la información en el HTML */
function renderTareas() {
  let html = "";
  tareasTotales = tareas.length;
  for (let tarea of tareas) {
    html += `<li>${tarea.nombre} <button onclick="borrar(${tarea.id})">eliminar</button></li>`;
  }
  listaDeTareas.innerHTML = html;
  tareasRealizadas = tareasTotales - tareas.length;
  actualizarResumen();
}

function actualizarResumen() {
  // Actualizamos el contenido del elemento en el DOM
  resumenTareas.textContent = `Tareas realizadas: ${tareasRealizadas}, Tareas totales: ${tareasTotales}`;
}

btnAgregar.addEventListener("click", () => {
  const nuevaTarea = { id: Date.now(), nombre: tareaInput.value };
  tareas.push(nuevaTarea);
  tareaInput.value = "";
  renderTareas();
});

function borrar(id) {
  const index = tareas.findIndex((ele) => ele.id == id);
  tareas.splice(index, 1);
  renderTareas();
}
