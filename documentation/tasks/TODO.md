# General

## Packages

controllare quali packages vanno effettivamente estesi e
togliere i repo di quelli che non vanno estesi.
Ci possono essere due tipo di package:

1. da estendere: sono i package che possono beneficiare di
   classi proprietarie. Questi package vanno installati nel
   seguente modo:
   1. creando una cartella in package e inizializzando il
      folder con `npm init`
2. non da estendere: sono package che non necessitano di
   estensione. Questi package possono essere installati in
   due modi:
   1. installandoli nell'applicazione nella quale vengono
      richiesti
   2. installandoli nell cartella packages. Siccome questi
      pacchetti non necessitano estensione non cè bisognon
      di creare un repo su github

## Migrare sito da fleek a raspberry

- [ ] fare test sito su minikube
  - [ ] provare a caricare un package
    - [ ] creare un package
    - [ ] fare prova di publicazione con github
  - [ ] provare export di Docker Images
    - [ ] creare account DockerHub
    - [ ] fare un test di caricamento di un Image
  - [ ] creare una CI/CD pipeline per:
    - [ ] server con kubernet
    - [ ] pubblicazione packages
- [ ] capire come fare a caricare i contenuti su ipfs,
      valutare le seguenti opzioni:
  - [ ] usare nel codice i link da ipfs
  - [ ] generare i link ipfs durante il build

## Migrare contratti Solidity

- [ ] importare repo contratti
  - [ ] prune repo

---

## Creare semplice UI per Smart Contract

## Creare Pagine statica per blog in .md

## Generative Artwork

- [x] Drawer: dovrebbe essere funzionante
- [ ] IPFS:
- [ ] Minter
  - [ ] test deploy on test environment
  - [ ] test deploy on rinkeby
    - [ ] fare test per capire se si puo avere una playlist
          dinamica che si mostra sulla preview su OpenSea.
  - [ ] test deploy on mumbai
    - [ ] test UI
  - [ ] deploy on polygon

# Gotek - Propaganda (AudioNFT_PFP)

- [ ] GenerativeArtwork
- [ ] Minter
- [ ] DAO UI
  - [ ] dashboard
    - [ ] token già minati
    - [ ] floor price di OpenSea
    - [ ] token già aperti
  - [ ] voting vinile
    - [ ] voti possibili
      - [ ] scegli remix
      - [ ] scegli tracce
  - [ ] royalty dashboard
    - [ ] tracce minate
    - [ ] tracce da minatre
  - [ ] track detail dashboard
    - [ ] royalty generate
    - [ ] letture su audius
  - [ ] download page
    - [ ] token balance access
    - [ ] new token generation for one time download
      - [ ] creare un elemento diverso nel tree ipfs, in modo che
            ogni cartella sia diversa e sia accessibile solo da
            chi ha il token nel balance.
  - [ ] artwork
    - [ ] decidere quante classi
      - [ ] decidere i livelli per classe
        - [ ] creare gli elementi per ogni livello

# Manutenzione

- [ ] controllare che tutti i package non abbiamo file
      index.ts
- [ ] controllare che tutte le app abbiano i package dei
      quali necessita installati nel file package.json
  - [ ] preseed ()
  - [ ] genartwork
  - [ ] telegram bot
  - [ ] learn

## TODO Migrare a TS

- [ ] fare TS di telegram bot
- [ ] fare TS di deck page e rinominarlo
  - [ ] creare package di pitchdeck
  - [ ] spostare i css da dati a file classi

# Estensione Moduli

I moduli da estendere devono essere installati nella propria
cartella all'interno di packages.

- [ ] fare una lista dei packages da estendere
- [ ] eliminare i repo e i folder dei packages che non sono
      da estendere

## Repack

- [ ] creare classe test
  - [ ] mocha
  - [ ] jest
  - [ ] hard hat test env
- [ ] creare classe react
- [ ] #1 fare package IPFS
- [ ] estendere chart
  - [ ] estendere chart.js
  - [ ] estendere react-chart2.js
- [ ] estendere mongoose

## Estendere standard JS/Node

- [ ] #8 creare Proxy
- [ ] #9 creare Emitter

## Gestione package

- [x] trovare un modo per nominare i repack

# Applications

- ## Programmate

  - [ ] Generative Artwork Machine
  - [ ] Audio minting from Audius source.
  - [ ] Reporting tools from external distributions and
        blockchain token generation:
    - [ ] AWAL
    - [ ] Believe
    - [ ] Bandcamp
  - [ ] Vinyl press and distribution
    - NFC burning
  - [ ] Telegram Zion Bot
    - [ ] Playlist delle label che supportano
      - [ ] mirror di audius
      - [ ] hashtag playlist
  - [ ] Booking Application
  - [ ] Ticketing Application

- ## Idee

  - [ ] checklist
  - [ ] todo
  - [ ] simple smart contract UI
  - [ ] Blog app
  - [ ] Ricette e ordine supermercato
    - [ ] Generatore Pagine statiche da .md
      - [ ] CI/CD a partire da file caricati nel repo (il sito
            acquisisce i dati da fornire a partire dal file .md)
      - [ ] i dati potrebbero essere caricati sulla blockchain per
            una maggiore sicurezza
      - [ ] il cambiamento dei dati potrebbe avvenire tramite votazione
  - [ ] Audius Node + Telegram Application
    - [ ] creazione playlist
    - [ ] mint playlist (bot recupera dati da blockchain)
  - [ ] Zion account HomePage (per label che supportano)
  - [ ] applicazione CLI per installare sistema ZION
  - [ ] quiz app
    - generazione transazioni (proposte)
  - [ ] Governance App
    - [ ] l'applicazione deve essere in grado di creare un proxy
      per un contratto, l'applicazione deve poter rendere
      facile l'assegnazione del'editing di un determinato
      valore della UI ad un contratto ed ad una DAO.
    - [ ] l'applicazione deve essere in grado di creare una
      pipeline di azione le quali devono poter essere
      sottoposto ad un livello di controllo/votazione
      diverso basandosi su un parametro di valutazione
      dell'impatto che il cambiamento puà avere sulla comunità.
  - [ ] Agile Todo app

    - [ ] Capire come fare da markdown a passare a degli elementi che
          abbiano conoscenza di `deveSuccederePrimaDi = []` o
          `deveSuccedereDopo = []`
    - [ ] kanban
    - [ ] gannt
    - [ ] agile
      - [ ] theme
      - [ ] epic
      - [ ] task

  - [ ] Applicazione per aggiungere contesto ai
        bookmark/preferiti del browser.

# Docker Images

Queste immagini devono essere disponibili per i servizi di Zion

- [ ] Mongo
- [ ] Ethereum

# Sviluppo

- [ ] integrare MiniKube

  - [ ] imparare minikube

- [ ] [#6](https://github.com/Zion-PTC/ZION/issues/6) trovare società per DevOps

# Research

Perloppiù le attività di ricerca sono messe nel file TODO
dell'applicazione Learn. In questa sezione vengono elencate
le aree di ricerca che sono correlate alla struttura di zion
in generale, non ad una applicazione nello specifico.

## Descrizione API

- [ ] Trovare un modo per descrivere le api tramite un file .md
