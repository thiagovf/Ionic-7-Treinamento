

// VAR -> escopo de função
if(true) {
    var x = 10
}

// Permitido
console.log(x);

// Let -> escopo de bloco

if(true) {
    let y = 10;
}

// Erro, não é possível
//console.log(y);


// Declaração de variáveis
var a = 10;
var a = 20; // Criando a mesma variável duas vezes. Permitido com var.

let b =  1;
//let b = 2; // Erro! Não é possível criar a mesma variável duas vezes com let.