const texto = document.getElementById("texto");
document.getElementById("btnAdd").addEventListener("click", () => {
  texto.classList.add("resaltado");
});

document.getElementById("btnRemove").addEventListener("click", () => {
  texto.classList.remove("resaltado");
});

document.getElementById("btnToggle").addEventListener("click", () => {
  texto.classList.toggle("grande");
});
