import { Arquivo } from "./models/arquivo";

async function execute() {
    try {
        const arquivo = new Arquivo("produto.txt", "r");
        
        await arquivo.abrir();
        const conteudo = await arquivo.ler();
        console.log("Conteúdo do arquivo:", conteudo);
        await arquivo.fechar();
    } catch (error) {
        console.error("Ocorreu um erro:", error);
    }
}

execute();