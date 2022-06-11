enum Materiale {
  pietra = "pietra",
  teflon = "",
}
enum TipiDiForno {
  legna = "legna",
  elettrico = "elettrico",
}
enum TipiBollitore {
  riso = "riso",
  pasta = "pasta",
}
enum TipiDiPentola {
  normale = "normale",
  aPression = "a-pressione",
  wok = "wok",
}
enum MezziDiCottura {
  forno = "forno",
  padella = "padella",
  pentola = "pentola",
  bollitore = "bollitore",
}
enum MetodoPropagazioneEnergia {
  induzione = "induzione",
  fiamma = "fiamma",
  piastraEletttrica = "piastra-elettrica",
}
enum TipiCottura {
  lesso = "lesso",
  fritto = "fritto",
  saltato = "saltato",
  riscaldato = "riscaldato",
  griglia = "griglia",
}
enum TipiRicetta {
  primo = "primo",
  secondo = "secondo",
  pizza = "pizza",
  insalata = "insalata",
  dolce = "dolce",
  inalata = "insalata",
  cocktail = "cocktail",
}
type TTipiDiRicetta = keyof typeof TipiRicetta;

enum TipiCarne {
  bovina = "bovina",
  suina = "suina",
  pollame = "pollame",
  coniglio = "coniglio",
}
type TTipiCarne = keyof typeof TipiCarne;

enum StatoIngrediente {
  solido = "solido",
  liquido = "liquido",
}
type TStatoIngrediente = keyof typeof StatoIngrediente;
enum TipiIngredienti {
  carne = "carne",
  pesce = "pesce",
  verdura = "verdura",
  frutta = "frutta",
  bevanda = "bevanda",
  condimento = "condimento",
  aroma = "aroma",
  odori = "odori",
  spezia = "spezia",
}
type TTipiIngredienti = keyof typeof TipiIngredienti;

enum TipiDiBirra {
  nonFiltrata = "non-filtrata",
  bionda = "bionda",
  bianca = "bianca",
}

enum UnitaDiMisura {
  g = "grammi",
  kg = "kilogrammi",
  unita = "unità",
}
type TUnitaDiMisura = keyof typeof UnitaDiMisura;
