//Seleccionamos los elementos del DOM
const entradaTarea = document.getElementById('entradaTarea');
const entradaFecha = document.getElementById('entradaFecha');
const entradaTiempo = document.getElementById('entradaTiempo');
const botonAgregar = document.getElementById('botonAgregar');
const listaTareas = document.getElementById('listaTareas');

//funcion mostrar el mensaje de error
function mostrarError(mensaje){
    const error = document.createElement('div');
    error.className= 'mensajeError';
    error.textContent = mensaje;
    document.body.appendChild(error);
    setTimeout(()=> error.remove(), 3000);//Esto elimina el mensaje error creado en 3 segundos porque el 3000 son milisegundos
};

//Funcion para agregar una tarea
function agregarTarea(){
    const textoArea = entradaTarea.value.trim();
    const fechaLimite = entradaFecha.value;
    const tiempoEstimado = entradaTiempo.value.trim();

    //Validar que todos los campos esten completos
    if(!textoArea || !fechaLimite || !tiempoEstimado){
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
    spanFecha.className= 'fechaLimite';
    spanFecha.textContent = `Fecha Limite: ${fechaLimite}`;
    //Crea el span para el tiempo estimado
    const spanTiempo = document.createElement('span');
    spanTiempo.className= 'tiempoEstimado';
    spanTiempo.textContent= `Tiempo estimado: ${tiempoEstimado}`;

    //Crea boton para editar tarea
    const botonEditar = document.createElement('button');
    botonEditar.className = 'botonEditar';
    botonEditar.textContent= 'Editar';
    botonEditar.onclick = function(){
        editarTarea(spanTarea,spanFecha,spanTiempo);
    };

    //Crea boton para eliminar tarea
    const botonEliminar= document.createElement('button');
    botonEditar.className='botonEliminar';
    botonEditar.textContent='Eliminar';
    botonEliminar.onclick = function(){
        listaTareas.removeChild(elementoTarea);
        guardarTareas();
    };

    //Marcar tarea como completada
    spanTarea.onclick= function(){
        spanTarea.classList.toggle('completada');
        guardarTareas();
    
    };

    //Agregar todos los elementos a la lista tareas
    elementoTarea.appendChild(spanTarea);
    elementoTarea.appendChild(spanFecha);
    elementoTarea.appendChild(spanTiempo);
    elementoTarea.appendChild(botonEditar);
    elementoTarea.appendChild(botonEliminar);
    listaTareas.appendChild(elementoTarea);

    //Limpiar los campos de entrada
    entradaTarea.value = "";
    entradaFecha.value = "";
    entradaTiempo.value = "";
    guardarTareas();
};

function editarTarea(spanTarea,spanFecha,spanTiempo){
    const nuevoTexto= prompt('Editar tarea: ', spanTarea.textContent);
    if(nuevoTexto !== null && nuevoTexto.trim() !==""){
        spanTarea.textContent = nuevoTexto.trim();
        const nuevaFecha = prompt('Editar fecha límite (YYYY-MM-DD): ', spanFecha.textContent.replace('Fecha límite: ', ''));
        const nuevoTiempo = prompt('Editar tiempo estimado', spanTiempo.textContent.replace('Tiempo estimado', ''));
        spanFecha.textContent = nuevaFecha ? `Fecha límite: ${nuevaFecha}` : '';
        spanTiempo.textContent = nuevoTiempo ? `Tiempo estimado: ${nuevoTiempo}` : '';
        guardarTareas();
    };
};


