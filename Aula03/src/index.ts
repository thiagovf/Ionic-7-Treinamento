import { ClienteFisico } from "./models/cliente-fisico";
import { ClienteJuridico } from "./models/cliente-juridico";



const cf = new ClienteFisico("Carol", "cc@cc.com", "Feminino", "123.456.789-00");
console.log(cf.toString());

const cj = new ClienteJuridico("Empresa X", "x@x.xcom", "Tecnologia", "12.345.678/0001-00");
console.log(cj.toString());