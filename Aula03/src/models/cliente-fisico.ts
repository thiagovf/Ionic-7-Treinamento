import { Cliente } from "./cliente";

export class ClienteFisico extends Cliente {
  private _sexo?: string;
  private _cpf?: string;

  public calcularDesconto(): number {
    return 15.0;
  }

  constructor();
  constructor(nome: string, email: string, sexo: string, cpf: string);

  constructor(nome?: string, email?: string, sexo?: string, cpf?: string) {
    super(nome ?? "", email ?? "");
    this._sexo = sexo;
    this._cpf = cpf;
  }

  public get sexo(): string | undefined {
    return this._sexo;
  }
  public set sexo(sexo: string) {
    this._sexo = sexo;
  }

  public get cpf(): string | undefined {
    return this._cpf;
  }
  public set cpf(cpf: string) {
    this._cpf = cpf;
  }

  toString(): string {
    return `${super.toString()}, Sexo: ${this._sexo}, CPF: ${this._cpf}`;
  }
}
