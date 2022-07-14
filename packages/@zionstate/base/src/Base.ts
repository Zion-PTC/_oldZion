import { staticImplements as si } from "../lib/decorators/staticImplements.js";

const staticImplements = si;

interface IStaticBase {
  basi: IBase[];
  mostraBasi(): void;
}

export interface IBase {
  id: number;
  type: string;
}

export abstract class ABase implements IBase {
  static #basi: IBase[] = [];
  static get basi() {
    return ABase.#basi;
  }
  static mostraBasi() {
    console.table(ABase.basi);
  }
  id: number;
  constructor(public type: string = "nd") {
    ABase.#basi.push(this);
    this.id = ABase.basi.length;
  }
}

@staticImplements<IStaticBase>()
export class Base extends ABase implements IBase {}
