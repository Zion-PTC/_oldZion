/**
 * Helper function which handles the call() method callback.
 * @param {Function} handler
 */
const callhandler = function (handler) {
  handler.call(undefined, this);
};

/**
 * Helper function which handles tfiltering the handlers array.
 * @param {Function} handler
 * @returns
 */
const filterhandler = function (handler) {
  if (handler !== this) return handler;
};

class Observer {
  handlers = [];
  subscribe = (fn) => this.handlers.push(fn);
  unsubscribe = (fn) => this.#filterout(fn);
  fire = (object) => this.handlers.forEach(callhandler, object);
  #filterout = (fn) =>
    (this.handlers = this.handlers.filter(filterhandler, fn));
}

let clickhandler = (item) => console.log("Fired Item: " + item);

let click = new Observer();

click.subscribe(clickhandler);
click.fire("Event 1");
click.fire("Event 2");
click.unsubscribe(clickhandler);
click.fire("Event 3");
