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

  
  it("debería calcular el precio neto correctamente", () => {
    let totalizador = new Totalizador();
    totalizador.setCantidad(20);
    totalizador.setPrecio(3);
    expect(totalizador.getNeto()).toEqual(60);
  });

  it("debería obtener el porcentaje de impuesto para el estado TX", () => {
    let totalizador = new Totalizador();
    totalizador.setEstado("TX");
    expect(totalizador.getImpuestoPorcentaje()).toEqual(0.0625);
  });
});