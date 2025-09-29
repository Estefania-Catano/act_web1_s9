const boton = document.getElementById("btn");
const caja = document.getElementById("caja");

boton.addEventListener("click", () => {
  caja.textContent = "¡Hiciste clic!";
  caja.style.backgroundColor = "lightgreen";
});

caja.addEventListener("mouseover", () => {
  caja.style.backgroundColor = "orange";
});

caja.addEventListener("mouseout", () => {
  caja.style.backgroundColor = "lightblue";
});
