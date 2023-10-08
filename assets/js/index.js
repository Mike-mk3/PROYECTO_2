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