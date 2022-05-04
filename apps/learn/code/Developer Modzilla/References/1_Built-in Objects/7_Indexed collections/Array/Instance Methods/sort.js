/**
 * @title Array.prototype.sort()
The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.
 */
console.log('///DEMO\\\\\\');
console.log('//// STRINGS');
const months = ['March', 'Jan', 'Feb', 'Dec'];
console.log('Before sorting:');
console.table(months)
months.sort()
console.log('After sorting:');
console.table(months)


console.log('//// NUMBERS');
const numbers = [1, 30, 4, 21, 10000]
console.log('Before sorting:');
console.table(numbers)
numbers.sort()
console.log('After sorting:');
console.table(numbers)

/**
 * @syntax Functionless
    sort()
 */
numbers.sort()

/**
 * @syntax Arrow function
 */
numbers.sort(
  /**
   * 
   * @param {any} firstEl The first element for comparison
   * @param {any} secondEl The second element for comparison
   */
  (firstEl, secondEl) => {
    /* ... */
  })

/**
 * @syntax Compare function
 */
/** */
let compareFn = (first, second) => { }
numbers.sort(compareFn)

/**
 * @syntax Inline compare function
 */
numbers.sort(
  /**
   * 
   * @param {any} first The first element for comparison
   * @param {any} second The second element for comparison
   */
  function compareFn(first, second) { }
)
/**
 * 
 * @param {Array} arr an array to be sorted
 * @returns The sorted array. Note that the array is sorted in place, and no copy is made.
 */
let sortFunction = (arr) => {
  return arr.sort();
}

/**
 * @description
If compareFunction is not supplied, all non-undefined array elements are sorted by converting them to strings and comparing strings in UTF-16 code units order. For example, "banana" comes before "cherry". In a numeric sort, 9 comes before 80, but because numbers are converted to strings, "80" comes before "9" in the Unicode order. All undefined elements are sorted to the end of the array.
 * @note
In UTF-16, Unicode characters above \uFFFF are encoded as two surrogate code units, of the range \uD800-\uDFFF. The value of each code unit is taken separately into account for the comparison. Thus the character formed by the surrogate pair \uD855\uDE51 will be sorted before the character \uFF3A.

If compareFunction is supplied, all non-undefined array elements are sorted according to the return value of the compare function (all undefined elements are sorted to the end of the array, with no call to compareFunction).
 * @note
compareFunction(a, b) must always return the same value when given a specific pair of elements a and b as its two arguments.
So, the compare function has the following form:
 */

function compare(a, b) {
  if (/* a is less than b by some ordering criterion */ a < b) {
    return -1
  }
  if (/* a is more than b by the ordering creterion */ a > b) {
    return 1
  }
  /* when a is equal b */
  return 0
}

/**
To compare numbers instead of strings, the compare function can subtract b from a. The following function will sort the array in ascending order (if it doesn't contain Infinity and NaN):
 */

function compareNumbers(a, b) {
  return a - b;
}

/**
The sort method can be conveniently used with function expressions:
 */

let numbers1 = [4, 2, 5, 1, 3];
numbers1.sort(function (a, b) {
  return a - b
})
console.log('Using a - b to sort numbers');
console.table(numbers1)

/**
ES2015 provides arrow function expressions with even shorter syntax.
 */
let numbers2 = [1, 5, 235, 3, 63, 510]
numbers2.sort((a, b) => a - b)
console.log('Using arrow a - b to sort numbers');
console.table(numbers2)

/**
Arrays of objects can be sorted by comparing the value of one of their properties.
 */

let items = [
  { name: 'Noa', value: 20 },
  { name: 'Giacomo', value: 45 },
  { name: 'Mia', value: 13 },
  { name: 'Era', value: 10 },
  { name: 'Arianna', value: 33 },
]
console.log('Sort this items');
console.table(items)

// sort by value
items.sort((a, b) => a.value - b.value)
console.log('Sorted items by value');
console.table(items)

// sort by name
items.sort((a, b) => {
  let nameA = a.name.toUpperCase();
  let nameB = b.name.toUpperCase();
  if (nameA < nameB) { return -1 }
  if (nameA > nameB) { return 1 }
  return 0
})
console.log('Sorted items by name');
console.table(items)

console.log('////// EXAMPLES \\\\\\\\\\\\');
/**
 * @example1 Creating, displaying, and sorting an array
The following example creates four arrays and displays the original array, then the sorted arrays. The numeric arrays are sorted without a compare function, then sorted using one.
 */
console.log('EXAMPLE: Creating, displaying, and sorting an array');
let stringArray = ['Indica', 'Sativa', 'Ruderalis'];
let numericStringArray = ['1', '89', '222'];
let numberArray = [23, 15, 3, 504]
let mixedNumericArray = ['80', '90', '735', 40, 1, 53, 634];

function compareNumbers2(a, b) {
  return a - b;
}

console.log('Elelents in this example');
console.log('stringArray');
console.table(stringArray);
console.log('numericStringArray');
console.table(numericStringArray);
console.log('numberArray');
console.table(numberArray);
console.log('mixedNumericArray');
console.table(mixedNumericArray);

let joinedStringArray = stringArray.join()
console.log('Joined stringArray');
console.table([joinedStringArray]);
stringArray.sort()
console.log('Sorted stringArray');
console.table(stringArray);

let joinedNumericStringArray = numericStringArray.join()
console.log('Joined numericStringArray');
console.table([joinedNumericStringArray]);
numericStringArray.sort()
console.log('Sorted numericStringArray');
console.table(numericStringArray);
numericStringArray.sort(compareNumbers2)
console.log('Sorted numericStringArray by compareNumbers2');
console.table(numericStringArray);

let joinedNumberArray = numberArray.join()
console.log('Joined numberArray');
console.table([joinedNumberArray]);
numberArray.sort()
console.log('Sorted numberArray');
console.table(numberArray);
numberArray.sort(compareNumbers2)
console.log('Sorted numberArray by compareNumbers2');
console.table(numberArray);

let joinedMixedNumericArray = mixedNumericArray.join()
console.log('Joined mixedNumericArray');
console.table([joinedMixedNumericArray]);
mixedNumericArray.sort()
console.log('Sorted mixedNumericArray');
console.table(mixedNumericArray);
mixedNumericArray.sort(compareNumbers2)
console.log('Sorted mixedNumericArray by compareNumbers2');
console.table(mixedNumericArray);

/**
 * @example2 Sorting non-ASCII characters
For sorting strings with non-ASCII characters, i.e. strings with accented characters (e, é, è, a, ä, etc.), strings from languages other than English, use String.localeCompare. This function can compare those characters so they appear in the right order.
 */
console.log('EXAMPLE: Sorting non-ASCII characters');
let items2 = ['réservé', 'premier', 'comuniqué', 'café', 'adieu', 'éclair']
console.log('Sorting these itmes:');
console.table(items2);
items2.sort((a, b)=>{
  return a.localeCompare(b)
})
console.log('Sorted with localeCompare() these itmes:');
console.table(items2);

/**
 * @example3 Sorting with map
The compareFunction can be invoked multiple times per element within the array. Depending on the compareFunction's nature, this may yield a high overhead. The more work a compareFunction does and the more elements there are to sort, it may be more efficient to use map for sorting. The idea is to traverse the array once to extract the actual values used for sorting into a temporary array, sort the temporary array, and then traverse the temporary array to achieve the right order.

There is an open source library available called mapsort which applies this approach.
 */
console.log('EXAMPLE: Sorting these datas');
let data = ['delta', 'alpha', 'charlie', 'bravo'];
console.log('Temporary array holds object positions and sort-value');
let someSlowOperation = (value) => {
  return value
}
const mapped = data.map((value, index)=>{
  return {
    index, value: someSlowOperation(value)
  }
})
console.log('Mapped array');
console.table(mapped);
console.log('sort the Mapped array');
mapped.sort((a, b)=>{
  if (a.value > b.value) { return 1 }
  if (a.value < b.value) { return -1 }
  return 0
})
console.table(mapped);
console.log('Map the sorted Mapped array and get back the');
const result = mapped.map(v=>data[v.index])
console.table(result)

/**
 * @example4 Sort stability
Since version 10 (or EcmaScript 2019), the specification dictates that Array.prototype.sort is stable.

For example, say you had a list of students alongside their grades. Note that the list of students is already pre-sorted by name in alphabetical order:
 */
console.log('EXAMPLE: Sort stability');
console.log('Students array to be sorted');
const students = [
  { name:'Alex', grade:15},
  { name:'Devlin', grade:15},
  { name:'Eagle', grade:13},
  { name:'Sam', grade:14},
]
console.table(students);
/**
After sorting this array by grade in ascending order:
 */
students.sort((first, second)=>first.grade - second.grade);
/**
The students variable will then have the following value:
 */
console.log('Sorteed students by grade ascending order');
console.table(students)
console.log('Students that have the same grade reamin in the original order');
console.log('This is guaranteed by the array.sort() stability');
/**
It's important to note that students that have the same grade (for example, Alex and Devlin), will remain in the same order as before calling the sort. This is what a stable sorting algorithm guarantees.

Before version 10 (or EcmaScript 2019), sort stability was not guaranteed, meaning that you could end up with the following:
[
  { name: "Eagle",  grade: 13 },
  { name: "Sam",    grade: 14 },
  { name: "Devlin", grade: 15 }, // original order not maintained
  { name: "Alex",   grade: 15 }, // original order not maintained
];
 */