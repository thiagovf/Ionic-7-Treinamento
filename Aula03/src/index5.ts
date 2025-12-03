// Map, filter e reduce em TypeScript
const numeros5: number[] = [1, 2, 3, 4, 5];

// Usando map para dobrar os valores
const numerosDobrados = numeros5.map(num => num * 2);
console.log("Números Dobrados:", numerosDobrados);

// Usando filter para obter apenas números pares
const numerosPares = numeros5.filter(num => num % 2 === 0);
console.log("Números Pares:", numerosPares);

// Usando reduce para somar todos os números
const somaTotal = numeros5.reduce((acumulador, num) => acumulador + num, 0);
console.log("Soma Total:", somaTotal);
