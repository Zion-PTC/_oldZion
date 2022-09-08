export class Disc {
  constructor() {
    var mutable = true;
    var status = new Closed(this);
    this.change = function (status) {
      if (!mutable) return "not changeable";
      if ((status.message = "Open")) {
        status = status;
        mutable = false;
        return "state changed";
      }
    };
    this.getstatus = function () {
      status.go();
    };
  }
}

class Status {
  constructor(disc, message) {
    this.disc = disc;
    this.message = message;
  }
  go() {
    console.log(this.message);
  }
}

class Open extends Status {
  constructor(disc) {
    super(disc, "Open");
  }
}

class Closed extends Status {
  constructor(disc) {
    super(disc, "closed");
  }
}

function run() {
  let disc = new Disc();
  disc.getstatus();
  const res = disc.change(new Open(disc));
  console.log(res);
  disc.getstatus();
  const res1 = disc.change(new Closed(disc));
  console.log(res1);
  disc.getstatus();
}

run();
