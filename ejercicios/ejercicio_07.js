const lista = document.getElementById("lista");
const boton = document.getElementById("btnAgregar");
let contador = 1;

boton.addEventListener("click", () => {
  const nuevo = document.createElement("li");
  nuevo.textContent = "Elemento " + contador++;
  lista.appendChild(nuevo);
});
