import { open, FileHandle } from 'fs/promises';

export class Arquivo {
    private arquivo!: FileHandle;
    private caminho: string;
    private modo: "r" | "w" | "a"| "a+";
    
    constructor(caminho: string, modo: "r" | "w" | "a" | "a+" = "r") {
        this.caminho = caminho;
        this.modo = modo;
    }

    async abrir(): Promise<void> {
        this.arquivo = await open(this.caminho, this.modo);
    }

    async fechar(): Promise<void> {
        if (this.arquivo) {
            await this.arquivo.close();
        }
    }

    async ler(): Promise<string> {
        if (!this.arquivo) {
            throw new Error("Arquivo não está aberto para leitura.");
        }
        const buffer = await this.arquivo.readFile({ encoding: 'utf-8' });
        return buffer;
    }

    async escrever(conteudo: string): Promise<void> {
        if (!this.arquivo) {
            throw new Error("Arquivo não está aberto para escrita.");
        }
        await this.arquivo.writeFile(conteudo, { encoding: 'utf-8' });
    }

    async appendLinha(conteudo: string): Promise<void> {
        if (!this.arquivo) {
            throw new Error("Arquivo não está aberto para escrita.");
        }
        //await this.arquivo.appendFile(conteudo + '\n', { encoding: 'utf-8' });

        const atual = await this.ler();
        console.log('Conteudo atual do arquivo:', atual);
        if (atual.length > 0 && !atual.endsWith('\n')) {
            conteudo = '\n' + conteudo;
        }
        console.log('Conteudo a ser adicionado:', conteudo);
        await this.escrever(conteudo);
        console.log('Conteudo completo:', conteudo);

    }
}