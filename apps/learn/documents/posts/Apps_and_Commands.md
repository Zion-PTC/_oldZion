# Apps and Commands

Sto notando che il pattern utilizzato da express è simile al
receiver del command pattern.

Nel command pattern il receiver ha un metodo execute che
richiede il passaggio di un parametro di tipo command.

## Comandi HTTP : Get

Il comando get del protocollo http serve per ricevere dei
dati dal server. In express è espresso in questo modo

```js
import AnApplication from "some/fucking/where/AnApp.js";
const app = express();

const app = new AnApplication();
const [command1, command2] = app.avalaibleCommands;

app.get("/users", (req, res) => {
  app.execute(command1(10));
  res.json(app.getCurrentState());
});
```
