const imagen = document.getElementById("imagen");
const enlace = document.getElementById("enlace");

console.log("SRC actual:", imagen.getAttribute("src"));
console.log("HREF actual:", enlace.getAttribute("href"));


imagen.setAttribute("src", "https://via.placeholder.com/200x100");
enlace.setAttribute("href", "https://openai.com");
