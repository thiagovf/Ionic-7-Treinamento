import { Documento } from "./documento";

export class Livro extends Documento {
    private _autor?: string;
    private _paginas?: number;

    constructor();
    constructor(titulo: string, ano: Date, autor: string, paginas: number);

    constructor(titulo?: string, ano?: Date, autor?: string, paginas?: number) {
        super(
            titulo ?? "",
            ano ?? new Date()
        )
        this._autor = autor;
        this._paginas = paginas;
    }

    public get autor(): string | undefined {
        return this._autor;
    }
    public set autor(autor: string) {
        this._autor = autor;
    }

    public get paginas(): number | undefined {
        return this._paginas;
    }
    public set paginas(paginas: number) {
        this._paginas = paginas;
    }

    toString(): string {
        return `${super.toString()}, Autor: ${this._autor}, Páginas: ${this._paginas}`;
    }
}