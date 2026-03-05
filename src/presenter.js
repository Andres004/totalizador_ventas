import Totalizador from "./totalizador.js";

const cantidadInput = document.querySelector("#cantidad-input");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");

const totalizador = new Totalizador();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number.parseInt(cantidadInput.value);

  totalizador.setCantidad(cantidad);

  div.innerHTML = "<p>Cantidad ingresada: " + totalizador.getCantidad() + "</p>";
});