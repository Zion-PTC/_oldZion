export class DatastoreTemplate {
  process = function () {
    this.method1();
    this.method2();
    this.method3();
    return true;
  };
}

class Datastore extends DatastoreTemplate {
  constructor(method1, method2, method3) {
    super();
    this.method1 = method1;
    this.method2 = method2;
    this.method3 = method3;
  }
}

const log = (mess) => () => console.log(mess);

function run() {
  var mySql = new Datastore(
    log("connected"),
    log("selected"),
    log("disconnected")
  );
  mySql.process();
}

run();
