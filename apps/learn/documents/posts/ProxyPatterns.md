# Proxy Patterns

Analizzando le varie necessità relativa alla memorizzazione
di dati su un server e su un database, sto cercando di
valutare quali siano i diversi tipi di proxy pattern che
potremmo avere bisogno per la costruzione di ZION.

Inizilamente mi sono concentrato sulle funzioni di GET, le
quali sono quelli soggette ad un possibile ritardo dovuto al
tempo necessario per recuperare i dati da una sorgente
esterna tramie una richiesta http.

Utilizzando MondoDb è possibile creare delle classi js che
si occupino di gestire i dati nella memoria del server, e
semplicemente estendere questa classe per creare uno schema
mongoose che permetta di effettuare le operazioni CRUD sul
database. Bisogna creare un sistema di proxy che permetta di
esporre alcuni dati nella ram del server, in modo da
velocizzare la velocità con cui i dati sono serviti al client.

## Tipologia di Proxy patterns

Nel mio studio sono giunto a determinare due tipologie
primitive che si differenziano in base al tipo di sorgente
sulla quale devono effettuare l'operazione GET:

- Sorgente di cui il server è in controllo.
- Sorgente della quale il server non è in controllo.

### Ha controllo

Ad esempio quando il server crea uno user, è un controllo
sia del proxy che della funzione per la creazione dello
user. In questo caso ha la possibilità di aggiornare lo
storage effimero con i dati variati durante il cambiamento
nel database.

### Non ha controllo

Ad esempio nel caso di Audius, gli user possono aggiungere
un hashtat alla loro traccia, mutando lo stato del DB di
Audius. In questo caso il server che sta facendo girare il
proxy non ha il controllo delle transazioni avvenute
sull'altra sorgente di dati.

## Patterns

### Ha il controllo

### Non ha il controllo

In questo caso ho pensato di usare l'Observer pattern per
crare un osservatore che controlli un determinato endpoint
con una determinata cadenza:

```plantuml
class Observer {
  + constructor(endpoint, intervallo)
}
```

Il pattern prevede la creazione di un Crontab.
Il crontab invia una richiesta http ad un server nel quale
viene memorizzato un hash del fetch quando riceve il
messaggio il server avvia un fetch sull'endpoint e confronta
l'hash dei dati ricevuti con i dati registrati sulla
memoria. Nel caso in cui i dati siano diversi, all'ora
cambia i dati salvati ed emette un evento "changed".
L'observer quando vede l'evento 'changed' triggera l'update
dei dati nella memoria del server.
