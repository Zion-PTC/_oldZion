import {
  Equipment,
  iPadPencil,
  iPadPro,
  macBookPro,
  raspBerryCase,
  raspBerryPi4,
  superWideScreen,
} from "./Equipment.js";

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
  #name: string = "name";
  get name() {
    return this.#name;
  }
  set name(name: string) {
    this.#name = name;
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
  constructor(type: BudgetTypes, name: string, items?: [Equipment, number][]) {
    this.#type = type;
    this.#name = name;
    if (items) this.#items.push(...items);
  }
  showTableBudget() {
    console.table(createObj(totalBudgets));
  }
  #prices(item: [Equipment, number]) {
    return item[0].price.amount * item[1];
  }
}

let gotekBudget = new Budget("equipment", "gotek");
gotekBudget.items = [
  [macBookPro, 1],
  [superWideScreen, 1],
  [iPadPro, 1],
  [iPadPencil, 1],
];

let zionBudget = new Budget("equipment", "zion-gagliano");
zionBudget.items = [
  [raspBerryPi4, 4],
  [raspBerryCase, 1],
];

const raspcasesx8 = 3;
let zionInvestment = new Budget("equipment", "zion-dao");
zionInvestment.items = [
  [raspBerryPi4, raspcasesx8 * 8],
  [raspBerryPi4, 5],
  [raspBerryCase, raspcasesx8],
];

let totalBudgets = [gotekBudget, zionInvestment, zionBudget];

const createObj = (budgets: Budget[]) => {
  let obj: { [key: string]: number } = {};
  let budgetsValues: number[] = [];
  budgets.forEach((budget) => {
    obj[budget.name] = budget.totalBudget;
    budgetsValues.push(budget.totalBudget);
  });
  obj.total = budgetsValues.reduce((p, c) => p + c);
  return obj;
};

console.table(createObj(totalBudgets));
