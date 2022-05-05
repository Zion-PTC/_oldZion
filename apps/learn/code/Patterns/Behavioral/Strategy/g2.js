// cambiamenti su file di doFactory
class Shipping {
  constructor() {
    this.company = '';
  }
  setStrategy(company) {
    this.company = company;
  }
  calculate(pkg) {
    return this.company.calculate(pkg);
  }
}

class Company {
  constructor(price) {
    this.price = price;
  }
  calculate() {
    return `$${this.price}`;
  }
}

function run() {
  var pkg = { from: '76712', to: '10012', weigth: 'lkg' };

  // the 3 strategies

  var ups = new Company('45.95');
  var usps = new Company('39.40');
  var fedex = new Company('43.20');
  var tnl = new Company(10);

  var shipping = new Shipping();

  shipping.setStrategy(ups);
  console.log('UPS Strategy: ' + shipping.calculate(pkg));
  shipping.setStrategy(usps);
  console.log('USPS Strategy: ' + shipping.calculate(pkg));
  shipping.setStrategy(fedex);
  console.log('Fedex Strategy: ' + shipping.calculate(pkg));
  shipping.setStrategy(tnl);
  console.log('Tnl Strategy: ' + shipping.calculate(pkg));
}
run();

// mi sembra un po come un hook
// serve quando non è determinato il metodo che si vuole
// chiamare. In questo caso lo shipping viene impostato nel
// contesto del client. La funzione è impostata durante
// l'escuzione del programma.
