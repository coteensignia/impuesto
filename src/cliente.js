class Cliente {
  constructor(nombre) {
    this._nombre = nombre;
  }

  // Getter
  get nombre() {
    return this._nombre;
  }

  // Setter
  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }
}

export default Cliente;
