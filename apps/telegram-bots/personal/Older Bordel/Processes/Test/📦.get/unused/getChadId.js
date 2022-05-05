import { TelegramChat } from "../../../../Models/Telegram.js"
import { checkIfTelegramChatExistsInZionDB } from "../../🚓.control/unused/checkIfTelegramChatExistsInZionDB.js"
import { checkIfChatExistsInZionDB } from "../../🚓.control/unused/checkIfChatExistsInZionDB.js"

export let getChatId = async (ctx) => {
  return new Promise(async (res, rej) => {
    await checkIfTelegramChatExistsInZionDB(ctx) ///PRIMO SUB_METHOD
      .then(async (telegramChatDoc) => {
        let { _id } = telegramChatDoc
        await checkIfChatExistsInZionDB(_id)  ///SECONDO SUB_METHOD
          .then(async (chatDoc) => { res(chatDoc._id) })
          .catch(async (e) => { await ctx.reply("Chat doesn't exists in Zion DB: " + e) })
      })
      .catch(async (e) => {
        let { update: { message: { chat: { id } } } } = ctx
        let telegramChat = await TelegramChat.create({/// DB TELEGRAMCHAT CREATE
          ...ctx.update.message.chat
        })
        let { _id } = telegramChat
        await checkIfChatExistsInZionDB(_id)  ///SECONDO SUB_METHOD
          .then(async (chatDoc) => { res(chatDoc._id) })
          .catch(async (e) => {
            await Chat.create({   /// DB CHAT CREATE
              slug: "/" + id
            })
              .then(async (chatDoc) => { res(chatDoc._id) })
              .catch(async (e) => { await ctx.reply("L'inserimento non è andato a buon fine" + e) })
          })
      })
  })
}