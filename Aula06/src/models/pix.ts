import { Pagamento } from "./pagamento";

export class Pix extends Pagamento {
  constructor(valor: number) {
    super(valor);
  }


  auditar(): void {
    super.auditar();
    console.log("Auditoria específica para pagamento via Pix realizada.");
  }

  protected processarPagamento(): void {
    console.log(
      `Processando pagamento via Pix no valor de R$${this.valor}.`
    );
  }
}
