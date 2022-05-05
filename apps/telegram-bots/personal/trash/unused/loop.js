
let a = async () => {
  return "a"
}

let b = async () => {
  throw "b"
}

let c = async () => {
  return "c"
}

export let loop = async () => {
  await a()
  await b()
  .catch(()=>"error")
  await c()
}