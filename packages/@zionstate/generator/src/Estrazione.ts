export interface IEstrazione<T> {
  arrayOriginale: T[];
  elementoEstratto?: T;
  elementiRimanenti: T[];
  elementiEstratti: T[];
}

export class Estrazione<T> implements IEstrazione<T> {
  arrayOriginale: T[];
  elementoEstratto?: T;
  elementiRimanenti: T[];
  elementiEstratti: T[];
  constructor(arrayOriginale: T[] = []) {
    this.arrayOriginale = arrayOriginale;
    this.elementiRimanenti = this.#copiaArray();
    this.elementiEstratti = [];
  }
  #copiaArray() {
    let servedArray: T[] = [];
    this.arrayOriginale.forEach(element => servedArray.push(element));
    return servedArray;
  }
}
