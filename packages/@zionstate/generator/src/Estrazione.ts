export class Estrazione<T> {
  arrayOriginale: T[];
  elementoEstratto: T | unknown;
  elementiRimanenti: T[];
  elementiEstratti: T[];
  constructor(arrayOriginale: T[] = []) {
    this.arrayOriginale = arrayOriginale;
    this.elementoEstratto = undefined;
    this.elementiRimanenti = this.#copiaArray();
    this.elementiEstratti = [];
  }
  #copiaArray() {
    let servedArray: T[] = [];
    this.arrayOriginale.forEach(element => servedArray.push(element));
    return servedArray;
  }
}
