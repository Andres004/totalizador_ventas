import Totalizador from "./totalizador.js";

const cantidadInput = document.querySelector("#cantidad-input");
const precioInput = document.querySelector("#precio-input");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");

const totalizador = new Totalizador();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number.parseInt(cantidadInput.value);
  const precio = Number.parseInt(precioInput.value);

  totalizador.setCantidad(cantidad);
  totalizador.setPrecio(precio);

  div.innerHTML = `
    <p>Cantidad ingresada: ${totalizador.getCantidad()}</p>
    <p>Precio ingresado: ${totalizador.getPrecio()}</p>
  `;
});