class Vertice {
  static vertici = [];
  id;
  lati = [];
  constructor(id) {
    this.id = id;
    Vertice.vertici.push(this);
  }
  aggiungiLato(lato) {
    this.lati.push(lato);
  }
}
const A = new Vertice();
A.id = 'A';

const B = new Vertice('B');

const C = new Vertice();
C.id = 'C';

A.lati.push(B);
A.aggiungiLato(C);
B.aggiungiLato(A);
C.aggiungiLato(A);

console.clear();
console.log(A, B, C);
console.log(Vertice.vertici.length);
