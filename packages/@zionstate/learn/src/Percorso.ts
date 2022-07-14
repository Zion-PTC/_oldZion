// inteso come percorso formativo

enum Livelli {
  basic = "basic",
  intermidiate = "intermidiate",
  advanced = "advanced",
}

interface Hash {
  value: string;
  hasher: Function;
}

interface ID {
  id: Hash;
}

interface Nome {
  nome: string;
}

interface Campo extends ID, Nome {
  connessioni: Hash;
}

interface Argomento extends ID, Nome {}

interface Materia extends ID, Nome {
  campo: Campo;
}

interface Step extends ID, Nome {
  materia: Materia;
  argomento: Argomento;
  livello: Livelli;
}

interface Percorso extends ID, Nome {
  step: Step[];
}
