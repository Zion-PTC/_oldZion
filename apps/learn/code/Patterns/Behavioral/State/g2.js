class Disc {
  constructor() {
    var currstate = new Closed();
    this.change = function (state) {
      currstate = state;
      currstate.go();
    };
    this.start = function () {
      currstate.go();
    };
  }
}

class Base {
  constructor(disc, message) {
    var disc = disc;
    var message = message;
    this.go = function () {
      console.log(message);
    };
  }
}

class Open extends Base {
  constructor(disc) {
    super(disc, "The disc is open");
  }
}

class Closed extends Base {
  constructor(disc) {
    super(disc, "The disc is closed");
  }
}

function run() {
  let disc = new Disc();
  disc.start();
  disc.change(new Open(disc));
  disc.change(new Closed(disc));
}

run();
