import { TipoDocumento } from "./tipo-documento";

export abstract class Documento {
  constructor(
    protected _id: number,
    protected _tipoDocumento: TipoDocumento,
    protected _conteudo: string,
    protected _dataCriacao: Date = new Date()
  ) {}

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get tipoDocumento(): TipoDocumento {
    return this._tipoDocumento;
  }

  set tipoDocumento(value: TipoDocumento) {
    this._tipoDocumento = value;
  }

  get conteudo(): string {
    return this._conteudo;
  }

  set conteudo(value: string) {
    this._conteudo = value;
  }

  get dataCriacao(): Date {
    return this._dataCriacao;
  }

  set dataCriacao(value: Date) {
    this._dataCriacao = value;
  }

  toString(): string {
    return `Documento [ID: ${this._id}, Tipo: ${this._tipoDocumento.tipo}, Conteúdo: ${this._conteudo}, Data de Criação: ${this._dataCriacao.toISOString()}]`;
  }
}
