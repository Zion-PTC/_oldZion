class Funzionalità {
  constructor() {
    this.strategia = null;
    this.data = 1;
  }
  assegnaStrategia = (metodo) => {
    this.strategia = metodo;
  };
  eseguiStrategia = () => {
    return this.strategia.metodo(this.data);
  };
}

class Strategia {
  constructor(name, metodo) {
    this.name = name;
    this.strategia = metodo;
  }
  metodo = (e) => {
    return this.strategia(e);
  };
}

const logData = new Strategia('strategia1', (e) =>
  console.log(e)
);
const somma = new Strategia('somma', (x) => {
  console.log(x + 1);
});

const run = function () {
  let funzionalita = new Funzionalità();
  funzionalita.assegnaStrategia(logData);
  funzionalita.eseguiStrategia();
  funzionalita.assegnaStrategia(somma);
  funzionalita.eseguiStrategia();
};
run();
