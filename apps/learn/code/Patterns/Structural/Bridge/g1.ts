export {};

type Output = {
  click: () => void;
  move: () => void;
  drag: () => void;
  zoom: () => void;
};

class Gestures {
  constructor(public output: Output) {}
  tap() {
    this.output.click();
  }
  swipe() {
    this.output.move();
  }
  pan() {
    this.output.drag();
  }
  pinch() {
    this.output.zoom();
  }
}

class Mouse {
  constructor(public output: Output) {}
  click() {
    this.output.click();
  }
  move() {
    this.output.move();
  }
  down() {
    this.output.drag();
  }
  wheel() {
    this.output.zoom();
  }
}

class Screen implements Output {
  click() {
    console.log("Screen select");
  }
  move() {
    console.log("Screen move");
  }
  drag() {
    console.log("Screen drag");
  }
  zoom() {
    console.log("Screen zoom in");
  }
}

class Audio implements Output {
  click() {
    console.log("Sound oink");
  }
  move = function () {
    console.log("Sound waves");
  };
  drag = function () {
    console.log("Sound screetch");
  };
  zoom = function () {
    console.log("Sound volume up");
  };
}

var screen = new Screen();
var audio = new Audio();

var hand = new Gestures(screen);
var mouse = new Mouse(audio);

hand.tap();
hand.swipe();
hand.pinch();

mouse.click();
mouse.move();
mouse.wheel();
