import { Client1, Client2 } from './carlos2/Clients.js';

const client1 = new Client1();
const client2 = new Client2();

console.log(
  'Batman: ' +
    client1.showHero('batman') +
    '\nSpiderman: ' +
    client1.showHero('spiderman')
);
console.log(
  'Batman: ' +
    client2.showHero('batman') +
    '\nSpiderman: ' +
    client2.showHero('spiderman')
);
