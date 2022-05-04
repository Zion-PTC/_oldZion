const obj = { width: 10, height: 15 };
//@ts-expect-error
const area = obj.width * obj.heigth;
//@ts-expect-error
console.log(4 / []);
