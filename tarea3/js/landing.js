
function mostrarAlerta(title, text, type) {
  Swal.fire({
    title: title,
    text: text,
    icon: type,
  });
}

function validarFormulario() {
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const telefono = document.getElementById("telefono").value;
  const mensaje = document.getElementById("mensaje").value;

  if (!nombre || !email || !mensaje) {
    mostrarAlerta("Error", "Por favor, completa todos los campos obligatorios.", "error");
    return false;
  }

  Swal.fire({
    title: "¿Deseas enviar la información?",
    showCancelButton: true,
    confirmButtonText: "Aceptar",
    cancelButtonText: "Cancelar",
    icon: "question",
  }).then((result) => {
    if (result.isConfirmed) {
      mostrarAlerta("Éxito", "¡Enviado con éxito!", "success");
      return true; 
    }
  });

  return false; 
}

document.getElementById("btnEnviar").addEventListener("click", function (e) {
  e.preventDefault(); 
  validarFormulario(); 
});
