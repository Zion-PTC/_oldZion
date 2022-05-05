import { zionTelegraf } from "../../../utils.js"

export let confirmationAnswer = async (text) => {
  return new Promise(async(res, rej)=>{
    let regSi = /si/gi
    let regNo = /no/gi
    if (regSi.test(text)) {
      res({
        has_user_confirmed: true,
        text
      })
    } else if (regNo.test(text)) {
      res({
        has_user_confirmed: false,
        text
      })
    } else {
      rej("Non ho capito")
    }
  })
}