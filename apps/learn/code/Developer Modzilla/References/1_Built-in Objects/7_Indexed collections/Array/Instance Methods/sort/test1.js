console.log('Ciao');
let array = [1,2,3,4]
let sorted = array.sort((a,b)=>{
  console.log(a,b);
  if (a===2&&b===1){return -1}
  return 1
})
console.log(sorted);