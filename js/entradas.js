const inputCantidad = document.getElementById('cantidad');
const selectEvento = document.getElementById('evento');
const resultadoAPagar = document.getElementById('resultadoAPagar');


const botonResumen = document.querySelector('button[type="submit"]');
botonResumen.addEventListener('click', function(event) {
  event.preventDefault(); 


  const cantidad = inputCantidad.value;
  const eventoSeleccionado = selectEvento.value;


  let totalAPagar = 0;
  if (eventoSeleccionado === 'estu') {
    totalAPagar = cantidad * 200 * 0.2;
  } else if (eventoSeleccionado === 'trai') {
    totalAPagar = cantidad * 200 * 0.5;
  } else if (eventoSeleccionado === 'juni') {
    totalAPagar = cantidad * 200 * 0.85;
  } else if (eventoSeleccionado === 'visi') {
    totalAPagar = cantidad * 200;
  }


  resultadoAPagar.textContent = 'Total a Pagar $: ' + totalAPagar;
});

//Boton borrar
const botonBorrar = document.querySelector('button[type="reset"]');
botonBorrar.addEventListener('click', function(event) {
  event.preventDefault(); // Evitar el reinicio del formulario

  document.getElementById('nombreCliente').value = '';
  document.getElementById('apellido').value = '';
  document.getElementById('email').value = '';
  document.getElementById('cantidad').value = '';
  document.getElementById('evento').selectedIndex = 0;
  document.getElementById('resultadoAPagar').textContent = 'Total a Pagar $:';
});

  // Ejecuta la validación del formulario cuando se envía
  document.getElementById("myForm").addEventListener("submit", function(event) {
    if (!this.checkValidity()) {
      event.preventDefault(); // Evita que el formulario se envíe si no es válido
      event.stopPropagation(); // Detiene la propagación del evento
    }
    this.classList.add("was-validated"); // Agrega las clases de validación de Bootstrap
  }, false);
