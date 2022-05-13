[ ] creare una cartella utils
[ ] crea un file chiamato <nomepackaging>.dependency.ts
[ ] importa dependency con

```js
import * as Dependency from './path/to/dep';
```

[ ] guardare la lista dei membri
[ ] aggiungere logs :

```js
console.log(Object.getOwnPropertyDescriptors(CID));
console.log(Object.getOwnPropertyNames(CID));
console.log(Object.getOwnPropertySymbols(CID));
```

[ ] exportare ogni singolo membro
[ ] ripetere l'azione per gli eventuali membri dei membri
