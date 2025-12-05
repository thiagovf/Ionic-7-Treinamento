import readline from "readline-sync";
import { PrecoRangeError } from "../exceptions/preco-error";

export class InputProduto {
  inputNome(): string {
    return readline.question("Digite o nome do produto: ");
  }

  inputPreco(): number {
    try {
      const preco = JSON.parse(readline.question("Digite o preço do produto: "));
      if (preco <= 0.0) {
        throw new Error("Preço não pode ser negativo.");
      } else if (preco > 1000.0) {
        throw new PrecoRangeError("Preço tem que ser menor que 1.000,00.");
    }
    
      return preco;
    } catch (e) {
        if (e instanceof PrecoRangeError) {
            console.log(e.name + ": " + e.message);
        } else if (e instanceof SyntaxError) {
            console.log("Tipo de dado é inválido.");
        } else {
            console.log("Preço inválido. Por favor, insira um número.");
        }
      return this.inputPreco();
    }
  }

  inputQuantidade(): number {
    try {
      const quantidade = JSON.parse(readline.question("Digite a quantidade do produto: "));
      if (quantidade <= 0.0) {
        throw new Error("Quantidade não pode ser negativo.");
      }
      return quantidade;
    } catch (e) {
      console.log("Quantidade inválida. Por favor, insira um número.");
      return this.inputQuantidade();
    }
  }
}
