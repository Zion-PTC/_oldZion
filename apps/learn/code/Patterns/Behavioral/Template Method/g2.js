export class DatastoreTemplate {
  process = function () {
    this.connect();
    this.select();
    this.disconnect();
    return true;
  };
}

class Datastore extends DatastoreTemplate {
  constructor(connect, select, disconnect) {
    super();
    this.connect = connect;
    this.select = select;
    this.disconnect = disconnect;
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
