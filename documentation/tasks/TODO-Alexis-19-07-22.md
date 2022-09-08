- configurazione SSL
  - https per external accessible pages
  - https per condividere in sicurezza dev tests
- statefull apps
  - IPFS
    - esporre dashboard
  - MongoDB
    - esporre toold di gestione (Atlas)
  - Neo4J
    - Esporre tool di gestione
    - Installare
      [APOC](https://neo4j.com/developer/neo4j-apoc/)
  - Redis
    - RedisStack
      - RedisDocument
      - RedisGraph
      - RedisSearch

# Stategia

1. Si salvano i file su un'istanza di Redis che si occupa di
   servire i dati allìapplicazione.
2. Si effettua il backup su MongoDb e Neo4j in questi casi:
3. quando la memoria dedicata è riempita al limite.
4. quando lo user è non è piu in focus sull'app
5. dopo un determinato numero di minuti di inattivita.
6. Per creare NFT ci sono due strategie
7. on-chain datas: i dati relativi all'URI sono registrati
   nello smart contract
8. off-chain datas: i dati sono registrati su storage
   decentralizzato:
9. ipfs


      - cold storage su filecoin
    2. arweave
