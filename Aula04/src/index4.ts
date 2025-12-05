import { Arquivo } from "./models/arquivo";
import { Produto } from "./models/produto";

async function execute() {
    try {
        const produto = new Produto("Caneta", 10, 100);
        const arquivo = new Arquivo("produto.txt", "w");
        
        await arquivo.abrir();
        await arquivo.escrever(produto.tostring());
        await arquivo.fechar();
        console.log("Produto salvo com sucesso no arquivo.");
    } catch (error) {
        console.error("Ocorreu um erro:", error);
    }
}

execute();