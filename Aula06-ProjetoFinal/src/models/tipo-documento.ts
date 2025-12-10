import { ETipoDocumento } from "../enums/e-tipo-documento";

export class TipoDocumento {
  constructor(protected _id: number, protected _tipo: ETipoDocumento) {}

  toString(): string {
    return `TipoDocumento { id: ${this._id}, tipo: ${this._tipo} }`;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get tipo(): ETipoDocumento {
    return this._tipo;
  }

  set tipo(value: ETipoDocumento) {
    this._tipo = value;
  }
}
