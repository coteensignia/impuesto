
class Impuesto {
  constructor(montoBrutoAnual, deducciones) {
    this._montoBrutoAnual = montoBrutoAnual;
    this._deducciones = deducciones;
  }
  // Getters
  get montoBrutoAnual() {
    return this._montoBrutoAnual;
  }

  get deducciones() {
    return this._deducciones;
  }

  // Setters
  set montoBrutoAnual(nuevoMontoBrutoAnual) {
    this._montoBrutoAnual = nuevoMontoBrutoAnual;
  }

  set deducciones(nuevasDeducciones) {
    this._deducciones = nuevasDeducciones;
  }

  calcularImpuesto() {
    return (this._montoBrutoAnual - this._deducciones) * 0.21
  }
}


export default Impuesto;