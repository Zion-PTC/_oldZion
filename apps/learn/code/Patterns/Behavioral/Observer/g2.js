class Click {
  handlers = [];
  subscribe(fn) {
    if (typeof fn != "function") return "you must pass a function";
    this.handlers.push(fn);
  }
  unsubscribe(fn) {
    this.handlers = this.handlers.filter(function (item) {
      if (item !== fn) {
        return item;
      }
    });
  }
  fire(object) {
    this.handlers.forEach(function (item) {
      item.call(undefined, object);
    });
  }
}

let clickhandler = function (item) {
  console.log("Fired: " + item);
};

let doSomethingElse = function (item) {
  console.log("Did something else with: " + item);
};

let click = new Click();

click.subscribe(clickhandler);
click.subscribe(doSomethingElse);
click.fire("event 1");
click.fire("event 2");
click.unsubscribe(doSomethingElse);
click.fire("event 3");
