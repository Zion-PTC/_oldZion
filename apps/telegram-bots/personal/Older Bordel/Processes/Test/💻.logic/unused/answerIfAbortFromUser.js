import { zionTelegraf } from "../../../../utils.js"

export let answerIfAbortFromUser = async (ctx) => {
  return new Promise(async (res, rej) => {
    const checkSi = /si/gi
    const checkNo = /no/gi
    if (checkSi.test(ctx.update.message.text)) {
      res(ctx.update.message.text)
    }
    else if (checkNo.test(ctx.update.message.text)) {
      rej(ctx.update.message.text)
    } else {
      zionTelegraf.testReply(ctx,
        `Hai detto "${ctx.update.message.text}".`
        + `\nNon è la risposta che mi aspettavo😅.`
        +`\nPotresti gentilmente ripondere o "si" o "no"?
      `)

    }
  })
}