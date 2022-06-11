enum BudgetEnums {
  equipment = "equipment",
}
type BudgetTypes = keyof typeof BudgetEnums;

class Budget {
  #type: BudgetTypes = "equipment";
  get type() {
    return this.#type;
  }
  set type(type: BudgetTypes) {
    this.#type = type;
  }
  #items: [Equipment, number][] = [];
  get items() {
    return this.#items;
  }
  set items(items: [Equipment, number][]) {
    this.#items.push(...items);
  }
  get totalBudget() {
    let priceArray = this.#items.map(this.#prices);
    let sum = priceArray.reduce((p, c) => p + c);
    return sum;
  }
  constructor(type: BudgetTypes, items?: [Equipment, number][]) {
    this.#type = type;
    if (items) this.#items.push(...items);
  }
  #prices(item: [Equipment, number]) {
    return item[0].price.amount * item[1];
  }
}

let initialBudget = new Budget("equipment");
initialBudget.items = [[raspBerryPi4, 1]];
