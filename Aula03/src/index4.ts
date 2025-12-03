// Iteração
// Varrendo listas
let frutas: string[] = ["Maçã", "Banana", "Laranja", "Uva"];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Fruta na posição ${i}: ${frutas[i]}`);
}

console.log("-------------");

// Usando for...of
for (let fruta of frutas) {
    console.log(`Fruta: ${fruta}`);
}

console.log("-------------");
// Usando forEach
frutas.forEach((fruta, indice) => {
    console.log(`Fruta na posição ${indice}: ${fruta}`);
});

console.log("-------------");