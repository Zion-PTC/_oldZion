import { Client1 } from './carlosCaballero/Client1.js';
import { Client2 } from './carlosCaballero/Client2.js';
const client1 = new Client1();
console.log('DatabaseConnection ID', client1.getUniqueIdentificatorConnection());
const client2 = new Client2();
console.log('DatabaseConnection ID', client2.getUniqueIdentificatorConnection());
