export class Medico {
    private _nome?: string;
    private _especialidade?: string;
    
    constructor();
    constructor(nome?: string, especialidade?: string);
    constructor(nome?: string, especialidade?: string) {
        this._nome = nome;
        this._especialidade = especialidade;
    }

    get nome(): string | undefined {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get especialidade(): string | undefined {
        return this._especialidade;
    }

    set especialidade(especialidade: string) {
        this._especialidade = especialidade;
    }

    toString(): string {
        return `${this._nome}, ${this._especialidade}`;
    }
}