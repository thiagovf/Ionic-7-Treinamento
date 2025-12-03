// Listas
let numeros: number[] = [10, 20, 30, 40, 50];
let nomes: string[] = ["Ana", "Bruno", "Carlos", "Diana"];

// Array
let numeros1: Array<number> = [5, 15, 25, 35, 45];
let nomes1: Array<string> = ["Eva", "Fernando", "Gabriela", "Hugo"];

// Tuplas
let pessoa: [string, number, boolean] = ["Isabela", 28, true];

// Array de Tuplas
let pessoas: Array<[string, number]> = [
  ["João", 30],
  ["Larissa", 25],
  ["Marcos", 35],
];

// Exibindo os valores
console.log("Array de Números:", numeros);
console.log("Array de Nomes:", nomes);
console.log("Array de Números (Array<>):", numeros1);
console.log("Array de Nomes (Array<>):", nomes1);
console.log("Tupla Pessoa:", pessoa);
console.log("Array de Tuplas Pessoas:", pessoas);

// Acessando elementos específicos
console.log("Primeiro número:", numeros[0]);
console.log("Segundo nome:", nomes[1]);
console.log("Nome na tupla Pessoa:", pessoa[0]);
console.log("Idade na tupla Pessoa:", pessoa[1]);
console.log("Primeira pessoa na lista de Tuplas:", pessoas[0]);

// Somente leitura
let numerosReadonly: ReadonlyArray<number> = [100, 200, 300];
// numerosReadonly.push(400); // Erro: não é possível modificar um ReadonlyArray

console.log("Array de Números Somente Leitura:", numerosReadonly);

let lista: readonly number[] = [1, 2, 3, 4, 5];
// lista.push(6); // Erro: não é possível modificar um array somente leitura

console.log("Lista Somente Leitura:", lista);


console.log("Array de Números (Array<>):", numeros1);
numeros1.unshift(0); // Adiciona 0 no início do array
console.log("Array de Números (Array<>) após unshift:", numeros1);
numeros1.push(55); // Adiciona 55 no final do array
console.log("Array de Números (Array<>) após push:", numeros1);

numeros1.pop(); // Remove o último elemento do array
console.log("Array de Números (Array<>) após pop:", numeros1);

numeros1.shift(); // Remove o primeiro elemento do array
console.log("Array de Números (Array<>) após shift:", numeros1);