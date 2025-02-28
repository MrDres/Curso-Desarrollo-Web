// Esto es un comentario
//Agregar funcionalidad para manejar las tareas
document.addEventListener("DOMContentLoaded", () => {
    //let , var , const
    const taskList = document.getElementById("tareaLista");
    const newTaskInput = document.getElementById("nuevaTareaEntrada");
    const addTaskBtn = document.getElementById("botonNuevaTarea");

    //Agregamos una nueva tarea
    addTaskBtn.addEventListener("click", () => {
        const taskText = newTaskInput.value.trim();
        //condicional
        if (taskText === "") return;
        const newTask = document.createElement("li");
        newTask.classList.add("tarea");
        newTask.dataset.id = Date.now();//Usa el tiempo como un ID único
        newTask.innerHTML = `${taskText} <button class="deleteBtn" data-action="delete">Eliminar</button>`;
        taskList.appendChild(newTask);
        newTaskInput.value = "";
    });
    //eliminar tarea
    taskList.addEventListener("click", (e) => {
        if (e.target.dataset.action === "delete") {
            const tarea = e.target.closest(".tarea");
            tarea.remove();
        }
    });
});