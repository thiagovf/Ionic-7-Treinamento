import { Arquivo } from "./models/arquivo";
import { Produto } from "./models/produto";

async function execute() {
    try {
        const produto = new Produto("Caneta", 1, 332);
        const arquivo = new Arquivo("produto.txt", "a+");
        
        await arquivo.abrir();
        await arquivo.appendLinha(produto.tostring());
        await arquivo.fechar();
        console.log("Produto salvo com sucesso no arquivo.");
    } catch (error) {
        console.error("Ocorreu um erro:", error);
    }
}

execute();