import Totalizador from "./totalizador.js";

describe("Totalizador de Ventas", () => {
  it("debería mostrar la cantidad ingresada", () => {
    let totalizador = new Totalizador();
    totalizador.setCantidad(20);
    expect(totalizador.getCantidad()).toEqual(20);
  });
});