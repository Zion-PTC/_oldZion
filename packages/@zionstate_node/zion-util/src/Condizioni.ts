type StandardValues = string | number | boolean;

export class Condizioni {
  constructor() {}
  oggettoUgualeCostruttore(object: object, constructor: Function) {
    return object.constructor === constructor;
  }
  proprietàNome(elemento: { name: string }, name: string) {
    return elemento.name === name;
  }
}

export class Condizionatore {
  static #condizionatori = [];
  #property;
  get property() {
    return this.#property;
  }
  set property(property) {
    this.#property = property;
  }
  #value: StandardValues;
  get value() {
    return this.#value;
  }
  set value(value) {
    this.#value = value;
  }
  // TODO eliminare - [ ] si /  - [ ] no
  // #result;
  // get result() {
  //   return this.#result;
  // }
  // set result(result) {
  //   this.#result = result;
  // }
  #servedArray = [];
  get servedArray() {
    return this.#servedArray;
  }
  set servedArray(servedArray) {
    this.#servedArray = servedArray;
  }
  id;
  constructor(property: string, value: string | number | boolean) {
    this.#property = property;
    this.#value = value;
    // TODO capire uso di this in ext functions
    //@ts-expect-error
    Condizionatore.#condizionatori.push(this);
    this.id = Condizionatore.#condizionatori.length;
  }
  condizione = (oggetto: { [key: string]: string }) => {
    return oggetto[this.property] === this.value;
  };
  condizioneForEach = (oggetto: { [key: string]: string }) => {
    let servedArray: object[] = this.servedArray;
    if (oggetto[this.property] === this.value) {
      servedArray.push(oggetto);
    }
    return this;
  };
}
