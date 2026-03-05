import Totalizador from "./totalizador.js";

describe("Totalizador de Ventas", () => {
  it("debería mostrar la cantidad ingresada", () => {
    let totalizador = new Totalizador();
    totalizador.setCantidad(20);
    expect(totalizador.getCantidad()).toEqual(20);
  });

  it("debería mostrar el precio del item ingresado", () => {
    let totalizador = new Totalizador();
    totalizador.setPrecio(3);
    expect(totalizador.getPrecio()).toEqual(3);
  });
});