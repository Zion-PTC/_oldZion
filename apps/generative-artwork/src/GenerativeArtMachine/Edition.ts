import { Dna, IDna } from './Dna.js';
import { Element, IElement } from './Element.js';
import { SystemEntity, ISystemEntity } from './SystemEntity.js';

export interface IEdition extends ISystemEntity<IEdition> {
  dna: IDna;
  drawEdition(): void;
}

export class Edition extends SystemEntity<Edition> implements IEdition {
  static #editions: IEdition[] = [];
  dna: IDna;
  constructor(
    name: string,
    path: string,
    type: number,
    width: number,
    height: number,
    dna: IDna
  ) {
    super(name, path, type, width, height);
    this.dna = dna;
    Edition.#editions.push(this);
  }
  drawEdition(): void {}
}
