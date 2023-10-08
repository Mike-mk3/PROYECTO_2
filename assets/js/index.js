let pendientes = JSON.parse(localStorage.getItem("pendientes")) ||[];



// esto es el llamado a los ID del HTML
const inputTarea = document.getElementById("inputTarea");



// esto es el llamado a los BOTONES del HTML
const btnAgregar = document.getElementById("btnAgregar");
const btnBorrarTodo = document.getElementById("btnBorrarTodo");

const divPendientes = document.getElementById("divPendientes");
const alertSinPendientes = document.getElementById("alertSinPendientes");



let indexEditar = null;



class Pendiente {
    constructor (tarea){
        this.tarea = tarea;
    }
} 




function guardarPendiente() {
    let tarea = inputTarea.value;
    


    let pendiente = new Pendiente (
        tarea
    );
   console.log (pendiente);



    if (indexEditar === null) {
        console.log ("agregar pendientes");
        pendientes.push(pendiente);
    } else {
        pendientes[indexEditar]= pendiente;
        indexEditar= null;
        console.log ("editar pendientes");
    }



    limpiarFormularioDePendientes();



    localStorage.setItem("pendientes", JSON.stringify(pendientes))
    console.log ("Entro funcion guardar pendientes");
    mostrarPendientes();
}



function borrarTodo() {
    console.log ("Entro a 'BORRAR TODO'");
    localStorage.clear();
    pendientes = [];
    mostrarPendientes();
    alert ("Se Eliminaran Todas Las Tareas Guardadas");
} 



function eliminarPendiente(index) {
    console.log(index);
    pendientes.splice(index, 1);
    localStorage.setItem("pendientes", JSON.stringify(pendientes));
    mostrarPendientes();
    alert("Se Eliminara La Tarea De Tu Lista");
}



function editarPendiente(index) {
    indexEditar = index;
    let pendienteAEditar = pendientes[index];
    inputTarea.value = pendienteAEditar.tarea;
    indexEditar = index;
}



function mostrarPendientes (){
    if (pendientes.length === 0) {
        divPendientes.innerHTML = `
        <div class="alert alert-info" role="alert" id="alertSinPendientes">
            Aún NO Haz Agregado Ninguna Tarea ó Actividad
        </div>`;
    } else {
        divPendientes.innerHTML = "";
        pendientes.forEach((pendiente, index) => {
            divPendientes.innerHTML += `
            <div class="card mb-2">
                <div class="row g-0">
                    <div class="col-md-12">
                        <div class="card-body">
                        <h5 class="card-title"> =TAREA PENDIENTE=
                        </h5>
                            <p class="card-text">${pendiente.tarea}</p>
                            <div class="row mb-2">
                                <div class="col">
                                <button class="btn btn-warning w-100 mt-2" type="button" id="editar-${index}" onclick="editarPendiente(${index})">Modificar Tarea</button>
                            </div>
                            <div class="col">
                                <button class="btn btn-secondary w-100 mt-2" type="button" id="eliminar-${index}" onclick="eliminarPendiente(${index})">Eliminar Tarea</button>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </div>
            `;
        });
    }
}



function limpiarFormularioDePendientes() {
    inputTarea.value = "";
}



btnAgregar.addEventListener ("click", guardarPendiente);
btnBorrarTodo.addEventListener ("click", borrarTodo);



mostrarPendientes ();