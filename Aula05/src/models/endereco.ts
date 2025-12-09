import { Cliente } from "./cliente";

export class Endereco {
  private _cidade?: string;
  private _bairro?: string;
  private _rua?: string;
  private _cliente?: Cliente | null;

  constructor();
  constructor(cidade?: string, bairro?: string, rua?: string);
  constructor(cidade?: string, bairro?: string, rua?: string) {
    this._cidade = cidade;
    this._bairro = bairro;
    this._rua = rua;
  }

  get cidade(): string | undefined {
    return this._cidade;
  }

  set cidade(cidade: string) {
    this._cidade = cidade;
  }

  get bairro(): string | undefined {
    return this._bairro;
  }

  set bairro(bairro: string) {
    this._bairro = bairro;
  }

  get rua(): string | undefined {
    return this._rua;
  }

  set rua(rua: string) {
    this._rua = rua;
  }

  set cliente(cliente: Cliente) {
    this._cliente = cliente;
  }

  get cliente(): Cliente | null | undefined {
    return this._cliente;
  }

  toString(): string {
    return `${this._rua}, ${this._bairro}, ${this._cidade}`;
  }
}
