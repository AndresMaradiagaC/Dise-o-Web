function nuevapesta() {
  
  var nueva = "https://ucenfotec.ac.cr/";

  
  window.open(nueva, '_blank');
}

function mostrarTexto() {
    var parrafoOculto = document.getElementById("parrafoOculto");
    var boton = document.getElementById("txt");

    if (parrafoOculto.style.display === "none" || parrafoOculto.style.display === "") {
        parrafoOculto.style.display = "block";
        boton.textContent = "Leer menos";
    } else {
        parrafoOculto.style.display = "none";
        boton.textContent = "Leer más";
    }
}
