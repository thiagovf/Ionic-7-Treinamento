export class Produto {

    // private torna o atributo acessível apenas dentro da classe
    private _nome?: string;
    private _preco?: number;
    private _quantidade?: number;

    constructor(); // Construtor vazio
    constructor (nome: string, preco: number, quantidade: number); // Sobrecarga de construtor. (cheio)


    constructor (nome?: string, preco?: number, quantidade?: number) {
        this._nome = nome;
        this._preco = preco;
        this._quantidade = quantidade;
    }

    public toString(): string {
        return `Produto: ${this._nome}, Preço: ${this._preco}, Quantidade: ${this._quantidade}`;
    }

    // Getters e Setters
    public get nome(): string | undefined {
        return this._nome;
    }

    public set nome(nome: string | undefined) {
        this._nome = nome;
    }

    public get preco(): number | undefined {
        return this._preco;
    }

    public set preco(preco: number | undefined) {
        this._preco = preco;
    }

    public get quantidade(): number | undefined {
        return this._quantidade;
    }

    public set quantidade(quantidade: number | undefined) {
        this._quantidade = quantidade;
    }
}