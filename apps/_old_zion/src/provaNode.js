import { writeFile } from 'fs';

let obj = {
  nome: 'Giacomo',
  cognome: 'Gagliano',
  anni: 44,
  figaggine: 100,
  javaScript: 'king'
}

let jsonData = JSON.stringify(obj);

export let write = writeFile("./Database/sample.json",
  jsonData,
  (err) => {
    if (err) {
      console.log(err);
    }
  }
)

console.log(obj);