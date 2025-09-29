        // "activity": "Seleccionar Elementos por ID - Crea una página con varios elementos que tengan ID y: 
        // Usa getElementById() para seleccionar elementos, Cambia el texto de los elementos seleccionados, 
        // Cambia el color de fondo de un elemento",
        // "solution": "ejercicios/ejercicio_02.js"


const titulo = document.getElementById("titulo");
const parrafo = document.getElementById("parrafo");
const caja = document.getElementById("caja");


titulo.textContent = "Nuevo texto del título";
parrafo.textContent = "Este párrafo ha sido modificado con JS";


caja.style.backgroundColor = "lightblue";
