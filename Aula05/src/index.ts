import { Cliente } from "./models/cliente";
import { Endereco } from "./models/endereco";
import { Telefone } from "./models/telefone";

const cliente = new Cliente("João Silva", "email");
const endereco = new Endereco("São Paulo", "Centro", "Rua A");
const telefone1 = new Telefone("Celular", "12345-6789");
const telefone2 = new Telefone("Residencial", "98765-4321");
const telefones:Array<Telefone> = Array<Telefone>();

telefones.push(telefone1);
telefones.push(telefone2);

cliente.telefones = telefones;
cliente.endereco = endereco;
endereco.cliente = cliente;
telefone1.cliente = cliente;
telefone2.cliente = cliente;

console.log(cliente);
