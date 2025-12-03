import { ClienteFisico } from "./models/cliente-fisico";
import { ClienteJuridico } from "./models/cliente-juridico";



const cf = new ClienteFisico("Carol", "cc@cc.com", "Feminino", "123.456.789-00");
console.log(cf.toString());
console.log(`Desconto Cliente Físico: ${cf.calcularDesconto()}%`);

const cj = new ClienteJuridico("Empresa X", "x@x.xcom", "Tecnologia", "12.345.678/0001-00");
console.log(cj.toString());
console.log(`Desconto Cliente Jurídico: ${cj.calcularDesconto()}%`);


// Polimorfismo
let cliente : ClienteFisico | ClienteJuridico;

cliente = new ClienteFisico();
console.log(`\nCliente é do tipo ClienteFisico? ${cliente instanceof ClienteFisico}`);

cliente = new ClienteJuridico();
console.log(`Cliente é do tipo ClienteJuridico? ${cliente instanceof ClienteJuridico}`);
