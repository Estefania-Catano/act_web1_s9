const hijo1 = document.getElementById("hijo1");
const hijo2 = document.getElementById("hijo2");
const info = document.getElementById("info");

const padre = hijo1.parentElement;
const hijos = padre.children;
const siguiente = hijo1.nextElementSibling;

info.innerHTML = `
  <strong>Padre:</strong> ${padre.id}<br>
  <strong>Total hijos:</strong> ${hijos.length}<br>
  <strong>Siguiente hermano de hijo1:</strong> ${siguiente.id}
`