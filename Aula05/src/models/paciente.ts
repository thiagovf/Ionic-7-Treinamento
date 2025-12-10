import { Medico } from "./medico";

export class Paciente {
    private _nome?: string;
    private _idade?: number;

    private _medicos?: Medico[];
    
    constructor();
    constructor(nome?: string, idade?: number);
    constructor(nome?: string, idade?: number) {
        this._nome = nome;
        this._idade = idade;
    }

    
    get nome(): string | undefined {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get idade(): number | undefined {
        return this._idade;
    }

    set idade(idade: number) {
        this._idade = idade;
    }

    get medicos(): Medico[] | undefined {
        return this._medicos;
    }

    set medicos(medicos: Medico[]) {
        this._medicos = medicos;
    }

    toString(): string {
        return `${this._nome}, ${this._idade} anos`;
    }
}
