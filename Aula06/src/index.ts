import { StatusPedido } from "./enums/e-status";
import { Cor } from "./enums/e-cor";

function atualizarStatus(status: StatusPedido): void {
  console.log("Status do pedido atualizado para:", status);
}

atualizarStatus(StatusPedido.CANCELADO);
atualizarStatus(StatusPedido.PROCESSANDO);
atualizarStatus(StatusPedido.CONCLUIDO);

function exibirValorDaCor(valorCor: Cor): void {
  console.log("Valor da cor selecionada:", valorCor);
}
exibirValorDaCor(Cor.AMARELO);
exibirValorDaCor(Cor.VERDE);
exibirValorDaCor(Cor.VERMELHO);
exibirValorDaCor(Cor.AZUL);