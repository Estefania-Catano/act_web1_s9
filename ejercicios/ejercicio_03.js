        // "activity": "Seleccionar Elementos por Clase - Crea elementos con la misma clase y: 
        // Usa getElementsByClassName() para seleccionarlos, Cambia el estilo de todos los elementos de esa clase, 
        // Cuenta cuántos elementos tienen esa clase",
        // "solution": "ejercicios/ejercicio_03.js"

const elementos = document.getElementsByClassName("caja");

for (let i = 0; i < elementos.length; i++) {
  elementos[i].style.backgroundColor = "lightgreen";
  elementos[i].style.fontWeight = "bold";
}

const cantidad = elementos.length;


document.getElementById("resultado").textContent = 
  "Cantidad de elementos con la clase 'caja': " + cantidad;
