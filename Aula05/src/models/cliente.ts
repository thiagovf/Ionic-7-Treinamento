export class Cliente {
  private _nome?: string;
  private _email?: string;

  constructor();
  constructor(nome?: string, email?: string);
  constructor(nome?: string, email?: string) {
    this._nome = nome;
    this._email = email;
  }

  get nome(): string | undefined {
    return this._nome;
  }

  set nome(nome: string) {
    this._nome = nome;
  }

  get email(): string | undefined {
    return this._email;
  }

  set email(email: string) {
    this._email = email;
  }

  toString(): string {
    return `Nome: ${this._nome}, Email: ${this._email}`;
  }
}