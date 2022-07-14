// Tentativo di tradurre esempio di DoFactory del template
// method ma non funzion perché prototype è readonly
//@ts-nocheck
type process = {
  (): boolean;
};
type data = {
  process: process;
};
let datastore: data = {
  process: function () {
    this.connect();
    this.select();
    this.disconnect();
    return true;
  },
};

// function inherit(proto) {
//   class F {
//     constructor() {}
//   }
//   F.prototype = proto;
//   let obj = new F()
//   return obj;
// }

// let mysql = inherit(datastore);

mysql.connect = function () {
  console.log("MYSQL: connect step");
};

mysql.connect = function () {
  console.log("MYSQL: connect step");
};

mysql.connect = function () {
  console.log("MYSQL: connect step");
};
