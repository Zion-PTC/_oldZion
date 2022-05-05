//source https://www.youtube.com/watch?v=e4RezPkq3UI
const vertici = ['A', 'B', 'C', 'D', 'E'];

const lati = [
  ['A', 'B'],
  ['A', 'D'],
  ['B', 'C'],
  ['C', 'D'],
  ['C', 'E'],
  ['D', 'E'],
];

/**
 *
 * @param {any} node il nodo per il quale si vogliono
 * trovare i nodi adiacenti.
 * @param {any[][]} lati
 * @returns
 */
const trovaVerticiAdiacenti = function (node, lati = []) {
  let verticiAdiacenti = [];
  for (let bordo of lati) {
    let indiceDelNodo = bordo.indexOf(node);
    if (indiceDelNodo >= 0) {
      let verticeAdiacente =
        indiceDelNodo === 0 ? bordo[1] : bordo[0];
      verticiAdiacenti.push(verticeAdiacente);
    }
  }
  return verticiAdiacenti;
};

const èConnessoA = function (
  vertice1,
  vertice2,
  lati = []
) {
  return lati.some((bordo) => {
    return (
      bordo.indexOf(vertice1) > -1 &&
      bordo.indexOf(vertice2) > -1
    );
  });
};

console.log(trovaVerticiAdiacenti(vertici[2], lati));
console.log(èConnessoA(vertici[0], vertici[4], lati));
