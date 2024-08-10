import Cliente from './cliente.js';
import Impuesto from './impuesto.js';

const cliente1 = new Cliente("XYZ")
const impuesto1 = new Impuesto(100000, 20000);

const cliente2 = new Cliente("ENDI")
const impuesto2 = new Impuesto(200000, 50000);


console.log(`El impuesto total a pagar por ${cliente1._nombre} es: ${impuesto1.calcularImpuesto()}`);
console.log(`El impuesto total a pagar por ${cliente2._nombre} es: ${impuesto2.calcularImpuesto()}`);

