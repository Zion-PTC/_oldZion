export {};
// first
interface IBall {
  name: string;
  dimension: number;
  creationDate: Date;
}

class Ball implements IBall {
  //@ts-expect-error
  name: string;
  //@ts-expect-error
  dimension: number;
  //@ts-expect-error
  creationDate: Date;
}

let date = new Date().getDate();
console.log(date);

interface Person {
  first: string;
  last: string;
  [key: string]: any;
}

const person1: Person = {
  first: "Jeff",
  last: "Delanay",
};

const person2: Person = {
  first: "Usain",
  last: "Bolt",
  fast: true,
};
