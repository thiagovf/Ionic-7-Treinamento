import { Cliente } from "./cliente";

export class ClienteJuridico extends Cliente {
  private _ramo?: string;
  private _cnpj?: string;

  public calcularDesconto(): number {
    return 0.2; // Exemplo de implementação
  }

  constructor();
  constructor(nome: string, email: string, ramo: string, cnpj: string);

  constructor(nome?: string, email?: string, ramo?: string, cnpj?: string) {
    super(nome ?? "", email ?? "");
    this._ramo = ramo;
    this._cnpj = cnpj;
  }

  public get ramo(): string | undefined {
    return this._ramo;
  }
  public set ramo(ramo: string) {
    this._ramo = ramo;
  }

  public get cnpj(): string | undefined {
    return this._cnpj;
  }
  public set cnpj(cnpj: string) {
    this._cnpj = cnpj;
  }

  toString(): string {
    return `${super.toString()}, Ramo: ${this._ramo}, CNPJ: ${this._cnpj}`;
  }
}
