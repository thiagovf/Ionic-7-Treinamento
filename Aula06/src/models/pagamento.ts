import { Ivalidador } from "../interfaces/i-validador";

export abstract class Pagamento implements Ivalidador {
  constructor(protected valor: number) {}

  validar(): void {
    if (this.valor <= 0) {
          throw new Error("Valor do pagamento inválido.");
    } else {
          console.log("Pagamento validado com sucesso.");
    }
  }


  auditar(): void {
    console.log("Auditoria de pagamento realizada.");
  }

  protected abstract processarPagamento(): void;

  process(): void {
    this.validar();
    this.processarPagamento();
    this.auditar();
  }
  
}
