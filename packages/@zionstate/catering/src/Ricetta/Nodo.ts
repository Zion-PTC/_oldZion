interface Nodo {
  nome: string;
  descrizione: string;
  primaDi: Azione[];
  dopoDi: Azione[];
  setPrimaDi(azione: Azione): Azione;
  setDopoDi(azione: Azione): Azione;
}
