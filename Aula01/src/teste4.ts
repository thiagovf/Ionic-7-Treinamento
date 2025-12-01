import { Pessoa } from "./models/pessoa";

// Criando uma instância da classe Pessoa
let pessoa =  new Pessoa();

pessoa.nome = "Carlos Silva";
pessoa.idade = 28;
pessoa.email = "carlos@zipmail.com";

console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Email: ${pessoa.email}`);