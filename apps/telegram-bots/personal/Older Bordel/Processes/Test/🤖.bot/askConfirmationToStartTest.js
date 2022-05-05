import { zionTelegraf } from "../../../utils.js"

export let askConfirmationToStartTest = async (ctx, application) => {
  let chatType = ctx.update.message.chat.type
  let chatTitle = ctx.update.message.chat.title
  let user = ctx.update.message.from.first_name
  let chatName = await zionTelegraf.getChatName(chatType, chatTitle)
  let message = "Ciao" + user
    + `, stai cominciando il test dell'applicatione dal nome:\n"${application.name}",\nnella chat `
    + chatName + ".\nVuoi cominciare?\n"
    + "Rispondi si per cominciare, no per terminare"
  // return await ctx.reply(message)
  return new Promise(async (res, rej) => {
    // let mess = await zionTelegraf.askConfirmationMess(ctx)
    await zionTelegraf.botReply(ctx, message, {
      disable_notification: true,
      reply_markup: {
        keyboard: [
          [{ text: "Si" }],
          [{ text: "No" }]
        ],
        resize_keyboard: true,
        one_time_keyboard: true
      }
    })
    // await ctx.reply(message)
    res("replyAskConfirmation")
  })
}