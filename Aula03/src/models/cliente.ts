export abstract class Cliente {
  private _nome?: string;
  private _email?: string;

  public abstract calcularDesconto(): number;

  constructor();
  constructor(nome: string, email: string);

  constructor(nome?: string, email?: string) {
    this._nome = nome;
    this._email = email;
  }

  toString(): string {
    return `Nome: ${this._nome}, Email: ${this._email}`;
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
