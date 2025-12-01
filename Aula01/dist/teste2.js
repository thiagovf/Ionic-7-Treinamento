"use strict";
// VAR -> escopo de função
if (true) {
    var x = 10;
}
// Permitido
console.log(x);
// Let -> escopo de bloco
if (true) {
    let y = 10;
}
// Erro, não é possível
//console.log(y);
// Declaração de variáveis
var a = 10;
var a = 20; // Criando a mesma variável duas vezes. Permitido com var.
let b = 1;
//let b = 2; // Erro! Não é possível criar a mesma variável duas vezes com let.
// Hoisting - içamento da variável. A variável é "içada" para o topo do escopo. Permitido com var.
//console.log(c); // por algum motivo está dando erro aqui no TypeScript, mas em JS puro funciona.
var c = 10;
/**
 * Embora var seja içada no runtime, o TS considera problemático usar a variável antes da declaração, porque na prática quase sempre causa confusão.
 * Por isso, o TypeScript exibe um erro do tipo: ❌ Variable 'c' is used before being assigned.
 */
//console.log(d);
let d = 20; // Erro! Não é possível acessar a variável antes da sua declaração com let. 
