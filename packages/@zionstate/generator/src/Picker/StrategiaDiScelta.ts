export interface IStrategiaDiScelta {
  strategia?: Function;
  assegnaStrategia(metodo: Function): IStrategiaDiScelta;
  picker(): Function;
}

export class StrategiaDiScelta implements IStrategiaDiScelta {
  constructor(public strategia?: Function) {}
  assegnaStrategia(metodo: Function) {
    this.strategia = metodo;
    return this;
  }
  picker() {
    if (this.strategia) return this.strategia();
  }
}
