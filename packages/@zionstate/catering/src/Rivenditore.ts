interface PuntoVendita {
  indirizzo: Indirizzo;
}

interface Rivenditore {
  nome: string;
  prodotti: Prodotto[];
  servizi: "rivendita" | "online-shop" | "consegna-a-domicilio" | "";
  puntiVendita: PuntoVendita[];
}

interface GrandeDistribuzione extends Rivenditore {
  marca: string;
  distribuzione: string;
}
interface PiccolaDistribuzione extends Rivenditore {}
