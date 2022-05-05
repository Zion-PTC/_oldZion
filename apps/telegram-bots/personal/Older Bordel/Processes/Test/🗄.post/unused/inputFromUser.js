import { checkIfTestIsListening } from "../🚓.control/checkIfTestIsListening.js"
import { setTestListening } from "./unused/setTestListening.js"
import { zionTelegraf } from "../../../utils.js"
import { edit } from "../🖊.edit/edit.js"
import { checkIfTestIsListeningRightField } from "../🚓.control/checkIfTestIsListeningRightField.js"
import { confirmationAnswer } from "../💻.logic/confirmationAnswer.js"

export let inputFromUser = async (bot, applicationDoc_id, field) => {
  return new Promise(async (res, rej) => {
    bot.on("text", async (ctx, next) => {
      next()
      await checkIfTestIsListeningRightField(applicationDoc_id, ctx.update.message.chat.id, field, ctx.update.message.text)
        .then(async ({match, textMessage}) => {
          res(textMessage)
        })
        .catch(async (e) => {
          e === false ?
            rej(e) :
            rej(e)
        })
    })
  })
}