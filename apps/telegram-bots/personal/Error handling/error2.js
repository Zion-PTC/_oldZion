import { moo, MyError } from "./error3.js"

export let foo = (validator) => {
  return new Promise(async(res, rej)=>{
    let otherArgs = new Object({
      pop: 3,
      nop: "asdfsdf"
    })
    moo(validator)
      .then(async(result)=>{
        res(result)
      })
      .catch(async(error)=>{
        rej(
          new MyError(
            "This error is coming from the callee function",
            "foo: ",
            error,
            otherArgs
          )
        )
      })
  })
}