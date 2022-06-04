# Distribution

[NGinx](https://www.nginx.com/): utilizzato per indirizzare
le richieste che arrivano dall'esterno. Utilizzato per
configurare e gestire i domini e sottodomini.</br>
[Kubernetes](https://kubernetes.io/): si occupa della
distribuzione dei microservizi<br/>
[Minikube](https://minikube.sigs.k8s.io/docs/): utilizzato
in environment locali per effettuare test

# Monorepo

## Gestione mono repo

- [Nx](https://nx.dev/): software per gestione di monorepo. </br>
- [Bazel](https://bazel.build/): è uno strumento di test e creazione open source che supporta in modo scalabile progetti multipiattaforma e multilingue.

## Packages

I package sono divisi i 4 categorie:

- [ ] @zionrepack : sono i package di terze parti
- [ ] @zionstate_node : sono i moduli standard di node
- [ ] @zionstate_js : sono le classi standard di js
- [ ] @zionstate : sono i package di zion

vengono importati nel seguente modo nel file `package.json`
nel root del progetto:

```json
{
  ...
  "workspaces": [
    "./packages/@zionrepack/**/*",
    "./packages/@zionstate/**/*",
    "./packages/@zionstate_node/**/*",
    "./packages/@zionstate_js/**/*",
    "./apps/**/*"
  ],
}
```

### ZionRepack

I pacchetti di terze parti vengono installati in questa
cartella e sono accessibili globalmente da tutte le altre
cartelle nel repo. Per accedere ai pacchetti nel codice
sorgente si importano normalmente i pacchetti come se
fossero installati all'interno della cartella. </br>

> Alcuni Repack conterranno dei codici che li estendono, i
> quali vengono creati per facilitarne l'utilizzo all'interno
> del sistema di ZION.

```js
import styled from "styled-components";
```

## Apps

In ogni cartella contenente un'applicazione viente
inizializzato un progetto npm.</br>
Le applicazioni sono inserite nel contesto del workspace del
monorepo di zion:

```json
{
  ...
  "workspaces": [
    ...
    "./apps/**/*"
  ],
}
```

quindi quando un package viente installato in un'app tramite
`$ npm i <nome_del_package>`, il package viene aggiunto
nella cartella `node_modules` nel root folder del
monorepo.</br>
Effettuando l'install dei package nel folder delle cartelle
permette la gestione indipendente delle dipendenze di ogni
applicazione. Pur essendo installati nella carella root, vi
è un richiamo nel file `package.json` nel root
dell'applicazione. Questo, legato al fatto che ogni
applicazione e package ha un suo repo, dovrebbe permettere
agli sviluppatori interessati di scaricare eventualmente
anche solo l'appicazione che gli interessa.</br>
