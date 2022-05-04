class StrategyManager {
  constructor() {
    this._strategies = [];
  }
  addStrategy(strategy) {
    this._strategies = [...this._strategies, strategy];
  }
  getStrategy(name) {
    return this._strategies.find(
      (strategy) => strategy._name === name
    );
  }
}
class Strategy {
  constructor(name, handler) {
    this._name = name;
    this._handler = handler;
  }
  doAction() {
    this._handler();
  }
}

const strategyManager = new StrategyManager();
// https://dev.to/carlillo/understanding-design-patterns-abstract-factory-23e7

const strategy1 = new Strategy('strategy1', () =>
  console.log('Strategy1')
);
const strategy2 = new Strategy('strategy2', () =>
  console.log('Strategy2')
);

strategyManager.addStrategy(strategy1);
strategyManager.addStrategy(strategy2);

const strategyA = strategyManager.getStrategy('strategy1');
strategyA.doAction();

const strategyB = strategyManager.getStrategy('strategy2');
strategyB.doAction();

const strategyC = strategyManager.getStrategy('strategy3');
try {
  strategyC.doAction();
} catch (error) {
  console.error('caught error');
  console.error(error);
}
