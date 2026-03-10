class Totalizador {
  constructor() 
  {
    this.cantidad = 0;
    this.precio = 0;
    this.precioNeto=0;
    this.impuestos = { "UT": 0.0665, "NV": 0.08, "TX": 0.0625, "AL": 0.04, "CA": 0.0825 };
  }
  setEstado(estado) 
  {
    this.estado = estado;
  }
  getImpuestoPorcentaje() 
  {
    return this.impuestos[this.estado] || 0;
  }
  getNeto()
  {
    return this.cantidad*this.precio;
  }
  setCantidad(cantidad) {
    this.cantidad = cantidad;
  }

  getCantidad() {
    return this.cantidad;
  }

  setPrecio(precio) {
    this.precio = precio;
  }

  getPrecio() {
    return this.precio;
  }
}

export default Totalizador;