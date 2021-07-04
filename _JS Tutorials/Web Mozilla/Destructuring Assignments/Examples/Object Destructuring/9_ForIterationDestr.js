// ==== FOR OF ITERATION AND DESTRUCTURING

const people = [
  {
    name: 'Mike Smith',
    family: {
      mother: 'Jane Smith',
      father: 'Harry Smith',
      sister: 'Samantha Smith'
    },
    age: 35
  },
  {
    name: 'Giacomo Gagliano',
    family: {
      mother: 'Graziella Gagliano',
      father: 'Gianni Gagliano',
      sister: 'Elisabetta Gagliano'
    },
    age: 45
  }
]

for (const {name:n, family:{father:f}} of people) {
  console.log('Name: ' + n, ', Father: ' + f);
}