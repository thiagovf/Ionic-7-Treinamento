import { Produto } from "./models/produto";

const produto = new Produto();
produto.nome = "Caneta";
produto.preco = 2.5;
produto.quantidade = 100;

console.log(produto.tostring());

const produto2 = new Produto("Caderno", 15.0, 50);
console.log(produto2.tostring());
