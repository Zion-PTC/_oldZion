const array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const callback = function (e) {
  console.log(e);
};
let res = array1.entries();
for (let a of res) {
  console.log(a);
}
