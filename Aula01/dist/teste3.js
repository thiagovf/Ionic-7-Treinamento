"use strict";
// LET vs. CONST
let idade = 25;
const nome = "João";
idade = 26; // Válido
// nome = "Maria"; // Inválido, causa erro  porque CONST não pode ser reatribuído.
console.log(`Nome: ${nome}, Idade: ${idade}`);
// Escopo de bloco
if (true) {
    let cidade = "São Paulo";
    console.log(`Cidade dentro do bloco: ${cidade}`);
}
// console.log(`Cidade fora do bloco: ${cidade}`); // Erro! cidade não está acessível fora do bloco.
// Uso de CONST com objetos
const pessoa = {
    nome: "Ana",
    idade: 30
};
pessoa.idade = 31; // Válido, podemos modificar propriedades do objeto
// pessoa = { nome: "Carlos", idade: 28 }; // Inválido, não podemos reatribuir o objeto
console.log(`Pessoa: ${pessoa.nome}, Idade: ${pessoa.idade}`);
