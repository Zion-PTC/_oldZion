class Vertice {
  constructor(valore) {
    this.valore = valore;
    this.listaDiLati = [];
  }
  connect(vertice) {
    this.listaDiLati.push(vertice);
    vertice.listaDiLati.push(this);
  }
  trovaVerticiAdiacenti() {
    return this.listaDiLati.map((bordo) => bordo.valore);
  }
  èConnessoA(vertice) {
    return this.listaDiLati.some(
      (bordo) => bordo.valore === vertice.valore
    );
  }
}

class Graph {
  constructor(vertici) {
    this.vertici = [...vertici];
  }
  aggiungiAlGrafo(node) {
    this.vertici.push(node);
  }
}

const verticeA = new Vertice('A');
const verticeB = new Vertice('B');
const verticeC = new Vertice('C');
const verticeD = new Vertice('D');
const verticeE = new Vertice('E');

verticeA.connect(verticeB);
verticeA.connect(verticeD);
verticeB.connect(verticeC);
verticeC.connect(verticeD);
verticeC.connect(verticeE);
verticeD.connect(verticeE);

const graph = new Graph([
  verticeA,
  verticeB,
  verticeC,
  verticeD,
  verticeE,
]);

console.log(verticeA.èConnessoA(verticeD));
