export interface IMetodoScelta {
  name?: string;
  metodoScelta?: Function;
  assegnaMetodoScelta(metodo: Function): IMetodoScelta;
  scegliElemento(): Function;
}

export class MetodoScelta implements IMetodoScelta {
  static #metodiScelta: MetodoScelta[] = [];
  static get metodiScelta() {
    let copiedArray = [];
    this.#metodiScelta.forEach(metodo => copiedArray.push(metodo));
    return this.#metodiScelta;
  }
  static scegliMetodo(type: 'Edition' | 'Element') {
    return MetodoScelta.metodiScelta.find(metodo => metodo.name === type);
  }
  constructor(public name?: string, public metodoScelta?: Function) {
    MetodoScelta.#metodiScelta.push(this);
  }
  assegnaMetodoScelta(metodo: Function) {
    this.metodoScelta = metodo;
    return this;
  }
  scegliElemento() {
    if (!this.metodoScelta) throw new Error('no method');
    return this.metodoScelta();
  }
}
