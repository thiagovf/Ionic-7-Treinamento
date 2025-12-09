import { Cliente } from "./cliente";

export class Telefone {
  private _tipo?: string;
  private _numero?: string;
  private _cliente?: Cliente | null;

  constructor();
  constructor(tipo?: string, numero?: string);
  constructor(tipo?: string, numero?: string) {
    this._tipo = tipo;
    this._numero = numero;
  }

  get tipo(): string | undefined {
    return this._tipo;
  }

  set tipo(tipo: string) {
    this._tipo = tipo;
  }

  get numero(): string | undefined {
    return this._numero;
  }

  set numero(numero: string) {
    this._numero = numero;
  }

  set cliente(cliente: Cliente) {
    this._cliente = cliente;
  }

  get cliente(): Cliente | null | undefined {
    return this._cliente;
  }
  
  toString(): string {
    return `${this._tipo}: ${this._numero}`;
  }
}
