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

  it("debería calcular el precio total para Alabama (AL) con 4.00% de impuesto", () => {
    let totalizador = new Totalizador();
    totalizador.setCantidad(1);
    totalizador.setPrecio(100);
    totalizador.setEstado("AL");
    expect(totalizador.getTotal()).toEqual(104);
  });

  it("debería calcular el precio total para Nevada (NV) con 8.00% de impuesto", () => {
    let totalizador = new Totalizador();
    totalizador.setCantidad(1);
    totalizador.setPrecio(100);
    totalizador.setEstado("NV");
    expect(totalizador.getTotal()).toEqual(108);
  });

  it("debería calcular el precio total para Utah (UT) con 6.65% de impuesto", () => {
    let totalizador = new Totalizador();
    totalizador.setCantidad(1);
    totalizador.setPrecio(100);
    totalizador.setEstado("UT");
    expect(totalizador.getTotal()).toEqual(106.65);
  });

  it("debería calcular el precio total para Texas (TX) con 6.25% de impuesto", () => {
    let totalizador = new Totalizador();
    totalizador.setCantidad(1);
    totalizador.setPrecio(100);
    totalizador.setEstado("TX");
    expect(totalizador.getTotal()).toEqual(106.25);
  });

});