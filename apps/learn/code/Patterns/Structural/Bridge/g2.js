export {};
class Gesture {
  constructor(output) {
    this.output = output;
  }
  tap = () => this.output.click();
  swipe = () => this.output.move();
  pan = () => this.output.drag();
  pinch = () => this.output.zoom();
}

class Mouse {
  constructor(output) {
    this.output = output;
  }
  click = () => this.output.click();
  move = () => this.output.move();
  down = () => this.output.drag();
  wheel = () => this.output.zoom();
}

class Screen {
  click = () => console.log("Screen select");
  move = () => console.log("Screen move");
  drag = () => console.log("Screen drag");
  zoom = () => console.log("Screen zoom in");
}

class Audio {
  click = () => console.log("Sound oink");
  move = () => console.log("Sound waves");
  drag = () => console.log("Sound screetch");
  zoom = () => console.log("Sound volume up");
}

function run() {
  var screen = new Screen();
  var audio = new Audio();

  var hand = new Gesture(screen);
  var mouse = new Mouse(audio);

  hand.tap();
  hand.swipe();
  hand.pan();
  hand.pinch();

  mouse.click();
  mouse.down();
  mouse.move();
  mouse.wheel();
}
run();
