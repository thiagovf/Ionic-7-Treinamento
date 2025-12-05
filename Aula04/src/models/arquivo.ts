import { open, FileHandle } from 'fs/promises';

export class Arquivo {
    private arquivo!: FileHandle;
    private caminho: string;
    private modo: "r" | "w" | "a";
    
    constructor(caminho: string, modo: "r" | "w" | "a") {
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
}