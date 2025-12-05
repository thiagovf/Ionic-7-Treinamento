import { Produto } from "./models/produto";


let produtos = Array<Produto>();
const produto1 = new Produto("Caneta", 2.5, 100);
const produto2 = new Produto("Caderno", 15.0, 50);
const produto3 = new Produto("Borracha", 1.5, 200);

produtos.push(produto1);
produtos.push(produto2);
produtos.push(produto3);

for (let produto of produtos) {
    console.log(produto.tostring());
}
console.log("Total de produtos: " + produtos.length + "-----------");
produtos.forEach((produto) => {
    console.log(produto.tostring());
});