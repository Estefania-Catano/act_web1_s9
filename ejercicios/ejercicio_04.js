
const caja = document.getElementById("caja");
const cajaHTML = document.getElementById("cajaHTML");
const boton = document.getElementById("boton");


caja.textContent = "Este texto fue cambiado con textContent";
cajaHTML.innerHTML = "Este texto fue cambiado con <i>innerHTML</i>";


boton.addEventListener("click", () => {
  caja.textContent = "Nuevo texto desde el botón (textContent)";
  cajaHTML.innerHTML = "Nuevo <strong>contenido HTML</strong> desde el botón";
});
