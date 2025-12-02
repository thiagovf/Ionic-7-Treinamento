export class Cliente {
    private _nome?: string;
    private _email?: string;

    constructor();
    constructor(nome: string, email: string);

    constructor(nome?: string, email?: string) {
        this._nome = nome;
        this._email = email;
    }

    public toString(): string {
        return `Cliente: ${this._nome}, Email: ${this._email}`;
    }

    public get nome(): string | undefined {
        return this._nome;
    }

    public set nome(nome: string | undefined) {
        this._nome = nome;
    }

    public get email(): string | undefined {
        return this._email;
    }

    public set email(email: string | undefined) {
        this._email = email;
    }
}