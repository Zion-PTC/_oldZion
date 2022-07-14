class TrafficLight {
  change: Function;
  start: Function;
  constructor() {
    let count = 0;
    let currentState = new Red(this);
    this.change = function (state: Red) {
      if (count++ >= 10) return;
      currentState = state;
      currentState.go();
    };
    this.start = function () {
      currentState.go();
    };
  }
}

class Red {
  constructor(public light: TrafficLight) {}
  go() {
    console.log("Red --> for 1 minute");
    this.light.change(new Green(this.light));
  }
}

class Yellow {
  constructor(public light: TrafficLight) {}
  go() {
    console.log("Yellow --> for 10 seconds");
    this.light.change(new Red(this.light));
  }
}

class Green {
  constructor(public light: TrafficLight) {}
  go() {
    console.log("Green --> for 1 Minute");
    this.light.change(new Yellow(this.light));
  }
}

let light = new TrafficLight();
light.start();
