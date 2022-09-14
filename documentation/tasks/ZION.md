- creare pagina per confrontare files
  - package.json
  - tsconfig.json
- pagina per vedere lista degli script

# steps per passare da built a build

- controllare se cè cartella built
- cancellare cartella build
- package.json
  - cambiare field "main" to "build/index.js"
- ts config
  - cambiare "ourdir" to "./build"
  - cambiare il primo elemento della lista di exclude =>
    "./build/\*_/_"
- far andare comando tsc
