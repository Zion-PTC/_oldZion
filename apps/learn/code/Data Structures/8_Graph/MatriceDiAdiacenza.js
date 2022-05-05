//source https://www.youtube.com/watch?v=e4RezPkq3UI
const vertici = ['A', 'B', 'C', 'D', 'E'];

const matriceDiAdiacenza = [
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 1, 0, 1, 1],
  [1, 0, 1, 0, 1],
  [0, 0, 1, 1, 0],
];

const indiciDeiVertici = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
};

const trovaVerticiAdiacenti = function (vertice, vertici) {
  const verticiAdiacenti = [];
  for (let i = 0; i < vertici.length; i++) {
    let verticeDelNodo = indiciDeiVertici[vertice];
    if (matriceDiAdiacenza[verticeDelNodo][i]) {
      verticiAdiacenti.push(vertici[i]);
    }
  }
  return verticiAdiacenti;
};

const èConnessoA = function (node1, node2) {
  return !!matriceDiAdiacenza[indiciDeiVertici[node1]][
    indiciDeiVertici[node2]
  ];
};

console.log(èConnessoA('C', 'E'));
