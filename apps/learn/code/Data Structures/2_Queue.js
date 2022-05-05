class Queue {
  constructor() {
    this.collection = [];
  }
  print() {
    console.log(this.collection);
  }
  enqueue(element) {
    this.collection.push(element);
  }
  dequeue() {
    return this.collection.shift();
  }
  front() {
    return this.collection[0];
  }
  isEmpty() {
    return this.collection.length === 0;
  }
  size() {
    return this.collection.length;
  }
}

export class PriorityQueue extends Queue {
  constructor() {
    super();
  }
  enqueue(element) {
    if (this.isEmpty()) {
      this.collection.push(element);
    } else {
      var added = false;
      for (var i = 0; i < this.collection.length; i++) {
        if (element[1] < this.collection[i][1]) {
          this.collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        this.collection.push(element);
      }
    }
  }
}
