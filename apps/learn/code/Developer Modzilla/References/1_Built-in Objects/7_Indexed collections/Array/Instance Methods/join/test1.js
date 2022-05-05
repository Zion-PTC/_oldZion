console.clear()
function joinValuesFunction() {
  let arr = [...arguments]
  let joined = arr.join('')
  return joined
}
let joinedArguments = joinValuesFunction(1,2,3)
console.table(joinedArguments);