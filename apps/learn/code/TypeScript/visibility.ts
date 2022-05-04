// fourth
class Invoice {
  readonly client: string;
  private details: string;
  public amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }
  format() {
    return `${this.client} owes €${this.amount} for ${this.details}`;
  }
}

const inv1 = new Invoice(
  'mario',
  'work on mario website',
  250
);
const inv2 = new Invoice(
  'luigi',
  'work on luigi website',
  350
);

let invoices: Invoice[] = [];
invoices.push(inv1);
invoices.push(inv2);
//@ts-expect-error
inv1.client = 'booob'; // lo segnala ma funziona =(

invoices.forEach((inv) => {
  console.log(
    inv.client,
    //@ts-expect-error
    inv.details, // segnala che non si puo chiamare
    inv.amount,
    inv.format()
  );
});

class Invoice2 {
  readonly client: string;
  #details: string;
  public amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.#details = d;
    this.amount = a;
  }
  format() {
    return `${this.client} owes €${this.amount} for ${
      this.#details
    }`;
  }
}
const inv3 = new Invoice2(
  'giacomo',
  'costruito Swarm',
  10000
);
//@ts-ignore
console.log(inv3.details); // TS si lamenta

class Invoice3 {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}
  format() {
    return `${this.client} owes €${this.amount} for ${this.details}`;
  }
}
