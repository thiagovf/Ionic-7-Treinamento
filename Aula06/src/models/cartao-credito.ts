import { Pagamento } from "./pagamento";

export class CartaoCredito extends Pagamento {
    auditar(): void {
        console.log(`Auditoria específica para pagamento via Cartão de Crédito realizada ${this.valor}.`);

    }

    protected processarPagamento(): void {
        console.log(`Processando pagamento via Cartão de Crédito no valor de R$${this.valor}.`);
    }
}