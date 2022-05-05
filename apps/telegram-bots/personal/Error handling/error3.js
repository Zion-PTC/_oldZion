/**
 * @param message It's the name which appear in the console log
 * @param name It's the name which appear in the console log
 * @param cause It's the error coming from the callee function
 * @param args Object containing the called parameters
 * @method justLove this is a really cool method
**/
export class MyError extends Error {
  constructor(message, name, cause, args) {
    super(message)
    this.name = name
    this.cause = cause ? cause : undefined
    this.args = args
  }
  log() {
    console.log(this);
  }
}

export let moo = async (validatorValue) => {
  return new Promise((res, rej) => {
    let validator = validatorValue
    validator ?
      res("tutto ok") :
      validator === undefined ?
        rej("Validator is undefined") :
        rej("Validator is false")
  })
}