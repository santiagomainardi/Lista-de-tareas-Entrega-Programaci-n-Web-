// Funciones
// Info date
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

// Tasks Container
const contenedorTareas = document.getElementById('contenedorTareas');

const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' });
    dateText.textContent = date.toLocaleString('es', { weekday: 'long' });
    dateMonth.textContent = date.toLocaleString('es', { month: 'short' });
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric' });
};

const addNewTask = event => {
    event.preventDefault(); 
    const { value } = event.target.tareaTexto;
    if(!value) return;
    const tarea = document.createElement('div');
    tarea.classList.add('tarea');
    tarea.addEventListener('click', changeTaskState)
    tarea.textContent = value;
    contenedorTareas.prepend(tarea);
    event.target.reset();
};

const changeTaskState = event => {
    event.target.classList.toggle('done');
};

setDate();

/* 
LISTA DE TAREAS

agregarTarea() --> cuando el usuario escribe una tarea y clickea el botonAdd, se crea una tarea nueva al fondo de la lista. 

cambiarEstadoTarea() --> cuando el usuario clickea una tarea (en cualquier lugar excepto en la "X") la tarea se convierte en #done. Se vuelve gris y se tacha. 

Priorizar/ordenar: cuando el usuario clickea el botonOrdenar, las tareas #done se pasan abajo de la lista y las pendientes arriba de la lista.

Para esto primero se tendrían que ordenar en un array y después ordenarlas?

mostrarTareasOrdenadas() --> Las tareas Done pasan a estar abajo de todo en la lista

borrarTarea() --> cuando el usuario clickea la "X" (.borrar), la tarea deja de aparecer en la lista.

setDate() --> Función para setear la fecha del día de hoy

Mover tareas: Cuando un usuario mantiene apretado una tarea, la puede arrastrar a una posición diferente en la lista. 

CALENDARIO

JS tiene que averiguar la cantidad de días que tiene el mes y crear cuadrados en el calendario correspondientes. (Ejemplo: Octubre tiene 31 días, el calendario va a tener 31 cuadrados. Y así con todos los meses)
El máximo de cuadrados que van a aparecer en pantalla al mismo tiempo son 7 (representando a los días de la semana) Para esto voy a tener que armar un grid.

5) Cuando todas las tareas de la lista se completan, el día en el calendario aparece verde.
*/