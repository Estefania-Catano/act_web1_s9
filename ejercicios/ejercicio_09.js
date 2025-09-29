const formulario = document.getElementById("miFormulario");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();

  if (nombre === "" || correo === "") {
    mensaje.textContent = "⚠️ Todos los campos son obligatorios";
    mensaje.style.color = "red";
  } else {
    mensaje.textContent = "✅ Formulario enviado con éxito";
    mensaje.style.color = "green";
  }
});
