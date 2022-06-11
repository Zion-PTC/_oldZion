type Quantita = number;
interface IRicetta {
  nome: string;
  tipo: TTipiDiRicetta;
  servito: "caldo" | "freddo";
  descriziona: string;
  ingredienti: [IIngrediente, [Quantita, TUnitaDiMisura]][];
  prodotti: [Prodotto, [Quantita, TUnitaDiMisura]][];
  preparazione: {
    fasi: Fase[];
  };
  porzioni: number;
}

class Ricetta implements IRicetta {
  public nome: string = "Nome Ricetta";
  public tipo: TTipiDiRicetta = "primo";
  public servito: "caldo" | "freddo" = "caldo";
  public descriziona: string = "Descrizion della ricetta";
  public ingredienti: [Ingrediente, [number, TUnitaDiMisura]][] = [];
  public prodotti: [Prodotto, [Quantita, TUnitaDiMisura]][] = [];
  public preparazione: { fasi: Fase[] } = { fasi: [] };
  public porzioni: number = 1;
}

// CARNE
class Carne extends Ricetta {}
// FERRI
const svizzeraAiFerri = new Carne();
svizzeraAiFerri.ingredienti.push([svizzera, [80, "g"]]);
svizzeraAiFerri.ingredienti.push([sale, [0.1, "g"]]);
svizzeraAiFerri.ingredienti.push([pepe, [0.1, "g"]]);
svizzeraAiFerri.ingredienti.push([olioXVergineOliva, [3, "g"]]);
const bisteccaMaialeAiFerri = new Carne();
const pettoDiPolloAi = new Carne();
// CONDITE
const polloAlCurry = new Carne();

// VERDURE
const patateLesse = new Ricetta();
const carotePelate = new Ricetta();

// INSALATA DI RISO
class InsalataDiRiso extends Ricetta {}
const insRisoGrandi = new InsalataDiRiso();
insRisoGrandi.ingredienti.push([riso, [80, "g"]]);
insRisoGrandi.ingredienti.push([asiago, [20, "g"]]);
insRisoGrandi.prodotti.push([condiriso, [25, "g"]]);
const insRisoBimbi = new InsalataDiRiso();
insRisoBimbi.ingredienti.push([riso, [80, "g"]]);
insRisoBimbi.ingredienti.push([asiago, [20, "g"]]);
insRisoBimbi.ingredienti.push([wurstel, [50, "g"]]);
insRisoBimbi.ingredienti.push([uovo, [0.7, "unita"]]);
insRisoBimbi.prodotti.push([cottoACubetti, [20, "g"]]);
insRisoBimbi.ingredienti.push([olioXVergineOliva, [3, "g"]]);

// PASTA
class Pasta extends Ricetta {}
const pastaPannaCubetti = new Pasta();
const carbonara = new Pasta();
const pastaConLeVongole = new Pasta();
const pastaConFruttiDiMare = new Pasta();
const pastaColPomodoro = new Pasta();
const pastaColPesto = new Pasta();
const pastaPachini = new Pasta();
const aglioEOlio = new Pasta();
aglioEOlio.ingredienti.push([pastaSecca, [100, "g"]]);
aglioEOlio.ingredienti.push([olioXVergineOliva, [10, "g"]]);
aglioEOlio.ingredienti.push([aglio, [10, "g"]]);
