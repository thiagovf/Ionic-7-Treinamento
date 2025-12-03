import { Revista } from "./models/revista";
import { Livro } from "./models/livro";

let revista = new Revista(
  "Revista Ciência Hoje",
  new Date("2023-05-01"),
  150,
  "Maio"
);

console.log(revista.toString());

let livro = new Livro(
  "Introdução ao TypeScript",
  new Date("2022-10-15"),
  "João Silva",
  320
);

console.log(livro.toString());
