// fare una prova per capire se un oggetto è in un array
// se si cambia un un oggetto che è stato copiato in un array, se
// cambia anche l'oggetto che era copiato
let obj = {
  alice: 1,
  bob: 2,
};
let objs = [obj];
let objFromArray = objs[0];
console.log(objFromArray); // { alice: 1, bob: 2 }

// cambiando l'oggetto copiato cambia anche l'oggetto originale.
objFromArray.bob = 3;
console.log(obj); // { alice: 1, bob: 3 }

// provare cosa succede se si  manda una variabile in una funzione, se il
// valore iniziale cambia senza bisogno di fare una riassegnazione
let variabile = 1;
function tryIt(variabile) {
  let result = variabile + 1;
  variabile = result;
  return variabile;
}

// il valore rimane dentro la funzione
tryIt(variabile);
console.log(variabile); // 1

// provo con una functione che torna esclusivamente il valore.
// per far si che il valore della variabile sia cambiato la funzione deve poter
// accedere direttamente al valore
function soloValore() {
  return (variabile = 2);
}
soloValore();
console.log(variabile);
