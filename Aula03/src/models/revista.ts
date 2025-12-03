import { Documento } from "./documento";

export class Revista extends Documento {
  private _edicao?: number;
  private _mes?: string;

  constructor();
  constructor(titulo: string, ano: Date, edicao: number, mes: string);

  constructor(
    titulo?: string,
    ano?: Date,
    edicao?: number,
    mes?: string
  ) {
    super(titulo ?? "", ano ?? new Date());
    this._edicao = edicao;
    this._mes = mes;
  }

  public get edicao(): number | undefined {
    return this._edicao;
  }
  public set edicao(edicao: number) {
    this._edicao = edicao;
  }

  public get mes(): string | undefined {
    return this._mes;
  }
  public set mes(mes: string) {
    this._mes = mes;
  }

  toString(): string {
    return `${super.toString()}, Edição: ${this._edicao}, Mês: ${this._mes}`;
  }
}