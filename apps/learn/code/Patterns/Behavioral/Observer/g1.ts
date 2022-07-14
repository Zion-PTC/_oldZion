class Click {
  handlers: Function[] = [];
  constructor() {}
  subscribe(fn: Function) {
    this.handlers.push(fn);
  }
  unsubscribe(fn: Function) {
    this.handlers = this.handlers.filter(function (item) {
      if (item !== fn) {
        return item;
      }
    });
  }
  fire(o: any, thisObj?: any) {
    let scope = thisObj;
    this.handlers.forEach(function (item) {
      item.call(scope, o);
    });
  }
}

let clickhandler = function (item: any) {
  console.log("Fired: " + item);
};

let click = new Click();

click.subscribe(clickhandler);
click.fire("event #1");
click.unsubscribe(clickhandler);
click.fire("event #2");
click.subscribe(clickhandler);
click.fire("event #3");
