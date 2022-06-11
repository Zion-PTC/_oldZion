interface Fase extends Nodo {
  tipo: "preparazione" | "cottura" | "rifinitura";
  azioni: Azione[];
}
