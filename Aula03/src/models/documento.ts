/* 
Modelagem
    Classe base -> Documento
        Atributos:
            - título: string
            - ano: Date

    Subclasses:
        - Livro
            Atributos:
                - autor: string
                - paginas: number
        - Revista
            Atributos:
                - edicao: number
                - mes: string

*/

export abstract class Documento {
  private _titulo?: string;
  private _ano?: Date;

  constructor();
  constructor(titulo: string, ano: Date);

  constructor(titulo?: string, ano?: Date) {
    this._titulo = titulo;
    this._ano = ano;
  }

  public get titulo(): string | undefined {
    return this._titulo;
  }
  public set titulo(titulo: string) {
    this._titulo = titulo;
  }

  public get ano(): Date | undefined {
    return this._ano;
  }
  public set ano(ano: Date) {
    this._ano = ano;
  }

  toString(): string {
    return `Título: ${this._titulo}, Ano: ${this._ano}`;
  }
}

