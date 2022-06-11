type GeoLocation = string;
interface Packaging {
  nome: string;
}
interface Sfuso extends Packaging {}
interface Impacchettato extends Packaging {}

interface Conservazione {
  nome: string;
}
interface Fresco extends Conservazione {}
interface Surgelato extends Conservazione {}
interface Sottaceto extends Conservazione {}
interface Sottolio extends Conservazione {}
interface Disidratato extends Conservazione {}
interface LungaConservazione extends Conservazione {}

interface IProdotto {
  nome: string;
  tipo: string;
  marca: string;
  ingredienti: Ingrediente[];
  prezzo: number;
  dataScadenza: Date;
  provenienza: GeoLocation;
  tipoPackaging: Sfuso | Impacchettato;
  conservazione:
    | Fresco
    | Surgelato
    | Sottaceto
    | Sottolio
    | Disidratato
    | LungaConservazione;
}

class Prodotto implements IProdotto {
  nome: string = "Nome del Prodotto";
  tipo: string = "Condimento per Riso freddo";
  marca: string = "Sperlari";
  ingredienti: Ingrediente[] = [];
  prezzo: number = 2.5;
  dataScadenza: Date = new Date();
  provenienza: GeoLocation = "Grosseto";
  tipoPackaging: Sfuso | Impacchettato = { nome: "Impacchetato" };
  conservazione:
    | Fresco
    | Surgelato
    | Sottaceto
    | Sottolio
    | Disidratato
    | LungaConservazione = { nome: "tipo di conservazione" };
}

const condiriso = new Prodotto();
const cottoACubetti = new Prodotto();
