function ex1() {
  const myObject = {
    id: 0,
    myMethod(items) {
      console.log(this.id); // logs myObject
      const callback = () => {
        console.log(this); // logs myObject
      };
      items.forEach(callback);
    },
  };
  myObject.myMethod([1, 2, 3]);
}

function ex2() {
  const myObject = {
    id: 0,
    myMethod(items) {
      console.log(this.id); // logs myObject
      const callback = function () {
        console.log(this); // logs myObject
      };
      items.forEach(callback, 'ciao');
    },
  };
  myObject.myMethod([1, 2, 3]);
}

function ex3() {
  class Hero {
    constructor(heroName) {
      this.heroName = heroName;
    }
    notLog() {
      // aggiunge un parametro heroName alla funzione
      // setTimeout()!!!
      this.heroName = 'not';
      console.log(this);
    }
    log = () => {
      this.heroName = 'yes';
      console.log(this.heroName);
    };
  }
  const batman = new Hero('Batman');
  setTimeout(batman.notLog, 1000, { heroName: 'cazzo' });
  setTimeout(batman.log, 1000);
}
ex3();
