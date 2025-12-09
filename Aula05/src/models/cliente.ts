import { Endereco } from "./endereco";
import { Telefone } from "./telefone";

export class Cliente {
  private _nome?: string;
  private _email?: string;
  private _endereco?: Endereco | null;
  private _telefones?: Telefone[];

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

  get endereco(): Endereco | null | undefined {
    return this._endereco;
  }

  set endereco(endereco: Endereco) {
    this._endereco = endereco;
  }
  get telefones(): Telefone[] | undefined {
    return this._telefones;
  }
  set telefones(telefones: Telefone[]) {
    this._telefones = telefones;
  }

  toString(): string {
    return `${this._nome}, ${this._email}`;
  }
}
