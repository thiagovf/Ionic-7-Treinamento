import { Documento } from "./documento";
import { TipoDocumento } from "./tipo-documento";

export class DocumentoEntrada extends Documento {
    constructor(
        protected _id: number,
        protected _tipoDocumento: TipoDocumento,
        protected _conteudo: string,
        protected _dataCriacao: Date = new Date(),
        protected _origem: string
    ) {
        super(_id, _tipoDocumento, _conteudo, _dataCriacao);
    }

    get origem(): string {
        return this._origem;
    }

    set origem(value: string) {
        this._origem = value;
    }

    toString(): string {
        return `DocumentoEntrada [ID: ${this._id}, Tipo: ${this._tipoDocumento.tipo}, Conteúdo: ${this._conteudo}, Data de Criação: ${this._dataCriacao.toISOString()}, Origem: ${this._origem}]`;
    }
}
