import { InputProduto } from "./input/input-produto";
import { Produto } from "./models/produto";

try {
  const produto = new Produto();
  const inputProduto = new InputProduto();

  produto.nome = inputProduto.inputNome();
  produto.preco = inputProduto.inputPreco();
  produto.quantidade = inputProduto.inputQuantidade();

  console.log(produto.tostring());
} catch (e) {
  console.log("Erro ao criar o produto: " + e);
} finally {
  console.log("Programa finalizado.");
}
