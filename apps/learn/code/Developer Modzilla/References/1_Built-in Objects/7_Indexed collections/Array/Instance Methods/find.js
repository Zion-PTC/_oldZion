/**
 * Array.prototype.find()
The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
 */
function tryIt() {
  const array1 = [5, 12, 8, 130, 44];

  const found = array1.find((element) => element > 10);

  console.log(found);
  // expected output: 12
}
tryIt();

(function example1() {
  const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 },
  ];

  function isCherries(fruit) {
    return fruit.name === 'cherries';
  }

  console.log(inventory.find(isCherries));
  // { name: 'cherries', quantity: 5 }
})();
