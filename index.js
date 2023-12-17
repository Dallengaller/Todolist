const listaDeId = document.querySelector("#ID");
const listaDeTareas = document.querySelector("#tareas");
const tareaInput = document.querySelector("#nuevaTarea");
const btnAgregar = document.querySelector("#agregarTarea");
const resumenTareas = document.querySelector("#resumenTareas");
const tareas = [
  { id: generarId(), nombre: "Terminar desafio", completada: true },
  { id: generarId(), nombre: "Subir desafio", completada: true },
  { id: generarId(), nombre: "Ir a dormir", completada: false }
];
let tareasRealizadas = 0;
let tareasTotales = 0;

function renderTareas() {
  let html = "";
  let idHtml = "";
  tareasTotales = tareas.length;

  for (let tarea of tareas) {
    // checkbox
    html += `<li><p>${tarea.nombre}</p> <input type="checkbox" ${tarea.completada ? 'checked' : ''} onchange="marcarRealizada(${tarea.id}, this)"> <button onclick="borrar(${tarea.id})">eliminar</button></li>`;
    idHtml += `<li>ID: ${tarea.id}</li>`;
  }

  listaDeTareas.innerHTML = html;
  listaDeId.innerHTML = idHtml;
  tareasRealizadas = tareas.filter(tarea => tarea.completada).length;
  actualizarResumen();
}

function actualizarResumen() {
  resumenTareas.textContent = `Tareas realizadas: ${tareasRealizadas}, Tareas totales: ${tareasTotales}`;
}

btnAgregar.addEventListener("click", () => {
  const nuevaTarea = { id: generarId(), nombre: tareaInput.value, completada: false };
  tareas.push(nuevaTarea);
  tareaInput.value = "";
  renderTareas();
});

function borrar(id) {
  const index = tareas.findIndex((ele) => ele.id == id);
  tareas.splice(index, 1);
  renderTareas();
}

function marcarRealizada(id, checkbox) {
  const tarea = tareas.find((ele) => ele.id == id);
  tarea.completada = checkbox.checked;
  renderTareas();
}

function generarId() {
  return Math.floor(Math.random() * 100);
}

// Renderizar las tareas iniciales
renderTareas();
