import { foo } from "./error2.js"
import { MyError } from "./error3.js"

let doo = async (validator) => {
  return new Promise((res, rej) => {
    foo(validator)
      .then(async (res) => { console.log(res)} )
      .catch(async (err) => { new MyError(
        "There was an error coming from above",
        "doo:",
        err
      ).log()
    })
  })
}

doo(undefined)