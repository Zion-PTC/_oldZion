const airports =
  'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
  ['PHX', 'LAX'],
  ['PHX', 'JFK'],
  ['JFK', 'OKC'],
  ['JFK', 'HEL'],
  ['JFK', 'LOS'],
  ['JFK', 'EZE'],
  ['JFK', 'LAX'],
  ['MEX', 'LAX'],
  ['MEX', 'EZE'],
  ['MEX', 'BKK'],
  ['MEX', 'LIM'],
  ['LIM', 'BKK'],
  ['LIM', 'LAP'],
];

const connessioniAeroporto = new Map();

function addNode(airport) {
  connessioniAeroporto.set(airport, []);
}

function addEdge(origin, destination) {
  connessioniAeroporto.get(origin).push(destination);
  connessioniAeroporto.get(destination).push(origin);
}

airports.forEach(addNode);
routes.forEach((route) => addEdge(...route));

console.log(connessioniAeroporto);
function bfs(start) {
  const visited = new Set();
  const queue = [start];
  while (queue.length > 0) {
    const airport = queue.shift();
    const destinations = connessioniAeroporto.get(airport);
    for (const destination of destinations) {
      // queue.push(destination);
      if (destination === 'BKK') {
        console.log(`BFS found Bangkok`);
      }
      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
        console.log(destination);
      }
    }
  }
}

// bfs('PHX');

function contaScali(scalo, departure, arrival, scali = 0) {
  if (scalo === departure) {
    return 0;
  }
  scali++;
  while (
    !connessioniAeroporto.get(scalo).includes(departure)
  ) {
    let listaConnesstioniAeroportoScalo = [];
    listaConnesstioniAeroportoScalo =
      connessioniAeroporto.get(scalo);
    let destinazioneIndex =
      listaConnesstioniAeroportoScalo.findIndex(
        (e) => e === arrival
      );
    return contaScali(
      [...listaConnesstioniAeroportoScalo][
        destinazioneIndex - 1
      ],
      departure,
      scalo,
      scali
    );
  }
  return scali;
}

function trovaItinerari(
  arrival,
  departure,
  itinerari = []
) {
  let stack = [arrival];
  let currentAirport = stack.pop();

  while (stack.length) {
    let connessioni =
      connessioniAeroporto.get(currentAirport);
    for (let connessione of connessioni) {
      stack.push(connessione);
      itinerari.push(connessione);
      trovaItinerari(
        connessione,
        currentAirport,
        itinerari
      );
    }
  }
  // return itinerari;
}

function dfs(start, arrival, visited = new Set()) {
  visited.add(start);
  const destinations = connessioniAeroporto.get(start);
  const departure = [...visited][0];
  for (const destination of destinations) {
    console.log(
      `aereoporto di partenza: ${departure}, aereporto analizzato: ${start}, destinazione analizzata: ${destination}`
    );
    if (destination === arrival) {
      let itinerari = trovaItinerari(arrival, departure);
      let scali = contaScali(start, departure, arrival);
      console.log(
        `DFS found ${arrival} nell'aereoporto: ${start} in ${scali} ${
          scali <= 1 ? 'scalo' : 'scali'
        }, con questi itinierari: ${itinerari}`
      );
      return;
    }
    if (!visited.has(destination)) {
      dfs(destination, arrival, visited);
    }
  }
}
dfs('PHX', 'LAP');
