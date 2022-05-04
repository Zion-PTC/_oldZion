class MetodoDiScelta {
  constructor() {
    this.strategiaDiScelta = null;
  }
  assegnaMetodo(metodo) {
    this.strategiaDiScelta = metodo;
  }
  scegliElemento() {
    return this.strategiaDiScelta.scegliElemento();
  }
}

class StrategiaDiScelta {
  constructor(strategia) {
    this.strategia = strategia;
  }
  scegliElemento() {
    return this.strategia;
  }
}

const run = function () {
  const strategia1 = new StrategiaDiScelta('strategia1');
  const strategia2 = new StrategiaDiScelta('strategia2');
  const strategia3 = new StrategiaDiScelta('strategia3');
  let metodoDiScelta = new MetodoDiScelta();
  metodoDiScelta.assegnaMetodo(strategia1);
  console.log(metodoDiScelta.scegliElemento());
  metodoDiScelta.assegnaMetodo(strategia2);
  console.log(metodoDiScelta.scegliElemento());
  metodoDiScelta.assegnaMetodo(strategia1);
  console.log(metodoDiScelta.scegliElemento());
  metodoDiScelta.assegnaMetodo(strategia3);
  console.log(metodoDiScelta.scegliElemento());
};

run();
