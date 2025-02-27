//Seleccionamos los elementos del DOM
const entradaTarea = document.getElementById('entradaTarea');
const entradaFecha = document.getElementById('entradaFecha');
const entradaTiempo = document.getElementById('entradaTiempo');
const botonAgregar = document.getElementById('botonAgregar');
const listaTareas = document.getElementById('listaTareas');



//funcion mostrar el mensaje de error
function mostrarError(mensaje) {
    const error = document.createElement('div');
    error.className = 'mensajeError';
    error.textContent = mensaje;
    document.body.appendChild(error);
    setTimeout(() => error.remove(), 3000);//Esto elimina el mensaje error creado en 3 segundos porque el 3000 son milisegundos
};

//Funcion para agregar una tarea
function agregarTarea() {
    const textoArea = entradaTarea.value.trim();
    const fechaLimite = entradaFecha.value;
    const tiempoEstimado = entradaTiempo.value.trim();

    //Validar que todos los campos esten completos
    if (!textoArea || !fechaLimite || !tiempoEstimado) {
        mostrarError('Todos los campos son obligatorios.');
        return;
    }
    //Crear elementos de la nueva tarea
    const elementoTarea = document.createElement('li');
    elementoTarea.className = 'elementoTarea';

    //crea span para la tarea
    const spanTarea = document.createElement('span');
    spanTarea.textContent = textoArea;
    //crea el span para la fecha limite
    const spanFecha = document.createElement('span');
    spanFecha.className = 'fechaLimite';
    spanFecha.textContent = `Fecha Limite: ${fechaLimite}`;
    //Crea el span para el tiempo estimado
    const spanTiempo = document.createElement('span');
    spanTiempo.className = 'tiempoEstimado';
    spanTiempo.textContent = `Tiempo estimado: ${tiempoEstimado}`;

    //Crea boton para completar tarea
    const botonCompletar = document.createElement('button');
    botonCompletar.className = 'botonCompletar';
    botonCompletar.textContent = 'Completar';
    botonCompletar.title = 'Pulsar para marcar la tarea como completada';
    botonCompletar.onclick = function () {
        spanTarea.classList.toggle('completada');
        if (spanTarea.className === 'completada') {
            elementoTarea.style.backgroundColor = "greenYellow";

        } else {
            elementoTarea.style.backgroundColor = "yellow";
        };
        guardarTareas();
    }
    //Crea boton para editar tarea
    const botonEditar = document.createElement('button');
    botonEditar.className = 'botonEditar';
    botonEditar.textContent = 'Editar';
    botonEditar.title = 'Pulsar para editar los datos de la tarea';
    botonEditar.onclick = function () {
        editarTarea(spanTarea, spanFecha, spanTiempo);
    };

    //Crea boton para eliminar tarea
    const botonEliminar = document.createElement('button');
    botonEliminar.className = 'botonEliminar';
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.title = 'Pulsar para eliminar la tarea de la lista de tareas';
    botonEliminar.onclick = function () {
        listaTareas.removeChild(elementoTarea);
        guardarTareas();
    };

    //Marcar tarea como completada
    spanTarea.onclick = function () {
        spanTarea.classList.toggle('completada');
        guardarTareas();

    };

    //Agregar todos los elementos a la lista tareas
    elementoTarea.appendChild(spanTarea);
    elementoTarea.appendChild(spanFecha);
    elementoTarea.appendChild(spanTiempo);
    elementoTarea.appendChild(botonCompletar);
    elementoTarea.appendChild(botonEditar);
    elementoTarea.appendChild(botonEliminar);
    listaTareas.appendChild(elementoTarea);

    //Limpiar los campos de entrada
    entradaTarea.value = "";
    entradaFecha.value = "";
    entradaTiempo.value = "";
    guardarTareas();
};

function editarTarea(spanTarea, spanFecha, spanTiempo) {
    const nuevoTexto = prompt('Editar tarea: ', spanTarea.textContent);
    if (nuevoTexto !== null && nuevoTexto.trim() !== "") {
        spanTarea.textContent = nuevoTexto.trim();
        const nuevaFecha = prompt('Editar fecha límite (YYYY-MM-DD): ', spanFecha.textContent.replace('Fecha límite: ', ''));
        const nuevoTiempo = prompt('Editar tiempo estimado', spanTiempo.textContent.replace('Tiempo estimado', ''));
        spanFecha.textContent = nuevaFecha ? `Fecha límite: ${nuevaFecha}` : '';
        spanTiempo.textContent = nuevoTiempo ? `Tiempo estimado: ${nuevoTiempo}` : '';
        guardarTareas();
    };
};
//funcion filtrar tareas
function filtrarTareas(filtro) {
    const tareas = document.querySelectorAll('#listaTareas .elementoTarea');
    tareas.forEach(tarea => {
        const estaCompletada = tarea.querySelector('span').classList.contains('completada');
        if (filtro === 'all' || (filtro === 'completed' && estaCompletada) || (filtro === 'pending' && !estaCompletada)) {
            tarea.style.display = 'flex';
        } else {
            tarea.style.display = 'none';
        }
    });
};

// Función para guardar las tareas en localStorage
function guardarTareas() {
    const tareas = [];
    document.querySelectorAll('#listaTareas .elementoTarea').forEach(tarea => {
        const textoTarea = tarea.querySelector('span').textContent;
        const estaCompletada = tarea.querySelector('span').classList.contains('completada');
        const fechaLimite = tarea.querySelector('.fechaLimite').textContent.replace('Fecha límite: ', '');
        const tiempoEstimado = tarea.querySelector('.tiempoEstimado').textContent.replace('Tiempo estimado: ', '');
        tareas.push({
            texto: textoTarea,
            completada: estaCompletada,
            fechaLimite: fechaLimite,
            tiempoEstimado: tiempoEstimado
        });
    });
    localStorage.setItem('tareas', JSON.stringify(tareas));
}

// Función para cargar las tareas desde localStorage
function cargarTareas() {
    const tareas = JSON.parse(localStorage.getItem('tareas')) || [];
    tareas.forEach(tarea => {

        const elementoTarea = document.createElement('li');
        elementoTarea.className = 'elementoTarea';

        const spanTarea = document.createElement('span');
        spanTarea.textContent = tarea.texto;
        if (tarea.completada) {
            spanTarea.classList.add('completada');
        }

        const spanFecha = document.createElement('span');
        spanFecha.className = 'fechaLimite';
        spanFecha.textContent = tarea.fechaLimite ? `Fecha límite: ${tarea.fechaLimite}` : '';

        const spanTiempo = document.createElement('span');
        spanTiempo.className = 'tiempoEstimado';
        spanTiempo.textContent = tarea.tiempoEstimado ? `Tiempo estimado: ${tarea.tiempoEstimado}` : '';

        if (spanTarea.className === 'completada') {
            elementoTarea.style.backgroundColor = "greenYellow";
        } else {
            elementoTarea.style.backgroundColor = "yellow";
        };

        const botonCompletar = document.createElement('button');
        botonCompletar.className = 'botonCompletar';
        botonCompletar.textContent = 'Completar';
        botonCompletar.onclick = function () {
            spanTarea.classList.toggle('completada');
            if (spanTarea.className === 'completada') {
                elementoTarea.style.backgroundColor = "greenYellow";

            } else {
                elementoTarea.style.backgroundColor = "yellow";
            };
        };

        const botonEditar = document.createElement('button');
        botonEditar.textContent = 'Editar';
        botonEditar.className = 'botonEditar';
        botonEditar.onclick = function () {
            editarTarea(spanTarea, spanFecha, spanTiempo);
        };

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.className = 'botonEliminar';
        botonEliminar.onclick = function () {
            listaTareas.removeChild(elementoTarea);
            guardarTareas();
        };

        spanTarea.onclick = function () {
            spanTarea.classList.toggle('completada');
            guardarTareas();
        };

        elementoTarea.appendChild(spanTarea);
        elementoTarea.appendChild(spanFecha);
        elementoTarea.appendChild(spanTiempo);
        elementoTarea.appendChild(botonCompletar);
        elementoTarea.appendChild(botonEditar);
        elementoTarea.appendChild(botonEliminar);
        listaTareas.appendChild(elementoTarea);
    });
}

// Evento para agregar tarea al hacer clic en el botón
botonAgregar.addEventListener('click', agregarTarea);

// Evento para agregar tarea al presionar Enter
entradaTarea.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        agregarTarea();
    }
});

// Cargar tareas al iniciar la página
cargarTareas();




