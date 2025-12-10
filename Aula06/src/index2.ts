import { CartaoCredito } from "./models/cartao-credito";
import { Pix } from "./models/pix";


const p1 = new CartaoCredito(1500);
p1.process();

const p2 = new Pix(2500);
p2.process();
