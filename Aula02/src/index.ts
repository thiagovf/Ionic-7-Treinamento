import { Produto } from "./models/produto";
import { Cliente } from "./models/cliente";

const produto = new Produto();
produto.nome = "Caneta";
produto.preco = 2.5;
produto.quantidade = 100;
console.log(
  `Produto: ${produto.nome}, Preço: ${produto.preco}, Quantidade: ${produto.quantidade}`
);


const produto2 = new Produto("Lápis", 1.5, 200);
console.log(
  `Produto2: ${produto2.nome}, Preço: ${produto2.preco}, Quantidade: ${produto2.quantidade}`
);

console.log(produto2.toString());

const cliente = new Cliente("João Silva", "js@js.t")
console.log(cliente.toString());