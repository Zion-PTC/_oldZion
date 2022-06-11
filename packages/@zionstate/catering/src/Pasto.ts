interface IPasto {
  ordini: IOrdine[];
}
class Pasto implements IPasto {
  ordini: IOrdine[] = [];
}

const pasto = new Pasto();
const g1 = new Portata();
g1.ricetta.push(polloAlCurry);
const a1 = new Portata();
a1.ricetta.push(polloAlCurry);
const m1 = new Portata();
m1.ricetta.push(insRisoBimbi);
const e1 = new Portata();
e1.ricetta.push(insRisoBimbi);
pasto.ordini.push({ user: { name: "giacomo" }, portate: [g1] });
pasto.ordini.push({ user: { name: "arianna" }, portate: [a1] });
pasto.ordini.push({ user: { name: "mia" }, portate: [a1] });
pasto.ordini.push({ user: { name: "era" }, portate: [a1] });
