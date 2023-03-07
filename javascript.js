// Obtener el botón:
let mybutton = document.getElementById("myBtn");

// Aparece el boton cuando se baja scrolleando a 20px (o +) desde el principio de la página
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Cuando se hace click en el boton, se scrollea hacia el principio de la página
function topFunction() {
  document.body.scrollTop = 0; // Para Safari (Apple)
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}
