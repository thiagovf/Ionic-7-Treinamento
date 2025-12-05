export class Produto {
    private _nome?: string;
    private _preco?: number;
    private _quantidade?: number;

    constructor();
    constructor(nome: string, preco: number, quantidade: number);

    constructor(nome?: string, preco?: number, quantidade?: number) {
        this._nome = nome;
        this._preco = preco;
        this._quantidade = quantidade;
    }

    get nome(): string | undefined {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get preco(): number | undefined {
        return this._preco;
    }

    set preco(preco: number) {
        this._preco = preco;
    }

    get quantidade(): number  | undefined {
        return this._quantidade;
    }

    set quantidade(quantidade: number) {
        this._quantidade = quantidade;
    }

    tostring(): string {
        return `Nome: ${this._nome}, Preço: ${this._preco}, Quantidade: ${this._quantidade}`;
    }
}
