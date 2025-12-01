"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa_1 = require("./models/pessoa");
// Criando uma instância da classe Pessoa
let pessoa = new pessoa_1.Pessoa();
pessoa.nome = "Carlos Silva";
pessoa.idade = 28;
pessoa.email = "carlos@zipmail.com";
console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Email: ${pessoa.email}`);
