interface IIngrediente {
  nome: string;
  categoria: TTipiIngredienti;
  stato: "solido" | "liquido";
  rivendutoDa: Rivenditore[];
  aggiungiRivenditore(rivenditore: Rivenditore): IIngrediente;
}

class Ingrediente implements IIngrediente {
  nome: string = "Ingrediente";
  categoria: TTipiIngredienti = "carne";
  sottocategoria: string = "sottocategoria";
  stato: TStatoIngrediente = "solido";
  rivendutoDa: Rivenditore[] = [];
  constructor() {}
  aggiungiRivenditore(rivenditore: Rivenditore): IIngrediente {
    this.rivendutoDa.push(rivenditore);
    return this;
  }
}

// Carne
const fettina = new Ingrediente();
const bistecca = new Ingrediente();
const spezzatino = new Ingrediente();
const tagliata = new Ingrediente();
const carpaccio = new Ingrediente();
const salsiccia = new Ingrediente();
const costine = new Ingrediente();
const petto = new Ingrediente();
const coscia = new Ingrediente();
const ala = new Ingrediente();
const svizzera = new Ingrediente();
const wurstel = new Ingrediente();

// UOVA
const uovo = new Ingrediente();

// SPEZIA
const sale = new Ingrediente();
sale.nome = "Sale";
sale.categoria = "spezia";

const pepe = new Ingrediente();
sale.nome = "Pepe";
sale.categoria = "spezia";
const noceMoscata = new Ingrediente();
const chiodiDiGarofano = new Ingrediente();
const cannella = new Ingrediente();
const cumino = new Ingrediente();
const curry = new Ingrediente();

// ODORI
const peperoncino = new Ingrediente();
const zenzero = new Ingrediente();
const aglio = new Ingrediente();
const rosmarino = new Ingrediente();
const origano = new Ingrediente();

// CONDIMENTI
const olioXVergineOliva = new Ingrediente();
olioXVergineOliva.nome = "Olio Extra Vergine Oliva";
olioXVergineOliva.categoria = "condimento";

const acetoDiVino = new Ingrediente();
acetoDiVino.nome = "Aceto di Vino";
acetoDiVino.categoria = "condimento";

const acetoBalsamico = new Ingrediente();
acetoBalsamico.nome = "Aceto Balsamico";
acetoBalsamico.categoria = "condimento";

//
const pastaSecca = new Ingrediente();
const riso = new Ingrediente();
const noodle = new Ingrediente();

// FORMAGGI
const asiago = new Ingrediente();
