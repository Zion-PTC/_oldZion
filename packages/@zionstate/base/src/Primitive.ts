import { staticImplements } from "./lib/decorators/staticImplements";

export interface IStaticPrimitive<T> {
  new (): T;
  id: any;
}

export interface IPrimitive {
  id: any;
}
/**
 * classe astratta utilizzata per migliorare la versione
 */
abstract class APrimitive {
  static id: any;
  id: any;
  constructor() {}
}
@staticImplements<IStaticPrimitive<IPrimitive>>()
export class Primitive extends APrimitive {}
