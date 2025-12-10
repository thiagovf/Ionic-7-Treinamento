import { Documento } from "./documento";
import { TipoDocumento } from "./tipo-documento";

export class DocumentoSaida extends Documento {
    constructor(
        protected _id: number,
        protected _tipoDocumento: TipoDocumento,
        protected _conteudo: string,
        protected _dataCriacao: Date = new Date(),
        protected _destinatario: string
    ) {
        super(_id, _tipoDocumento, _conteudo, _dataCriacao);
    }

    set destinatario(value: string) {
        this._destinatario = value;
    }

    get destinatario(): string {
        return this._destinatario;
    }
}