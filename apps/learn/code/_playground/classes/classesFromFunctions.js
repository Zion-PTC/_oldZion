/**
 * si crea una classe partendo da una funzione in questo modo
 * @param {} id
 */
const ThisClass = function (id) {
  this.id = id;
};

let obj = new ThisClass('ciao');
console.log(obj.id);
