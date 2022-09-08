export {};
class Iterator {
  constructor(items) {
    this.items = items;
    this.index = 0;
  }
  first() {
    this.reset();
    return this.next();
  }
  next() {
    return this.items[this.index++];
  }
  hasNext() {
    return this.index <= this.items.length;
  }
  reset() {
    this.index = 0;
  }
  each(callback) {
    for (var item = this.first(); this.hasNext(); item = this.next()) {
      callback(item);
    }
  }
}

var items = ["one", 2, "circle", true, "applepie"];
var iter = new Iterator(items);
iter.each((item) => console.log(item));
for (let item of iter.items) {
  console.log(item);
}
