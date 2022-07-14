type TematicaTypes =
  | "Linguaggio di Programmazione"
  | "Design Pattern"
  | "Framework"
  | "Libreria"
  | "Server"
  | "Distribuzione";

export interface ITematica {
  types: TematicaTypes;
  id: number;
  nome: string;
}

export class Tematica implements ITematica {
  static tematiche: Tematica[] = [];
  id: number;
  constructor(
    public types: TematicaTypes = "Design Pattern",
    public nome: string = "nome"
  ) {
    Tematica.tematiche.push(this);
    this.id = Tematica.tematiche.length;
  }
}

// export let devOPS = new Tematica("Server", "DevOps");
