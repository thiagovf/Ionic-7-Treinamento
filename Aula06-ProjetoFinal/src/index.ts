import { ETipoDocumento } from "./enums/e-tipo-documento";
import { Documento } from "./models/documento";
import { DocumentoEntrada } from "./models/documento-entrada";
import { DocumentoSaida } from "./models/documento-saida";
import { TipoDocumento } from "./models/tipo-documento";

const tipoDocumentoCPF = new TipoDocumento(1, ETipoDocumento.CPF);
const documento: Documento = new DocumentoEntrada(
  1,
  tipoDocumentoCPF,
  "Conteúdo do documento de entrada",
  new Date(),
  "Origem do documento"
);
console.log("Documento de Entrada:" + documento.toString());

const tipoDocumentoCNPJ = new TipoDocumento(2, ETipoDocumento.CNPJ);
const documentoSaida: Documento = new DocumentoSaida(
  2,
  tipoDocumentoCNPJ,
  "Conteúdo do documento de saída",
  new Date(),
  "Origem do documento de saída"
);
console.log("Documento de Saída:" + documentoSaida.toString());
